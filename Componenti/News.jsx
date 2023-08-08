import PropTypes from "prop-types";

import styles from "./News.module.css";
import { useEffect, useState } from "react";

export default function News(props) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle(props.news.call);
  }, [props.news.call]);

  console.log(article);

  const mappedArticles = Array.isArray(article)
    ? article.map((art) => {
        const imageBlog = art.multimedia.find(
          (image) => image.subtype === "xlarge"
        );

        return (
          <a className={styles.mainStructure} key={art._id} href={art?.web_url}>
            <div className={styles.article}>
              <div className={styles.headers}>
                <div className={styles.divNews}>
                  <h3 className={styles.headline}>{art?.headline?.main}</h3>
                  <p className={styles.abstract}>{art?.abstract}</p>
                </div>
                {props.news.secondNews && (
                  <div className={styles.secondArticle}>
                    <h3 className={styles.headline}>
                      {article[1]?.headline?.main}
                    </h3>
                    <p className={styles.abstract}>{article[1]?.abstract}</p>
                  </div>
                )}
              </div>

              {imageBlog && (
                <img
                  className={styles.imageNews}
                  src={
                    imageBlog
                      ? "https://static01.nyt.com/" + imageBlog.url
                      : art.multimedia[0]
                      ? "https://static01.nyt.com/" + art.multimedia[0].url
                      : null
                  }
                  style={{
                    display: imageBlog || art.multimedia[0] ? "block" : "none",
                  }}
                />
              )}
            </div>

            {<div className="lineDiv"></div>}
          </a>
        );
      })
    : [];

  return <div>{mappedArticles[0]}</div>;
}

News.propTypes = {
  news: PropTypes.shape({
    secondNews: PropTypes.bool,
    call: PropTypes.array,
  }),
};
