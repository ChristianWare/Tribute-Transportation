import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./EveryTrip.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/suvOutline.png";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

const steps = [
  {
    id: 1,
    title: "Book it",
    copy: "Call or reserve online. You get a flat-rate quote up front, before anything is confirmed. No meters, no guessing, no surprise at the end of the ride.",
  },
  {
    id: 2,
    title: "Hear from us",
    copy: "A written confirmation right away, a reminder the day before, and contact again on the day of your trip. If anything changes on our end, you hear it from us first.",
  },
  {
    id: 3,
    title: "Ride",
    copy: "Your chauffeur arrives early, tracks your flight if there is one, and gets you where you are going without drama. That is the whole promise, every single trip.",
  },
];

export default function EveryTrip() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <SectionIntro text='How it works' color='colorWhite' />
              <h2 className={styles.heading}>
                The process for booking rides with Tribute Transportation
              </h2>
            </div>
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
          <div className={styles.rows}>
            {steps.map((step) => (
              <div className={styles.row} key={step.id}>
                <span className={styles.num}>
                  {String(step.id).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.copy}>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
