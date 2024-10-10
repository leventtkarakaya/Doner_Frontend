"use client";
import React, { useState } from "react";
import styles from "./insankaynaklari.module.css";
export default function page() {
  interface UserState {
    tel: number | null;
    name: string | null;
    surname: string | null;
    date: string | null;
    email: string | null;
    message: string | null;
    gender: string | null;
    age: number | null;
    city: string | null;
    educational: string | null;
  }
  const [value, setValue] = useState<UserState>({
    tel: null,
    name: null,
    surname: null,
    date: null,
    email: null,
    message: null,
    gender: null,
    age: null,
    city: null,
    educational: null,
  });
  const handleValueChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        <form className="d-flex flex-column align-items-center  w-50 rounded-4 p-5 ">
          <div className="p-2 w-100">
            <h3 className="text-red text-center">İnsan Kaynakları</h3>
            <div className={`${styles.forms}`}>
              <div className={styles.formsInput}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={value.name ? value.name : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  autoComplete="off"
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Adınız"
                />
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={value.surname ? value.surname : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  autoComplete="off"
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Soyadınız"
                />
              </div>
              <div className={styles.formsInput}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={value.email ? value.email : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  autoComplete="off"
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="E-Mail"
                />
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  maxLength={11}
                  value={value.tel ? value.tel : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  autoComplete="off"
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Telefon"
                />
              </div>
              <div className={styles.formsInput}>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={value.date ? value.date : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Dogum Tarihi"
                />
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="off"
                  value={value.city ? value.city : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Şehir"
                />
              </div>
              <div className={styles.formsInput}>
                <input
                  type="text"
                  name="educational"
                  id="educational"
                  autoComplete="off"
                  value={value.educational ? value.educational : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Egitim Durumu"
                />
                <input
                  type="number"
                  name="age"
                  id="age"
                  min={0}
                  max={100}
                  autoComplete="off"
                  value={value.age ? value.age : ""}
                  onChange={(e: any) => handleValueChangeTel(e)}
                  className="w-100 d-flex align-items-center gap-2 justify-content-between"
                  placeholder="Yaş"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
