import styles from "./ResultsNews.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function ResultsNews(props) {
  const [article, setArticle] = useState([]);
  let imageBlog;

  useEffect(() => {
    setArticle(props.call[0]);
  }, [props.call]);

  console.log(props.call);

  article.sort((a, b) => {
    const dateA = new Date(a.pub_date);
    const dateB = new Date(b.pub_date);

    return dateB - dateA;
  });

  const mappedArticles = Array.isArray(article)
    ? article.map((art) => {
        if (art.multimedia && art.multimedia.length > 0) {
          imageBlog = art.multimedia.find(
            (image) => image.subtype === "xlarge"
          );
        }

        var str = art?.pub_date;
        var Data = new Date(str);
        var options = { month: "short", day: "numeric" };
        var finalDate = Data.toLocaleDateString("en-en", options);

        return (
          <div key={art._id}>
            <a className={styles.mainStructure} href={art?.web_url}>
              <div className={styles.article}>
                <div className={styles.textArt}>
                  <div>
                    <p className={styles.dateArt}>{finalDate}</p>
                  </div>

                  <div className={styles.divNews}>
                    <p className={styles.section}>{art?.subsection_name}</p>
                    <h3 className={styles.headline}>{art?.headline?.main}</h3>
                    <p className={styles.abstract}>{art?.abstract}</p>
                  </div>
                </div>

                <div className={styles.divImage}>
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
                        display:
                          imageBlog || art.multimedia[0] ? "block" : "none",
                      }}
                    />
                  )}
                </div>
              </div>
            </a>

            <div className="lineDiv"></div>
          </div>
        );
      })
    : [];

  return <div>{mappedArticles}</div>;
}

ResultsNews.propTypes = {
  call: PropTypes.array,
};
