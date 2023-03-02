import React from "react";
import Checkbox from "../Checkbox";
import { checkboxLabels } from "../../data";
function AddPopUp() {
  document.body.style.overflow = "hidden";
  return (
    <div className="myModal">
      <div className="modal">
        <div className="modal__header">
          <button className="modal__header-cancel modal-btn">Cancel</button>
          <button className="modal__header-add modal-btn">Add</button>
        </div>
        <div className="modal__body">
          <form action="" className="form">
            <div className="form__heder">
              <h3 className="form__header-title">
                Title <span className="error__add"> *required</span>
              </h3>
              <div>
                <input
                  type="text"
                  className="form__header-input"
                  placeholder="add a title..."
                />
              </div>
            </div>
            <div className="form__body">
              <h3 className="form__body-title">
                Description
                <span className="error__add"> *required</span>
              </h3>
              <textarea
                name="text"
                cols="30"
                rows="5"
                className="form__body-input"
                placeholder="add a description ..."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal__footer">
          <div className="modal__footer-title">
            <h3>
              Tags <span className="error__add">*required</span>
            </h3>
          </div>
          <div className="modal__footer-buttons">
            <div className="checkbox">
              <ul className="checkbox__type">
                {checkboxLabels.map((item) => (
                  <Checkbox item={item} key={item.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPopUp;
