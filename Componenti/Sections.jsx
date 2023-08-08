import styles from "./Sections.module.css";
import { useNavigate } from "react-router-dom";
import sectionsData from "../sections";

export default function Sections({ articles }) {
  const sections = sectionsData;
  const navigate = useNavigate();


  const TotalSection = articles.map(({ data }, index) => {
    const section = sections[index].section;
    return (
      <li key={index} className={styles.sectionArt}>
        <button
          className="buttonArt"
          onClick={() =>
            navigate(`/section/${section}`, {
              state: {
                data: data && data,
              },
            })
          }
        >
          {section}
        </button>
      </li>
    );
  });

  return (
    <div>
      {articles && <ul className={styles.ulTotal}>{TotalSection}</ul>}
      <div className={`${styles.line} lineDiv`}></div>
      <div className={`${styles.line} lineDiv`}></div>
    </div>
  );
}
