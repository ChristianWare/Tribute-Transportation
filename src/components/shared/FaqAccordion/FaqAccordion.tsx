"use client";

import { useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import styles from "./FaqAccordion.module.css";

export interface FaqAccordionItem {
  id: number;
  q: string;
  a: string;
}

interface Props {
  eyebrow?: string;
  heading?: string;
  copy?: string;
  items: FaqAccordionItem[];
  showShape?: boolean;
}

export default function FaqAccordion({
  eyebrow = "Common Questions",
  heading = "Common questions about riding with Tribute.",
  copy = "The questions we hear most on the phone, answered up front, so there is nothing to guess at before you book.",
  items,
  showShape = true,
}: Props) {
  const [openId, setOpenId] = useState<number>(items[0]?.id ?? -1);

  const toggle = (id: number) => setOpenId((cur) => (cur === id ? -1 : id));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className={styles.container}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text={eyebrow} />
            <h2>{heading}</h2>
            <p className={styles.copy}>{copy}</p>
            {showShape && (
              <div className={styles.imgContainer}>
                <div
                  className={styles.suvShape}
                  role='img'
                  aria-label='Tribute Transportation SUV'
                />
              </div>
            )}
          </div>

          <div className={styles.right}>
            <ul className={styles.list}>
              {items.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <li className={styles.item} key={item.id}>
                    <button
                      type='button'
                      className={styles.question}
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span className={`${styles.qText} h4`}>{item.q}</span>
                      <span
                        className={`${styles.icon} ${
                          isOpen ? styles.iconOpen : ""
                        }`}
                        aria-hidden='true'
                      >
                        <span className={styles.iconBar} />
                        <span
                          className={`${styles.iconBar} ${styles.iconBarV}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`${styles.answerWrap} ${
                        isOpen ? styles.answerOpen : ""
                      }`}
                    >
                      <p className={styles.answer}>{item.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
