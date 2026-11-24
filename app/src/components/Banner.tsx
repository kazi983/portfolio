/** Temporary notice at the top of the page; remove it when the new version ships. */
function Banner() {
  return (
    <aside className="banner" aria-label="Site notice">
      <strong className="banner-title">New version coming soon</strong>
      <p className="banner-text">
        This site was built early in my web development program.
      </p>
    </aside>
  );
}

export default Banner;
