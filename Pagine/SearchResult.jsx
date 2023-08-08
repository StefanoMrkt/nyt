import { useLocation } from "react-router-dom";
import axios from "axios";

import Header from "../Componenti/Header";
import ResultsNews from "../Componenti/ResultsNews";
import { useEffect, useState } from "react";

export default function SearchResult() {
  const location = useLocation();
  const [news, setNews] = useState([]);

  const apiKey = [
    "CQ0Wb4S5hnBB6DIjuCEEXwDgWS7YZaO0",
    "9ppYDcVLlkQzwguaO3DtkJmBwfmREee0",
    "K9JYkpYZYIJm9Z3sqx2ZnGYc4XKcLBVz",
  ];

  //TODO Inserire caricamento
  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${location.state.text}&api-key=${apiKey[1]}`
      )
      .then((data) => data.data)
      .then((res) => {
        setNews((prevNews) => [...prevNews, res.response.docs]);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="textResult">
        <div className="resultsFor">Results for:</div>
        <div>
          <strong>{location.state.text}</strong>
        </div>
        <div className="lineDiv"></div>
      </div>
      {news ? <ResultsNews call={news} /> : <div>Nessun risultato</div>}

      <footer>
        <div className="lineDiv"></div>
        <p className="footer">2023 The New York Times Company</p>
      </footer>
    </div>
  );
}
