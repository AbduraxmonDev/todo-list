import React, { useRef } from "react";

export default function MenuPopUp() {
  const menuRef = useRef();

  return (
    <>
      <div className="menu__modal" ref={menuRef}>
        <button className="menu__btn edit">Edit...</button>
        <button className="menu__btn delete">Delete</button>
      </div>
    </>
  );
}
