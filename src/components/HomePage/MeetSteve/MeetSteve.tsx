import styles from "./MeetSteve.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/steve.png";
import Button from "../../shared/Button/Button";

export default function MeetSteve() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={Img1}
            alt='Steve'
            title='Steve'
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <span className={styles.title}>Meet Steve</span>
          <p className={styles.small}>
            Founder and CEO of Tribute Transportation
          </p>
        </div>
        <div className={styles.rightBottom}>
          {" "}
          <div className={styles.btnContainer}>
            <Button href='#' text='Learn more →' btnType='whiteText' />
          </div>
        </div>
      </div>
    </div>
  );
}
