import { useEffect, useState } from "react";

import styles from "../styles/Section.module.scss";
import Image from "next/future/image";

import Slider from "./Slider";

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

      <Image className={styles.leavesLeft} src={leavesLeft} alt="" />
      <Image className={styles.leavesRight} src={leavesRight} alt="" />
    </section>
  );
}

{
  /* <div className={styles.newsletter}>
        <Image className={styles.newsletter__img} src={newsletter} alt="" />
        <h2 className={styles.newsletter__title}>Newsletter</h2>
        <p className={styles.newsletter__description}>
          Zapisz się do newslettera i bądź na bieżąco ze wszystkimi <br />
          nowościami oraz promocjami na flipeo.io.
        </p>

        <form className={styles.form} name="email">
          <div className="form__email">
            <Image
              className="form__email-img"
              src="./images/section/message.svg"
              alt=""
            />
            <input
              className="form__email-text"
              type="text"
              placeholder="Wpisz swój adres e-mail"
            />
            <button className="form__email-submit btn" type="submit">
              Zapisz się
            </button>
          </div>
          <div className="inner">
            <input type="checkbox" name="cb" id="cb" />
            <label for="cb">
              <div className="svgIcons">
                <svg viewBox="0 0 24 25" className="box">
                  <path
                    className="cb__box-path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                    stroke="#DAD0C6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg viewBox="0 0 24 25">
                  <path
                    className="check-bg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    className="check-tick"
                    d="M8.4402 12.1181L10.8142 14.4911L15.5602 9.74512"
                    stroke="#FEB86A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <span>
                Oświadczam, iż zapoznałem/łam się z<a href="#">regulaminem</a>*
              </span>
            </label>
          </div>

          <div className="inner">
            <input type="checkbox" name="cb2" id="cb2" />
            <label for="cb2">
              <div className="svgIcons">
                <svg viewBox="0 0 24 25" className="box">
                  <path
                    className="cb2__box-path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                    stroke="#DAD0C6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg viewBox="0 0 24 25">
                  <path
                    className="check-bg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    className="check-tick"
                    d="M8.4402 12.1181L10.8142 14.4911L15.5602 9.74512"
                    stroke="#FEB86A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <span>
                Oświadczam, iż zapoznałem/łam się z
                <a href="#">polityką prywatności</a>*
              </span>
            </label>
          </div>
          <span className="error-message"></span>
        </form>
      </div> */
}

//   <section className="products">
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-1.png" alt="hoodie" />

//       <p>Bluza Adidas, jak nowa, czerwona ropizpinana w...</p>
//       <div className="wrap first">
//         <div>
//           <span className="thumbup"> 234 </span>
//           <span className="thumbdown"> 2 </span>
//         </div>
//       </div>
//     </div>
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-2.png" alt="hoodie" />
//       <p>Bluza Seattle, fajna, mało używana, jak nowa prosto z...</p>
//       <div className="wrap second">
//         <div>
//           <span className="thumbup"> 124 </span>
//           <span className="thumbdown"> 0 </span>
//         </div>
//       </div>
//     </div>
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-3.png" alt="brown shoes" />
//       <p>Buty zamszowe damskie, rozmiar 38, mało używane ja...</p>
//       <div className="wrap third">
//         <div>
//           <span className="thumbup"> 179 </span>
//           <span className="thumbdown"> 4 </span>
//         </div>
//       </div>
//     </div>
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-4.png" alt="floral blouse" />
//       <p>Bluzka w kwiaty, nowa z metkami, nieużywana w...</p>
//       <div className="wrap fourth">
//         <div>
//           <span className="thumbup"> 597 </span>
//           <span className="thumbdown"> 2 </span>
//         </div>
//       </div>
//     </div>
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-4.png" alt="floral blouse" />
//       <p>Bluzka w kwiaty, nowa z metkami, nieużywana w...</p>
//       <div className="wrap fourth">
//         <div>
//           <span className="thumbup"> 597 </span>
//           <span className="thumbdown"> 2 </span>
//         </div>
//       </div>
//     </div>
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-4.png" alt="floral blouse" />
//       <p>Bluzka w kwiaty, nowa z metkami, nieużywana w...</p>
//       <div className="wrap fourth">
//         <div>
//           <span className="thumbup"> 597 </span>
//           <span className="thumbdown"> 2 </span>
//         </div>
//       </div>
//     </div>
//     <div className="product">
//       <span className="iconHeart"></span>
//       <img src="./images/section/product-image-4.png" alt="floral blouse" />
//       <p>Bluzka w kwiaty, nowa z metkami, nieużywana w...</p>
//       <div className="wrap fourth">
//         <div>
//           <span className="thumbup"> 0 </span>
//           <span className="thumbdown"> 0 </span>
//         </div>
//       </div>
//     </div>
//   </section>;
