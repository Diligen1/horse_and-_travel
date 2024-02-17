"use client";
import { Bebas_Neue, Comfortaa } from "next/font/google";
import Link from "next/link";
import "@/styles/globals.css";

import { useState } from "react";

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
  const [burger, setBurger] = useState(false);

  function handleopenburger() {
    setBurger(true);
  }
  function handlecloseburger() {
    setBurger(false);
  }
  return (
    <header className="mx-auto bg-blue-600  flex items-center justify-center ">
      <div className=" w-full h-[80px] flex justify-around items-center flex-row">
        <div>
          <Link
            href="/"
            className={`${bebas.className} m-0 text-[24px] lg:text-[32px] text-white hover:text-blue-900 duration-500`}
          >
            Horse and Travel
          </Link>
        </div>
        <div className=" hidden lg:flex flex-row items-center justify-around gap-[5px] ">
          <div className="flex flex-col items-center text-white justify-center cursor-pointer hover:bg-white hover:text-blue-600 duration-500 px-[30px] py-12px] rounded-[18px] ">
            <i className="fi fi-rr-home "></i>
            <h1 className={`${comfortaa.className} `}>Главная</h1>
          </div>
          <div className="flex flex-col items-center  text-white justify-center cursor-pointer hover:bg-white hover:text-blue-600 duration-500 px-[30px] py-12px] rounded-[18px]">
            <i className="fi fi-rr-users-alt "></i>
            <h1 className={`${comfortaa.className} `}>О нас</h1>
          </div>
          <div className="flex flex-col items-center text-white justify-center cursor-pointer hover:bg-white hover:text-blue-600 duration-500 px-[30px] py-12px] rounded-[18px]">
            <i className="fi fi-rr-edit "></i>
            <h1 className={`${comfortaa.className} `}>Отзыв</h1>
          </div>
        </div>
        <div className="hidden lg:flex flex-row ">
          <div className="flex px-[20px] flex-row items-center py-[8px] cursor-pointer text-center bg-white text-blue-400 rounded-[18px] hover:bg-blue-400 hover:text-white duration-500">
            <i className="fi fi-rr-globe  "></i>
            <h1 className={`${comfortaa.className}text-blue-400 ml-[20px]  `}>
              RU
            </h1>
          </div>
          <div className="ml-[10px]">
            <Link
              href="/"
              className={`${comfortaa.className} lg:block px-[22px] py-[8px] text-center bg-white text-blue-400 rounded-[18px] hover:bg-blue-400 hover:text-white duration-500`}
            >
              ВХОД
            </Link>
          </div>
        </div>
        <div className="flex-block lg:hidden">
          <div
            className="lhidden w-[25px] h-[25px] flex flex-col justify-between"
            onClick={handleopenburger}
          >
            <div className="w-full h-[4px] bg-blue-800"></div>
            <div className="w-full h-[4px] bg-blue-800"></div>
            <div className="w-full h-[4px] bg-blue-800"></div>
          </div>
        </div>
      </div>
      {burger && (
        <div
          className={
            'bottom-0 w-[160px] h-[100vh] fixed left-0 bg-blue-600 flex-col items-center justify-around  transition-transform transform  duration-500 ease-in-out ${burger ? "translate-x-0" : "-translate-x-[-160px]}'
          }
        >
          <div
            onClick={handlecloseburger}
            className="text-[24px] text-white absolute right-[50%] transform translate-x-1/2 top-[20px]"
          >
            <i className="fi fi-rr-cross"></i>
          </div>
          <div className="pt-[80%]">
            <div className="h-[200px]  flex flex-col items-center justify-around">
              <div className="flex flex-row items-center justify-center">
                <i className="fi fi-rr-home text-white"></i>
                <Link
                  href="/"
                  className={`${comfortaa.className} text-white mx-[15px]`}
                >
                  Главная
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center">
                <i className="fi fi-rr-users-alt text-white"></i>
                <Link
                  href="/"
                  className={`${comfortaa.className} text-white mx-[15px]`}
                >
                  О нас
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center">
                <i className="fi fi-rr-edit text-white"></i>
                <Link
                  href="/"
                  className={`${comfortaa.className} text-white mx-[15px]`}
                >
                  Отзыв
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-[20px] h-[150px]  flex flex-col items-center justify-around ">
            <div className="flex px-[20px] flex-row items-center  ">
              <i className="fi fi-rr-globe text-white"></i>
              <h1 className={`${comfortaa.className} text-white px-[20px]`}>
                RU
              </h1>
            </div>
            <div>
              <Link
                href="/"
                className={`${comfortaa.className} lg:block text-white`}
              >
                ВХОД
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
