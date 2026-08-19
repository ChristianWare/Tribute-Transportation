import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import styles from "./ServiceArticle.module.css";
import type { ServiceContent } from "@/data/services";

export default function ServiceArticle({
  service,
}: {
  service: ServiceContent;
}) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.wrap}>
          <Link href='/services' className={styles.backLink}>
            ← Back to all services
          </Link>

          <article className={styles.card}>
            {/* Header */}
            <header className={styles.header}>
              <h1 className={styles.heading}>{service.h1}</h1>

              <div className={styles.imgContainer}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes='(max-width: 768px) 100vw, 640px'
                  className={styles.img}
                />
              </div>

              <p className={styles.sub}>{service.sub}</p>
              <span className={styles.metaLine}>{service.metaLine}</span>

              <div className={styles.btnRow}>
                <Button href='/book' text='Reserve your ride' btnType='navy' />
                <Button
                  href='tel:+15206618289'
                  text='(520) 661-8289'
                  btnType='navyText'
                />
              </div>
            </header>

            {/* Intro */}
            <div className={styles.section}>
              {service.intro.map((para, i) => (
                <p className={styles.para} key={i}>
                  {para}
                </p>
              ))}
            </div>

            {/* Included */}
            <div className={styles.section}>
              <h2 className={`${styles.sectionHeading} h3`}>
                {service.includedHeading}
              </h2>
              <ul className={styles.list}>
                {service.included.map((item, i) => (
                  <li className={styles.listItem} key={i}>
                    <span className={styles.marker} aria-hidden='true' />
                    <span className={styles.listText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why */}
            <div className={styles.section}>
              <h2 className={`${styles.sectionHeading} h3`}>
                {service.whyHeading}
              </h2>
              <ul className={styles.list}>
                {service.why.map((item, i) => (
                  <li className={styles.listItem} key={i}>
                    <span className={styles.marker} aria-hidden='true' />
                    <span className={styles.listText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle */}
            <div className={styles.section}>
              <h2 className={`${styles.sectionHeading} h3`}>
                The right vehicle
              </h2>
              <p className={styles.para}>{service.vehicleLine}</p>
              <div className={styles.relatedRow}>
                {service.related.map((link) => (
                  <Link
                    href={link.href}
                    className={styles.relatedLink}
                    key={link.href}
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom strip */}
            <footer className={styles.footerStrip}>
              <div className={styles.footerText}>
                <span className={styles.footerLead}>Ready when you are.</span>
                <p className={styles.footerCopy}>{service.ctaLine}</p>
              </div>
              <Button href='/book' text='Reserve your ride' btnType='navy' />
            </footer>
          </article>
        </div>
      </LayoutWrapper>
    </section>
  );
}
