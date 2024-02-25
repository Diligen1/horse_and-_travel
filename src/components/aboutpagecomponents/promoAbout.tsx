"use client";
import { Header } from "@/components";
import Image from "next/image";
import image from "@/assets/images/promoHome/banner.jpeg";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export default function PromoAbout() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="w-full relative  flex justify-center items-start">
        <Image
          src={image}
          className="w-full lg:max-h-[760px] md:max-h-[560px] max-h-[360px]"
          alt="#"
          priority
        />
        <div className="absolute top-[50%] left-[50%] z-[5] translate-x-[-50%] translate-y-[-50%]">
          <h1
            className={`sm:text-[36px] text-white  text-[18px] cursor-default text-center ${comfortaa.className}`}
          >
            About us
          </h1>
          <h3
            className={`text-[18px] text-white text-center ${comfortaa.className}`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            nam quia. Aspernatur quia perferendis, nesciunt cum unde doloribus
            laborum. Beatae adipisci quia ullam repellendus quod quidem
            reprehenderit explicabo nostrum voluptate!
          </h3>
        </div>
      </div>
    </main>
  );
}
