"use client";

import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue, Roboto } from "next/font/google";
import { useState, useEffect } from "react";
const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export default function FeedbackForm() {
  const [feedbackform, setFeedback] = useState<FeedbackCol[]>([]);
  const [selectedImage, setSelectedImage] = useState<FeedbackCol | null>(null);

  class FeedbackCol {
    public id: number;
    public img: string;
    public text: string;
    public title: string;
    constructor(value: FeedbackCol) {
      this.id = value.id;
      this.title = value.title;
      this.img = value.img;
      this.text = value.text;
    }
  }

  useEffect(() => {
    async function ColImage() {
      try {
        const response = await fetch("/api/feedback");
        const data = await response.json();
        setFeedback(data[0].value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      if (!feedbackform) {
        return <div>Loading...</div>;
      }
    }

    ColImage();
  }, []);

  return (
    <main className="mx-auto ">
      <div className="w-full flex relative flex-col lg:flex-row justify-center items-center ">
        {feedbackform.map((el) => (
          <div
            key={el.id}
            className=" w-full lg:w-[50%] h-[300px] relative bg-blue-600"
          >
            <Image
              src={el.img}
              alt="#"
              priority
              className=" absolute bottom-0 right-[10px] w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
            />
            <div className="flex flex-col justify-center items- absolute left-[40px] top-[40%] translate-y-[-60%]">
              <h1
                className={`${bebas.className}  text-white text-[24px] md:text-[36px] cursor-default pt-[40px] lg:pt-[80px]`}
              >
                {el.title}
              </h1>
              <p className="  text-white pr-[100px] md:pr-[180px] pb-[10px] text-[12px] md:text-[14px]">
                {el.text}
              </p>
              <Link
                href="/about"
                className={`${roboto.className} w-[180px] px-[15px] py-[10px] bg-white text-center text-blue-600 rounded-[16px]`}
              >
                get ready
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
