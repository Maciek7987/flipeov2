import styles from "../styles/Footer.module.scss";
import Image from "next/future/image";

import glasses from "../public/images/footer/glasses-1.svg";
import plant from "../public/images/footer/plant-2.svg";
import printer from "../public/images/footer/printer-3.svg";
import shirt from "../public/images/footer/shirt-4.svg";
import chair from "../public/images/footer/chair-5.svg";
import pad from "../public/images/footer/pad-6.svg";
import mobileApp from "../public/images/footer/mobileApp.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrapper ${styles.wrapper}`}>
        <h1 className={styles.footer__title}>Dołącz do społeczności flipeo!</h1>
      </div>
      <Image className={styles.mobileApp} src={mobileApp} alt="mobile app" />
      <Image className={`icon ${styles.glasses}`} src={glasses} alt="" />
      <Image className={`icon ${styles.plant}`} src={plant} alt="" />
      <Image className={`icon ${styles.printer}`} src={printer} alt="" />
      <Image className={`icon ${styles.shirt}`} src={shirt} alt="" />
      <Image className={`icon ${styles.chair}`} src={chair} alt="" />
      <Image className={`icon ${styles.pad}`} src={pad} alt="" />
      <div className={styles.copyright}>
        <p>Designed by</p>
      </div>
    </footer>
  );
}
