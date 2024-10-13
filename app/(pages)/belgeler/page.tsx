import React from "react";
import Image from "next/image";
import style from "./belgeler.module.css";
export default function page() {
  return (
    <>
      <div>
        {/* 1 */}
        <div className="d-flex flex-column align-items-center justify-content-center bg-custom p-4">
          <i className="text-danger text-uppercase h3">Hakkımızda</i>
          <span className="text-danger">{`Anasayfa > Belgeler`}</span>
        </div>
        {/* 2 */}
        <div className="container mt-5 p-5 ">
          <Image
            src={"/images/belgeler/BelgeNo_1.jpg"}
            alt="image"
            width={"400"}
            height={"500"}
          />
          <Image
            src={"/images/belgeler/BelgeNo_2.jpg"}
            alt="image"
            width={"400"}
            height={"500"}
          />
          <Image
            src={"/images/belgeler/BelgeNo_3.jpg"}
            alt="image"
            width={"400"}
            height={"500"}
          />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <Image
              src={"/images/belgeler/BelgeNo_4.jpg"}
              alt="image"
              width={"700"}
              height={"1000"}
              className="w-100 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
