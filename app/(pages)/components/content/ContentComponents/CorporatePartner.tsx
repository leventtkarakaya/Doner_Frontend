import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "@/app/(pages)/components/content/Content.module.css";
export default function CorporatePartner() {
  return (
    <>
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
    </>
  );
}
