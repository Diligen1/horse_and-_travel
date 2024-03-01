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
  const [promoData, setPromoDate] = useState<imageCol[]>([]);

  class imageCol {
    public id: number;
    public img: string;
    constructor(image: imageCol) {
      this.id = image.id;
      this.img = image.img;
    }
  }

  useEffect(() => {
    async function ColImage() {
      try {
        const response = await fetch("/api/promoHome");
        const data = await response.json();
        setPromoDate(data[0].image);
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
          className="w-full relative lg:max-h-[760px] flex justify-center items-start"
        >
          <Image
            src={el.img}
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
