"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBtn from "@/app/components/MenuBtn";
export default function Navbar() {
  const [language, setLanguage] = useState(false);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.logo}>
            <a href="/">
              <Image
                src="/images/navbar/Logo.png"
                alt="Agababa Döner"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={style.links}>
            <ul>
              <li>
                <Link href="/" className={style.link}>
                  <p>Anasayfa</p>
                </Link>
              </li>
              {/* Kurumsal start */}
              <Dropdown className="d-flex mx-2">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "0px",
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  Kurumsal
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{ marginTop: "30px", marginLeft: "-150px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "20px",
                        gap: "10px",
                      }}
                    >
                      <Dropdown.Item href="/hakkimizda">
                        Hakkımızda
                      </Dropdown.Item>
                      <Dropdown.Item href="/tarihce">Tarihçe</Dropdown.Item>
                      <Dropdown.Item href="/misyon-ve-vizyonumuz">
                        Vizyon ve Misyonlarımız
                      </Dropdown.Item>
                      <Dropdown.Item href="/insan-kaynaklari">
                        İnsan Kaynakları
                      </Dropdown.Item>
                      <Dropdown.Item href="#">360 Sanal Tur</Dropdown.Item>
                      <Dropdown.Item href="#">Belgeler</Dropdown.Item>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <Dropdown.Item
                        href="#"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "300px",
                        }}
                      >
                        <h6>Sağlıklı Beslenme Önerileri</h6>
                        <Image
                          src={"/images/navbar/NavbarCorporate_1.png"}
                          alt="Health"
                          width={200}
                          height={200}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            lineHeight: "20px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#000000",
                            opacity: "0.5",
                            fontStyle: "normal",
                            letterSpacing: "1.2px",
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          Vücudumuzda dakikada 10 milyon hücre ölürken, bir o
                          kadarı da yenileniyor.
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "red" }}
                          >
                            devamı»
                          </a>
                        </p>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "300px",
                        }}
                      >
                        <h6>Agababa Lezzet Sırrları</h6>
                        <Image
                          src={"/images/navbar/NavbarCorporate_2.png"}
                          alt="Health"
                          width={200}
                          height={200}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            lineHeight: "20px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#000000",
                            opacity: "0.5",
                            fontStyle: "normal",
                            letterSpacing: "1.2px",
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                          }}
                        >
                          Ağababa Döner’in nefis etlerinin sırrı, et seçiminden
                          başlayarak, her ayrıntıda büyük emek ve{" "}
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "red" }}
                          >
                            devamı»
                          </a>
                        </p>
                      </Dropdown.Item>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              {/* Kurumsal end */}
              {/* Lezzetlerimiz start  */}
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "0px",
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  Lezzetlerimiz
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    marginTop: "30px",
                    marginLeft: "-100px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "50px",
                    }}
                  >
                    <Dropdown.Item
                      href="#"
                      style={{ width: "300px", height: "200px" }}
                    >
                      <div>
                        <p>Döner Çesitleri</p>
                        <Image
                          src="/images/navbar/NavbarFlavorDöner.png"
                          alt="Döner"
                          width={250}
                          height={100}
                        />
                        <p
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            lineHeight: "20px",
                          }}
                        >
                          Ağababa Döner’in tandırda pişirilen lavaş ekmeği ile
                          sunulan dürümü tercihlerin başında geliyor.
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ width: "300px", height: "200px" }}
                    >
                      <div>
                        <p>Izgara Çesitleri</p>
                        <Image
                          src="/images/navbar/NavbarFlavorIzgara.png"
                          alt="Izgara"
                          width={250}
                          height={100}
                        />
                        <p
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            lineHeight: "20px",
                          }}
                        >
                          Ağababa Döner birbirinden lezzetli ızgara çeşitleri
                          her beğeniye sesleniyor, lezzetiyle büyülüyor.
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{ width: "300px", height: "200px" }}
                    >
                      <div>
                        <p>Zeytinyağlılar</p>
                        <Image
                          src="/images/navbar/NavbarFlavorOil.png"
                          alt="Zeytinyağlı"
                          width={250}
                          height={100}
                        />
                        <p
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            lineHeight: "20px",
                          }}
                        >
                          Özel üretim nefis zeytinyağ ile pişen Zeytinyağlı
                          Enginar, Zeytinyağlı Sarma gibi hergün taze çıkan
                          farklı yemeklerin lezzetine doyum olmaz
                        </p>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <div>
                        <p>Tatlılar</p>
                        <Image
                          src="/images/navbar/NavbarFlavorSweet.png"
                          alt="Tatlı"
                          width={250}
                          height={100}
                        />
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <div>
                        <p>İçecekler</p>
                        <Image
                          src="/images/navbar/NavbarFlavorCucumber.png"
                          alt="Salata"
                          width={250}
                          height={100}
                        />
                      </div>
                    </Dropdown.Item>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0px",
                          lineHeight: "10px",
                          fontSize: "16px",
                          textDecoration: "none",
                        }}
                      >
                        <li>
                          <Link href="#" style={{ textDecoration: "none" }}>
                            <p style={{ color: "black" }}>İştah Açıcılar</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" style={{ textDecoration: "none" }}>
                            <p style={{ color: "black" }}>Çorbalar</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" style={{ textDecoration: "none" }}>
                            <p style={{ color: "black" }}>Salatalar</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" style={{ textDecoration: "none" }}>
                            <p style={{ color: "black" }}>Sıcak İceçekler</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" style={{ textDecoration: "none" }}>
                            <p style={{ color: "black" }}>Soğuk İceçekler</p>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" style={{ textDecoration: "none" }}>
                            <p style={{ color: "black" }}>Kahvaltı Çesitleri</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              {/* Lezzetlerimiz  end */}
              <li>
                <Link href="#" className={style.link}>
                  <p>Günün Menüsü</p>
                </Link>
              </li>
              {/* Medya start */}
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "0px",
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  Medya
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    marginTop: "20px",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Dropdown.Item href="#">
                        Basında Biz (Video)
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        Lezzetlerimiz (Video)
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        Fotoğraflar ile Ağababa
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Haber Ve Duyurular</Dropdown.Item>
                      <Dropdown.Item href="#">Basında Biz</Dropdown.Item>
                    </div>
                    <ul
                      style={{
                        display: "flex",
                        listStyle: "none",
                        padding: "0px",
                        gap: "50px",
                      }}
                    >
                      <li
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "200px",
                        }}
                      >
                        <p style={{ textAlign: "center" }}>
                          Fotoğraflar ile Ağababa
                        </p>
                        <Image
                          src="/images/navbar/NavbarMedia_1.png"
                          width={100}
                          height={100}
                          alt="Agababa Döner"
                        />
                      </li>
                      <li
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "200px",
                        }}
                      >
                        <p style={{ textAlign: "center" }}>Basında Biz</p>
                        <Image
                          src="/images/navbar/NavbarMedia_2.png"
                          width={100}
                          height={100}
                          alt="Agababa Döner"
                        />
                      </li>
                    </ul>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              {/* Medya end */}
              {/* Contact start */}
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "0px",
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  İletişim
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">İleştişim Formu</Dropdown.Item>
                  <Dropdown.Item href="#">İnsan Kaynakları</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* Contact end */}
              {/* Language start */}
              {language ? (
                <Image
                  src="/images/navbar/united-states.png"
                  alt="united-states"
                  width={25}
                  height={25}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Image
                  src="/images/navbar/turkey.png"
                  alt="turkish"
                  width={25}
                  height={25}
                  style={{ cursor: "pointer" }}
                />
              )}
              {/* Language end */}
            </ul>
          </div>
          {/* MenuBtn */}
          <div id={style.MenuBtn}>
            <MenuBtn />
          </div>
          {/* MenuBtn */}
        </div>
      </div>
    </>
  );
}
