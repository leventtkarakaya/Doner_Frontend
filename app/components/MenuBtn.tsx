"use client";
import React, { useState } from "react";
import MenuImage from "@/public/images/navbar/align-justify (1).png";
import Image from "next/image";
import style from "./MenuBtn.module.css";
export default function MenuBtn() {
  const [open, setOpen] = useState(false);
  const handleMenuBoolan = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <>
      <Image
        src={MenuImage}
        width={25}
        height={25}
        onClick={() => handleMenuBoolan()}
        style={{ cursor: "pointer" }}
        alt="Image"
      />
    </>
  );
}
