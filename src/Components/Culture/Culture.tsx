import styles from "./Culture.module.css";
import React from "react";

interface CultureProps {
  call: {
    web_url: string;
    multimedia: {
      subtype: string;
      url: string;
    }[];
    headline: {
      main: string;
    };
  };
}

export default function Culture({ call }: CultureProps) {
  let imageBlog: any = [];

  if (call) {
    imageBlog =
      call.multimedia?.find(
        (image) => image.subtype === "mediumThreeByTwo210"
      ) || call.multimedia[0];
  }

  return (
    <div className={styles.component}>
      <div className={styles.article}>
        <a className={styles.web} href={call.web_url}>
          {imageBlog && (
            <img
              className={styles.imageNews}
              src={"https://static01.nyt.com/" + imageBlog?.url}
            />
          )}
          {call.headline && (
            <h3 className={styles.headline}>{call?.headline?.main}</h3>
          )}
        </a>
      </div>
      <div className={styles.vertDiv}></div>
    </div>
  );
}
