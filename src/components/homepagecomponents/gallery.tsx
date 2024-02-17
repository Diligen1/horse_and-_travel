"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Gallery() {
  const [modalopen, setModelopen] = useState(false);
  const [imageData, setImageDate] = useState<imagesCol[]>([]);
  const [selectedImage, setSelectedImage] = useState<imagesCol | null>(null);

  function handlemodelopen(image: imagesCol) {
    setSelectedImage(image);
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
      <div className="w-full h-[600px] relative">
        <div>
          <h1>GALLERY</h1>
        </div>
        <div className="w-full flex flex-wrap  justify-center items-center">
          {imageData.map((el) => (
            <div key={el.id} className="w-[250px] h-[250px] overflow-y-hidden">
              <Image
                src={el.image}
                alt="#"
                priority
                className="w-[250px] "
                onClick={() => handlemodelopen(el)}
              />
            </div>
          ))}
        </div>
        {modalopen && (
          <div className="w-[100%] h-[100vh] lg:w-[80%] lg:h-[90vh] bg-blue-700 z-10 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] fixed flex-row justify-center items-center">
            <div
              onClick={handlemodelclose}
              className="text-[24px] text-white absolute z-20 right-[30px] cursor-pointer transform translate-x-1/2 top-[20px]"
            >
              <i className="fi fi-rr-cross"></i>
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
                    src={selectedImage?.image}
                    alt="#"
                    priority
                    className=" w-full lg:h-full lg:w-auto h-auto  lg:py-[5px]"
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
