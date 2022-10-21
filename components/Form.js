import { useForm } from "react-hook-form";

import styles from "../styles/Form.module.scss";
import Image from "next/future/image";
import message from "../public/images/section/message.svg";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors.email);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__email}>
        <Image className={styles.form__emailImg} src={message} alt="" />
        <input
          className={styles.form__emailInput}
          placeholder="Wpisz swój adres e-mail"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Pole e-mail jest wymagne",
            pattern: {
              value:
                /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i,
              message: "Wprowadź poprawny adress e-mail",
            },
          })}
        />

        <input
          value="Zapisz się"
          className={`btn ${styles.form__emailSubmit}`}
          type="submit"
        />
      </div>
      <p className={styles.invalid}>
        {errors.email?.message || errors.cb?.message || errors.cb2?.message}
      </p>
      <div className={styles.inner}>
        <input
          aria-invalid={errors.cb ? "true" : "false"}
          type="checkbox"
          {...register("cb", {
            required: "Zaznacz wymagane pola",
          })}
          id="cb"
        />
        <label htmlFor="cb">
          <div>
            <svg viewBox="0 0 24 25" className={styles.box}>
              <path
                className={styles.boxPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                stroke="#DAD0C6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg viewBox="0 0 24 25">
              <path
                className={styles.checkBg}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={styles.checkTick}
                d="M8.4402 12.1181L10.8142 14.4911L15.5602 9.74512"
                stroke="#FEB86A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span>
            Oświadczam, iż zapoznałem/łam się z <a href="#">regulaminem</a>*
          </span>
        </label>
      </div>
      <div className={styles.inner}>
        <input
          type="checkbox"
          aria-invalid={errors.cb2 ? "true" : "false"}
          {...register("cb2", {
            required: "Zaznacz wymagane pola",
          })}
          id="cb2"
        />
        <label htmlFor="cb2">
          <div>
            <svg viewBox="0 0 24 25" className={styles.box}>
              <path
                className={styles.boxPath}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                stroke="#DAD0C6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg viewBox="0 0 24 25">
              <path
                className={styles.checkBg}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.7498 12.1182C2.7498 19.0552 5.0628 21.3682 11.9998 21.3682C18.9368 21.3682 21.2498 19.0552 21.2498 12.1182C21.2498 5.18116 18.9368 2.86816 11.9998 2.86816C5.0628 2.86816 2.7498 5.18116 2.7498 12.1182Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={styles.checkTick}
                d="M8.4402 12.1181L10.8142 14.4911L15.5602 9.74512"
                stroke="#FEB86A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span>
            Oświadczam, iż zapoznałem/łam się z{" "}
            <a href="#">polityką prywatności</a>*
          </span>
        </label>
      </div>
    </form>
  );
}
