"use client";

import { useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServiceAreas.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";

const VIDEO_SRC = "/videos/az.mp4";

const areas = [
  {
    id: 1,
    label: "Home Base",
    title: "Tucson & Metro",
    copy: "Oro Valley, Marana, Green Valley, Sahuarita, and the Catalina Foothills. The everyday runs we know cold.",
  },
  {
    id: 2,
    label: "The Corridor",
    title: "Phoenix & Sky Harbor",
    copy: "The two-hour drive north, run as a private flat-rate trip, door to door, on your schedule.",
  },
  {
    id: 3,
    label: "Southern Arizona",
    title: "Cochise & the Border",
    copy: "Sierra Vista, Benson, Tombstone, Bisbee, and the Nogales border communities.",
  },
  {
    id: 4,
    label: "Long Distance",
    title: "Statewide & into New Mexico",
    copy: "Sedona, Flagstaff, Yuma, the Gila Valley, and across the line to Silver City. One driver, the whole way.",
  },
];

export default function ServiceAreas() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            {/* We don't stop <br /> at the county line. */}
            All of the areas we serve, plus more
          </h2>
          <p className={styles.tagline}>
            Based in Tucson, serving Southern and Northeastern Arizona, with
            regular trips into New Mexico.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.list}>
              {areas.map((area) => (
                <div className={styles.row} key={area.id}>
                  <div className={styles.r1}>
                    <SectionIntro text={area.label} />
                    <div className={styles.rowTitle}>{area.title}</div>
                  </div>
                  <div className={styles.r2}>
                    <p className={styles.rowCopy}>{area.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.btnContainer}>
              <Button href='#' text='Reserve your Ride' btnType='navy' />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.videoCard}>
              <video
                ref={videoRef}
                className={styles.video}
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload='auto'
              />
              <button
                type='button'
                className={styles.playBtn}
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
              >
                {playing ? (
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    aria-hidden='true'
                  >
                    <rect
                      x='6'
                      y='5'
                      width='4'
                      height='14'
                      fill='currentColor'
                    />
                    <rect
                      x='14'
                      y='5'
                      width='4'
                      height='14'
                      fill='currentColor'
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    aria-hidden='true'
                  >
                    <path d='M7 5l12 7-12 7z' fill='currentColor' />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
