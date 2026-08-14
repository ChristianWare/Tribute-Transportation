import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./CoreServices.module.css";
import Image from "next/image";
import Link from "next/link";
import Img1 from "../../../../../public/images/hero.png";
import Button from "../../shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Airport Transportation",
    body: "We track your flight, meet you inside at arrivals with a sign, and wait up to sixty minutes at no extra charge.",
    linkText: "Airport service",
    href: "/airport-car-service",
    src: Img1,
  },
  {
    id: 2,
    title: "Executive & Corporate Travel",
    body: "Point-to-point, hourly, roadshows, and standing corporate accounts, on the same schedule every time.",
    linkText: "Corporate travel",
    href: "/corporate-car-service",
    src: Img1,
  },
  {
    id: 3,
    title: "Long-Distance & Private Charter",
    body: "One vehicle, one driver, and one flat rate for the whole trip, with no transfers and no meter.",
    linkText: "Long-distance service",
    href: "/long-distance-car-service",
    src: Img1,
  },
];

export default function CoreServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <SectionIntro text='What We Do' />
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
                    {/* Placeholder — swap for a per-card icon by adding
                        `icon: <YourIcon />` to each data object, then render {x.icon} */}
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={1.5}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      width='24'
                      height='24'
                    >
                      <rect x='3' y='3' width='18' height='18' rx='4' />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>{x.title}</h3>
                  <p className={styles.cardBody}>{x.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
