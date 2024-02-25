"use client";
import Image from "next/image";
import { Header } from "..";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
const comfortaa = Comfortaa({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
export default function PromoHome() {
  const [promoData, setPromoData] = useState<promoHomeData[]>([]);

  class promoHomeData {
    public id: number;
    public imge: string;
    constructor(img: promoHomeData) {
      this.id = img.id;
      this.imge = img.imge;
    }
  }
  useEffect(() => {
    async function ColImage() {
      try {
        const response = await fetch("/api/promoAbout");
        const data = await response.json();
        setPromoData(data[0].images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    ColImage();
  }, []);
  return (
    <main className="mx-auto ">
      <Header />
      {promoData.map((el) => (
        <div
          key={el.id}
          className="w-full relative  flex justify-center items-start"
        >
          <Image
            src={el.imge}
            className="w-full lg:max-h-[760px] md:max-h-[560px] max-h-[360px]"
            alt="#"
            priority
          />
          <div className="absolute top-0 sm:top-[20%] left-[50%] lg:top-[40%] lg:left-[50%] w-full transform translate-x-[-50%] -translate-y-[-50%] lg:translate-x-[-50%] lg:-translate-y-[-50%]   flex flex-col justify-evenly  items-center">
            <h1
              className={`${comfortaa.className} sm:text-[36px] text-[18px] text-white cursor-default  pb-[20px]`}
            >
              Horse and Travel
            </h1>
            <Link
              href="/#gallery"
              className={`${comfortaa.className} sm:px-[30px] px-[20px] py-[10px] rounded-[8px] bg-blue-600 text-white`}
            >
              set gallery
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
