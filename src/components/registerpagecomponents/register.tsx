"use client";
import { useState, useEffect } from "react";
import style from "@/styles/register.module.css";
import Link from "next/link";
import { Roboto, Bebas_Neue } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});
const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
export default function RegisterComponents() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerHandle = async () => {
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      alert("Заполните все поля ввода");
    } else {
      try {
        const response = await fetch(
          "http://52.59.220.58/users/register/user/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        if (data.success) {
          window.location.href = "/";
        } else {
          alert("неверные учетные данные");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const authorHandle = async () => {
    try {
      const response = await fetch("http://52.59.220.58/users/login/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = "/";
        return data.user;
      } else {
        throw new Error("Ошибка Авторизации");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <main className="mx-auto">
      <div
        className="w-full h-[100vh] flex justify-center items-center relative"
        style={{ background: "linear-gradient(to right, #bde0fe, #edede9)" }}
      >
        <div className="w-[100%] sm:w-[70%] h-[100vh] sm:h-[80%] bg-white flex flex-row">
          <div className="w-[100%] relative flex flex-row justify-center text-center items-center">
            <div
              className={` ${style.left_block} ${
                isActive ? style.active : ""
              } w-[50%] h-[100%] flex flex-col justify-center items-center bg-white`}
            >
              <div className="h-[100px] gap-[10px] flex flex-col  items-center">
                <h1
                  className={`${roboto.className} text-blue-600  text-[24px] font-bold cursor-default`}
                >
                  Регистрация
                </h1>
                <p
                  className={`text-[14px] text-blue-600 cursor-default ${roboto.className} `}
                >
                  Зарегестрируйтесь что бы продолжить
                </p>
              </div>
              <div className="flex flex-col h-[40%] justify-evenly items-center">
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="Введите имя"
                  className={`bg-blue-300 text-blue-600 w-[280px] outline-none text-[12px] px-[10px] py-[8px] ${style.input}`}
                />
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Введите Email"
                  className={`bg-blue-300 text-blue-600 w-[280px] outline-none text-[12px] px-[10px] py-[8px] ${style.input} `}
                />
                <input
                  type="text"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Введите пароль"
                  className={`bg-blue-300 text-blue-600 w-[280px] outline-none text-[12px] px-[10px] py-[8px] ${style.input}`}
                />
                <input
                  type="text"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Повторите пароль"
                  className={`bg-blue-300 text-blue-600 w-[280px] outline-none text-[12px] px-[10px] py-[8px] ${style.input} `}
                />
              </div>
              <div className="pt-[20px]">
                <button
                  onClick={registerHandle}
                  className=" text-[14px] px-[50px] py-[8px] rounded-[32px] bg-blue-600 text-white "
                >
                  ВХОД
                </button>
              </div>
              <div className="absolute top-[5px] right-[10px] opacity-50">
                <Link href="/" className="text-[14px]">
                  Вернуться назад
                </Link>
              </div>
            </div>
            <div
              className={` ${style.right_block} ${
                isActive ? style.active : ""
              } w-[50%] h-[100%] hidden md:flex flex-col justify-center items-center bg-white`}
            >
              <div className="h-[100px] gap-[10px] flex flex-col  items-center">
                <h1
                  className={`${roboto.className} text-blue-600  text-[24px] font-bold cursor-default`}
                >
                  Авторизация
                </h1>
                <p
                  className={`text-[14px] text-blue-600 cursor-default ${roboto.className} `}
                >
                  Авторизуйтесь что бы продолжить
                </p>
              </div>
              <div className="flex flex-col h-[40%] justify-center gap-[30px] items-center">
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Введите Email"
                  className={`bg-blue-300 text-blue-600 w-[280px] outline-none text-[12px] px-[10px] py-[8px] ${style.input} `}
                />
                <input
                  type="text"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Введите пароль"
                  className={`bg-blue-300 text-blue-600 w-[280px] outline-none text-[12px] px-[10px] py-[8px] ${style.input}`}
                />
              </div>
              <div className="pt-[20px]">
                <button
                  onClick={authorHandle}
                  className=" text-[14px] px-[50px] py-[8px] rounded-[32px] bg-blue-600 text-white "
                >
                  ВХОД
                </button>
              </div>
              <div className="absolute top-[5px] left-[10px] opacity-50">
                <Link href="/" className="text-[14px]">
                  Вернуться назад
                </Link>
              </div>
            </div>
            <div
              className={`${style.block} ${
                isActive ? style.active : ""
              } w-[50%] h-[100%] bg-blue-600 hidden md:flex`}
            ></div>
            <div
              className={`${style.left_contain} ${
                isActive ? style.active : ""
              } w-[50%] h-[100%] hidden md:flex flex-col justify-center items-center`}
            >
              <p
                className={`absolute top-[10px] left-[10px] text-[22px] text-white ${bebas.className}`}
              >
                Horse and Travel
              </p>
              <div className="h-[50%] w-[50%] flex flex-col justify-around items-center">
                <h1 className={`text-white text-[24px] ${roboto.className}`}>
                  Регистрация
                </h1>
                <h1 className={`text-white text-[16px] ${roboto.className}`}>
                  Если у вас нету Аккаунта можете зарегестрироваться
                </h1>
                <button
                  onClick={handleButtonClick}
                  className="text-blue-600 bg-white px-[30px] py-[10px] rounded-[16px]"
                >
                  Регистрация
                </button>
              </div>
            </div>
            <div
              className={`${style.right_contain} ${
                isActive ? style.active : ""
              } w-[50%] h-[100%] hidden md:flex flex-col justify-center items-center`}
            >
              <p
                className={`absolute top-[10px] right-[10px] text-[22px] text-white ${bebas.className}`}
              >
                Horse and Travel
              </p>
              <div className="h-[50%] w-[50%] flex flex-col justify-around items-center">
                <h1 className={`text-white text-[24px] ${roboto.className}`}>
                  Авторизация
                </h1>
                <h1 className={`text-white text-[16px] ${roboto.className}`}>
                  Если у вас есть Аккаунта можете войти
                </h1>
                <button
                  onClick={handleButtonClick}
                  className="text-blue-600 bg-white px-[30px] py-[10px] rounded-[16px]"
                >
                  Авторизация
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
