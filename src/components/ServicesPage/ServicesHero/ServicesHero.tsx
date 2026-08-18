import Link from "next/link";
// import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./ServicesHero.module.css";
import Arrow from "@/components/shared/icons/Arrow/Arrow";
import Button from "@/components/shared/Button/Button";

const services = [
  {
    id: 1,
    title: "Airport Transportation",
    desc: "Flight tracking, meet and greet, and sixty minutes of wait time at seven airports.",
    href: "/airport-car-service",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Tucson to Phoenix Sky Harbor",
    desc: "A private, flat-rate ride to Sky Harbor, door to door on your schedule.",
    href: "/tucson-to-phoenix-sky-harbor-car-service",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='6' cy='19' r='2' />
        <circle cx='18' cy='5' r='2' />
        <path d='M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16' />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Corporate & Executive Travel",
    desc: "Point to point, roadshows, and standing accounts with a card on file.",
    href: "/corporate-car-service",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x='3' y='7' width='18' height='13' rx='2' />
        <path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18' />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Hourly & As-Directed",
    desc: "The vehicle and chauffeur by the hour, changing plans as the day unfolds.",
    href: "/hourly-chauffeur-service",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='9' />
        <path d='M12 7v5l3 2' />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Weddings & Special Events",
    desc: "Guest shuttles and the couple's car, from a sedan to a 52-passenger coach.",
    href: "/wedding-transportation",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='9' cy='13' r='5' />
        <circle cx='15' cy='13' r='5' />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Wine Tours & Day Trips",
    desc: "Sonoita, Elgin, Tombstone, and Sedona. You pick the stops, we drive.",
    href: "/wine-tours-sonoita-elgin",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8 3h8l-1 7a3.5 3.5 0 0 1-3 3 3.5 3.5 0 0 1-3-3z' />
        <path d='M12 13v6M8 21h8' />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Medical Transportation",
    desc: "Dependable rides to appointments, including long-distance medical travel.",
    href: "/medical-transportation",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 4v16M4 12h16' />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Government, DOD & Industrial",
    desc: "Contract transportation for agencies, DOD travel, and mine-site crews.",
    href: "/dod-government-transportation",
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z' />
      </svg>
    ),
  },
];

export default function ServicesHero() {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionIntro text='All Services' />
          <h2 className={styles.heading}>
            We provide transportation for <br /> any kind of trip you need.
          </h2>
          <p className={styles.sub}>
            Private chauffeured transportation across Southern Arizona and into
            New Mexico. Flat rates quoted before you ride, available around the
            clock, from a sedan for one to a coach for fifty-two.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            // <Link href={s.href} className={styles.row} key={s.id}>
            <Link href='#' className={styles.row} key={s.id}>
              <span className={styles.iconChip}>{s.icon}</span>
              <span className={styles.rowText}>
                <p className={styles.rowTitle}>{s.title}</p>
                <p className={styles.rowDesc}>{s.desc}</p>
              </span>
              <span className={styles.rowArrow} aria-hidden='true'>
                <Arrow className={styles.icon} />
              </span>
            </Link>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button href='#' text='More services details' btnType='navy' />
        </div>
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
}
