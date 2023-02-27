function MainPage() {
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
                  <label className="checkbox__item active">
                    <input
                      type="checkbox"
                      name=""
                      className="checkbox__input"
                      id="checkbox"
                    />
                    <p>work</p>
                  </label>
                  <label className="checkbox__item active">
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      className="checkbox__input"
                    />
                    <p>study</p>
                  </label>
                  <label className="checkbox__item active">
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      className="checkbox__input"
                    />
                    <p>entertainment</p>
                  </label>
                  <label className="checkbox__item active">
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      className="checkbox__input"
                    />
                    <p>family</p>
                  </label>
                </div>
                {/* <div className="checkbox__hide">
                  <input type="checkbox" />
                  <p>Hide done tasks</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
