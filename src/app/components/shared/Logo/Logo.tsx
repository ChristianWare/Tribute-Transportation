import styles from "./Logo.module.css";
import Starii from "../icons/Starii/Starii";

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Starii className={styles.star} />
        <span className={styles.textTop}>Tribute</span>
        <Starii className={styles.star} />
      </div>
      <span className={styles.textBottom}>Transportation</span>
    </div>
  );
}
