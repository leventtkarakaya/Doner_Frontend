"use client";
import React from "react";
import SwiperComponent from "./ContentComponents/Swiper";
import ContentCorporate from "./ContentComponents/ContentCorporate";
import CorporatePartner from "./ContentComponents/CorporatePartner";
import style from "./Content.module.css";
export default function Content() {
  return (
    <>
      <div className={style.container}>
        <SwiperComponent />
      </div>
      {/* Kurumsal */}
      <div className={style.containerCorporate}>
        <ContentCorporate />
      </div>
      {/* Kurumsal Ortak */}
      <div className={style.containerCorporatePartner}>
        <CorporatePartner />
      </div>
    </>
  );
}
