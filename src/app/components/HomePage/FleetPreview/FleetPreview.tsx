import LayoutWrapper from "../../shared/LayoutWrapper";
import SectionIntro from "../../shared/SectionIntro/SectionIntro";
import styles from "./FleetPreview.module.css";
import Image from "next/image";
import Img1 from "../../../../../public/images/fleet/escalade.png";
import Img2 from "../../../../../public/images/fleet/bus.png";
import Img3 from "../../../../../public/images/fleet/mercedesSedan.png";
import Img4 from "../../../../../public/images/fleet/partyBusii.png";
import Img5 from "../../../../../public/images/fleet/sprinter.png";

export default function FleetPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='The Fleet' />
            <h2 className={styles.heading}>
              One passenger or fifty-two. <br /> Same great level of service.
            </h2>
            <p className={styles.copy}>
              Every vehicle is late-model, cleaned before every trip, and
              stocked with bottled water, phone chargers, and WiFi.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Fleet'
                title='Fleet'
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
