import React from "react";
import styles from "./News.module.css";
import { useEffect, useState } from "react";

interface NewsProps {
  news: {
    secondNews: boolean;
    call: {
      _id: string;
      web_url: string;
      multimedia: {
        subtype: string;
        url: string;
      }[];
      headline: {
        main: string;
      };
      abstract: string;
    }[];
  };
}

export default function News({ news }: NewsProps) {
  const [article, setArticle] = useState<any>([]);

  useEffect(() => {
    setArticle(news.call);
  }, [news.call]);

  console.log(article);

  const mappedArticles = Array.isArray(article)
    ? article.map((art) => {
        const imageBlog = art.multimedia.find(
          (image) => image.subtype === "xlarge"
        );

        return (
          <>
            <a
              className={styles.mainStructure}
              key={art._id}
              href={art?.web_url}
            >
              <div className={styles.article}>
                <div className={styles.headers}>
                  <div className={styles.divNews}>
                    <h3 className={styles.headline}>{art?.headline?.main}</h3>
                    <p className={styles.abstract}>{art?.abstract}</p>
                  </div>

                  <a
                    className={styles.mainStructure}
                    href={article[1]?.web_url}
                  >
                    {news.secondNews && (
                      <div className={styles.secondArticle}>
                        <h3 className={styles.headline}>
                          {article[1]?.headline?.main}
                        </h3>
                        <p className={styles.abstract}>
                          {article[1]?.abstract}
                        </p>
                      </div>
                    )}
                  </a>
                </div>

                {imageBlog && (
                  <img
                    className={styles.imageNews}
                    src={
                      imageBlog
                        ? "https://static01.nyt.com/" + imageBlog.url
                        : art.multimedia[0]
                        ? "https://static01.nyt.com/" + art.multimedia[0].url
                        : ""
                    }
                    style={{
                      display:
                        imageBlog || art.multimedia[0] ? "block" : "none",
                    }}
                  />
                )}
              </div>
            </a>

            {<div className="lineDiv"></div>}
          </>
        );
      })
    : [];

  return <div>{mappedArticles[0]}</div>;
}
