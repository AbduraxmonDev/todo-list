import React from "react";

export default function MenuPopUp({ isOpen, setIsOpen, children, onClose }) {
  if (!isOpen) {
    return null;
  } else {
    setIsOpen(isOpen);
  }
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
