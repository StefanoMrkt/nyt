import { useLocation } from "react-router-dom";
import axios from "axios";
import { store } from "../store";

import Header from "../Components/Header";
import Sections from "../Components/Sections";
import ResultsNews from "../Components/ResultsNews";
import { useEffect, useState } from "react";

export default function SearchResult() {
  const location = useLocation();
  const [news, setNews] = useState([]);

  const apiKey = "9ppYDcVLlkQzwguaO3DtkJmBwfmREee0";

  //TODO Inserire caricamento
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${location.state.text}&api-key=${apiKey}`
      )
      .then((data) => data.data)
      .then((res) => {
        setNews((prevNews) => [...prevNews, res.response.docs]);
      });
  }, []);

  return (
    <div>
      <Header light={store} />
      <Sections />
      <div className="textResult">
        <div className="resultsFor">Results for:</div>
        <div>
          <strong>{location.state.text}</strong>
        </div>
        <div className="lineDiv"></div>
      </div>
      {news ? <ResultsNews call={news} /> : <div>No reasults</div>}

      <footer>
        <div className="lineDiv"></div>
        <p className="footer">2023 The New York Times Company</p>
      </footer>
    </div>
  );
}
