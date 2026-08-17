import styles from "./EveryCallerMatters.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/scene1.jpg";
import Button from "@/components/shared/Button/Button";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const points = [
  {
    id: 1,
    text: "If that means providing the ride, it's done with care and reliability.",
  },
  {
    id: 2,
    text: "If it means pointing someone toward a solution that fits their needs or budget better, that happens too, gladly.",
  },
  {
    id: 3,
    text: "Customer service isn't the fare earned. It's the trust built, the problems solved, and the peace of mind provided.",
  },
];

export default function EveryCallerMatters() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.l1}>
              <div className={styles.l1Top}>
                <h3 className={`${styles.title} h3`}>
                  Every caller gets straight answers, whether they book or not.
                </h3>
                <Button href='#' text='Reserve your Ride' btnType='navy' />
              </div>
              <div className={styles.l1Bottom}>
                <h3 className={`${styles.span} h1`}>2011</h3>
                <p className={styles.copy}>Answering his own phone since</p>
              </div>
            </div>
            <div className={styles.l2}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='' title='' fill className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Success isn't <br /> measured by the fare.
            </h2>
            <p className={styles.copy}>
              At Tribute, whether someone becomes a passenger is never the
              measure of the call. What matters is that every person who reaches
              out walks away with the answers and confidence they needed.
            </p>
            <ul className={styles.mapDataContiner}>
              {points.map((point) => (
                <li className={styles.point} key={point.id}>
                  <span className={styles.marker} aria-hidden='true' />
                  <p className={styles.pointText}>{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
