import React from "react";
import styles from "./NewsSingleSection.module.css";

interface NewsSingleSectionProps {
  news: {
    call: {
      web_url: string;
      multimedia: {
        subtype: string;
        url: string;
      }[];
      headline: {
        main: string;
      };
      abstract: string;
    };
  };
}

export default function NewsSingleSection({ news }: NewsSingleSectionProps) {
  const imageBlog = news.call.multimedia.find(
    (image) => image.subtype === "xlarge"
  );

  return (
    <div>
      <a className={styles.mainStructure} href={news.call.web_url}>
        <div className={styles.article}>
          <div className={styles.headers}>
            <h3 className={styles.headline}>{news.call?.headline?.main}</h3>
            <p className={styles.abstract}>{news.call?.abstract}</p>
          </div>

          <div>
            {imageBlog && (
              <img
                className={styles.imageNews}
                src={
                  imageBlog
                    ? "https://static01.nyt.com/" + imageBlog.url
                    : news.call.multimedia[0]
                    ? "https://static01.nyt.com/" + news.call.multimedia[0].url
                    : ""
                }
                style={{
                  display:
                    imageBlog || news.call.multimedia[0] ? "block" : "none",
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
