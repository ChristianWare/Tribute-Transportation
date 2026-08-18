import Link from "next/link";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicesPreview.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../public/images/services/skyHarbor.jpeg";
import Img2 from "../../../../public/images/services/airport.jpg";
import Img3 from "../../../../public/images/services/corpTravel.jpg";
import Img4 from "../../../../public/images/services/hourly.jpg";
import Img5 from "../../../../public/images/services/wedding.jpg";
import Img6 from "../../../../public/images/services/wine.jpg";
import Img7 from "../../../../public/images/services/medical.jpg";
import Img8 from "../../../../public/images/services/government.jpg";

const services = [
  {
    id: 1,
    name: "Airport Transportation",
    meta: "Seven airports · TUS to Sky Harbor",
    href: "/airport-car-service",
    src: Img2,
  },
  {
    id: 2,
    name: "Tucson to Phoenix Sky Harbor",
    meta: "Private · Flat rate · Any hour",
    href: "/tucson-to-phoenix-sky-harbor-car-service",
    src: Img1,
  },
  {
    id: 3,
    name: "Corporate & Executive Travel",
    meta: "Accounts · Hourly · 24/7",
    href: "/corporate-car-service",
    src: Img3,
  },
  {
    id: 4,
    name: "Hourly & As-Directed",
    meta: "By the hour · Your itinerary",
    href: "/hourly-chauffeur-service",
    src: Img4,
  },
  {
    id: 5,
    name: "Weddings & Special Events",
    meta: "Guest shuttles · Up to 52",
    href: "/wedding-transportation",
    src: Img5,
  },
  {
    id: 6,
    name: "Wine Tours & Day Trips",
    meta: "Sonoita · Tombstone · Sedona",
    href: "/wine-tours-sonoita-elgin",
    src: Img6,
  },
  {
    id: 7,
    name: "Medical Transportation",
    meta: "Appointments · Long-distance",
    href: "/medical-transportation",
    src: Img7,
  },
  {
    id: 8,
    name: "Government, DOD & Industrial",
    meta: "Contract · Crews · Southern AZ",
    href: "/dod-government-transportation",
    src: Img8,
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro text='Our Services' />
            <h2 className={styles.heading}>
              Every service we offer at Tribute Transportation.
            </h2>
          </div>

          <div className={styles.bottom}>
            {services.map((s) => (
              <Link href={s.href} className={styles.card} key={s.id}>
                <Image
                  src={s.src}
                  alt=''
                  fill
                  sizes='(max-width: 968px) 100vw, 33vw'
                  className={styles.cardImg}
                />
                <div className={styles.cardOverlay} aria-hidden='true' />
                <div className={styles.cardBody}>
                  <span className={styles.cardMeta}>{s.meta}</span>
                  <h3 className={styles.cardName}>{s.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
