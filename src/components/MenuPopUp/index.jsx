import React, { useState } from "react";
import EditPopUp from "../EditPopUp/EditPopUp";

export default function MenuPopUp() {
  const [edit, setEdit] = useState(false);
  const myEdit = () => {
    setEdit(false);
  };
  return (
    <>
      {edit ? <EditPopUp myEdit={myEdit} /> : ""}

      <div className="menu__modal">
        <button className="menu__btn edit" onClick={() => setEdit(true)}>
          Edit...
        </button>
        <button className="menu__btn delete">Delete</button>
      </div>
    </>
  );
}
