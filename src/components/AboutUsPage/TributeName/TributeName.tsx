"use client";

import { useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./TributeName.module.css";

const VIDEO_SRC = "/videos/name.mp4";

export default function TributeName() {
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
    <section className={styles.parent}>
      <div className={styles.container}>
        {/* Full-bleed background video */}
        <div className={styles.videoWrapper} aria-hidden='true'>
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
        </div>

        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.panel}>
              <div className={styles.panelTop}>
                <SectionIntro text='The Founding' color='colorWhite' />
                <h2 className={styles.heading}>
                  The name isn't decoration. It's the reason the company exists.
                </h2>
              </div>
              <p className={styles.copy}>
                Before Tribute, Steve Fredricks spent years working as a
                Department of Defense contractor. What stayed with him from that
                work wasn't the job itself — it was the people. Men and women
                who dedicate their lives to serving others, often at real
                personal cost, and rarely with recognition. When he started a
                transportation company in 2011, he built the giving into the
                business itself: a portion of every completed trip goes to
                organizations serving military families, veterans, first
                responders, children, and animal welfare. You don't pay extra.
                You don't opt in. It's simply how the business works — and it's
                why the company is called Tribute.
              </p>
            </div>

            <button
              type='button'
              className={styles.playBtn}
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? (
                // pause icon
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
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
                // play icon
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
        </LayoutWrapper>
      </div>
    </section>
  );
}
