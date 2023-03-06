import React, { useState } from "react";
import Checkbox from "../Checkbox";
import ToDo from "../ToDo";
import { checkboxLabels, toDoData } from "../../data";
import AddPopUp from "../AddPopUp";
// import DeletePopUp from "../DeletePopUp";
function MainPage() {
  const [close, setClose] = useState(false);
  const myFunk = () => {
    setClose(false);
  };
  
  return (
    <>
      {close ? <AddPopUp myFunk={myFunk} /> : ""}

      {/* <DeletePopUp /> */}
      <div className="main">
        <div className="container">
          <div className="main__content">
            <div className="main__header">
              <a href="/">
                <h1 className="main__title">todo</h1>
              </a>
              <button className="main__btn" onClick={() => setClose(true)}>
                +
              </button>
            </div>
            <div className="main__body">
              <div className="checkbox">
                <ul className="checkbox__type">
                  {checkboxLabels.map((item) => (
                    <Checkbox item={item} key={item.id} />
                  ))}
                  <label className="checkbox__hide">
                    <input type="checkbox" />
                    <span className="checkbox__tick"></span>
                    <p>Hide done tasks</p>
                  </label>
                </ul>
              </div>
              <div className="todo__list">
                {toDoData.map((element) => (
                  <ToDo element={element} key={element.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
