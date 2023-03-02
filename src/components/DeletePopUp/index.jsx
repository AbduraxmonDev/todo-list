function DeletePopUp() {
  return (
    <div className="todoDelete">
      <div className="delete__modal">
        <div className="delete__title">
          <h3> Are you sure to delete this todo</h3>
        </div>
        <div className="delete__btns">
          <button className="btn__delete btn">Delete</button>
          <button className="btn__cancel btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
