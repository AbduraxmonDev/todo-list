import { useState } from "react";

function MainPage() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

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
                <div className="checkbox__type">
                  <label
                    onClick={handleClick}
                    className={`checkbox__item ${isActive ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      className="checkbox__input"
                      id="checkbox"
                    />
                    work
                  </label>
                  <label
                    onClick={handleClick}
                    className={`checkbox__item ${isActive ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      className="checkbox__input"
                    />
                    <p>study</p>
                  </label>
                  <label
                    onClick={handleClick}
                    className={`checkbox__item ${isActive ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="checkbox__input"
                    />
                    entertainment
                  </label>
                  <label
                    onClick={handleClick}
                    className={`checkbox__item ${isActive ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      className="checkbox__input"
                    />
                    <p>family</p>
                  </label>
                </div>
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
