# Analysis: Speech-to-Text Model from Scratch

**Repository:** [Mayankpratapsingh022/Speech-to-text-model-from-scratch](https://github.com/Mayankpratapsingh022/Speech-to-text-model-from-scratch)

## Overview

A PyTorch implementation of a transformer-based speech-to-text (ASR) model built entirely from scratch — no pre-trained models or external APIs. It converts raw audio waveforms into text transcriptions using a pipeline of convolutional downsampling, transformer encoding, residual vector quantization, and CTC decoding.

## Architecture Pipeline

```
Raw Audio (16kHz)
  → Convolutional Downsampling (~32x reduction)
    → Transformer Encoder (6 layers, 4 heads)
      → Residual Vector Quantizer (4 codebooks × 1024 entries)
        → Linear Projection + log_softmax
          → CTC Greedy Decoding
            → Text Output
```

## File Structure & Components

| File | Purpose |
|---|---|
| `config.py` | Hyperparameters: sample rate (16kHz), FFT/mel settings, batch size (32), 6 transformer layers, 4 attention heads, 1024 codebook entries, LR=0.0005 |
| `downsampling.py` | `ResidualDownSampleBlock` + `DownsamplingNetwork` — reduces ~112k audio frames to ~3.5k via strided convolutions with residual connections and average pooling |
| `transformer.py` | `TransformerEncoder` with sinusoidal positional encoding, multi-head self-attention, GELU feedforward, and post-norm residual connections |
| `vector_quantizer.py` | Standard VQ layer with straight-through estimator, commitment + codebook loss |
| `rvq.py` | `ResidualVectorQuantizer` — stacks 4 VQ codebooks sequentially, each quantizing the residual from the previous layer |
| `ctc_utils.py` | CTC loss computation (`zero_infinity=True`) and greedy decoding (argmax → collapse repeats → remove blanks) |
| `transcribe.py` | `TranscribeModel` — assembles the full pipeline: downsampling → transformer → RVQ → linear projection to vocab logits |
| `tokenizer.py` | Character-level BPE tokenizer: 28 tokens (A-Z, space, CTC blank token `▁`) using HuggingFace `tokenizers` library |
| `dataset.py` | `HuggingFaceSpeechDataset` + `VoiceCollator` — loads audio from HuggingFace datasets, handles resampling, mono conversion, padding, and batching |
| `train.py` | Training loop: Adam optimizer, gradient clipping (max_norm=10), VQ loss warmup schedule, NaN/Inf safeguards, TensorBoard logging, checkpointing |
| `main.py` | Entry point — calls `train_model()` with error handling |
| `requirements.txt` | Dependencies: torch, torchaudio, transformers, pandas, tensorboard, tokenizers, torchcodec, datasets, soundfile |

## Key Design Decisions

1. **Raw waveform input** — Convolutional downsampling operates directly on raw audio instead of using mel spectrograms as a front-end
2. **Residual Vector Quantization** — Discretizes continuous encoder output across 4 successive codebooks (similar to SoundStream/EnCodec), applied within an ASR pipeline
3. **CTC Loss** — Avoids the need for frame-level alignment labels; only requires (audio, transcript) pairs
4. **Character-level tokenizer** — 28-token vocabulary (A-Z, space, blank) keeps the output layer simple

## Training Details

- **Dataset:** LJ Speech (13,100 clips) via HuggingFace
- **Hardware:** A100 GPU (RunPod)
- **Optimizer:** Adam, LR=0.0005
- **Max epochs:** 1000
- **Validation:** 90/10 train-val split
- **Tested on:** 200-clip subset for model validation

## Strengths

- **Educational clarity** — Each component lives in its own file with clean separation of concerns
- **End-to-end from scratch** — No reliance on pre-trained weights; every layer is implemented and trained
- **Modular design** — Downsampling, transformer, VQ, and CTC are cleanly decoupled and independently testable
- **Practical safeguards** — NaN/Inf detection with step skipping, gradient clipping, checkpoint saving/resumption
- **Progressive VQ** — Residual quantization allows earlier codebooks to capture coarse features while later ones refine details

## Weaknesses & Areas for Improvement

1. **RVQ in ASR is unusual** — Vector quantization introduces an information bottleneck between encoder and CTC head; most production ASR systems skip VQ entirely. This may hurt transcription accuracy.
2. **No data augmentation** — Missing SpecAugment, time warping, speed perturbation, or noise injection, which are critical for ASR generalization.
3. **Greedy CTC decoding only** — No beam search or language model rescoring for improved accuracy.
4. **Small-scale validation** — Only tested on 200 clips from LJSpeech; scalability to larger datasets is unproven.
5. **No learning rate scheduling** — Fixed LR of 0.0005 throughout training; warm-up + cosine annealing would improve convergence.
6. **Character-level output** — Works for English but limits extensibility to other languages; BPE subword tokenization would be more practical at scale.
7. **Debug config left in** — Config defaults to CPU with `overfit_mode=True` on 10 examples (debug/test settings still active).
8. **No attention masking for padding** — While the transformer accepts masks, the training loop may not be generating proper padding masks for variable-length audio.
9. **No pre-emphasis or normalization** — Raw waveforms are fed directly without standard audio preprocessing (pre-emphasis filtering, per-utterance normalization).

## Conclusion

This is a well-structured educational project that demonstrates how to build a complete ASR pipeline from scratch in PyTorch. The code is clean, modular, and easy to follow. The inclusion of RVQ is an interesting experimental choice that connects ideas from neural audio codecs to ASR. However, for production use, the model would benefit significantly from data augmentation, beam search decoding, learning rate scheduling, and removal of the VQ bottleneck.
