"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RegisterComponents() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const registerHandle = async () => {
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.password2.trim() === ""
    ) {
      alert("Заполните все поля ввода");
    } else if (formData.password.length < 8) {
      alert("Пароль должен содержать не менее 8 символов");
    } else if (formData.password !== formData.password2) {
      alert("Пароли не совпадают");
    } else {
      try {
        const response = await fetch(
          "https://backk.horse-travel.com/api/users/register/user/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          alert("На вашу почту отправлено подверждение ");
          window.location.href = "/";
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("access_token", data.access);
          localStorage.setItem("refresh_token", data.refresh);
        } else {
          window.location.href = "/author";
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main className="mx-auto">
      <div
        className="w-full h-[100vh] flex justify-center items-center relative"
        style={{ background: "linear-gradient(to right, #bde0fe, #edede9)" }}
      >
        <div className="absolute z-10 lg:top-[20px] lg:left-[20px] top-[85%]">
          <Link href="/" className="text-white text-[18px] lg:text-blue-600">
            Вернутся на главную
          </Link>
        </div>
        <div className=" h-[100vh] w-full lg:w-[32%] lg:h-[80%] bg-blue-600 rounded-[16px] justify-center flex flex-col items-center">
          <div className="text-center text-white text-[26px]">
            <h1>
              Horse Travel <br />
              company Kyzart Kilemche Son Kol
            </h1>
            <h1 className="text-[16px] pt-[20px]">Регистрация</h1>
          </div>
          <div className="w-[60%] h-[40%] lg:h-[50%] gap-[40px] lg:gap-[30px] flex flex-col justify-center ">
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Имя"
              className="text-[14px] bg-transparent text-white outline-none placeholder:text-white border-b-[1px] border-b-white"
            />
            <input
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email"
              className="text-[14px] bg-transparent text-white outline-none placeholder:text-white border-b-[1px] border-b-white"
            />
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Пароль"
              className="text-[14px] bg-transparent text-white outline-none placeholder:text-white border-b-[1px] border-b-white"
            />
            <input
              type="password"
              value={formData.password2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password2: e.target.value,
                })
              }
              placeholder="Подвердите Пароль"
              className="text-[14px] bg-transparent text-white outline-none placeholder:text-white border-b-[1px] border-b-white"
            />
          </div>
          <div className="w-[50%] h-[60px]">
            <button
              onClick={registerHandle}
              className=" w-full py-[8px] bg-white rounded-[32px] text-[18px] text-blue-600"
            >
              sign up
            </button>
          </div>
          <div className="pt-[20px] text-center pb-[15px]">
            <p className="text-white text-[14px]">
              После Регистрации Авторизуйтесь <br />
              <Link
                href="/author"
                className="text-white hover:text-blue-900 text-[16px]"
              >
                Авторизация
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
