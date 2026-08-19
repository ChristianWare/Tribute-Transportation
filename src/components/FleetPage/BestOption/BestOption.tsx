"use client";

import { useState } from "react";
import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./BestOption.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/fleet/townCar.png";
import Img2 from "../../../../public/images/fleet/subZ71.png";
import Img3 from "../../../../public/images/fleet/sprinter.png";
import Img4 from "../../../../public/images/fleet/miniCoach.png";
import Img5 from "../../../../public/images/fleet/bus.png";
import Button from "../../shared/Button/Button";

const fleet = [
  {
    id: 1,
    tab: "1 to 3",
    name: "Executive Sedan",
    capacity: "Up to 4 passengers",
    body: "One to three riders with standard luggage: the sedan. A Lincoln Town Car for airport runs, corporate travel, and point-to-point trips.",
    src: Img1,
  },
  {
    id: 2,
    tab: "4 to 7",
    name: "Executive SUV",
    capacity: "Up to 7 passengers",
    body: "Four to seven riders, or serious luggage: the SUV. A Suburban with room for the family, the golf bags, and everything else they packed.",
    src: Img2,
  },
  {
    id: 3,
    tab: "8 to 12",
    name: "Mercedes Sprinter",
    capacity: "Up to 12 passengers",
    body: "Eight to twelve riders: the Sprinter. Wine tours, corporate teams, and celebrations where everyone rides together and nobody drives home.",
    src: Img3,
  },
  {
    id: 4,
    tab: "Up to 32",
    name: "Mini Coach",
    capacity: "Up to 32 passengers",
    body: "Up to thirty-two: the mini coach. Wedding guest shuttles, conference groups, and events where everyone needs to arrive at the same time.",
    src: Img4,
  },
  {
    id: 5,
    tab: "Up to 52",
    name: "Motorcoach",
    capacity: "Up to 52 passengers",
    body: "Up to fifty-two: the motorcoach. Full guest lists, long-distance charters, and crew transport in one vehicle with one driver.",
    src: Img5,
  },
];

export default function BestOption() {
  const [activeId, setActiveId] = useState(fleet[0].id);
  const active = fleet.find((v) => v.id === activeId) ?? fleet[0];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <SectionIntro text='The Quick Answer' />
              <br />
              <h2 className={styles.heading}>Which vehicle <br /> do you need?</h2>
            </div>

            <div className={styles.tabs} role='tablist' aria-label='Group size'>
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

            <p className={styles.closing}>
              Not sure, or somewhere in between? Call and describe the trip. You
              will get a straight answer and a flat-rate quote, even if the
              answer is a different vehicle than you expected.
            </p>

            <div className={styles.btnRow}>
              <Button
                href='tel:+15206618289'
                text='(520) 661-8289'
                btnType='navyText'
              />
              <Button href='/book' text='Reserve your ride' btnType='navy' />
            </div>
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
              <span className={styles.capacityBadge}>{active.name}</span>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
