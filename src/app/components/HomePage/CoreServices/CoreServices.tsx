import LayoutWrapper from "../../shared/LayoutWrapper";
import styles from "./CoreServices.module.css";

export default function CoreServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
