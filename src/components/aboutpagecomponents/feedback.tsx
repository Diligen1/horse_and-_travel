"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function FeedbackAbout() {
  const [infoData, setInfoData] = useState<ImageData[]>([]);
  class ImageData {
    public id: number;
    public image: string;
    public title: string;
    public text: string;
    constructor(info: ImageData) {
      this.id = info.id;
      this.image = info.image;
      this.title = info.title;
      this.text = info.text;
    }
  }
  useEffect(() => {
    async function InfoImage() {
      try {
        const response = await fetch("/api/feedbackabout");
        const data = await response.json();
        setInfoData(data[0].info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    InfoImage();
  }, []);
  return (
    <main className="mx-auto">
      <div className="w-full pt-[120px] flex flex-col gap-[40px]">
        {infoData.map((el) => (
          <div key={el.id} className="flex flex-row w-full h-[400px]">
            <div className="w-[50%] flex justify-center items-center">
              <Image
                src={el.image}
                alt="/"
                priority
                className="w-[500px] h-[300px]"
              />
            </div>
            <div className="w-[50%] flex flex-col gap-[40px] justify-center items-start">
              <h2 className="text-[24px] px-[40px]">{el.title}</h2>
              <p className="text-[16px] px-[40px]">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
