import styles from "./Sections.module.css";
import { useNavigate } from "react-router-dom";
import { useQueryContext } from "../QueryContext";

export default function Sections() {
  const navigate = useNavigate();

  const { queries } = useQueryContext();

  const TotalSection = Object.keys(queries).map((section, index) => {
    return (
      <li key={index} className={styles.sectionArt}>
        <button
          className="buttonArt"
          onClick={() =>
            navigate(`/section/${section}`, {
              state: {
                data: queries[section],
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
      <ul className={styles.ulTotal}>{TotalSection}</ul>
      <div className={`${styles.line} lineDiv`}></div>
      <div className={`${styles.line} lineDiv`}></div>
    </div>
  );
}
