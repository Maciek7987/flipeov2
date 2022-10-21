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
  let [widthWrap, setWidthWrap] = useState(1512);
  let [widthSlider, setWidthSlider] = useState(1128);
  const responsive = () => {
    const width = document.body.clientWidth;
    if (width <= 952) {
      setWidthWrap((widthWrap = 1512 - 864));
      setWidthSlider((widthSlider = 1128 - 864));
      setNumber((number = 1));
    } else if (width <= 1239) {
      setWidthWrap((widthWrap = 1512 - 576));
      setWidthSlider((widthSlider = 1128 - 576));
      setNumber((number = 2));
    } else if (width <= 1527) {
      setWidthWrap((widthWrap = 1512 - 288));
      setWidthSlider((widthSlider = 1128 - 288));
      setNumber((number = 3));
    } else if (width > 1527) {
      setWidthWrap((widthWrap = 1512));
      setWidthSlider((widthSlider = 1128));
      setNumber((number = 4));
    }
  };
  useEffect(() => {
    responsive();
    window.addEventListener("resize", responsive);
  });
  return (
    <section className={styles.section}>
      <div
        style={{ width: `${widthWrap}px` }}
        className={`wrapper ${styles.wrapper}`}
      >
        <div className={styles.section__greenBg}>
          <Image
            className={styles.img}
            src={greenBg}
            alt="popularne przedmioty na flipeo.io"
          />
          <h2 className={styles.title}>Popularne przedmioty na flipeo.io</h2>
        </div>
        <div style={{ width: `${widthSlider}px` }} className={styles.slider}>
          <Slider number={number}></Slider>
        </div>
      </div>
      <div className={styles.newsletter}>
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
