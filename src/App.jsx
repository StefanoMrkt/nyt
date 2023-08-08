import "./App.css";
import { Route, Routes } from "react-router-dom";


import Home from "../Pagine/Home";
import Error from "../Pagine/Error";
import SearchResult from "../Pagine/SearchResult";
import SingleSection from "../Pagine/SingleSection"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:text" element={<SearchResult />} />
        <Route path="/section/:section" element={<SingleSection />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
