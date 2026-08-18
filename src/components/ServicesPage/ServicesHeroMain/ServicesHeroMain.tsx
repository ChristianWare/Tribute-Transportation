import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./ServicesHeroMain.module.css";
import ServicesVideo from "../ServicesVideo/ServicesVideo";

export default function ServicesHeroMain() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro text='All Services' />
            <h2 className={styles.heading}>
              We provide transportation for <br /> any kind of trip you need.
            </h2>
            <p className={styles.copy}>
              Private chauffeured transportation across Southern Arizona and
              into New Mexico. Flat rates quoted before you ride, available
              around the clock, from a sedan for one to a coach for fifty-two.
            </p>
          </div>
          <div className={styles.bottom}>
            <ServicesVideo />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
