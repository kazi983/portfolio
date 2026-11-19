import { EXPERIENCES } from "../data/experience";
import Highlighted from "./Highlighted";

/** Work experience section, rendered from `data/experience.ts`. */
function Experience() {
  return (
    <section id="experience" className="section-flex experience-section">
      <h2 className="section-title experience-title before:icon icon-asterisk fade-in-on-scroll">
        My experience
      </h2>
      <div className="experience-content">
        {EXPERIENCES.map((exp) => (
          <article
            key={exp.position}
            className="experience-item fade-in-on-scroll"
          >
            <h3 className="experience-position">{exp.position}</h3>
            <p className="experience-company">{exp.company}</p>
            <ul className="experience-description">
              {exp.highlights.map((highlight) => (
                <li key={highlight}>
                  <Highlighted text={highlight} />
                </li>
              ))}
            </ul>
            <p className="experience-period">{exp.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
