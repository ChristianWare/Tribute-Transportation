import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./Bridge.module.css";
import Img1 from "../../../../public/images/tucsonAirport.jpg";

export default function Bridge() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro text='On the Road' />
          <h2 className={styles.heading}>
            One company. <br /> Every kind of trip.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Airport — the big image card */}
          <Link
            href='/services/airport-transportation'
            className={`${styles.card} ${styles.airport}`}
          >
            <Image
              src={Img1}
              alt=''
              fill
              sizes='(max-width: 968px) 100vw, 45vw'
              className={styles.airportImg}
            />
            <div className={styles.airportBody}>
              <h3 className={styles.cardTitle}>
                Most days start with an airport run
              </h3>
              <div className={styles.statRow}>
                <div className={styles.stat}>
                  <span className={`${styles.statNum} h1`}>60 min</span>
                  <span className={styles.statLabel}>
                    complimentary wait after you land
                  </span>
                </div>
                <div className={styles.stat}>
                  <span className={`${styles.statNum} h1`}>7</span>
                  <span className={styles.statLabel}>
                    regional airports served
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Corporate — small light card */}
          <Link
            href='/services/corporate-car-service'
            className={`${styles.card} ${styles.corporate}`}
          >
            <p className={styles.corporateText}>
              Corporate travel, on the same schedule every time.
            </p>
            <div className={styles.stat}>
              <span className={`${styles.statNumDark} h1`}>24/7</span>
              <span className={styles.statLabelDark}>around-the-clock</span>
            </div>
          </Link>

          {/* Occasions — striped card with floating highlight */}
          <Link
            href='/services/wedding-transportation'
            className={`${styles.card} ${styles.occasions}`}
          >
            <div className={styles.stripes} aria-hidden='true' />
            <div className={styles.floatCard}>
              <div className={styles.floatText}>
                <span className={styles.floatTitle}>
                  Weddings, wine tours & events
                </span>
                <span className={styles.floatLabel}>
                  Guest shuttles up to 52
                </span>
              </div>
            </div>
          </Link>

          {/* Fleet — wide dark card */}
          <Link href='/fleet' className={`${styles.card} ${styles.fleet}`}>
            <div className={styles.fleetTop}>
              <h3 className={styles.fleetTitle}>
                One passenger or fifty-two. The fleet covers it.
              </h3>
              <span className={styles.fleetBrand}>Tribute</span>
            </div>
            <div className={styles.fleetBottom}>
              <div className={styles.tags}>
                <span className={styles.tag}>Sedans</span>
                <span className={styles.tag}>SUVs</span>
                <span className={styles.tag}>Sprinters</span>
                <span className={styles.tag}>Coaches</span>
              </div>
              <span className={styles.fleetLink}>Explore the fleet →</span>
            </div>
          </Link>
        </div>
      </LayoutWrapper>
    </section>
  );
}
