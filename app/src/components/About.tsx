import profilePhoto from "../assets/images/kaoru_kajihara.jpg";

/** About component that displays information about me. */
function About() {
  return (
    <section
      id="about"
      className="section-flex about-section fade-in-on-scroll"
    >
      <h2 className="section-title about-title before:icon icon-person">
        This is who I am.
      </h2>
      <div className="about-content">
        <p className="about-greeting">Hi, I'm Kaoru.</p>
        <div className="about-description">
          <p>
            I have spent the last 5 years developing and supporting{" "}
            <span className="accent-text">enterprise systems</span> used by
            employees across global locations. Working on systems that people
            rely on every day taught me the importance of{" "}
            <span className="accent-text">
              stability, clear communication, and continuous improvement
            </span>
            . I have enjoyed investigating issues, discussing solutions with
            users and teams, and making improvements that create a better
            experience.{" "}
            <span className="accent-text">
              I believe good software solves real problems by understanding the
              people behind the system
            </span>
            .
          </p>
        </div>
        <div className="about-photo">
          <img src={profilePhoto} alt="Kaoru Kajihara" />
        </div>
      </div>
    </section>
  );
}

export default About;
