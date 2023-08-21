import "./App.css";
import { Route, Routes } from "react-router-dom";


import Home from "./Pages/Home";
import Error from "./Pages/Error";
import SearchResult from "./Pages/SearchResult";
import SingleSection from "./Pages/SingleSection";

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
