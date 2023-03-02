import React from "react";
import Checkbox from "../Checkbox";
import ToDo from "../ToDo";
import { checkboxLabels, toDoData } from "../../data";
// import AddPopUp from "../AddPopUp";
// import EditPopUp from "../EditPopUp/EditPopUp";
// import DeletePopUp from "../DeletePopUp";
function MainPage() {
  return (
    <>
      {/* <AddPopUp /> */}
      {/* <EditPopUp /> */}
      {/* <DeletePopUp /> */}
      <div className="main">
        <div className="container">
          <div className="main__content">
            <div className="main__header">
              <a href="/">
                <h1 className="main__title">todo</h1>
              </a>
              <button className="main__btn">+</button>
            </div>
            <div className="main__body">
              <div className="checkbox">
                <ul className="checkbox__type">
                  {checkboxLabels.map((item) => (
                    <Checkbox item={item} key={item.id} />
                  ))}
                  <label className="checkbox__hide">
                    <input type="checkbox" />
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
