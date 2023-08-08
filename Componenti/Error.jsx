import styles from "./Error.module.css";

import { useSelector } from "react-redux/es/hooks/useSelector";

export default function ErrorComponent() {
  const light = useSelector((state) => state.lightDark.light);
  let srcImage;
  if (light === "white") {
    srcImage = "../images/sad.png";
  } else {
    srcImage = "../images/sadBlack.png";
  }

  return (
    <div className={styles.main}>
      <img className={styles.image} src={srcImage} />
      <strong className={styles.error404}>ERROR 404</strong>
      <p className={styles.error404}>Something went wrong</p>
    </div>
  );
}
