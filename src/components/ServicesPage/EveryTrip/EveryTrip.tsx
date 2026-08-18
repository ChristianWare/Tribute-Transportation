import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./EveryTrip.module.css";

const steps = [
  {
    id: 1,
    title: "Book it",
    copy: "Call or reserve online. You get a flat-rate quote up front, before anything is confirmed. No meters, no guessing, no surprise at the end of the ride.",
  },
  {
    id: 2,
    title: "Hear from us",
    copy: "A written confirmation right away, a reminder the day before, and contact again on the day of your trip. If anything changes on our end, you hear it from us first.",
  },
  {
    id: 3,
    title: "Ride",
    copy: "Your chauffeur arrives early, tracks your flight if there is one, and gets you where you are going without drama. That is the whole promise, every single trip.",
  },
];

export default function EveryTrip() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            The same standard <br /> behind every trip.
          </h2>

          <div className={styles.rows}>
            {steps.map((step) => (
              <div className={styles.row} key={step.id}>
                <span className={styles.num}>
                  {String(step.id).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.copy}>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
