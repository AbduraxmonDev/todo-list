import React from "react";
import Checkbox from "../Checkbox";

function MainPage() {
  

  const checkboxLabels = [
    {
      id: 1,
      name: "work",
      color: "#cbc4ff",
    },
    {
      id: 2,
      name: "study",
      color: "#c8e3f7",
    },
    {
      id: 3,
      name: "entertainment",
      color: "#ffc3c6",
    },
    {
      id: 4,
      name: "family",
      color: "#d3f1d0",
    },
  ];

  return (
    <>
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
                </ul>
                <label className="checkbox__hide">
                  <input type="checkbox" />
                  <p>Hide done tasks</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
