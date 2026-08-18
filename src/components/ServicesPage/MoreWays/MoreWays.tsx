import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./MoreWays.module.css";

export default function MoreWays() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='More ways we help' />
            <p className={styles.copy}>
              If the trip involves a vehicle and a schedule, ask. This list is
              not complete, and neither is any list.
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.list}>
              <h2 className={styles.item}>
                Proms and graduations · Quinceañeras · Concerts and sporting
                events · Golf and resort transfers · Cruise and train station
                transfers · Hotel and Airbnb guest rides · Party Sprinter
                rentals · Vehicle relocation and drive-away · Courier and
                delivery · Pet-friendly rides · Child and booster seats on
                request
              </h2>
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
