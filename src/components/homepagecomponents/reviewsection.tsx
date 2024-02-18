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
  const [reviewDate, setReviewDate] = useState<reviewCol[]>([]);

  class reviewCol {
    public id: number;
    public image: string;
    public name: string;
    public title: string;
    public text: string;
    constructor(review: reviewCol) {
      (this.id = review.id),
        (this.image = review.image),
        (this.name = review.name),
        (this.title = review.title),
        (this.text = review.text);
    }
  }

  useEffect(() => {
    async function RevDate() {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setReviewDate(data[0].review);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    RevDate();
  }, []);

  return (
    <main className="mx-auto">
      <div className="w-full h-[500px] flex flex-col bg-white justify-center items-center">
        <div className="pb-[40px]">
          <h1 className={` ${comfortaa.className} text-[42px] text-blue-600`}>
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
          className="h-[280px] lg:h-[350px] w-[95%] rounded-[32px]  "
        >
          {reviewDate.map((el) => (
            <SwiperSlide key={el.id}>
              <div className=" w-full h-[100%] bg-blue-600 flex flex-col justify-center items-center rounded-[32px]">
                <div className="flex flex-row w-full h-[50%]">
                  <div className="w-[30%] flex justify-center items-center">
                    <Image
                      src={el.image}
                      alt="#"
                      priority
                      className="w-[140px] h-[140px] p-[10px] rounded-[32px] "
                    />
                  </div>
                  <div className="w-[70%] flex flex-col justify-center gap-[10px]">
                    <h1
                      className={`${roboto.className} text-[24px] pr-[260px] text-white`}
                    >
                      {el.name}
                    </h1>
                    <h3
                      className={`${roboto.className} text-[18px] text-white`}
                    >
                      {el.title}
                    </h3>
                  </div>
                </div>
                <div className="w-full h-[50%]">
                  <h2 className="p-[10px] text-white">{el.text}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
