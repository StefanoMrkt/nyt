import styles from "./Summary.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Summary(props) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle(props.call);
  }, [props.call]);

  let imageBlog = [];

  if (Array.isArray(article)) {
    imageBlog = article.map((art) => {
      return art.multimedia.find(
        (image) => image.subtype === "mediumThreeByTwo210"
      );
    });
  }

  console.log(article);

  return (
    <div className={styles.main}>
      {article && <h6>{article[0]?.news_desk}</h6>}
      {article && (
        <a href={article?.[0]?.web_url}>
          {imageBlog?.[0] && (
            <img
              className={styles.thunb}
              src={"https://static01.nyt.com/" + imageBlog?.[0]?.url}
            />
          )}
        </a>
      )}

      <a href={article?.[0]?.web_url} className={styles.article}>
        <p className={styles.headline}>{article?.[0]?.headline?.main}</p>
      </a>
      <div className={styles.line}></div>
      <a href={article?.[1]?.web_url} className={styles.article}>
        <p className={styles.headline}>{article?.[1]?.headline?.main}</p>
      </a>
      <div className={styles.line}></div>
      <a href={article?.[2]?.web_url} className={styles.article}>
        <p className={styles.headline}>{article?.[2]?.headline?.main}</p>
      </a>
    </div>
  );
}

Summary.propTypes = {
  call: PropTypes.array,
};
