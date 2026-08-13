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
        <div className={styles.marqueeWrap}>
          <div className={styles.cc2}></div>
        </div>
      </div>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            {/* ── Existing headline block (unchanged) ── */}
            <div className={styles.cc1}>
              <div className={styles.left}>
                <h1 className={styles.heading}>
                  You'll never wonder <br /> where your ride is.
                </h1>

                <p className={styles.copy}>
                  At Nier Transportation, we&apos;re more than a car service;
                  we&apos;re your trusted partner in high end transportation.
                </p>

                <div className={styles.btnContainerii}>
                  <Button href='/book' text='Book your Ride' btnType='red' />
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
