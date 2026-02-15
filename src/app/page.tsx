import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard",
      description: "A revolutionary financial tracking application with real-time analytics and glassmorphism UI.",
      image: "/images/project1.png",
    },
    {
      id: 2,
      title: "Creative Agency Portal",
      description: "A multi-platform portfolio management system for creative professionals and agencies.",
      image: "/images/project2.png",
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="header">
        <div className="profile-container">
          <Image
            src="/images/profile.png"
            alt="Rahul Yamparala"
            width={140}
            height={140}
            className="profile-image"
            priority
          />
        </div>
        <h1 className="name">Rahul Yamparala</h1>
        <p className="title">Full Stack Developer & UI Designer</p>

        <div className="social-bar">
          <a href="#" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Rahul Yamparala. Built with Next.js.</p>
      </footer>
    </main>
  );
}
