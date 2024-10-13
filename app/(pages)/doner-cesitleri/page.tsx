import React from "react";
import Image from "next/image";
import style from "../hakkimizda/hakkimizda.module.css";
export default function page() {
  return (
    <div>
      {/* 1 */}
      <div className="d-flex flex-column align-items-center justify-content-center bg-custom p-4">
        <i className="text-danger text-uppercase h3">Hakkımızda</i>
        <span className="text-danger">{`Anasayfa > DÖNER ÇEŞİTLERİ`}</span>
      </div>
      {/* 2 */}
      <div className="container mt-5 p-5">
        <p className="text-center font-monospace text-danger text-uppercase fw-bold fs-5">
          Ağababa Döner birbirinden lezzetli ızgara ve döner çeşitleri her
          beğeniye sesleniyor, lezzetiyle büyülüyor.
        </p>
        <div className="container mx-auto" id={style.hakkimizdaWrapper_2}>
          <div className="d-grid col-2 gap-5 w-100">
            <div className="d-flex gap-3 w-100">
              <div className="d-flex align-items-center flex-column justify-content-center gap-5 w-100">
                <Image
                  src={"/images/donerCesitleri/DonerImage_1.jpg"}
                  id={style.hakkimizdaWrapperImage_2}
                  width={400}
                  height={400}
                  alt="Ağababa Döner"
                />
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <strong className="text-danger fw-bold fs-6 mb-3">
                    Döner Porsiyon
                  </strong>
                  <button type="button" className="btn btn-danger ">
                    408.00 ₺
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column justify-content-center gap-5 w-100">
                <Image
                  src={"/images/donerCesitleri/DonerImage_2.jpg"}
                  id={style.hakkimizdaWrapperImage_2}
                  width={400}
                  height={400}
                  alt="Ağababa Döner"
                />
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <strong className="text-danger fw-bold fs-6 mb-3">
                    Tereyağlı İskender
                  </strong>
                  <button type="button" className="btn btn-danger ">
                    446.00 ₺
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column justify-content-center gap-5 w-100">
                <Image
                  src={"/images/donerCesitleri/DonerImage_3.jpg"}
                  id={style.hakkimizdaWrapperImage_2}
                  width={400}
                  height={400}
                  alt="Ağababa Döner"
                />
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <strong className="text-danger fw-bold fs-6 mb-3">
                    Pilav Üstü Döner
                  </strong>
                  <button type="button" className="btn btn-danger ">
                    423.00 ₺
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex gap-3 w-100">
              <div className="d-flex align-items-center flex-column justify-content-center gap-5 w-100">
                <Image
                  src={"/images/donerCesitleri/DonerImage_4.jpg"}
                  id={style.hakkimizdaWrapperImage_2}
                  width={400}
                  height={400}
                  alt="Ağababa Döner"
                />
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <strong className="text-danger fw-bold fs-6 mb-3">
                    Dürüm Döner
                  </strong>
                  <button type="button" className="btn btn-danger ">
                    327.00 ₺
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column justify-content-center gap-5 w-100">
                <Image
                  src={"/images/donerCesitleri/DonerImage_5.jpg"}
                  id={style.hakkimizdaWrapperImage_2}
                  width={400}
                  height={400}
                  alt="Ağababa Döner"
                />
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <strong className="text-danger fw-bold fs-6 mb-3">
                    Yarım Ekmek Döner
                  </strong>
                  <button type="button" className="btn btn-danger ">
                    287.00 ₺
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column justify-content-center gap-5 w-100">
                <Image
                  src={"/images/donerCesitleri/DonerImage_6.jpg"}
                  id={style.hakkimizdaWrapperImage_2}
                  width={400}
                  height={400}
                  alt="Ağababa Döner"
                />
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <strong className="text-danger fw-bold fs-6 mb-3">
                    Tombik Döner
                  </strong>
                  <button type="button" className="btn btn-danger ">
                    287.00 ₺
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
