"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ReviewsSection() {
  const [reviewDate, setReviewDate] = useState([
    { user_name: "", text_review: "", id: "", created_at: "", user: "" },
  ]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const endpoint =
          "https://backk.horse-travel.com/api/reviews/list/reviews/";

        const response = await fetch(endpoint, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        setReviewDate(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <main className="mx-auto">
      <div className="w-full h-[400px]  lg:h-[500px] flex flex-col bg-white justify-center items-center">
        <div className="pb-[20px] lg:pb-[40px]">
          <h1 className={`text-[18px] text-blue-600 lg:text-[36px]`}>Отзывы</h1>
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
          {reviewDate.map((review, index) => (
            <SwiperSlide key={index}>
              <div className=" w-full h-[100%] bg-blue-600 flex flex-col justify-center items-center rounded-[32px]">
                <div className="w-[80%] h-[30%]  flex justify-start items-center">
                  <h1
                    className={` leading-[130%] text-[30px] pr-[120px] text-white`}
                  >
                    {review.user_name}
                  </h1>
                </div>
                <div className="w-[80%] h-[60%]  flex justify-start items-start">
                  <h3 className={` text-[18px] text-white`}>
                    {review.text_review}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
