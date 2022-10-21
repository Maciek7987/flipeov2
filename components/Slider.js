import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hoodie from "../public/images/section/product-image-1.png";
import hoodieTwo from "../public/images/section/product-image-2.png";
import shoes from "../public/images/section/product-image-3.png";
import blouse from "../public/images/section/product-image-4.png";
//Photo by Simon Trappe: https://www.pexels.com/photo/overhead-shot-of-the-playstation-1-5700767/
import ps1 from "../public/images/section/pexels-simon-trappe-5700767.jpg"; 
//Photo by Sergei A: https://www.pexels.com/photo/photo-of-red-bike-parked-on-road-beside-grass-field-2539400/
import bike from "../public/images/section/pexels-sergei-a-2539400.jpg";
import books from "../public/images/section/product-image-7.jpg";

function Product({
  src,
  alt,
  paragraphElement,
  numberProduct,
  numberFirst,
  numberSecond,
}) {
  return (
    <>
      <span className="iconHeart"></span>
      <Image src={src} alt={alt} />
      {paragraphElement}
      <div className={`wrapProfile ${numberProduct}`}>
        <div>
          <span className="thumbup"> {numberFirst} </span>
          <span className="thumbdown"> {numberSecond}</span>
        </div>
      </div>
    </>
  );
}
export default function Slider({ number }) {
  return (
    <>
      <Swiper
        slidesPerView={number}
        spaceBetween={24}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Product
            src={hoodie}
            alt={"hoodie"}
            paragraphElement={
              <p>Bluza Adidas, jak nowa, czerwona ropizpinana w...</p>
            }
            numberProduct={"first"}
            numberFirst={234}
            numberSecond={2}
          ></Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product
            src={hoodieTwo}
            alt={"hoodie"}
            paragraphElement={
              <p>Bluza Seattle, fajna, mało używana, jak nowa prosto z...</p>
            }
            numberProduct={"second"}
            numberFirst={124}
            numberSecond={0}
          ></Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product
            src={shoes}
            alt={"brown shoes"}
            paragraphElement={
              <p>Buty zamszowe damskie, rozmiar 38, mało używane ja...</p>
            }
            numberProduct={"third"}
            numberFirst={179}
            numberSecond={4}
          ></Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product
            src={blouse}
            alt={"floral blouse"}
            paragraphElement={
              <p>Bluzka w kwiaty, nowa z metkami, nieużywana w...</p>
            }
            numberProduct={"fourth"}
            numberFirst={597}
            numberSecond={2}
          ></Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product
            src={ps1}
            alt={"playstation 1"}
            paragraphElement={
              <p>Ponadczasowa konsola PlayStation, stan idealny...</p>
            }
            numberProduct={"fifth"}
            numberFirst={1022}
            numberSecond={1}
          ></Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product
            src={bike}
            alt={"bike"}
            paragraphElement={<p>Czerwony rower firmstrong, retro, jak nowy</p>}
            numberProduct={"sixth"}
            numberFirst={194}
            numberSecond={3}
          ></Product>
        </SwiperSlide>
        <SwiperSlide>
          <Product
            src={books}
            alt={"books"}
            paragraphElement={
              <p>Cała kolekcja komiksów kaczor doland</p>
            }
            numberProduct={"seventh"}
            numberFirst={325}
            numberSecond={0}
          ></Product>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
