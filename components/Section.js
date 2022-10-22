import { useEffect, useState } from "react";

import styles from "../styles/Section.module.scss";
import Image from "next/future/image";

import Slider from "./Slider";
import Form from "./Form";

import greenBg from "../public/images/section/green-bg.svg";
import newsletter from "../public/images/section/newsletter.svg";
import leavesLeft from "../public/images/section/leaves-left.png";
import leavesRight from "../public/images/section/leaves-right.png";

export default function Section() {
  let [number, setNumber] = useState(4);

  const responsive = () => {
    const width = window.innerWidth;
    if (width <= 962) setNumber((number = 1));
    else if (width <= 1249) setNumber((number = 2));
    else if (width <= 1537) setNumber((number = 3));
    else if (width > 1537) setNumber((number = 4));
  };
  useEffect(() => {
    responsive();
    window.addEventListener("resize", responsive);
  });
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
          <Slider number={number}></Slider>
        </div>
      </div>
      <div id="newsletter" className={styles.newsletter}>
        <Image className={styles.newsletter__img} src={newsletter} alt="" />
        <h2 className={styles.newsletter__title}>Newsletter</h2>
        <p className={styles.newsletter__description}>
          Zapisz się do newslettera i bądź na bieżąco ze wszystkimi <br />
          nowościami oraz promocjami na flipeo.io.
        </p>
        <Form></Form>
      </div>

      <Image className={styles.leavesLeft} src={leavesLeft} alt="" />
      <Image className={styles.leavesRight} src={leavesRight} alt="" />
    </section>
  );
}
