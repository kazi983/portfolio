// Scroll progress is driven purely by CSS (animation-timeline: scroll()).
/** Progress bar component that displays the scroll progress of the page. */
function ProgressBar() {
  return (
    <div className="progressbar-content">
      <div className="progressbar-bar"></div>
    </div>
  );
}

export default ProgressBar;
