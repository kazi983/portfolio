// The resume lives in public/, so it is served at a stable URL (not bundled).
const RESUME_URL = "/download/Kaoru_Kajihara_Resume.docx.pdf";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Skills" },
  { href: "#experience", label: "Work Experience" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

/** Navigation bar component that displays the current status and links to different sections of the portfolio. */
function Nav() {
  return (
    <nav className="nav">
      <a
        className="hover:bg-white nav-status-container"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="nav-status-label">Current Status:</p>
        <p className="nav-status-available">Available</p>
      </a>

      <ul className="hidden-nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a className="nav-link hover:f-foreground" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
