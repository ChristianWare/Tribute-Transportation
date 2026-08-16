"use client";

import { useState, useEffect } from "react";
import styles from "./ReviewsPreview.module.css";
import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import Arrow from "../../shared/icons/Arrow/Arrow";
import Image from "next/image";
import GrantImg from "../../../../../public/images/people/Grant.jpg";
import JoelImg from "../../../../../public/images/people/Joel.jpg";
import LaurenImg from "../../../../../public/images/people/Lauren.jpg";
import MelevesiImg from "../../../../../public/images/people/Melevesi.jpg";
import SheilaImg from "../../../../../public/images/people/Sheila.jpg";

const reviews = [
  {
    id: 5,
    name: "Grant M.",
    location: "Santa Barbara, CA",
    src: GrantImg,
    quote:
      "Steve was outstanding. Although we weren't able to travel with him due to conflicts, he provided excellent service and was accommodating at every step. I recommend this service to anyone traveling in the south Arizona area.",
  },
  {
    id: 4,
    name: "Sheila B.",
    location: "Fort Bragg, CA",
    src: SheilaImg,
    quote:
      "Very polite, friendly, and helpful. We contacted Steve only one day before our trip and he was very gracious about our request to stop before our hotel. We even got a local tour of the mountain ranges. I would recommend him for any of your transportation needs!",
  },
  {
    id: 1,
    name: "Lauren K.",
    location: "Tucson, AZ",
    src: LaurenImg,
    quote:
      "We called two other companies for quotes, but no one answered. Steve answered our voicemail within minutes and set us up for a 4AM pickup and a late 11PM return. His communication was on point throughout. We had a snag with a last minute flight delay, texted Steve, and he accommodated it no problem. I won't bother calling anyone else again for airport rides.",
  },
  {
    id: 2,
    name: "Melevesi T.",
    location: "Huntington Beach, CA",
    src: MelevesiImg,
    quote:
      "Called Steven at 9:30am to arrange an 11:15am pickup for my family from Tucson airport. He was extremely friendly and took his time to get all the details right. My family was pleased with the condition of the vehicle and his driving. We look forward to using Steve again!",
  },
  {
    id: 3,
    name: "Joel C.",
    location: "Las Vegas, NV",
    src: JoelImg,
    quote:
      "Steve was an outstanding driver. He didn't just make sure we were all comfortable, he truly went above and beyond. When one of our passengers wasn't feeling well, he made sure she was okay and felt completely safe. His care and professionalism were truly appreciated.",
  },
];

export default function ReviewsPreview() {
  const [perPage, setPerPage] = useState(2);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const check = () => setPerPage(window.innerWidth <= 1268 ? 1 : 2);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const pageCount = Math.ceil(reviews.length / perPage);

  // Keep current page in range if perPage changes on resize
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const clampedPage = Math.min(page, pageCount - 1);

  // Build the pages: chunk reviews into groups of `perPage`
  const pages = [];
  for (let i = 0; i < reviews.length; i += perPage) {
    pages.push(reviews.slice(i, i + perPage));
  }

  const prevDisabled = clampedPage === 0;
  const nextDisabled = clampedPage >= pageCount - 1;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro text='In Their Words' />
            <h2 className={styles.heading}>
              Fifteen years <br /> of the same feedback.
            </h2>
          </div>

          <div className={styles.bottom}>
            <div className={styles.viewport}>
              <div
                className={styles.slider}
                style={{ transform: `translateX(-${clampedPage * 100}%)` }}
              >
                {pages.map((pageReviews, i) => (
                  <div
                    className={styles.page}
                    key={i}
                    aria-hidden={i !== clampedPage}
                  >
                    {pageReviews.map((r) => (
                      <article className={styles.card} key={r.id}>
                        <div className={styles.cardImg}>
                          <Image
                            src={r.src}
                            alt={r.name}
                            title={r.name}
                            fill
                            sizes='180px'
                            className={styles.img}
                          />
                        </div>
                        <div className={styles.cardBody}>
                          <div
                            className={styles.stars}
                            aria-label='Rated 5 out of 5 stars'
                          >
                            <span aria-hidden='true'>★★★★★</span>
                          </div>
                          <p className={styles.quote}>
                            <span
                              className={styles.quoteMark}
                              aria-hidden='true'
                            >
                              “
                            </span>
                            {r.quote}
                            <span
                              className={styles.quoteMark}
                              aria-hidden='true'
                            >
                              ”
                            </span>
                          </p>
                          <div className={styles.person}>
                            <span className={styles.name}>{r.name}</span>
                            <span className={styles.location}>
                              {r.location}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.arrows}>
            <button
              type='button'
              className={styles.arrowBtn}
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={prevDisabled}
              aria-label='Previous reviews'
            >
              <Arrow className={styles.arrowPrev} />
            </button>
            <button
              type='button'
              className={styles.arrowBtn}
              onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
              disabled={nextDisabled}
              aria-label='Next reviews'
            >
              <Arrow className={styles.arrowNext} />
            </button>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
