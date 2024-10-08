import React from "react";
import style from "./misyon.module.css";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="container mx-auto py-5">
        <div className=" d-flex flex-column align-items-center">
          <h3 className="text-red mb-5">{`Ağababa Döner.DÖNER BEKLENTİSİNİN BİR ÖTESİ!`}</h3>
          <div className="d-flex gap-5 ">
            <Image
              src={"/images/misyon-ve-misyonumuz/Image.jpg"}
              width={400}
              height={400}
              alt="Agababa Döner"
            />
            <div>
              <p>
                <strong>Ağababa Döner</strong>, müşterilerini daima uzun vadeli
                dostları olarak görmektedir. Özellikle özel döneri ve etleri
                konusunda yakaladığı maksimum kaliteyi ve lezzeti korumak, daha
                da iyiyi sunmak ve her zaman bir adım ileride olmak için
                araştırmalar yapmaktadır.
              </p>
              <p>
                <strong>Ağababa Döner</strong>, sadece et kalitesinin üst
                düzeyde olması ile değil, restoran kalitesi ile de gelen
                misafirlerine en üst seviyede hizmet sunabilmek amacı ile
                kurulmuştur. Her ayrıntıda en üst kalite standartlarını uygular.
                Çevre düzeninden havalandırmaya kadar tüm detaylara büyük bir
                özen gösterir. On yılı aşkın bir sürenin deneyimi ve gelen
                istekler doğrultusunda hizmete giren
              </p>
              <p>
                <strong>Ağababa Döner</strong>, yakın gelecekte tamamen kendi
                kontrolünde olan yeni restoranlar açmayı ve büyümeyi
                planlamaktadır. Zaten et konusunda gösterdiği büyük özen, bu
                konuda ne kadar iddialı olduğunu kanıtıdır. Bunun paralelinde,
                Osmanlı mutfağında yer alan, özlenen lezzetleri en güzel biçimde
                sunma gayretindedir. Mutfağında daima güvenilir ve deneyimli
                markaları ve malzemeleri kullanmayı ilke edinmiştir. Ağababa
                Döner’in mutfağındaki her şey, bir ev özeniyle, üstün kaliteli
                ve bilinen markalarla, her dem taze ve katkısız malzemelerle
                pişmektedir. Deneyimli, samimi ve güleryüzlü personeli ile
                koşulsuz müşteri memnuniyetini esas almaktadır. Ağababa Döner;
                gelen misafirlerinin, gördükleri ilgi, özen ve tattıkları
                lezzetler ile, burayı hayatlarının bir parçası olarak
                görmelerini sağlamak misyonu ile çalışmaktadır. Uzun vadeli
                dostluklar kurabilmek; kalıcı lezzetlerin tadına varabilmek ve
                güzel anıları çoğatmak anlamını taşır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
