import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./Areas.module.css";
import Image from "next/image";
import Link from "next/link";
import AreaImg from "../../../../../public/images/airportMap.png";
import Starii from "../../shared/icons/Starii/Starii";

const routes = [
  { id: 1, from: "Tucson", to: "Phoenix Sky Harbor" },
  { id: 2, from: "Green Valley", to: "Tombstone" },
  { id: 3, from: "Sierra Vista", to: "Silver City, NM" },
];

const cities = [
  "Tucson",
  "Green Valley",
  "Tubac",
  "Sahuarita",
  "Nogales",
  "Patagonia",
  "Sierra Vista",
  "Hereford",
  "Benson",
  "Tombstone",
  "Bisbee",
  "Douglas",
  "Willcox",
  "Safford",
  "Duncan",
  "Morenci",
  "Globe",
  "Phoenix",
  "Yuma",
  "Silver City, NM",
];

export default function Areas() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro text='Areas We Serve' />
            <h2 className={styles.heading}>
              We don't stop at the <br /> county line.
            </h2>
            <div className={styles.copyStarContainer}>
              <Starii />
              <p className={styles.copy}>
                Based in Tucson, serving Southern and Northeastern Arizona, with
                regular long-distance trips into New Mexico. If your destination
                isn't listed, call — chances are we've been there.
              </p>
              <Starii />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.b2}>
                <span className={`${styles.span} h6`}>Airports we cover</span>
              <div className={styles.imgContainer}>
                <Image
                  src={AreaImg}
                  alt='Map of Arizona airports served'
                  title='Areas we serve'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.b1}>
              <span className={styles.cardLabel}>Signature routes</span>
              <ul className={styles.routeList}>
                {routes.map((r) => (
                  <li className={styles.route} key={r.id}>
                    <span className={styles.routeFrom}>{r.from}</span>
                    <span className={styles.routeArrow}>→</span>
                    <span className={styles.routeTo}>{r.to}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cities}>
                <span className={styles.cardLabel}>Cities and communities</span>
                <p className={styles.cityList}>
                  {cities.map((city, i) => (
                    <span key={city} className={styles.city}>
                      {city}
                      {i < cities.length - 1 && (
                        <span className={styles.cityDot}> · </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              <p className={styles.cardFoot}>
                One vehicle, one driver, one flat rate — the whole way.
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
