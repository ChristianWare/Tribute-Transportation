import Starii from "../../shared/icons/Starii/Starii";
import LayoutWrapper from "../../shared/LayoutWrapper";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Tribute Transportation provides dependable, first-class
              transportation with a commitment to safety, punctuality, and
              personalized customer service.
            </h2>
            <div className={styles.copyContainer}>
              <Starii className={styles.star} />
              <p className={styles.copy}>
                Our goal is to provide a seamless, worry-free experience with
                clear communication and dependable service.
              </p>
              <Starii className={styles.star} />
            </div>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
