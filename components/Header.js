import styles from "../styles/Header.module.scss";
import Image from "next/future/image";

import flipeoLogo from "../public/images/header/flipeoLogo.svg";
import mainLogo from "../public/images/header/Group110-mainIMG-logo.svg";
import leafUnder from "../public/images/header/Group111-leaf-under-picture.svg";
import woman from "../public/images/header/Group111-picture-of-woman.png";
import leavesLeft__blur from "../public/images/header/leaves-left/blur.png";
import leavesLeft__dark from "../public/images/header/leaves-left/dark-green.svg";
import leavesLeft__light from "../public/images/header/leaves-left/light-green.svg";
import leavesRight from "../public/images/header/leaves-right.svg";
import leafBottom from "../public/images/header/leaf1.svg";
import leafTop from "../public/images/header/leaf2.svg";
import glasses from "../public/images/header/icons/okulary-1.svg";
import plant from "../public/images/header/icons/kwiatek-2.svg";
import printer from "../public/images/header/icons/drukarka-3.svg";
import shirt from "../public/images/header/icons/bluzka-4.svg";
import chair from "../public/images/header/icons/fotel-5.svg";
import earphones from "../public/images/header/icons/sluchawki-6.svg";
import pad from "../public/images/header/icons/pad-7.svg";

export default function Header() {
  const scroll = () => {
    document
      .querySelector("#newsletter")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.wrapper}`}>
        <Image
          className={styles.header__title}
          src={flipeoLogo}
          alt="logo flipeo"
        />
        <Image className={styles.header__logo} src={mainLogo} alt="" />
        <main className={styles.header__main}>
          <div className={styles.left}>
            <h1 className={styles.header__mainTitle}>
              Wymieniaj się <br />z innymi!
            </h1>
            <button onClick={scroll} className={`btn ${styles.btn}`}>
              Bądź na bieżąco
            </button>
          </div>
          <div className={styles.header__mainGreenBg}>
            <Image className={styles.leaf} src={leafUnder} alt="" />
            <Image
              className={styles.woman}
              priority={true}
              src={woman}
              alt="woman with a flower"
            />
          </div>
        </main>
      </div>

      <div className={styles.leavesLeft}>
        <Image
          className={styles.leavesLeft__blur}
          src={leavesLeft__blur}
          alt=""
        />
        <Image
          className={styles.leavesLeft__dark}
          src={leavesLeft__dark}
          alt=""
        />
        <Image
          className={styles.leavesLeft__lightBig}
          src={leavesLeft__light}
          alt=""
        />
        <Image
          className={styles.leavesLeft__lightSm}
          src={leavesLeft__light}
          alt=""
        />
      </div>

      <Image
        className={styles.leavesRight}
        priority={true}
        src={leavesRight}
        alt=""
      />
      <Image className={styles.leafBottom} src={leafBottom} alt="" />
      <Image className={styles.leafTop} src={leafTop} alt="" />
      <Image className={`icon ${styles.glasses}`} src={glasses} alt="" />
      <Image className={`icon ${styles.plant}`} src={plant} alt="" />
      <Image className={`icon ${styles.printer}`} src={printer} alt="" />
      <Image className={`icon ${styles.shirt}`} src={shirt} alt="" />
      <Image className={`icon ${styles.chair}`} src={chair} alt="" />
      <Image className={`icon ${styles.earphones}`} src={earphones} alt="" />
      <Image className={`icon ${styles.pad}`} src={pad} alt="" />
    </header>
  );
}
