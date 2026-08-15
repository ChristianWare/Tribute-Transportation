import styles from "./TheMission.module.css";
import LayoutWrapper from "../../shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../../public/images/flag.jpg";
import Logo1 from "../../../../../public/images/logos/goldStar.png";
import Logo2 from "../../../../../public/images/logos/tunnel.png";
import Logo3 from "../../../../../public/images/logos/esparanza.png";
import Logo4 from "../../../../../public/images/logos/prima.png";
import Logo5 from "../../../../../public/images/logos/humane.webp";

const data = [
  {
    id: 1,
    src: Logo1,
    label: "Gold Star Families",
    desc: "Supporting the families of America's fallen military heroes.",
  },
  {
    id: 2,
    src: Logo2,
    label: "Tunnel to Towers Foundation",
    desc: "Mortgage-free homes for Gold Star families and catastrophically injured veterans.",
  },
  {
    id: 3,
    src: Logo3,
    label: "Esperanza en Escalante",
    desc: "Housing and employment support for Southern Arizona veterans.",
  },
  {
    id: 4,
    src: Logo4,
    label: "Primavera Foundation",
    desc: "Housing and self-sufficiency programs across Southern Arizona.",
  },
  {
    id: 5,
    src: Logo5,
    label: "Humane Society of Southern Arizona",
    desc: "Rescue, adoption, and veterinary care.",
  },
];

export default function TheMission() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Every trip has a destination. <br /> Every ride has a purpose.
            </h2>
            <p className={styles.copy}>
              Tribute Transportation was founded in 2011 out of respect for the
              people who spend their lives serving others — a respect that came
              from years of work as a Department of Defense contractor. That's
              where the name comes from. A portion of every completed trip goes
              to organizations serving military families, veterans, first
              responders, and animal welfare. You don't pay extra and you don't
              opt in. It's simply how the business works.
            </p>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Flag'
                title='Flag'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.mapDataContainer}>
              {data.map((item) => (
                <div key={item.id} className={styles.mapDataItem}>
                  <div className={styles.logoContainer}>
                    <Image
                      src={item.src}
                      alt={item.label}
                      title={item.label}
                      fill
                      className={styles.mapDataImg}
                    />
                  </div>
                  <div className={styles.mapDataText}>
                    <h3 className={`${styles.mapDataLabel} h6`}>
                      {item.label}
                    </h3>
                    <p className={styles.desc}>{item.desc}</p>
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
