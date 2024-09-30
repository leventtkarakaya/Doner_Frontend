import React from "react";
import Image from "next/image";
import style from "./Footer.module.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.container}>
          <div className={style.containerWrapper}>
            <nav className={style.containerWrapperContent}>
              {/* Navigations */}
              <ul>
                <li>
                  <Link href={"/"}>Döner çeşitleri</Link>
                </li>
                <li>
                  <Link href={"/"}>Izgara çeşitleri</Link>
                </li>
                <li>
                  <Link href={"/"}>Zeytintaglılar</Link>
                </li>
                <li>
                  <Link href={"/"}>Çorbalar</Link>
                </li>
                <li>
                  <Link href={"/"}>Salatalar</Link>
                </li>
                <li>
                  <Link href={"/"}>Tatlı çeşitleri</Link>
                </li>
                <li>
                  <Link href={"/"}>Kahvaltı çeşitleri</Link>
                </li>
                <li>
                  <Link href={"/"}>Agababa market</Link>
                </li>
              </ul>
              {/* Description */}
              <div className={style.description}>
                <h3 id={style.descriptionHeader}>Bir fikrim var!</h3>
                <p id={style.descriptionParagraf}>
                  Bir fikrimiz mi var? Bizimle paylaşın kazanın{" "}
                  <span id={style.descriptionTextYellow}>
                    Fikriniz bizim için değerli
                  </span>{" "}
                  <a href="#" id={style.descriptionPaylasin}>
                    Paylaşın!
                  </a>
                </p>
                <hr id={style.hr} />
                <p>Görüşleriniz Bizim için Önemlidir!</p>
                <hr id={style.hr} />
                <p id={style.altParagrafs}>
                  Dudullu döner, Dudullu imes yemek siparişi Dönerci restaurant
                  , ümraniye döner siparişi Dudullu Döner siparişi, Dudullu
                  kebap siparişi, مطعم دونر لحم
                </p>
              </div>
              {/* Ios && Google play */}
              <div className={style.mobileLinks}>
                <h3 id={style.mobileLinksHeader}>AĞABABA HER AN YANINDA!</h3>
                <Image
                  src={"/images/footer/GooglePlayImage.png"}
                  alt="Google Play"
                  width={200}
                  height={80}
                />
                <Image
                  src={"/images/footer/IosImage.png"}
                  alt="Ios"
                  width={200}
                  height={80}
                />
              </div>
              {/* Bize Ulaşın */}
              <div className={style.locations}>
                <h4>Bize Ulaşın</h4>
                <address>
                  Ağababa Ümraniye: Dudullu Esenşehir Mah. Natoyolu Cad. No:229
                  imes B Kapısı Karşısı Ümraniye İST Telefon : (0216) 420 62 62
                </address>
                <address>
                  Ağababa Kadıköy : Osmanağa Mahallesi Söğütlü Çeşme Cad. No:20
                  Telefon : (0216) 420 52 52
                </address>
              </div>
            </nav>
            <div id={style.copyRight}>
              <div>
                Ağababa Döner © Dudullu Esenşehir Mah. Natoyolu Cad. No:229 imes
                B Kapısı Karşısı Ümraniye İST. Tel: (0216) 420 62 62
              </div>
              {/* Icons */}
              <div id={style.copyRightIcons}>
                <FaFacebookSquare
                  width={25}
                  height={25}
                  className={style.copyRightSelected}
                  id={style.FaFacebookSquare}
                />
                <FaInstagramSquare
                  width={25}
                  height={25}
                  className={style.copyRightSelected}
                  id={style.FaInstagramSquare}
                />
                <FaTwitterSquare
                  width={25}
                  height={25}
                  className={style.copyRightSelected}
                  id={style.FaTwitterSquare}
                />
                <FaYoutubeSquare
                  widths={25}
                  height={25}
                  className={style.copyRightSelected}
                  id={style.FaYoutubeSquare}
                />
                <AiFillTikTok
                  width={25}
                  height={25}
                  className={style.copyRightSelected}
                  id={style.AiFillTikTok}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
