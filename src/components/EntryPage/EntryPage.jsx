import AddPopUp from "../AddPopUp/AddPopUp";

function EntryPage() {
  return (
    <div className="container">
      <div>
        <button className="button">+</button>
      </div>
      <AddPopUp />

      <div style={{ background: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        reprehenderit, amet autem exercitationem suscipit, magnam officiis
        distinctio culpa nostrum nulla expedita deleniti dolore veritatis iure
        ducimus consequuntur commodi. Adipisci, omnis!
      </div>
    </div>
  );
}

export default EntryPage;
