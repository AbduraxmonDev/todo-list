import MenuIcon from "../../assets/icons/menu-icon.png";
import { useRef, useState } from "react";
import { checkboxLabels } from "../../data";
import MenuPopUp from "../MenuPopUp";

export default function ToDo({ element }) {
  const toDoRef = useRef();
  const inputRef = useRef();
  function addClass(e) {
    e.preventDefault();
    toDoRef.current.classList.toggle("active");
    if (inputRef.current.checked) {
    }
  }

  const selectItem = (id, arr) => {
    const item = arr.find((el) => el.id === id);
    return item.color;
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="todo" ref={toDoRef}>
        <div className="todo__header">
          <h3 className="todo__title ">{element.title}</h3>
          <button onClick={() => setIsOpen(true)}>
            <img src={MenuIcon} alt="icon" className="todo__menu" />
          </button>
          <MenuPopUp open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="menu__modal">
              <button className="menu__btn edit">Edit...</button>
              <button className="menu__btn delete">Delete</button>
            </div>
          </MenuPopUp>
        </div>
        <div className="todo__body">
          <p className="todo__text ">{element.description}</p>
        </div>
        <div className="todo__footer">
          <div className="todo__type">
            {element.type.map((item) => (
              <span
                className="circle"
                key={element.id}
                style={{ backgroundColor: selectItem(item, checkboxLabels) }}
              ></span>
            ))}
          </div>
          <label onClick={addClass}>
            <input type="checkbox" id={element.id} ref={inputRef} />
            <span className="checkbox"></span>done
          </label>
        </div>
      </div>
    </>
  );
}
