import EntryPage from "./components/EntryPage/EntryPage";
import GetStarted from "./components/GetStarted/GetStarted";
// import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <EntryPage />
        <GetStarted />
      </div>
    </div>
  );
}

export default App;
