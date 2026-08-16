import Starii from "../../shared/icons/Starii/Starii";
import LayoutWrapper from "../../shared/LayoutWrapper";
import styles from "./TrustStrip.module.css";
import Clock from "../../shared/icons/Clock/Clock";
import Money from "../../shared/icons/Money/Money";
import OwnerIcon from "../../shared/icons/OwnerIcon/OwnerIcon";
import HandshakeIcon from "../../shared/icons/HandshakeIcon/HandshakeIcon";
import Image from "next/image";
import Img1 from "../../../../public/images/laptop.jpg";
import Img2 from "../../../../public/images/person1.jpg";
import Img3 from "../../../../public/images/watch.jpg";
import Img4 from "../../../../public/images/person2.jpg";

const data = [
  {
    id: 1,
    title: "Owner-operated since 2011",
    icon: <OwnerIcon className={styles.icon} />,
    src: Img2,
    copy: "Our company has been owner-operated since 2011, ensuring a personal touch in every service we provide.",
  },
  {
    id: 2,
    title: "Available 24 hours a day, 7 days a week",
    icon: <Clock className={styles.icon} />,
    src: Img3,
    copy: "We are available around the clock to meet your transportation needs, giving you reliable service when you need it.",
  },
  {
    id: 3,
    title: "Meet and greet on every airport arrival",
    icon: <HandshakeIcon className={styles.icon} />,
    src: Img4,
    copy: "We include a meet and greet on every airport arrival to ensure a smooth and welcoming experience for our clients.",
  },
  {
    id: 4,
    title: "Flat rates, quoted before every trip",
    icon: <Money className={styles.icon} />,
    src: Img1,
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
              <p className={styles.topCopy}>
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
                  <div className={styles.imageWrapper}>
                    <Image
                      src={x.src}
                      alt=''
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1468px) 50vw, 25vw'
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <div className={styles.iconContainer}>{x.icon}</div>
                    <p className={styles.copy}>{x.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
