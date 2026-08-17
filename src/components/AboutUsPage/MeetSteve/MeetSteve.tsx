import styles from "./MeetSteve.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../public/images/steve.png";
import Starii from "@/components/shared/icons/Starii/Starii";

const blocks = [
  {
    id: 1,
    text: "Fifteen years in, Steve still takes the reservations, still confirms every detail himself, and still does most of the driving. Riders notice.",
  },
  {
    id: 2,
    text: "Two things come up in his reviews more than anything else. \u201CYour communication gave me peace of mind,\u201D and \u201Cyou made me feel like I mattered.\u201D Whether someone books or not, every caller gets straight answers and real guidance.",
  },
  {
    id: 3,
    text: "He has recommended other providers when they were the better fit. On at least one occasion he paid for a passenger's Lyft out of his own pocket, because a flight mattered more than a fare. That's not a customer-service policy. It's just how one person chooses to run a company.",
  },
];

export default function MeetSteve() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' title='' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.introHeadingContainer}>
              <SectionIntro text='The Person Driving' />

              <h2 className={styles.heading}>
                When you call Tribute, you get Steve. That's the whole org
                chart.
              </h2>
            </div>
            <div className={styles.blocks}>
              {blocks.map((block) => (
                <div className={styles.block} key={block.id}>
                  <Starii className={styles.blockIcon} />
                  <p className={styles.copy}>{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
