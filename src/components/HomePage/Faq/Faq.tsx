"use client";

import { useState } from "react";
import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./Faq.module.css";


const faqs = [
  {
    id: 1,
    q: "Is this a shared shuttle?",
    a: "No. Every reservation is a private vehicle for you and your party only. No other passengers, no extra stops, no waiting for a van to fill up.",
  },
  {
    id: 2,
    q: "How much does it cost?",
    a: "Flat rates, quoted and confirmed before your trip. Your price is set when you book — no meters, no surge pricing, no surprise at the end of the ride. Call or request a quote and you'll have a number the same day.",
  },
  {
    id: 3,
    q: "How far in advance should I book?",
    a: "Twenty-four hours is the minimum for online reservations, and earlier is better for busy travel dates. Same-day travel may still be possible — call us. Even if we're fully booked, we'll help you find another option.",
  },
  {
    id: 4,
    q: "What happens if my flight is delayed?",
    a: "We watch your flight. If it moves, we move with it, and you get sixty minutes of complimentary wait time after you land at no additional charge.",
  },
  {
    id: 5,
    q: "Do you travel outside Tucson?",
    a: "Regularly. Phoenix Sky Harbor, the border communities, Cochise County, the Gila Valley, and into New Mexico. Long-distance trips are quoted as one flat rate for the whole journey.",
  },
  {
    id: 6,
    q: "Can I bring my pet or a child seat?",
    a: "Yes to both. Pets are welcome, and child and booster seats are available on request — just tell us when you reserve.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number>(faqs[0].id);

  const toggle = (id: number) => setOpenId((cur) => (cur === id ? -1 : id));

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='Common Questions' />
            <h2 className={styles.heading}>
              Common questions about <br /> riding with Tribute.
            </h2>
            <p className={styles.copy}>
              The questions we hear most on the phone — answered up front, so
              there's nothing to guess at before you book.
            </p>

            <div className={styles.imgContainer}>
              <div
                className={styles.suvShape}
                role='img'
                aria-label='Tribute Transportation SUV'
              />
            </div>
          </div>

          <div className={styles.right}>
            <ul className={styles.list}>
              {faqs.map((item) => {
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
                        className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
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
