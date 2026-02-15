import Image from "next/image";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Deriverse Trading Journal",
      description: "Analytics & Journal platform for Deriverse",
      image: "/images/Deriverse.png",
    },
    {
      id: 2,
      title: "Equicom Design Team Resource Portal",
      description: "A centralized platform for design team resources.",
      image: "/images/Ymparalalog.png",
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="header">
        <h1 className="name">Yamparala Rahul</h1>
        <p className="title">UX Engineeer at <a href="https://www.linkedin.com/company/equicom-technologies/posts/?feedView=all">Equicom Technologies</a></p>
        <p className="title">Let's connect or chat? <a href="https://t.me/yamparalarahul1">Telegram</a> or <a href="https://wa.me/918897132717" className="whatsapp-link">Whatsapp</a></p>

      </section>

      {/* Projects Section */}
      <section>
        <h2 className="section-title">Personal Engineering UX Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a key={project.id} href={project.id === 1 ? "https://deriverse.vercel.app" : "https://yamparalalog.vercel.app"} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glass-card project-card">
                <div className="project-image-container">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={820}
                    height={410}
                    className="project-image"
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
          
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Yamparala Rahul.</p>
      </footer>
    </main>
  );
}
