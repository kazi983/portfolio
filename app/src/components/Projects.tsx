import { PROJECTS } from "../data/projects";

/** Selected projects section, rendered from `data/projects.ts`. */
function Projects() {
  return (
    <section id="project" className="section-flex project-section">
      <h2 className="section-title project-title before:icon icon-asterisk fade-in-on-scroll">
        Selected Projects
      </h2>
      <div className="project-content">
        {PROJECTS.map((project, i) => (
          <article key={project.name} className="fade-in-on-scroll">
            <a
              href={project.href}
              className="project-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-info">
                {/* Display number derived from position: _01., _02., ... */}
                <div className="project-code">
                  _{String(i + 1).padStart(2, "0")}.
                </div>
                <div className="project-description">
                  <h3 className="project-name after:icon">{project.name}</h3>
                  <ul className="project-tech-list">
                    {project.techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <img src={project.image} alt={project.imageAlt} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
