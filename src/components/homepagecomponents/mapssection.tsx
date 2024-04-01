"use client";
import MyMap2 from "../common/myMap2";

export default function MapsSection() {
  return (
    <main className="mx-auto">
      <div className="w-full h-[500px] flex lg:flex-row flex-col gap-[40px] justify-center items-center">
        <MyMap2 />
      </div>
    </main>
  );
}
