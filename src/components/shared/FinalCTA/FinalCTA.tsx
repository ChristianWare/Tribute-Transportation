import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/steve.png";
import Button from "../Button/Button";
import SectionIntro from "../SectionIntro/SectionIntro";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntro text='Ready to get started?' />
          <h2 className={styles.heading}>
            Tell us where <br /> you're going.
          </h2>
          <p className={styles.copy}>
            Reserve online in about a minute, or call and talk to the person who
            will actually handle your trip. If we're not the right fit for what
            you need, we'll tell you that too — and point you toward someone who
            is.
          </p>
          <div className={styles.bottomInfo}>
            <div className={styles.left}>
              <div className={styles.l1}>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img1}
                    alt='Steve'
                    title='Steve'
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.flex}>
                  <p className={styles.copyii}>Need assistance?</p>
                  <p className={styles.copyiii}>
                    We’re here to provide support
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.btnContainer}>
                <Button href='#' text='Reserve your ride →' btnType='navy' />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
