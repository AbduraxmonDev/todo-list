import EntryPage from "./components/EntryPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
