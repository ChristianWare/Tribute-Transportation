import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const columns = [
  {
    id: 1,
    heading: "Services",
    links: [
      { label: "Airport Transportation", href: "/airport-car-service" },
      { label: "Corporate Travel", href: "/corporate-car-service" },
      { label: "Long-Distance", href: "/long-distance-car-service" },
      { label: "Weddings & Events", href: "/wedding-transportation" },
      { label: "The Fleet", href: "/fleet" },
      { label: "Wine Tours", href: "/wine-tours-sonoita-elgin" },
    ],
  },
  {
    id: 2,
    heading: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Areas We Serve", href: "/service-areas" },
      { label: "Reviews", href: "/reviews" },
      { label: "Book Your Ride", href: "/book" },
      { label: "Contact", href: "/contact" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Logo orientation='left' size='large' />
            </div>
            <address className={styles.address}>
              Based in Tucson, Arizona
              <br />
              P.O. Box 1763, Tucson, AZ 85702
            </address>
            <a href='tel:+15206618289' className={styles.phone}>
              (520) 661-8289
            </a>

            <p className={styles.blurb}>
              Private car service for airport, corporate, and long-distance
              travel across Southern Arizona. A portion of every trip gives back
              to those who serve.
            </p>
          </div>

          <div className={styles.columns}>
            {columns.map((col) => (
              <nav
                className={styles.column}
                key={col.id}
                aria-label={col.heading}
              >
                <h3 className={`${styles.colHeading} h3`}>{col.heading}</h3>
                <ul className={styles.linkList}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.byline}>
            Every trip has a destination. Every ride has a purpose.
          </span>
          <span className={styles.copyright}>
            © {year} Tribute Transportation, LLC · All rights reserved
          </span>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
