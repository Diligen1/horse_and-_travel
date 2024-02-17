"use client";
import image from "@/assets/images/feedback.img/mountains.png";
import image_2 from "@/assets/images/feedback.img/Maps.png";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue, Roboto } from "next/font/google";
import { useState, useEffect } from "react";
const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
export default function FeedbackForm() {
  return (
    <main className="mx-auto " id="FeedbackForm">
      <div className="w-full flex relative flex-col lg:flex-row justify-center items-center">
        <div className=" w-full lg:w-[50%] h-[300px] relative bg-orange-300">
          <Image
            src={image}
            alt="#"
            priority
            className=" absolute bottom-0 right-[10px] w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
          />
          <div className="flex flex-col justify-center items- absolute left-[40px] top-[40%] translate-y-[-60%]">
            <h1
              className={`${bebas.className}  text-violet-700 text-[24px] md:text-[36px] cursor-default pt-[40px] lg:pt-[80px]`}
            >
              Lorem ipsum title
            </h1>
            <p className="  text-violet-700 pr-[100px] md:pr-[180px] pb-[10px] text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              reprehenderit eius quisquam animi fugiat repellat qui incidunt
              est, assumenda ad sunt dolor, quod natus nostrum quo explicabo,
              pariatur voluptatem nobis?
            </p>
            <Link
              href="/"
              className={`${roboto.className} w-[180px] px-[15px] py-[10px] bg-violet-700 text-center text-white rounded-[16px]`}
            >
              get ready
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-[300px] relative bg-violet-700">
          <Image
            src={image_2}
            alt="#"
            priority
            className="absolute bottom-0 right-[10px] w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
          />
          <div className="flex flex-col justify-center items- absolute left-[40px] top-[40%] translate-y-[-60%]">
            <h1
              className={`${bebas.className}  text-orange-300 text-[24px] md:text-[36px] cursor-default pt-[40px] lg:pt-[80px]`}
            >
              Lorem ipsum title
            </h1>
            <p className="pr-[100px] md:pr-[180px] pb-[10px] text-[12px] md:text-[14px] text-orange-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              reprehenderit eius quisquam animi fugiat repellat qui incidunt
              est, assumenda ad sunt dolor, quod natus nostrum quo explicabo,
              pariatur voluptatem nobis?
            </p>
            <Link
              href="/"
              className={`${roboto.className}  w-[180px] px-[15px] py-[10px] bg-orange-300 text-center text-white rounded-[16px]`}
            >
              get ready
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
