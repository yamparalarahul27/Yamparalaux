export type JournalEntry = {
  date: string;
  paragraphs: string[];
};

// AES-GCM encrypted journal entries. The ciphertext below can only be decoded
// with the correct passcode (PBKDF2 → AES-GCM 256). Without it, the content
// stays unreadable even if the bundle is inspected.
export const encryptedJournal = {
  salt: "p66CYxVNf28tTtopUoZwYw==",
  iv: "xymvEqK/6jhCRgMD",
  ciphertext:
    "mBcbZNyeaQlV5v2r1FGfhNIJUbr4fF0DcQO6K3WGvmtrQl6pPuvsfrpcAgqR7PcXpfTB1OgM3zoJ7Mr95ywW44nLZedMu8JZ0kQQnHJP+s269x7js5irEgdHPx6NN7Z8YDMyq1eyhqF1oIuMedpyP+j2pPrA7iEkv8u5BpBZjBoOcQE5OuJ+KrolZCZxJA778IpRE3bbqMOURYgQHE31U1RECDHbApauGApSoOecfr6xg9FacEAzgZyRilYqixJQfQHEMH8i1x5THkB8DAQGbh8k05FK0D0VNv2rmwpVnpuiWgPxTFapV1lkyWQb+yfqCrIFJBDWroSS5wTcAwOJADb84ChkK2QlEvggjmDSBuP6oxUuWV+fYhl2h4unZAbJj9pYMpNbrH5XhOQJL52a4V6FEYWflSLC+9f4132fYaqHp3LbFP+cn22bpMCsfJBrzXjpF78LfbWSUrftKYTSJ8CnhKAUvys/pthQOatYPC/el5F8/ehYBy0peAUGueqBX0LUdN3A7tSsRdKz2seehCROYzjN3gpjwCHPQX9808qp9dVwX9YgrQn1EzxSrUzR6gfdwdgiGEgwHxA6QagbqgoOQo3QSpPobGbYqSJQpdAjqT3y9dk4Qju+GogWMDbQ1LFUGhj1iAQp6VwOTWovDKfclZy084EIzHDYYeF3ABfxNsZWeyUo6eRhkvF4yWoku/inPuu65vc5zGXi9RXx5MbwlZVmphDwFdxyilqxfBEqjuXAcYRSs49VGcBYrsvcLxApyxYufqoEz8sH4W/CREs3t7Qocp5mBGB8ffts6DB27CfyR95S75FSslxuVrrT6ZyOgMFqOaTGCpubs4V396yZ19QWELNr+ZXtG80Xx5DdqfipFK/bhJnZWnkw8Rx+k/CeBGkOtbR8f//OWZYezLzBAuIyCP5fMqFyhhAHztN/c1PPeysUvbz5xarnVHdfF1/IxcqV/hmhoHRmzBHG0hR9UM/3Mcxo7Qj/9vXxa4kaEEDQ6ZUYA8AtbCgocMDnxmpcy21P5RiDBFOk",
  iterations: 150000,
};

function base64ToBuffer(b64: string): ArrayBuffer {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

export async function decryptJournal(passcode: string): Promise<JournalEntry[]> {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(passcode),
    { name: "PBKDF2" },
    false,
    ["deriveKey"],
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: base64ToBuffer(encryptedJournal.salt),
      iterations: encryptedJournal.iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );

  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBuffer(encryptedJournal.iv) },
    key,
    base64ToBuffer(encryptedJournal.ciphertext),
  );

  return JSON.parse(decoder.decode(plaintext)) as JournalEntry[];
}
