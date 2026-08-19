"use client";

import { useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./FleetPageHero.module.css";

const VIDEO_SRC = "/videos/fleet.mp4";

export default function FleetPageHero() {
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
          <SectionIntro text='The Fleet' color='colorWhite' />
          <h1 className={styles.heading}>
            Comfortable, impeccably maintained vehicles for all your needs.
          </h1>
        </div>

        <div className={styles.grid}>
          {/* Left stat card */}
          <div className={styles.statCard}>
            <span className={styles.statBrand}>Our fleet:</span>
            <div className={styles.statBottom}>
              {/* <span className={styles.statNum}>5</span> */}
              <p className={styles.statLabel}>
                Five late-model vehicles, every one cleaned before every trip
                and stocked with bottled water, WiFi, and phone chargers. You
                pick the size. The standard never changes.
              </p>
            </div>
          </div>

          {/* Video card */}
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
            <div className={styles.videoOverlay} aria-hidden='true' />

            <span className={styles.tagTopRight}>
              Cleaned before every trip
            </span>

            <div className={styles.tagBottomLeft}>
              <span className={styles.tagLabel}>Capacity</span>
              <span className={styles.tagValue}>1 to 52 passengers</span>
            </div>

            <button
              type='button'
              className={styles.playBtn}
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? (
                <svg
                  viewBox='0 0 24 24'
                  width='14'
                  height='14'
                  aria-hidden='true'
                >
                  <rect x='6' y='5' width='4' height='14' fill='currentColor' />
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
                  width='14'
                  height='14'
                  aria-hidden='true'
                >
                  <path d='M7 5l12 7-12 7z' fill='currentColor' />
                </svg>
              )}
            </button>
          </div>
        </div>

        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>
            "We drove in his towncar and SUV, both were clean and comfortable
            and reliable."
          </p>
          <cite className={styles.quoteSource}>Lauren K. · Tucson, AZ</cite>
        </blockquote>
      </LayoutWrapper>
    </section>
  );
}
