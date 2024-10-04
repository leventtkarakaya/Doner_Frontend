import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div>
        {/* 1 */}
        <div className="d-flex flex-column align-items-center justify-content-center bg-custom p-4">
          <h3 style={{ color: "red" }}>Hakkımızda</h3>
          <span style={{ color: "red" }}>{`Anasayfa > Hakkımızda`}</span>
        </div>
        {/* 2 */}
        <div className="container mt-5 p-4">
          <div className="d-flex gap-5">
            <Image
              src={"/images/hakkimizda/AboutImage.jpg"}
              alt="Ağababa Döner"
              width={400}
              height={400}
            />
            <div>
              <p>
                <strong className="text-bg-black fw-bold">Ağababa Döner</strong>
                , odun ateşinde pişen, nefis yaprak dönerinin yanı sıra,
                kebapları, ızgaraları, çorbaları, zeytinyağlıları, sulu ev
                yemekleri, mezeleri, tatlıları ve tüm lezzetleriyle, geleneksel
                Osmanlı yemek kültürünü de günümüze taşımaktadır.
              </p>
              <p>
                2010 yılının Mart ayında açılan{" "}
                <strong className="text-bg-black fw-bold">Ağababa Döner</strong>
                ’in başarısının arkasında Polesan Catering güveni yer
                almaktadır. Polesan Catering’e gelen istekler sonucu, Ağababa
                Döner bir restoran olarak hizmete girmiştir. Ağababa Döner, çok
                kısa sürede, gerek lezzet kalitesi, gerek sunumu, güleryüzlü
                hizmetiyle, yalnız yakın çevrenin değil, İstanbul’un uzak
                köşelerinden de, özellikle yemek yemeğe gelen misafirlerini
                ağırlamaya başlamıştır. Ağababa Döner, yılların deneyimi ve
                yenilikçi tavrıyla lezzet, büyümesini istikrarlı bir biçimde
                nesilden nesile sürdürmeye kararlıdır.
              </p>
              <p>
                Döner satan birçok mekan, daha kısa sürede daha fazla satış
                imkanı sunan fast food akımına ayak uydururken, Ağababa Döner,
                Türk mutfağının lezzetli kebap ve sulu yemek çeşitlerini sunmayı
                tercih etmiştir. İşin mutfağından gelen işletme sahibi Himmet
                Polat,{" "}
                <strong>“Bir milletin geleceği yediği gıdaya bağlıdır”</strong>{" "}
                sözünü Ağababa Döner’in misyonu olarak görmüş ve bu tavrını her
                ayrıntıda yansıtmaya çalışmaktadır.{" "}
                <a href="/" className="fw-bold polesanHover">
                  Polesan Catering
                </a>
                , kazandığı devlet ihalelerindeki başarıları, eğitim kurumları,
                uluslararası kuruluşlar, hastaneler ve sağlık kurumları,
                fabrikalar, otel ve misafirhaneler, yurtlar ve iş merkezlerine
                uzanan geniş müşteri portföyü, onu nasıl sektörün saygın ismi
                yapmışsa, Ağababa Döner de, tıpkı Polesan gibi emin adımlarla
                büyümeyi hedeflemektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
