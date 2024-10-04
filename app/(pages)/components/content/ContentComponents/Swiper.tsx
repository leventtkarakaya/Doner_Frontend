import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "@/app/(pages)/components/content/Content.module.css";
export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={style.swiper}
      >
        <SwiperSlide>
          <Image
            src={"/images/swiper/1.webp"}
            id={style.image}
            width={300}
            height={300}
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/2.jpg"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/3.webp"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/4.jpg"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/5.webp"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/6.webp"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/7.webp"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/8.jpg"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/9.jpg"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/swiper/10.jpg"}
            alt="image"
            id={style.image}
            width={300}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
