import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Vehicles.module.css";
import Img1 from "../../../../public/images/fleet/townCar.png";
import Img2 from "../../../../public/images/fleet/subZ71.png";
import Img3 from "../../../../public/images/fleet/sprinter.png";
import Img4 from "../../../../public/images/fleet/miniCoach.png";
import Img5 from "../../../../public/images/fleet/bus.png";
import Button from "@/components/shared/Button/Button";

const vehicles = [
  {
    id: 1,
    label: "Executive Sedan",
    name: "A late-model Town Car for airport runs and corporate travel.",
    capacity: "Up to 4 passengers",
    href: "/fleet/luxury-sedan",
    linkText: "See the sedan",
    src: Img1,
  },
  {
    id: 2,
    label: "Executive SUV",
    name: "A Suburban with room for the family and everything they packed.",
    capacity: "Up to 7 passengers",
    href: "/fleet/executive-suv",
    linkText: "See the SUV",
    src: Img2,
  },
  {
    id: 3,
    label: "Mercedes Sprinter",
    name: "Small groups moving together, from wine tours to corporate teams.",
    capacity: "Up to 12 passengers",
    href: "/fleet/sprinter-van",
    linkText: "See the Sprinter",
    src: Img3,
  },
  {
    id: 4,
    label: "Mini Coach",
    name: "Guest shuttles and events where everyone arrives at the same time.",
    capacity: "Up to 32 passengers",
    href: "/fleet/mini-coach",
    linkText: "See the mini coach",
    src: Img4,
  },
  {
    id: 5,
    label: "Motorcoach",
    name: "A Prevost for full guest lists, charters, and crew transport.",
    capacity: "Up to 52 passengers",
    href: "/fleet/charter-coach",
    linkText: "See the motorcoach",
    src: Img5,
  },
];

export default function Vehicles() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>The five vehicles</h2>

        <div className={styles.grid}>
          {vehicles.map((v) => (
            <article className={styles.card} key={v.id}>
              <div className={styles.imgContainer}>
                <Image
                  src={v.src}
                  alt={v.label}
                  title={v.label}
                  fill
                  sizes='(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw'
                  className={styles.img}
                />
              </div>
              <div className={styles.body}>
                <span className={styles.label}>{v.label}</span>
                <h3 className={styles.name}>{v.name}</h3>
                <div className={styles.meta}>
                  <span className={styles.capacity}>{v.capacity}</span>
                  {/* <Link href={v.href} className={styles.link}>
                    {v.linkText} →
                  </Link> */}
                  <div className={styles.btnContainer}>
                    <Button
                      href='#'
                      text={`${v.linkText} →`}
                      btnType='whiteText'
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
