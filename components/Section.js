import styles from "../styles/Section.module.scss";
import Image from "next/future/image";

import Slider from "./Slider";
import Form from "./Form";

import greenBg from "../public/images/section/green-bg.svg";
import newsletter from "../public/images/section/newsletter.svg";
import leavesLeft from "../public/images/section/leaves-left.png";
import leavesRight from "../public/images/section/leaves-right.png";

export default function Section() {
  return (
    <section className={styles.section}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.section__greenBg}>
          <Image
            className={styles.img}
            src={greenBg}
            alt="popularne przedmioty na flipeo.io"
          />
          <h2 className={styles.title}>Popularne przedmioty na flipeo.io</h2>
        </div>
        <div className={styles.slider}>
          <Slider/>
        </div>
      </div>
      <div id="newsletter" className={styles.newsletter}>
        <Image className={styles.newsletter__img} src={newsletter} alt="" />
        <h2 className={styles.newsletter__title}>Newsletter</h2>
        <p className={styles.newsletter__description}>
          Zapisz się do newslettera i bądź na bieżąco ze wszystkimi
          nowościami oraz promocjami na flipeo.io.
        </p>
        <Form/>
      </div>

      <Image className={styles.leavesLeft} src={leavesLeft} alt="" />
      <Image className={styles.leavesRight} src={leavesRight} alt="" />
    </section>
  );
}
