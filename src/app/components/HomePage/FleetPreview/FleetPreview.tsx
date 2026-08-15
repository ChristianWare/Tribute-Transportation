"use client";

import { useState } from "react";
import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./FleetPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import Img1 from "../../../../../public/images/fleet/townCar.png";
import Img2 from "../../../../../public/images/fleet/subZ71.png";
import Img3 from "../../../../../public/images/fleet/sprinter.png";
import Img4 from "../../../../../public/images/fleet/miniCoach.png";
import Img5 from "../../../../../public/images/fleet/bus.png";
import Button from "../../shared/Button/Button";

const fleet = [
  {
    id: 2,
    tab: "SUV",
    name: "Luxury SUV",
    capacity: "Up to 7 passengers",
    body: "Seating up to seven, the luxury SUV is ideal for families, golf trips, and any travel that comes with extra luggage.",
    src: Img2,
  },
  {
    id: 1,
    tab: "Sedan",
    name: "Executive Sedan",
    capacity: "Up to 4 passengers",
    body: "Our executive sedan is built for airport runs, corporate travel, and point-to-point trips, with room for up to four passengers.",
    src: Img1,
  },
  {
    id: 3,
    tab: "Sprinter",
    name: "Mercedes Sprinter",
    capacity: "Up to 12 passengers",
    body: "The Mercedes Sprinter carries small groups of up to twelve, well suited to wine tours and corporate teams traveling together.",
    src: Img3,
  },
  {
    id: 4,
    tab: "Mini Coach",
    name: "Mini Coach",
    capacity: "Up to 32 passengers",
    body: "With space for up to thirty-two, the mini coach handles weddings, events, and guest shuttles with ease.",
    src: Img4,
  },
  {
    id: 5,
    tab: "Motorcoach",
    name: "Motorcoach",
    capacity: "Up to 52 passengers",
    body: "Our largest vehicle seats up to fifty-two, made for large groups and long-distance charters.",
    src: Img5,
  },
];

export default function FleetPreview() {
  const [activeId, setActiveId] = useState(fleet[0].id);
  const active = fleet.find((v) => v.id === activeId) ?? fleet[0];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <SectionIntro text='The Fleet' />
              <br />
              <h2 className={styles.heading}>
                One passenger or fifty-two. <br /> Same standard of excellence.
              </h2>
            </div>

            <div
              className={styles.tabs}
              role='tablist'
              aria-label='Fleet vehicles'
            >
              {fleet.map((v) => (
                <button
                  key={v.id}
                  role='tab'
                  aria-selected={v.id === activeId}
                  className={`${styles.tab} ${
                    v.id === activeId ? styles.tabActive : ""
                  }`}
                  onClick={() => setActiveId(v.id)}
                >
                  {v.tab}
                </button>
              ))}
            </div>

            <p className={styles.copy}>{active.body}</p>

            {/* <Link href='/fleet' className={styles.link}>
              See the full fleet →
            </Link> */}
            <Button href='#' text='See full fleet →' btnType='navy' />
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              {fleet.map((v) => (
                <Image
                  key={v.id}
                  src={v.src}
                  alt={v.name}
                  title={v.name}
                  fill
                  sizes='(max-width: 1068px) 100vw, 50vw'
                  className={`${styles.img} ${
                    v.id === activeId ? styles.imgActive : ""
                  }`}
                />
              ))}
              <span className={styles.capacityBadge}>{active.capacity}</span>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
