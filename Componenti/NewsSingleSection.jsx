import PropTypes from "prop-types";
import styles from "./NewsSingleSection.module.css";
export default function NewsSingleSection(props) {
  const article = props.news?.call;
  console.log(article);
  const imageBlog = article.multimedia.find(
    (image) => image.subtype === "xlarge"
  );

  return (
    <div>
      <a className={styles.mainStructure} href={article.web_url}>
        <div className={styles.article}>
          <div className={styles.headers}>
            <h3 className={styles.headline}>{article?.headline?.main}</h3>
            <p className={styles.abstract}>{article?.abstract}</p>
          </div>

          <div>
            {imageBlog && (
              <img
                className={styles.imageNews}
                src={
                  imageBlog
                    ? "https://static01.nyt.com/" + imageBlog.url
                    : article.multimedia[0]
                    ? "https://static01.nyt.com/" + article.multimedia[0].url
                    : null
                }
                style={{
                  display:
                    imageBlog || article.multimedia[0] ? "block" : "none",
                }}
              />
            )}
          </div>
        </div>
      </a>
      <div className={styles.lineDiv}></div>
    </div>
  );
}

NewsSingleSection.propTypes = {
  news: PropTypes.shape({
    call: PropTypes.array,
  }),
};
