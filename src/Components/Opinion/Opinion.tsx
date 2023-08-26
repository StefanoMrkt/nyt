import React from "react";
import styles from "./Opinion.module.css";

interface OpinionProps {
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

export default function Opinion({ call }: OpinionProps) {
  let imageBlog: any = [];

  if (call) {
    imageBlog =
      call.multimedia.find(
        (image) => image.subtype === "mediumThreeByTwo210"
      ) || call.multimedia[0];
  }

  return (
    <div className={styles.component}>
      <div className={styles.main}>
        <a className={styles.web} href={call.web_url}>
          <img
            className={styles.image}
            src={"https://static01.nyt.com/" + imageBlog?.url}
          />
          <p className={styles.headline}>{call?.headline?.main}</p>
        </a>
      </div>
      <div className={styles.vertDiv}></div>
    </div>
  );
}
