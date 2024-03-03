"use client";
import { useState } from "react";
import { Roboto } from "next/font/google";
import style from "@/styles/reviews.module.css";

const roboto = Roboto({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export default function ReviewsComponents() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://horse-travel.com/reviews/reviews/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Данные успешно отправлены на сервер");
      } else {
        console.error("Ошибка при отправке данных на сервер");
        console.log(formData);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  return (
    <main className="mx-auto">
      <div className="w-full pt-[80px] flex flex-row justify-center items-center">
        <div className="w-[30%] h-[90vh] border-r-[1px] border-blue-600 hidden md:flex justify-center items-center">
          <h1
            className={`text-[38px] font-bold cursor-default ${roboto.className}`}
          >
            Какие у вас впечатления ?
          </h1>
        </div>
        <div className="w-[70%] h-[100%] flex flex-col justify-around items-center ">
          <div className=" w-full h-[30%] justify-center flex flex-col items-center">
            <h1 className="text-[18px] w-[200px] pb-[20px] md:w-auto font-bold">
              Как бы вы оценили свое прибывание ?
            </h1>
            <div>
              <input
                className={`w-[300px] md:w-[400px] px-[10px] text-blue-600 py-[8px] outline-none rounded-[8px] border-blue-600 border-[1px] bg-transparent ${style.input}`}
                type="text"
                placeholder="Введите название отзыва"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-[50%] h-[30%] py-[40px] flex flex-col justify-center items-center ">
            <h1 className="text-[18px] w-[200px] md:w-auto pb-[20px] font-bold">
              Напишите отзыв
            </h1>
            <div>
              <textarea
                rows={5}
                cols={30}
                placeholder="Введите текст..."
                name="text"
                value={formData.text}
                onChange={handleChange}
                className={`${style.input} w-[300px] md:w-[400px] text-blue-600 px-[10px] py-[8px] outline-none rounded-[8px] border-blue-600 border-[1px] bg-transparent`}
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col pb-[20px] justify-center items-center ">
            <button
              onClick={handlePost}
              className="py-[10px] px-[30px] bg-transperent text-blue-600 border-blue-600 border-[1px]"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
