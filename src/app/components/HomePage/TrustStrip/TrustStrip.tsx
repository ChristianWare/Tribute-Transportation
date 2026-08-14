import Starii from "../../shared/icons/Starii/Starii";
import LayoutWrapper from "../../shared/LayoutWrapper";
import styles from "./TrustStrip.module.css";
import Clock from "../../shared/icons/Clock/Clock";
import Money from "../../shared/icons/Money/Money";
import OwnerIcon from "../../shared/icons/OwnerIcon/OwnerIcon";

const data = [
  {
    id: 1,
    title: "Owner-operated since 2011",
    icon: <OwnerIcon className={styles.icon} />,
    copy: "Our company has been owner-operated since 2011, ensuring a personal touch in every service we provide.",
  },
  {
    id: 2,
    title: "Available 24 hours a day, 7 days a week",
    icon: <Clock className={styles.icon} />,
    copy: "We are available around the clock to meet your transportation needs, giving you reliable service when you need it.",
  },
  {
    id: 4,
    title: "Flat rates, quoted before every trip",
    icon: <Money className={styles.icon} />,
    copy: "Our flat rates are provided upfront before every trip, so you know exactly what to expect with no hidden fees.",
  },
];

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
          <div className={styles.bottom}>
            <div className={styles.mapDataContainer}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <div className={styles.iconContainer}>{x.icon}</div>
                  <p className={styles.copy}>{x.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
