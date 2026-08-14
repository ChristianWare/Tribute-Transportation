"use client";

import { useEffect, useRef } from "react";
import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./TheDifference.module.css";

const VIDEO_SRC = "/videos/diff.mp4";
const DELAY_SECONDS = 4; // background trails the foreground by this much

export default function TheDifference() {
  const bgRef = useRef<HTMLVideoElement | null>(null);
  const fgRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!bg || !fg) return;

    // Keep the background trailing the foreground by DELAY_SECONDS.
    // We re-assert it whenever the foreground loops or drifts too far.
    const applyOffset = () => {
      const dur = fg.duration;
      if (!dur || Number.isNaN(dur)) return;
      const target = (fg.currentTime - DELAY_SECONDS + dur) % dur;
      // Only correct if drift is noticeable (avoids constant micro-seeking)
      const drift = Math.abs(
        (((bg.currentTime - target + dur) % dur) + dur) % dur,
      );
      if (drift > 0.35 && drift < dur - 0.35) {
        bg.currentTime = target;
      }
    };

    const onFgLoaded = () => {
      // Seed the initial offset once durations are known
      const dur = fg.duration;
      if (dur && !Number.isNaN(dur)) {
        bg.currentTime = (fg.currentTime - DELAY_SECONDS + dur) % dur;
      }
    };

    fg.addEventListener("loadedmetadata", onFgLoaded);
    fg.addEventListener("seeked", applyOffset);
    // Re-check the offset a few times a second — cheap, and keeps them locked
    const interval = window.setInterval(applyOffset, 500);

    return () => {
      fg.removeEventListener("loadedmetadata", onFgLoaded);
      fg.removeEventListener("seeked", applyOffset);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.container}>
      {/* Full-bleed background video, blurred + tinted */}
      <div className={styles.bgVideoWrapper} aria-hidden='true'>
        <video
          ref={bgRef}
          className={styles.bgVideo}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
        />
      </div>

      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='The Difference' color='colorWhite' />
            <h2 className={styles.heading}>
              We keep you informed every step: confirmation, reminders, and real-time updates, so you always know what to expect and can feel confident throughout the entire process.
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.videoCard}>
              <video
                ref={fgRef}
                className={styles.fgVideo}
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload='auto'
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
