import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import styles from "./ContactUsHero.module.css";
import Img1 from "../../../../public/images/depth.jpg";

export default function ContactUsHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {/* Left: image with overlay copy */}
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt=''
                fill
                sizes='(max-width: 968px) 100vw, 45vw'
                className={styles.img}
              />
              <div className={styles.imgOverlay} aria-hidden='true' />
              <div className={styles.imgText}>
                <span className={styles.imgEyebrow}>Every Caller Matters</span>
                <h1 className={styles.imgHeading}>
                  Tell us where you are going.
                </h1>
              </div>
            </div>
          </div>

          {/* Right: display-only form */}
          <div className={styles.right}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <SectionIntro text='Full Name*' />
                <input
                  type='text'
                  className={styles.input}
                  placeholder='Name'
                  aria-label='Full name'
                />
              </div>

              <div className={styles.field}>
                <SectionIntro text='Phone Number*' />
                <input
                  type='tel'
                  className={styles.input}
                  placeholder='(520) 555 0100'
                  aria-label='Phone number'
                />
              </div>

              <div className={styles.field}>
                <SectionIntro text='Email Address*' />
                <input
                  type='email'
                  className={styles.input}
                  placeholder='Email address'
                  aria-label='Email address'
                />
              </div>

              <div className={styles.field}>
                <SectionIntro text='Pickup Date' />
                <input
                  type='text'
                  className={styles.input}
                  placeholder='MM / DD / YYYY'
                  aria-label='Pickup date'
                />
              </div>

              <div className={`${styles.field} ${styles.fieldFull}`}>
                <SectionIntro text='Type of Trip' />
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    aria-label='Type of trip'
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Select...
                    </option>
                    <option>Airport transportation</option>
                    <option>Tucson to Phoenix Sky Harbor</option>
                    <option>Corporate or executive travel</option>
                    <option>Hourly chauffeur</option>
                    <option>Wedding or special event</option>
                    <option>Wine tour or day trip</option>
                    <option>Medical transportation</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div className={`${styles.field} ${styles.fieldFull}`}>
                <SectionIntro text='Group Size' />
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    aria-label='Group size'
                    defaultValue=''
                  >
                    <option value='' disabled>
                      Select...
                    </option>
                    <option>1 to 3 passengers</option>
                    <option>4 to 7 passengers</option>
                    <option>8 to 12 passengers</option>
                    <option>Up to 32 passengers</option>
                    <option>Up to 52 passengers</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className={`${styles.field} ${styles.fieldFull}`}>
                <SectionIntro text='Message*' />
                <textarea
                  className={styles.textarea}
                  placeholder='Where are you headed, and when? Anything else we should know?'
                  rows={6}
                  aria-label='Message'
                />
              </div>
            </div>

            <label className={styles.consent}>
              <input type='checkbox' className={styles.checkbox} />
              <span className={styles.consentText}>
                I agree to be contacted about my trip request.
              </span>
            </label>

            <div className={styles.btnContainer}>
              <Button href='#' text='Start conversation' btnType='navy' />
            </div>

            <p className={styles.phoneNote}>
              Fastest answer: call{" "}
              <a href='tel:+15206618289' className={styles.phoneLink}>
                (520) 661-8289
              </a>
              . The phone is answered around the clock.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
