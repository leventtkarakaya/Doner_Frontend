import React from "react";
import style from "./tarihce.module.css";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        {/* 1 */}
        <div className="d-flex flex-column align-items-center justify-content-center bg-custom p-4">
          <i className="text-danger text-uppercase h3">Tarihçe</i>
          <span className="text-danger">{`Anasayfa > Tarihçe`}</span>
        </div>
        {/* 2 */}
        <div className="container mt-5 p-5">
          <h1 className="text-center mb-5 text-uppercase text-danger">
            Ağababa Grubu Hikâyesi
          </h1>
          <div className="d-flex flex-column align-items-center gap-5">
            <Image
              src={"/images/tarihce/tarihceImage.jpg"}
              id={style.hakkimizdaWrapperImage_2}
              width={600}
              height={400}
              alt="Ağababa Döner"
            />
            <div>
              <p>
                Ağababa’nın geçmişinde muazzam bir azim ve emek ile ortaya çıkan
                örnek bir başarı hikâyesi yatıyor. 1974 yılında Malatya’nın
                Darendere ilçesinde doğan ve ilkokul eğitimini burada gören
                Himmet Polat’ın gerçek hayat hikâyesi de bu aşamadan sonra
                başlıyor.
              </p>
              <p>
                Köyünde ortaokul olmadığı için çok genç yaşta doğduğu
                topraklardan kopup gurbete yani İstanbul’a gitmek zorunda kalan
                Polat’ın eğitim macerası Ümraniye’de kayıt olduğu bir ortaokulda
                maalesef maddi imkânsızlıklardan ötürü sadece 2 yıl daha sürer.
              </p>
              <p>
                Okuduğu okulu bırakıp genç yaşta çalışma hayatına atılmak
                zorunda kalan Polat’ın ticari hayatında attığı ilk adım ise
                bugünlerin de ilk sinyalini verir nitelikte.
              </p>
              <p>
                Rakipleri meyve sebze ağırlıklı giyim ve incik boncuk gibi
                pazarlarda sıklıkla görmeye alışık olduğumuz ürünleri satarken
                pazarda kalem, defter satışı yaparak bir ilki gerçekleştirerek
                farkını ortaya koyan Polat’ın hayatında en önemli dönüm noktası
                ise bir Kayserili tüccarın dükkânından geçiyor.
              </p>
              <p>
                Kayserili tüccarın yanında edindiği tecrübeler ile ticari
                hayatına devam eden Polat’ın 2001 yılında İstanbul Esatpaşa’da
                100 m2 yerde 1 araç ve birkaç tencere- tava ile ilk adımını
                attığı yemek sektörü ise Ağababa Grubu için yaradanın “Yürü Ya
                Kulum” dediği dönem olarak da kayıtlara geçer.
              </p>
              <p>
                Kardeşlerinin büyümesi ve eğitimlerini tamamlaması ile birlikte
                güç birliği yapan Polat ailesi yemek işini Polesan Catering
                markası altında Ümraniye’de kurdukları tesiste daha da büyüterek
                adını çok kısa bir zaman içinde duyurur ve birçok kurum ve
                şirketin yemek hizmetini vermeye başlar.
              </p>
              <p>
                Polat ailesi 2010 yılında ise yemek sektöründen edindikleri
                deneyimlerini bu sefer de restoran alanına taşır. “Ağababa”
                markasının hikâyesi de bu tarihten itibaren başlar. Ümraniye’de
                açtığı 500 kişilik mekânda “Ağababa Döner” markası altında
                hizmet vermeye başlayan Polat ailesi, 5 yıl gibi ticari hayatta
                çok kısa sayılacak bir zaman diliminde sektörün parmakla
                gösterilen işletmelerinden birine daha sahip olur.
              </p>
              <strong>
                Polat ailesi Ağababa Döner’in ardından sırasıyla gruba Ağababa
                Kantin ve Ağababa Kadayıf’ı da ekler.
              </strong>
              <p>
                Örnek bir başarı hikâyesi ile girdiği her sektörde adını altın
                harflerle yazdırmayı başaran Himmet Polat’ın 2015 yılı
                itibariyle ‘’Ağababa’’ çatısı altında 250’den fazla çalışanı
                bulunuyor. Tüm çalışanlarına bir baba şefkati ile yanaştığını ve
                büyük bir aile olduklarını belirten Polat, amacının kaliteli
                işletmeler açıp kontrollü bir şekilde büyümek olduğunu söylüyor…
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
