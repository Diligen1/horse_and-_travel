"use client";
import Image from "next/image";
import image from "@/assets/images/promoHome/banner.jpeg";
import { Header } from "..";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
const comfortaa = Comfortaa({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
export default function PromoHome() {
  return (
    <main className="mx-auto ">
      <Header />

      <div className="w-full relative  flex justify-center items-start">
        <Image
          src={image}
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
    </main>
  );
}
