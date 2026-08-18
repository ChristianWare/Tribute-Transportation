"use client";

import { useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicesVideo.module.css";

const VIDEO_SRC = "/videos/tucson.mp4";

export default function ServicesVideo() {
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

          {/* darkening layer for legibility */}
          <div className={styles.overlay} aria-hidden='true' />

          {/* top row */}
          <div className={styles.topRow}>
            <h2 className={styles.title}>The road, the way we drive it.</h2>
            <span className={styles.runtime}>Tucson, Arizona</span>
          </div>

          {/* bottom-left caption */}
          <div className={styles.caption}>
            <span className={styles.captionLabel}>What you're looking at</span>
            <p className={styles.captionText}>
              The same roads we run every day. Tucson to Sky Harbor, the wine
              country south of town, and the long hauls that don't stop at the
              county line.
            </p>
          </div>

          {/* play / pause */}
          <button
            type='button'
            className={styles.playBtn}
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? (
              <svg
                viewBox='0 0 24 24'
                width='25'
                height='25'
                aria-hidden='true'
              >
                <rect x='6' y='5' width='4' height='14' fill='currentColor' />
                <rect x='14' y='5' width='4' height='14' fill='currentColor' />
              </svg>
            ) : (
              <svg
                viewBox='0 0 24 24'
                width='25'
                height='25'
                aria-hidden='true'
              >
                <path d='M7 5l12 7-12 7z' fill='currentColor' />
              </svg>
            )}
          </button>
        </div>
      </LayoutWrapper>
    </section>
  );
}
