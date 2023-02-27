import React, { useRef } from "react";
import GetStarted from "../GetStarted";

function EntryPage() {
  const titleRef = useRef();

  window.addEventListener("scroll", function (e) {
    e.preventDefault();
    titleRef.current.classList.add("active");
  });

  return (
    <>
      <section className="entry">
        <div className="entry__content">
          <h1 className="entry__title" ref={titleRef}>
            todo
          </h1>
        </div>
      </section>
      <GetStarted />
    </>
  );
}

export default EntryPage;
