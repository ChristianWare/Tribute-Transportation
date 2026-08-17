import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./AboutUsHero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import CountUp from "@/components/shared/CountUp/CountUp";
import Image from "next/image";
import Img1 from "../../../../public/images/suvOutline.png";
import LogosRow from "@/components/shared/LogosRow/LogosRow";

const data = [
  { id: 1, number: "15", detail: "Years of Experience" },
  { id: 2, number: "35k", detail: "Hours on the road" },
  { id: 3, number: "20k", detail: "Happy clients" },
];

function parseStat(str: string): { value: number; suffix: string } {
  const m = str.trim().match(/^(\d+(?:\.\d+)?)([a-zA-Z%+]+)?$/);
  const raw = m ? Number(m[1]) : Number(str) || 0;
  const suffix = m?.[2] ?? "";
  return { value: raw, suffix };
}

export default function AboutUsHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='Our Story' color='colorWhite' />
            <div className={styles.imgContainerMobile}>
              <Image
                src={Img1}
                alt='Tribute Transportation SUV'
                title='Tribute Transportation SUV'
                fill
                className={styles.img}
              />
            </div>
            <h1 className={styles.heading}>Every mile is a tribute.</h1>
            <p className={styles.copy}>
              Owner-operated since 2011. Founded out of respect for people who
              serve others — and run, to this day, by the person who answers the
              phone.
            </p>
            <div className={styles.mapDataContainer}>
              {data.map((item) => {
                const { value, suffix } = parseStat(item.number);
                return (
                  <div key={item.id} className={styles.card}>
                    <h3 className={`${styles.number} stat`}>
                      <CountUp
                        from={0}
                        to={value}
                        duration={1.2}
                        separator=','
                        className={styles.count}
                      />
                      {suffix && (
                        <span className={`${styles.suffix} h1`}>{suffix}</span>
                      )}
                    </h3>
                    <p className={styles.detail}>{item.detail}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.iconContainer}>
              <LogosRow className={styles.iconTrack} />
              <LogosRow
                className={`${styles.iconTrack} ${styles.iconTrackAlt}`}
              />
            </div>
          </div>
          <div className={styles.right}>
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
        </div>
      </LayoutWrapper>
    </section>
  );
}
