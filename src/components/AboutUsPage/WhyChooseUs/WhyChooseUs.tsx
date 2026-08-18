import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./WhyChooseUs.module.css";
import Img1 from "../../../../public/images/hero.png";
import Button from "@/components/shared/Button/Button";

const featured = {
  title: "You talk to the owner.",
  copy: "Fifteen years in, the person who answers the phone is the person who books your trip and, most days, drives it.",
  tag: "Owner-Operated",
  fact: "Since 2011",
};

const reasons = [
  {
    id: 1,
    title: "Communication that removes the worry.",
    copy: "A written confirmation, a reminder the day before, and contact on the day of.",
    tag: "Communication",
    fact: "Every trip",
  },
  {
    id: 2,
    title: "Range no one local matches.",
    copy: "One passenger in a sedan or fifty-two in a coach, one phone number for all of it.",
    tag: "The Fleet",
    fact: "1 to 52",
  },
  {
    id: 3,
    title: "Flat rates, no surprises.",
    copy: "Your price is set before the trip, across Tucson or across the state line.",
    tag: "Pricing",
    fact: "Region-wide",
  },
  {
    id: 4,
    title: "Every mile gives back.",
    copy: "A portion of every completed trip supports the organizations above.",
    tag: "The Mission",
    fact: "Every mile",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topText}>
            <SectionIntro text='Why Choose Us' />
            <h2 className={styles.heading}>
              Why choose Tribute Transportation for your next ride?
            </h2>
          </div>
          {/* <Link href='/book' className={styles.topLink}>
            Reserve your ride →
          </Link> */}
          <Button href='#' text='Reserve your Ride →' btnType='navy' />
        </div>

        {/* Featured row: image + lead reason */}
        <div className={styles.featured}>
          <div className={styles.imgCard}>
            <Image
              src={Img1}
              alt=''
              fill
              sizes='(max-width: 968px) 100vw, 50vw'
              className={styles.img}
            />
          </div>

          <article className={styles.featuredCard}>
            <div className={styles.featuredBody}>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredCopy}>{featured.copy}</p>
            </div>
            <div className={styles.meta}>
              {/* <span className={styles.metaTag}>{featured.tag}</span> */}
              <SectionIntro text={featured.tag} />
              <SectionIntro text={featured.fact} />
              {/* <span className={styles.metaFact}>{featured.fact}</span> */}
            </div>
          </article>
        </div>

        {/* Remaining reasons */}
        <div className={styles.row}>
          {reasons.map((r) => (
            <article className={styles.card} key={r.id}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardCopy}>{r.copy}</p>
              </div>
              <div className={styles.meta}>
                <SectionIntro text={r.tag} />
                <SectionIntro text={r.fact} />
              </div>
            </article>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
