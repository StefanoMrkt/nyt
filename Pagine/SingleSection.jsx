import Header from "../Componenti/Header";
import Sections from "../Componenti/Sections";
import { useLocation } from "react-router-dom";
import { store } from "../store";
import { useQueryContext } from "../QueryContext";
import NewsSingleSection from "../Componenti/NewsSingleSection";

export default function SingleSection() {
  const location = useLocation();
  const data = location.state?.data;

  const { queries } = useQueryContext();

  return (
    <div>
      <Header light={store} articles={queries} />
      <Sections />

      <h2 className="nameSection">{data[0].section_name}</h2>
      <div className="line"></div>

      {data.map((section, index) => {
        return (
          <NewsSingleSection
            key={index}
            news={{
              call: section,
            }}
          />
        );
      })}

      <footer>
        <div className="line"></div>
        <p className="footer">2023 The New York Times Company</p>
      </footer>
    </div>
  );
}

