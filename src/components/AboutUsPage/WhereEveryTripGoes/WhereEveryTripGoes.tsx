"use client";

import { useState, useEffect } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WhereEveryTripGoes.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Arrow from "@/components/shared/icons/Arrow/Arrow";

const orgs = [
  {
    id: 1,
    label: "Military Families",
    name: "Gold Star Families",
    desc: "Supporting the families of America's fallen military heroes.",
  },
  {
    id: 2,
    label: "Veterans & First Responders",
    name: "Tunnel to Towers Foundation",
    desc: "Mortgage-free homes for Gold Star families and catastrophically injured veterans.",
  },
  {
    id: 3,
    label: "Southern Arizona Veterans",
    name: "Esperanza en Escalante",
    desc: "Housing and employment support for Southern Arizona veterans.",
  },
  {
    id: 4,
    label: "Housing & Self-Sufficiency",
    name: "Primavera Foundation",
    desc: "Housing and self-sufficiency programs across Southern Arizona.",
  },
  {
    id: 5,
    label: "Animal Welfare",
    name: "Humane Society of Southern Arizona",
    desc: "Rescue, adoption, and veterinary care.",
  },
];

export default function WhereEveryTripGoes() {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w <= 700) setPerPage(1);
      else if (w <= 1100) setPerPage(2);
      else setPerPage(3);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const pageCount = Math.ceil(orgs.length / perPage);

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const clampedPage = Math.min(page, pageCount - 1);

  // Chunk orgs into pages of `perPage`
  const pages = [];
  for (let i = 0; i < orgs.length; i += perPage) {
    pages.push(orgs.slice(i, i + perPage));
  }

  const prevDisabled = clampedPage === 0;
  const nextDisabled = clampedPage >= pageCount - 1;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topText}>
              <SectionIntro
                text='Driven by Service. Committed to Community.'
                color='colorWhite'
              />
              <h2 className={styles.heading}>
                A portion of every <br /> completed trip supports:
              </h2>
            </div>

            <div className={styles.arrows}>
              <button
                type='button'
                className={styles.arrowBtn}
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={prevDisabled}
                aria-label='Previous organizations'
              >
                <Arrow className={styles.arrowPrev} />
              </button>
              <button
                type='button'
                className={styles.arrowBtn}
                onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
                disabled={nextDisabled}
                aria-label='Next organizations'
              >
                <Arrow className={styles.arrowNext} />
              </button>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.viewport}>
              <div
                className={styles.slider}
                style={{ transform: `translateX(-${clampedPage * 100}%)` }}
              >
                {pages.map((pageOrgs, i) => (
                  <div
                    className={styles.page}
                    key={i}
                    aria-hidden={i !== clampedPage}
                  >
                    {pageOrgs.map((org) => (
                      <article className={styles.card} key={org.id}>
                        {/* <span className={styles.cardLabel}>{org.label}</span> */}
                        <SectionIntro
                          text={org.label}
                          color='colorWhite'
                        />
                        <h3 className={styles.cardName}>{org.name}</h3>
                        <p className={styles.cardDesc}>{org.desc}</p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className={styles.closing}>
            When you ride with Tribute, you're part of this, at no extra cost,
            on every single trip.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
