import styles from "../styles/Main.module.scss";
import Image from "next/future/image";

import firstLine from "../public/images/main/Vector1-line.svg";
import secondLine from "../public/images/main/Vector4-line.svg";
import thirdLine from "../public/images/main/Vector6-line.svg";
import step1 from "../public/images/main/step1_all.svg";
import step2 from "../public/images/main/step2_all.svg";
import step3 from "../public/images/main/step3_all.png";
import leafForStep1 from "../public/images/main/Vector-leaf-1.svg";
import leafForStep2 from "../public/images/main/Vector-leaf-2.svg";
import leafLeft from "../public/images/main/leaf1.svg";
import leafRight from "../public/images/main/leaf2.svg";

export default function Header() {
  return (
    <section className={styles.main}>
      <div className={`wrapper ${styles.wrapper}`}>
        <h2 className={styles.main__title}>
          Wystawiaj swoje przedmioty <br />i wybieraj przedmioty innych
        </h2>

        <article className={`${styles.article} ${styles.main__firstStep}`}>
          <div className={styles.images}>
            <Image className={styles.firstLine} src={firstLine} alt="" />
            <Image priority={true} className={styles.img} src={step1} alt="" />
          </div>
          <div className={styles.wrapForArticle}>
            <h3 className={styles.article__title}>
              Na flipeo.io łączymy radość dawania <br />i radość wybierania.
            </h3>
            <div className={styles.wrapForText}>
              <Image className={styles.leaf} src={leafForStep1} alt="" />
              <p className={styles.article__description}>
                Są tacy którzy twierdzą że to niemożliwe, cóż, nic na to nie
                poradzimy,
                <br />a dla wszystkich pozostałych mamy propozycję
                <span>- Flipeo.io</span>
              </p>
            </div>
          </div>
        </article>

        <article className={`${styles.article} ${styles.main__secondStep}`}>
          <div className={styles.wrapForArticle}>
            <h3 className={styles.article__title}>
              Flipeo.io to miejsce gdzie wymieniamy się ze <br />
              sobą przedmiotami. Jak to działa ?
            </h3>
            <div className={styles.wrapForText}>
              <Image className={styles.leaf} src={leafForStep2} alt="" />
              <p className={styles.article__description}>
                Bardzo prosto, wystawiasz swoje przedmioty i wybierasz
                przedmioty wystawione przez innych, a my gwarantujemy że za
                wszystkie rzeczy które dla siebie wybierzesz nigdy nie zapłacisz
                ani grosza.
              </p>
            </div>
          </div>
          <div className={styles.images}>
            <Image className={styles.secondLine} src={secondLine} alt="" />
            <Image className={styles.img} src={step2} alt="" />
          </div>
        </article>

        <article className={`${styles.article} ${styles.main__thirdStep}`}>
          <div className={styles.images}>
            <Image className={styles.thirdLine} src={thirdLine} alt="" />
            <Image className={styles.img} src={step3} alt="" />
          </div>
          <div className={styles.wrapForArticle}>
            <h3 className={styles.article__title}>Flipeo.io Znajdź. Wymień.</h3>
            <p className={styles.article__description}>
              Brzmi ciekawie? Zostaw mail a my, już wkrótce, <br />
              poinformujemy cię o starcie platformy.
            </p>
          </div>
        </article>
      </div>

      <Image className={styles.leafLeft} src={leafLeft} alt="" />
      <Image className={styles.leafRight} src={leafRight} alt="" />
    </section>
  );
}
