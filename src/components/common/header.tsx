"use client";
import { Bebas_Neue, Comfortaa } from "next/font/google";
import Link from "next/link";
import "@/styles/globals.css";

const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const comfortaa = Comfortaa({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export default function Header() {
  return (
    <header className="mx-auto bg-black flex items-center justify-center ">
      <div className=" w-full flex justify-around items-center pt-[30px] flex-row">
        <div>
          <Link
            href="/"
            className={`${bebas.className} text-[32px] text-white `}
          >
            Horse and Travel
          </Link>
        </div>
        <div className="flex flex-row items-center justify-around w-[30%]">
          <div className="flex flex-col items-center justify-center">
            <i className="fi fi-rr-home text-white"></i>
            <h1 className={`${comfortaa.className} text-white`}>Главная </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fi fi-rr-users-alt text-white"></i>
            <h1 className={`${comfortaa.className} text-white`}>О нас</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i className="fi fi-rr-edit text-white"></i>
            <h1 className={`${comfortaa.className} text-white`}>Отзыв</h1>
          </div>
        </div>
        <div className="w-[20%] flex flex-row">
          <div className="flex px-[20px] ">
            <i className="fi fi-rr-globe text-white"></i>
            <h1 className={`${comfortaa.className} text-white`}>RU</h1>
          </div>
          <div>
            <Link href="/" className={`${comfortaa.className} text-white`}>
              Вход
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
