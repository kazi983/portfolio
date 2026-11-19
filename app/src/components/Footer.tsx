import { EMAIL } from "../constants";

/** Footer component that displays contact information and links to external sites. */
function Footer() {
  return (
    <footer id="contact">
      <p>Have a project in mind?</p>
      <a
        className="footer-email"
        href={`mailto:${EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {EMAIL}
      </a>
      <p>
        Inspired by{" "}
        <a
          className="hover:f-foreground"
          href="https://www.tajmirul.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tajmirul
        </a>{" "}
        &amp;{" "}
        <a
          className="hover:f-foreground"
          href="https://maxwel-khadambi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maxwel
        </a>
      </p>
      <a
        className="hover:f-foreground"
        href="https://github.com/kazi983/"
        target="_blank"
        rel="noopener noreferrer"
      >
        built by Kaoru Kajihara
      </a>
    </footer>
  );
}

export default Footer;
