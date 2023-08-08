import PropTypes from "prop-types";
import styles from "./Opinion.module.css";

export default function Opinion(props) {
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
      <div className={styles.main}>
        <a className={styles.web} href={article.web_url}>
          <img
            className={styles.image}
            src={"https://static01.nyt.com/" + imageBlog?.url}
          />
          <p className={styles.headline}>{article?.headline?.main}</p>
        </a>
      </div>
      <div className={styles.vertDiv}></div>
    </div>
  );
}

Opinion.propTypes = {
  call: PropTypes.object,
};
