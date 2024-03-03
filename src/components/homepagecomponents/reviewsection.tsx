"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Roboto, Comfortaa } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

const comfortaa = Comfortaa({
  weight: ["400"],
  display: "swap",
  subsets: ["cyrillic"],
});
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ReviewsSection() {
  const [reviewDate, setReviewDate] = useState([
    { id: 1, text_review: "", user_name: "" },
  ]);

  useEffect(() => {
    async function RevDate() {
      try {
        const response = await fetch(
          "https://horse-travel.com/reviews/reviews/",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        if (Array.isArray(data.reviews)) {
          setReviewDate(data.reviews);
        } else {
          console.error("Reviews data is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    RevDate();
  }, []);

  return (
    <main className="mx-auto">
      <div className="w-full h-[400px]  lg:h-[500px] flex flex-col bg-white justify-center items-center">
        <div className="pb-[20px] lg:pb-[40px]">
          <h1
            className={` ${comfortaa.className} text-[18px] text-blue-600 lg:text-[36px]`}
          >
            REVIEW
          </h1>
        </div>
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="h-[300px] lg:h-[350px] w-[95%] rounded-[32px]  "
        >
          {reviewDate.map((el) => (
            <SwiperSlide key={el.id}>
              <div className=" w-full h-[100%] bg-blue-600 flex flex-col justify-center items-center rounded-[32px]">
                <div className="flex flex-row w-full h-[50%]">
                  <div className="w-[70%] px-[20px] flex flex-col justify-center gap-[10px]">
                    <h1
                      className={`${roboto.className} leading-[130%] text-[36px] pr-[120px] text-white`}
                    >
                      {el.user_name}
                    </h1>
                    <h3
                      className={`${roboto.className} text-[18px] text-white`}
                    >
                      {el.text_review}
                    </h3>
                  </div>
                </div>
                <div className="w-full h-[60%] lg:h-[50%]">
                  <h2 className="px-[20px] text-white"></h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
