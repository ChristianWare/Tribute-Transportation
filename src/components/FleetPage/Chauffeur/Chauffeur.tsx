import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Chauffeur.module.css";
import Img1 from "../../../../public/images/driver.jpg";

const beats = [
  { id: 1, label: "Before you ride", detail: "Route planned, flight tracked" },
  { id: 2, label: "At the curb", detail: "Luggage handled, door opened" },
];

const facts = [
  { id: 1, stat: "100%", label: "Of trips include a professional chauffeur" },
  { id: 2, stat: "0", label: "Vehicles rented for self-drive" },
];

export default function Chauffeur() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Tribute Transportation chauffeur'
                fill
                sizes='(max-width: 968px) 100vw, 50vw'
                className={styles.img}
              />
              <div className={styles.widget}>
                <span className={styles.widgetTitle}>Every trip includes</span>
                <div className={styles.widgetRows}>
                  {beats.map((b) => (
                    <div className={styles.widgetRow} key={b.id}>
                      <span className={styles.widgetLabel}>{b.label}</span>
                      <span className={styles.widgetDetail}>{b.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={styles.heading}>
              Every vehicle comes with a professional chauffeur.
            </h2>
            <p className={styles.copy}>
              We do not rent vehicles for you to drive. Every trip includes a
              chauffeur who knows the route, handles the luggage, and waits when
              plans change. If you were searching for a self-drive rental, we
              are not the right fit, and we are happy to say so. If you were
              searching for a group that rides together while someone else
              handles the road, you found it.
            </p>

            <div className={styles.facts}>
              {facts.map((f) => (
                <div className={styles.fact} key={f.id}>
                  <span className={styles.factStat}>{f.stat}</span>
                  <p className={styles.factLabel}>{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}