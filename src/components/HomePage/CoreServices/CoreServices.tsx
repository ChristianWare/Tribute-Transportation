import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./CoreServices.module.css";
import Image from "next/image";
import Link from "next/link";
import Img1 from "../../../../public/images/person3.jpg";
import Img2 from "../../../../public/images/person5.jpg";
import Img3 from "../../../../public/images/road.jpg";
import Button from "../../shared/Button/Button";
import Plane from "../../shared/icons/Plane/Plane";
import Business from "../../shared/icons/Business/Business";
import Driver from "../../shared/icons/Driver/Driver";
import ServicesHero from "@/components/ServicesPage/ServicesHero/ServicesHero";

const data = [
  {
    id: 1,
    title: "Airport Transportation",
    body: "We track your flight, meet you inside at arrivals with a sign, and wait up to sixty minutes at no extra charge.",
    linkText: "Airport service",
    href: "/airport-car-service",
    src: Img1,
    icon: <Plane className={styles.icon} />,
  },
  {
    id: 2,
    title: "Executive & Corporate Travel",
    body: "Point-to-point, hourly, roadshows, and standing corporate accounts, on the same schedule every time.",
    linkText: "Corporate travel",
    href: "/corporate-car-service",
    src: Img2,
    icon: <Business className={styles.icon} />,
  },
  {
    id: 3,
    title: "Long-Distance & Private Charter",
    body: "One vehicle, one driver, and one flat rate for the whole trip, with no transfers and no meter.",
    linkText: "Long-distance service",
    href: "/long-distance-car-service",
    src: Img3,
    icon: <Driver className={styles.icon} />,
  },
];

export default function CoreServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <SectionIntro text='Core Services' />
              <h2 className={styles.heading}>
                Three ways most people come to us.
              </h2>
              <p className={styles.copy}>
                Airport transportation is the foundation of the business.
                Executive travel and long-distance trips are where it grew from
                there.
              </p>
            </div>
            <div className={styles.leftBottom}>
              <div className={styles.btnContainer}>
                <Button href='#' text='Explore All Services →' btnType='navy' />
                <div className={styles.btnContainerNavyTextLarge}>
                  <Button
                    href='#'
                    text='Contact Us Today'
                    btnType='navyTextLarge'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x) => (
              <Link
                key={x.id}
                href={x.href}
                aria-label={x.linkText}
                className={styles.card}
              >
                <Image
                  src={x.src}
                  alt=''
                  fill
                  sizes='(max-width: 968px) 100vw, 50vw'
                  className={styles.img}
                />
                <div className={styles.panel}>
                  <div className={styles.iconChip}>
                   {x.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{x.title}</h3>
                  <p className={styles.cardBody}>{x.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <ServicesHero />
      </LayoutWrapper>
    </section>
  );
}
