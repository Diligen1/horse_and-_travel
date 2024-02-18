"use client";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export default function FooterSection() {
  return (
    <main className="mx-auto">
      <div className="w-full h-auto sm:h-[300px] bg-blue-600 flex flex-col sm:flex-row justify-evenly items-center">
        <div className="p-[20px] w-full sm:w-auto flex flex-col justify-between items-start">
          <h1
            className={`${roboto.className} text-[24px] pb-[20px] text-white font-bold`}
          >
            Contact us
          </h1>
          <div className="h-[120px] flex flex-col justify-around items-start text-white">
            <p className={`${roboto.className} text-[18px]`}>+996500500500</p>
            <p className={`${roboto.className} text-[18px]`}>
              muratbaevking.@gmail.com
            </p>
            <p className={`${roboto.className} text-[18px]`}>
              turusbekova 109/1
            </p>
          </div>
        </div>
        <div className="p-[20px] w-full aboslute top-0 right-0 sm:w-auto flex flex-col justify-between items-end sm:items-start">
          <h1
            className={`${roboto.className} text-[24px] pb-[20px] text-white font-bold`}
          >
            Nav bar
          </h1>
          <div className="h-[120px] flex flex-col justify-around items-end sm:items-start text-white">
            <p className={`${roboto.className} text-[18px]`}>Главная</p>
            <p className={`${roboto.className} text-[18px]`}>Отзыв</p>
            <p className={`${roboto.className} text-[18px]`}>О нас</p>
          </div>
        </div>
        <div className="p-[20px] flex flex-col justify-between items-start">
          <h1
            className={`${roboto.className} text-[24px] pb-[20px] text-white font-bold`}
          >
            Соц сети
          </h1>
          <div className=" h-[80px] sm:h-[120px] flex flex-row justify-between gap-[20px] items-start text-white">
            <i className="fi fi-brands-instagram text-[22px]"></i>
            <i className="fi fi-brands-whatsapp text-[22px]"></i>
            <i className="fi fi-brands-facebook text-[22px]"></i>
          </div>
        </div>
      </div>
    </main>
  );
}
