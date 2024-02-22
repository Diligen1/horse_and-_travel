"use client";
import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});
export default function ReviewsComponents() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <main className="mx-auto">
      <div className="w-full pt-[80px] flex flex-row justify-center items-center">
        <div className="w-[30%] h-[100vh] bg-slate-200 flex justify-center items-center">
          <h1
            className={`text-[38px] font-bold cursor-default ${roboto.className}`}
          >
            Какие у вас впечатления ?
          </h1>
        </div>
        <div className="w-[70%] h-[100vh]">
          <div className=" w-full  bg-blue-300">
            <h1>Как бы вы оценили свое прибывание ?</h1>
            <div>
              <input type="text" placeholder="Введите название отзыва" />
            </div>
          </div>
          <div className="w-full  bg-blue-300">
            <h1>Напишите отзыв</h1>
            <div>
              <textarea rows={5} cols={30} placeholder="Введите текст..." />
            </div>
          </div>
          <div className="w-full  bg-blue-300">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
