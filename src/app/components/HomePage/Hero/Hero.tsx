import LayoutWrapper from "../../shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../../shared/Button/Button";
import Img1 from "../../../../../public/images/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.media}>
        <div className={styles.mobileMedia}>
          <Image
            src={Img1}
            alt='Black car service in Phoenix'
            fill
            priority
            sizes='100vw'
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.video}>
          <Image
            src={Img1}
            alt='Black car service in Phoenix'
            fill
            priority
            sizes='100vw'
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imgOverlay} />
        {/* <div className={styles.marqueeWrap}>
          <div className={styles.cc2}></div>
        </div> */}
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            <div className={styles.cc1}>
              <div className={styles.left}>
                <h1 className={styles.heading}>
                  You'll never wonder <br /> where your ride is.
                </h1>

                <p className={styles.copy}>
                  Private car service for airport, corporate, and long-distance
                  travel across Southern Arizona. Your reservation is confirmed
                  by email, reconfirmed the day before, and checked again the
                  morning of your trip.
                </p>

                <div className={styles.btnContainerParent}>
                  <Button href='/book' text='Reserve your Ride' btnType='white' />
                  <div className={styles.btnContainer}>
                    <Button
                      href='/book'
                      text='Explore Services'
                      btnType='whiteText'
                    />
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.widgetRow}>Yo!</div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
