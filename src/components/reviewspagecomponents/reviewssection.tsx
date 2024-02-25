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
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    text: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    let imageUrl = null;
    if (file && file.type.startsWith("image/")) {
      imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
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
                className={`${style.input} w-[300px] md:w-[400px] text-blue-600 px-[10px] py-[8px] outline-none rounded-[8px] border-blue-600 border-[1px] bg-transparent`}
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col pb-[20px] justify-center items-center ">
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer w-[200px] text-white bg-blue-600 px-[40px] py-[10px] rounded-[16px]"
            >
              Выбрать файл
            </label>
            {selectedImage && (
              <div className="pt-[20px] w-full flex flex-col justify-center items-center">
                <img src={selectedImage} alt="Selected" className="w-[300px]" />
              </div>
            )}
          </div>
          <div className="w-[50%] pt-[40px] flex flex-col pb-[20px] justify-center items-center ">
            <button className="py-[10px] px-[30px] bg-transperent text-blue-600 border-blue-600 border-[1px]">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
