"use client";
import React, { useRef } from "react";
import Image from "next/image";
/* Swiper import Start*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* Swiper import End */
/* Css import */
import style from "./Content.module.css";
/* Css import */
import Link from "next/link";
import YouTube, { YouTubeProps } from "react-youtube";
export default function Content() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className={style.container}>
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
      </div>
      {/* Kurumsal */}
      <div>
        <div>
          <div>
            {/* Content Header */}
            <h3>
              Bazı lezzetlerin bıraktığı izler her zaman hatırlanır ve özel
              yerini daima muhafaza eder.
            </h3>
            {/* Contnet Tanıtım */}
            <div>
              <div>
                <Image
                  src={"/images/content/ContentImage_1.png"}
                  width={200}
                  height={200}
                  alt="Agababa Döner"
                />
                <p>Ağababa Döner.</p>
                <p>KALİTE VE LEZZETİN BULUŞMA NOKTASI</p>
              </div>
              <div>
                <Image
                  src={"/images/content/ContentImage_2.png"}
                  width={200}
                  height={200}
                  alt="Agababa Döner"
                />
                <p>Ağababa Döneri</p>
                <p>360° Derece Gezmek İster misiniz?</p>
              </div>
              <div>
                <Image
                  src={"/images/content/ContentImage_3.png"}
                  width={200}
                  height={200}
                  alt="Agababa Döner"
                />
                <p>Ağababa Döner</p>
                <p>Tanıtım Filmi</p>
              </div>
            </div>
            {/* Content Tanıtım_2 */}
            <div>
              <div>
                <Image
                  src={"/images/content/calendar.png"}
                  alt="tarih"
                  width={200}
                  height={200}
                />
                <p>Günün Menüsü</p>
              </div>
              <div>
                <Image
                  src={"/images/content/photo-camera.png"}
                  alt="tarih"
                  width={200}
                  height={200}
                />
                <p>Günün Menüsü</p>
              </div>
              <div>
                <Image
                  src={"/images/content/list.png"}
                  alt="tarih"
                  width={200}
                  height={200}
                />
                <p>Günün Menüsü</p>
              </div>
              <div>
                <Image
                  src={"/images/content/book.png"}
                  alt="tarih"
                  width={200}
                  height={200}
                />
                <p>Günün Menüsü</p>
              </div>
              <div>
                <Image
                  src={"/images/content/speech-bubble.png"}
                  alt="tarih"
                  width={200}
                  height={200}
                />
                <p>Günün Menüsü</p>
              </div>
            </div>
            {/* Content Tanımtım_3 */}
            <div>
              <nav>
                <ul>
                  <li>
                    <Link href={"#"}>
                      <p>İftar tatlısı denince Ağababa Kadayıf akla gelir</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p>İstanbul Anadolu yakası en iyi iftar mekanı</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p>Ramazan ayına özel toplu iftar yemeği için Polesan</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p>
                        İstanbul 2018 iftar yapılacak en iyi dönerci; Ağababa
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p>İstanbul’da en iyi dönerin adresi; Ağababa Döner</p>
                    </Link>
                  </li>
                </ul>
                <div>
                  <div>
                    <Image
                      src={"/images/content/bulb.png"}
                      alt="ampul"
                      width={25}
                      height={25}
                    />
                    <p>
                      Ağababa'nın Sosyal Medya Takipçilerin Kazanıyor. Her Hafta
                      2 şanslı Çiftimizi Restoranımızda Ağırlıyoruz
                    </p>
                  </div>
                  <YouTube
                    videoId={"iubQDeZXh_0"}
                    opts={opts}
                    onReady={onPlayerReady}
                    loading={true}
                  />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
