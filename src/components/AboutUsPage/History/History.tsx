import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./History.module.css";

const milestones = [
  {
    id: 1,
    year: "Today",
    title: "Same person, same standard",
    copy: "Fifteen years in, Steve still takes the reservations, confirms every detail, and does most of the driving himself.",
  },
  {
    id: 2,
    year: "The Route",
    title: "Across Southern Arizona and into New Mexico",
    copy: "Airport runs at 4 a.m., wedding shuttles, corporate accounts, and long hauls that don't stop at the county line.",
  },
  {
    id: 3,
    year: "The Passengers",
    title: "Trusted with the trips that matter",
    copy: "Over the years, riders have included a former Arizona governor, a retired Army major general, and the production team of a national television series.",
  },
  {
    id: 4,
    year: "The Reviews",
    title: "A name you might recognize",
    copy: "Some reviews for Steve's work appear under 24 Hour Express, the company through which Tribute fulfilled service. Different name on the page, same person behind the wheel.",
  },
  {
    id: 5,
    year: "2011",
    title: "Where it started",
    copy: "Tribute Transportation was founded out of respect for the people who serve others, built to give back with every mile.",
  },
];

export default function History() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftInner}>
              <SectionIntro text='Since 2011' />
              <h2 className={styles.heading}>
                Fifteen years. <br /> Same person. <br /> Same standard.
              </h2>
              <p className={styles.copy}>
                A look at the miles, the milestones, and the people who've
                trusted Tribute along the way.
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <ol className={styles.timeline}>
              {milestones.map((m) => (
                <li className={styles.item} key={m.id}>
                  <span className={styles.marker} aria-hidden='true' />
                  <div className={styles.itemBody}>
                    <span className={styles.year}>{m.year}</span>
                    <h3 className={styles.itemTitle}>{m.title}</h3>
                    <p className={styles.itemCopy}>{m.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
