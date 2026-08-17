import Image from "next/image";
import styles from "./LogosRow.module.css";
import Logo1 from "../../../../public/images/logos/goldStar.png";
import Logo2 from "../../../../public/images/logos/tunnel.png";
import Logo3 from "../../../../public/images/logos/esparanza.png";
import Logo4 from "../../../../public/images/logos/prima.png";
import Logo5 from "../../../../public/images/logos/humane.webp";

const logos = [
  { id: 1, src: Logo1, label: "Gold Star Families" },
  { id: 2, src: Logo2, label: "Tunnel to Towers Foundation" },
  { id: 3, src: Logo3, label: "Esperanza en Escalante" },
  { id: 4, src: Logo4, label: "Primavera Foundation" },
  { id: 5, src: Logo5, label: "Humane Society of Southern Arizona" },
];

export default function LogosRow({ className }: { className?: string }) {
  // Duplicated inline so one track holds two full sets — the loop reads as seamless
  return (
    <div className={className}>
      {[...logos, ...logos].map((logo, i) => (
        <div className={styles.icon} key={`${logo.id}-${i}`}>
          <Image
            src={logo.src}
            alt={logo.label}
            title={logo.label}
            fill
            sizes='100px'
            className={styles.iconImg}
          />
        </div>
      ))}
    </div>
  );
}
