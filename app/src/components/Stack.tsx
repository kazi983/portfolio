import { Fragment } from "react";
import { STACK } from "../data/stack";

/** Tech stack section, rendered from `data/stack.ts`. */
function Stack() {
  return (
    <section id="stack" className="section-flex stack-section">
      <h2 className="section-title stack-title before:icon icon-asterisk fade-in-on-scroll">
        My stack
      </h2>
      <div className="stack-content">
        {STACK.map((group) => (
          <Fragment key={group.category}>
            <h3 className="stack-name fade-in-on-scroll">{group.category}</h3>
            <ul className="stack-items fade-in-on-scroll">
              {group.items.map((item) => (
                <li key={item.name} className="stack-item">
                  <img width="40" height="40" src={item.icon} alt="" />
                  {item.name}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Stack;
