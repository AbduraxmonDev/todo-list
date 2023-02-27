import React, { useRef } from "react";

function EntryPage() {
  const titleRef = useRef();

  window.addEventListener("scroll", function (e) {
    e.preventDefault();
    // setAddClass(!addClass);
    titleRef.current.classList.add("active");
  });

  return (
    <div className="entry">
      <section className="entry__section">
        <h1 className="entry__title" ref={titleRef}>
          todo
        </h1>
      </section>
    </div>
  );
}

export default EntryPage;
