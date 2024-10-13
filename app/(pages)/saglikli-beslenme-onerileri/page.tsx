import React from "react";
import Image from "next/image";
import style from "./saglikli-beslenme-onerileri.module.css";
export default function page() {
  return (
    <>
      <div>
        {/* 1 */}
        <div className="d-flex flex-column align-items-center justify-content-center bg-custom p-4">
          <i className="text-danger text-uppercase h3">
            SAĞLIKLI BESLENME ÖNERİLERİ
          </i>
          <span className="text-danger">{`Anasayfa > SAĞLIKLI BESLENME ÖNERİLERİ`}</span>
        </div>
        {/* 2 */}
        <div className="container mt-5 p-5">
          <div className="row align-items-start">
            <div className="col-md-4">
              <Image
                src={"/images/hakkimizda/AboutImage.jpg"}
                width={400}
                height={400}
                className="img-fluid"
                alt="Ağababa Döner"
              />
            </div>
            <div className="col-md-8">
              <p className={style.aboutText}>
                <strong className="text-bg-black fw-bold ">
                  Vücudumuzda dakikada 10 milyon hücre ölürken, bir o kadarı da
                  yenileniyor.
                </strong>
                Ortalama 100 günde, beyin ve sinir hücreleri hariç bütün
                vücudumuz yenilenme süreci yaşıyor. Düzensiz kötü beslenme
                yenileme sistemini aksatıyor. Cildimiz canlılığını, tazeliğini
                kaybediyor ve en önemlisi hastalıklara açık oluyoruz. Yorgunluk,
                çabuk yorulma, baş ağrısı olabiliyor. Düşünce ve hafıza sistemi
                bulanıklaşıyor. Bu nedenlerden dolayı düzenli ve sağlıklı
                beslenmeye dikkat etmeliyiz. ‘Yemek için yaşamamalı, sadece
                yaşamak için yemeliyiz’ görüşünü benimsemeliyiz. Mümkünse
                yediklerinizi 3 ana öğün, 3 ara öğüne bölün, az ve sık beslenin.
                Bol su için, yiyecekleri iyice çiğneyin. Düzenli yemek
                yediğinizde daha dengeli ve sağlıklı beslenir, ideal kilonuzu
                koruyabilirsiniz.
              </p>
              <p className={style.aboutText}>
                Vücudumuzda dakikada 10 milyon hücre ölürken, bir o kadarı da
                yenileniyor.
                <strong className="text-bg-black fw-bold">Ağababa Döner</strong>
                Ortalama 100 günde, beyin ve sinir hücreleri hariç bütün
                vücudumuz yenilenme süreci yaşıyor. Düzensiz kötü beslenme
                yenileme sistemini aksatıyor. Cildimiz canlılığını, tazeliğini
                kaybediyor ve en önemlisi hastalıklara açık oluyoruz. Yorgunluk,
                çabuk yorulma, baş ağrısı olabiliyor. Düşünce ve hafıza sistemi
                bulanıklaşıyor. Bu nedenlerden dolayı düzenli ve sağlıklı
                beslenmeye dikkat etmeliyiz. ‘Yemek için yaşamamalı, sadece
                yaşamak için yemeliyiz’ görüşünü benimsemeliyiz. Mümkünse
                yediklerinizi 3 ana öğün, 3 ara öğüne bölün, az ve sık beslenin.
                Bol su için, yiyecekleri iyice çiğneyin. Düzenli yemek
                yediğinizde daha dengeli ve sağlıklı beslenir, ideal kilonuzu
                koruyabilirsiniz.
              </p>
              <p className={`${style.aboutText} `}>
                <strong>AKDENİZ BESLENME PİRAMİDİ </strong>
                Harvard Tıp Fakültesi tarafından geliştirilen yeni beslenme
                piramidi, günlük beslenme alışanlıklarımızda dikkat etmemiz
                gereken temel özellikleri ortaya koyuyor. Yeni beslenme
                piramidinin başlıca önerileri: kırmızı et, patates, rafine
                hububat ürünleri ve alkolün son derece kısıtlı hale getirilmesi;
                süt ürünlerini günde 1-2 porsiyona indirmesi, doymuş yağların
                (margarin gibi) tamamen kaldırılması, rafine edilmemiş hububat
                ürünlerinin, meyve ve sebzelerin bol miktarda tüketilmesi ve
                hergün hazır vitamin alınması olarak düşünülebilinir.
              </p>
              <p className={style.aboutText}>
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
              </p>{" "}
              <p className={style.aboutText}>
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
