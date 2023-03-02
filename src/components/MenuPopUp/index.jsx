import React from "react";

export default function MenuPopUp({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      {/* <button onClick={onClose}>close modal</button> */}
      {children}
      {/* <div className="menu__modal" ref={menuRef}>
        <button className="menu__btn edit">Edit...</button>
        <button className="menu__btn delete">Delete</button>
      </div> */}
    </>
  );
}
