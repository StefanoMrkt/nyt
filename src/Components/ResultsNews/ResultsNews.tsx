import styles from "./ResultsNews.module.css";
import { useState, useEffect } from "react";
import React from "react";

interface ResultsNewsProps {
  call: {
    _id: string;
    web_url: string;
    multimedia: {
      subtype: string;
      url: string;
    }[];
    section_name: string;
    headline: {
      main: string;
    };
    abstract: string;
    pub_date: string;
  }[];
}

export default function ResultsNews({ call }: ResultsNewsProps) {
  const [article, setArticle] = useState<any>([]);
  let imageBlog: any;

  useEffect(() => {
    setArticle(call[0]);
  }, [call]);

  console.log(call);

  if (call != null) {
    article.sort((a, b) => {
      const dateA: number = new Date(a?.pub_date).getTime();
      const dateB: number = new Date(b?.pub_date).getTime();

      return dateB - dateA;
    });
  }

  const mappedArticles = Array.isArray(article)
    ? article.map((art) => {
        if (art.multimedia && art.multimedia.length > 0) {
          imageBlog = art.multimedia.find(
            (image) => image.subtype === "mediumThreeByTwo210"
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
                    <p className={styles.section}>{art?.section_name}</p>
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
                          : ""
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
