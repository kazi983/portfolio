/**
 * Renders text, wrapping every `**...**` part in an accent-colored span.
 * @param  props - Component props.
 * @param  props.text - Text that may contain `**highlighted**` parts.
 */
function Highlighted({ text }: { text: string }) {
  // A capture group in split() keeps the matched text in the result,
  // so odd indices are always the parts that were wrapped in **...**.
  // `.+?` is non-greedy: it stops at the nearest closing **.
  const parts = text.split(/\*\*(.+?)\*\*/);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="accent-text">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default Highlighted;
