import styles from "./Culture.module.css";
import { PropTypes } from "prop-types";

export default function Culture(props) {
  const article = props.call;
  let imageBlog = [];

  if (article) {
    imageBlog =
      article.multimedia.find(
        (image) => image.subtype === "mediumThreeByTwo210"
      ) || article.multimedia[0];
  }

  return (
    <div className={styles.component}>
      <div className={styles.article}>
        <a className={styles.web} href={article.web_url}>
          {imageBlog && (
            <img
              className={styles.imageNews}
              src={"https://static01.nyt.com/" + imageBlog?.url}
            />
          )}
          {article.headline && (
            <h3 className={styles.headline}>{article?.headline?.main}</h3>
          )}
        </a>
      </div>
      <div className={styles.vertDiv}></div>
    </div>
  );
}

Culture.propTypes = {
  call: PropTypes.object,
};
