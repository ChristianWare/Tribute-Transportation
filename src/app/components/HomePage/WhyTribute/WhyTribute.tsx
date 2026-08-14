import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./WhyTribute.module.css";
import Image from "next/image";
import Img1 from "../../../../../public/images/suvOutline.png";

const data = [
  {
    id: 1,
    stat: "15+",
    label: "Years owner-operated",
    body: "We have been owner-operated for 15 years, ensuring a personal and reliable service.",
    href: "/about",
  },
  {
    id: 2,
    stat: "3x",
    label: "Times you'll hear from us",
    body: "A written confirmation at booking, a reminder the day before, and contact the day of.",
    href: "/#communication",
  },
  {
    id: 3,
    stat: "$0",
    label: "Surge pricing or surprise charges",
    body: "Your flat rate is quoted and set before the trip, across Tucson or across the state line.",
    href: "/#faq",
  },
  {
    id: 4,
    stat: "100%",
    label: "Of trips give back",
    body: "A portion of every trip supports veterans, first responders, and animal welfare.",
    href: "/#mission",
  },
];

export default function WhyTribute() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='Why Choose Us' color='colorWhite' />
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Tribute Transportation SUV'
                title='Tribute Transportation SUV'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={styles.heading}>
                Every ride is dependable and professional, and every mile gives
                back to the community.
              </h2>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.mapDataContainer}>
                {data.map((x) => (
                  <div className={styles.card} key={x.id}>
                    <span className={`${styles.stat} h2`}>{x.stat}</span>
                    <div className={styles.cardText}>
                      <h3 className={`${styles.label} h6`}>{x.label}</h3>
                      <p className={styles.body}>{x.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
