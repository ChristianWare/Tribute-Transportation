import styles from "./Logo.module.css";
import Starii from "../icons/Starii/Starii";

interface Props {
  orientation?: string;
  size?: string;
}

export default function Logo({ orientation = "", size = "" }: Props) {
  return (
    <div
      className={`${styles.container} ${styles[orientation]} ${styles[size]}`}
    >
      <div className={styles.top}>
        <Starii className={styles.star} />
        <span className={styles.textTop}>Tribute</span>
        <Starii className={styles.star} />
      </div>
      <span className={styles.textBottom}>Transportation</span>
    </div>
  );
}
