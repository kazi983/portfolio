const STATS = [
  { value: "5+", label: "Years of Experience" },
  { value: "1+", label: "Completed Projects" },
];

/** Hero section that introduces me and my work. */
function Hero() {
  return (
    <section id="hero" className="section-flex hero-section fade-in-on-scroll">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Full-stack</span>
          <span>Developer</span>
        </h1>
        <p className="hero-description">
          Hi! I'm <span className="text-primary">Kaoru</span>. I enjoy building
          software focus on clear UI, maintainable code, and practical problem
          solving.
        </p>
        <a
          className="hover:bg-white button"
          href="https://www.linkedin.com/in/kaoru-kajihara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk
        </a>
        <p className="hero-availability">
          Available for volunteer and part-time opportunities.
        </p>
      </div>
      <ul className="hero-stats">
        {STATS.map((stat) => (
          <li key={stat.label} className="hero-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;
