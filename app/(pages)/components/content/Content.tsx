"use client";
import React from "react";
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
/* Youtube packet */
import YouTube, { YouTubeProps } from "react-youtube";
export default function Content() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "250",
    width: "464",
    playerVars: {
      autoplay: 1,
    },
  };
  /* Youtube packet */
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
      <div className={style.containerCorporate}>
        <div>
          <div className={style.containerAbout}>
            {/* Content Header */}
            <h3>
              Bazı lezzetlerin bıraktığı izler her zaman hatırlanır ve özel
              yerini daima muhafaza eder.
            </h3>
            {/* Contnet Tanıtım */}
            <div className={style.containerAbout_1}>
              <div>
                <Image
                  src={"/images/content/ContentImage_1.png"}
                  width={400}
                  height={200}
                  alt="Agababa Döner"
                />
                <p>Ağababa Döner.</p>
                <p>KALİTE VE LEZZETİN BULUŞMA NOKTASI</p>
              </div>
              <div>
                <Image
                  src={"/images/content/ContentImage_2.png"}
                  width={400}
                  height={200}
                  alt="Agababa Döner"
                />
                <p>Ağababa Döneri</p>
                <p>360° Derece Gezmek İster misiniz?</p>
              </div>
              <div>
                <Image
                  src={"/images/content/ContentImage_3.png"}
                  width={400}
                  height={200}
                  alt="Agababa Döner"
                />
                <p>Ağababa Döner</p>
                <p>Tanıtım Filmi izlemek istermisiniz ?</p>
              </div>
            </div>
            {/* Content Tanıtım_2 */}
            <div className={style.containerAbout_2}>
              <div>
                <Image
                  src={"/images/content/calendar.png"}
                  alt="tarih"
                  width={100}
                  height={100}
                />
                <p>Günün Menüsü</p>
              </div>
              <div>
                <Image
                  src={"/images/content/photo-camera.png"}
                  alt="tarih"
                  width={100}
                  height={100}
                />
                <p>Fotoğraflar</p>
              </div>
              <div>
                <Image
                  src={"/images/content/list.png"}
                  alt="tarih"
                  width={100}
                  height={100}
                />
                <p>Basında Biz</p>
              </div>
              <div>
                <Image
                  src={"/images/content/book.png"}
                  alt="tarih"
                  width={100}
                  height={100}
                />
                <p>Görüşleriniz</p>
              </div>
              <div>
                <Image
                  src={"/images/content/speech-bubble.png"}
                  alt="tarih"
                  width={100}
                  height={100}
                />
                <p>Bizi Yorumlayınız</p>
              </div>
            </div>
            {/* Content Tanımtım_3 */}
            <div className={style.containerAbout_3}>
              <nav className={style.containerWrapper}>
                <ul>
                  <h3>HABERLER & DUYURULAR</h3>
                  <li>
                    <Link href={"#"}>
                      <p id={style.ulparagraf}>
                        İftar tatlısı denince Ağababa Kadayıf akla gelir
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p id={style.ulparagraf}>
                        İstanbul Anadolu yakası en iyi iftar mekanı
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p id={style.ulparagraf}>
                        Ramazan ayına özel toplu iftar yemeği için Polesan
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p id={style.ulparagraf}>
                        İstanbul 2018 iftar yapılacak en iyi dönerci; Ağababa
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <p id={style.ulparagraf}>
                        İstanbul’da en iyi dönerin adresi; Ağababa Döner
                      </p>
                    </Link>
                  </li>
                </ul>
                <div className={style.containerWrapper_text}>
                  <Image
                    src={"/images/content/bulb.png"}
                    alt="ampul"
                    width={25}
                    height={25}
                  />
                  <p>
                    Ağababa'nın Sosyal Medya Takipçilerin Kazanıyor. Her Hafta 2
                    şanslı Çiftimizi Restoranımızda Ağırlıyoruz
                  </p>
                </div>
                <div>
                  <YouTube
                    videoId={"iubQDeZXh_0"}
                    opts={opts}
                    onReady={onPlayerReady}
                    loading={true}
                    id={style.Youtube}
                  />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Kurumsal Ortak */}
      <div className={style.containerCorporatePartner}>
        <div className={style.containerCorporatePartnerWrapper}>
          <div className={style.wrapper_1}>
            <Image
              src="/images/content/down-arrow.png"
              alt="Döner"
              width={50}
              height={50}
            />
            <p>Ortak Kuruluşlarımız</p>
          </div>
          <div className={style.wrapper_2}>
            <Link href={"/"}>
              <Image
                src={"/images/content/CorporatePartner_1.jpg"}
                alt="Döner"
                width={150}
                height={150}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/content/CorporatePartner_2.jpg"}
                alt="Döner"
                width={150}
                height={150}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/content/CorporatePartner_3.jpg"}
                alt="Döner"
                width={150}
                height={150}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/content/CorporatePartner_4.jpg"}
                alt="Döner"
                width={150}
                height={150}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/content/CorporatePartner_5.jpg"}
                alt="Döner"
                width={150}
                height={150}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/content/CorporatePartner_6.png"}
                alt="Döner"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className={style.wrapper_3}>
            <p>
              Ağababa Döner; gelen her misafirine, ait olma duygusu yaşatan ve
              zamanı kuşatıveren farklı bir mekan...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
