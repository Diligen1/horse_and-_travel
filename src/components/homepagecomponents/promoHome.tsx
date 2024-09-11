"use client";
import Image from "next/image";
import { Header } from "..";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PromoHome() {
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backk.horse-travel.com/api/baner/detail/baner/1/",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const responseData = await response.json();
        setImageData(responseData.image);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="mx-auto ">
      <Header />
      <div className="w-full relative lg:max-h-[760px] flex justify-center items-start">
        {imageData && (
          <img
            src={imageData}
            width={1080}
            height={1000}
            className="w-full lg:max-h-[760px] md:max-h-[560px] max-h-[360px] object-cover"
            alt="#"
          />
        )}
        <div className="absolute top-0 sm:top-[20%] left-[50%] lg:top-[40%] lg:left-[50%] w-full transform translate-x-[-50%] -translate-y-[-50%] lg:translate-x-[-50%] lg:-translate-y-[-50%]   flex flex-col justify-evenly  items-center">
          <h1
            className={` text-center sm:text-[36px] text-[18px] text-white cursor-default  pb-[20px]`}
          >
            Horse Travel <br /> company Kyzart Kilemche Son Kol
          </h1>
          <Link
            href="/#gallery"
            className={` sm:px-[30px] px-[20px] py-[10px] rounded-[8px] bg-blue-600 text-white`}
          >
            Посмотреть Галерею
          </Link>
        </div>
      </div>
    </main>
  );
}
