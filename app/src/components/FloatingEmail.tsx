import { EMAIL } from "../constants";

/** Vertical email link fixed to the left edge; shown only on wide screens (see .hidden-email).  */
function FloatingEmail() {
  return (
    <a
      className="hidden-email hover:f-foreground"
      href={`mailto:${EMAIL}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {EMAIL}
    </a>
  );
}

export default FloatingEmail;
