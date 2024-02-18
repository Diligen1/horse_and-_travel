"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Comfortaa } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const comfortaa = Comfortaa({
  weight: ["400"],
  display: "swap",
  subsets: ["cyrillic"],
});

export default function Gallery() {
  const [modalopen, setModelopen] = useState(false);
  const [imageData, setImageDate] = useState<imagesCol[]>([]);
  const [selectedImage, setSelectedImage] = useState<imagesCol | null>(null);

  function handlemodelopen() {
    setModelopen(true);
  }
  function handlemodelclose() {
    setModelopen(false);
  }
  class imagesCol {
    public id: number;
    public image: string;
    public text: string;
    constructor(images: imagesCol) {
      this.id = images.id;
      this.image = images.image;
      this.text = images.text;
    }
  }

  useEffect(() => {
    async function ColImage() {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        setImageDate(data[0].images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    ColImage();
  }, []);

  return (
    <main className="mx-auto " id="gallery">
      <div className="w-full pb-[20px] lg:pb-[80px]z relative border-blue-600 bg-white border-b-[2px] ">
        <div className="text-center py-[20px]">
          <h1
            className={` ${comfortaa.className} text-[18px] text-blue-600 lg:text-[36px]`}
          >
            GALLERY
          </h1>
        </div>
        <div className="w-full flex flex-wrap  justify-center items-center">
          {imageData.map((el) => (
            <div key={el.id} className="w-[260px] h-[250px] overflow-y-hidden">
              <Image
                src={el.image}
                alt="#"
                priority
                className="w-[260px] "
                onClick={handlemodelopen}
              />
            </div>
          ))}
        </div>
        {modalopen && (
          <div className="w-[100%] h-[100vh] lg:w-[38%] lg:h-[90vh] bg-blue-700 z-30 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] fixed flex-row justify-center items-center">
            <div
              onClick={handlemodelclose}
              className="text-[24px] text-white absolute z-40 right-[30px] cursor-pointer transform translate-x-1/2 top-[10px]"
            >
              <i className="fi fi-rr-cross  text-[20px]"></i>
            </div>
            <Swiper
              pagination={{ clickable: true }}
              className="w-full h-[100%]"
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              {imageData.map((el) => (
                <SwiperSlide key={el.id} className=" w-full h-[100%]  ">
                  <Image
                    src={el.image}
                    alt="#"
                    priority
                    className="w-full lg:h-[100%] lg:w-[100%] h-[100%] aspect-3/2 object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </main>
  );
}
