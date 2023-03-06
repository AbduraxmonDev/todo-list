import MenuIcon from "../../assets/icons/menu-icon.png";
// import { useState } from "react";
import { checkboxLabels } from "../../data";
import MenuPopUp from "../MenuPopUp";

export default function ToDo({ element }) {
  // const { onClickOutside } = props;

  const selectItem = (id, arr) => {
    const item = arr.find((el) => el.id === id);
    return item.color;
  };

  return (
    <>
      <div className="todo">
        <div className="todo__header">
          <h3 className="todo__title ">{element.title}</h3>
          <button>
            <img src={MenuIcon} alt="icon" className="todo__menu" />
          </button>
          <MenuPopUp />
        </div>
        <div className="todo__body">
          <p className="todo__text ">{element.description}</p>
        </div>
        <div className="todo__footer">
          <div className="todo__type">
            {element.type.map((item, index) => (
              <span
                className="circle"
                key={index}
                style={{ backgroundColor: selectItem(item, checkboxLabels) }}
              ></span>
            ))}
          </div>
          <label className="checkbox__done">
            <input type="checkbox" />
            <span className="checkbox__ticked"></span>
            <p>done</p>
          </label>
        </div>
      </div>
    </>
  );
}
