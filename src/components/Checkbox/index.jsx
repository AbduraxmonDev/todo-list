import { useRef } from "react";

function Checkbox({ item }) {
  const ref = useRef();

  const handlyClick = (e) => {
    e.preventDefault();
    ref.current.classList.toggle("active");
  };

  return (
    <>
      <li
        ref={ref}
        onClick={handlyClick}
        className="checkbox__list"
        key={item.id}
      >
        <input
          type="checkbox"
          id={item.id}
          className="checkbox__input"
          style={{ backgroundColor: item.color }}
        />
        <label htmlFor={item.id} className="checkbox__item active">
          {item.name}
        </label>
      </li>
    </>
  );
}

export default Checkbox;
