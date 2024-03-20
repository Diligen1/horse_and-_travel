"use client";
import MyMap from "../common/myMap";
import MyMap2 from "../common/myMap2";

export default function MapsSection() {
  return (
    <main className="mx-auto">
      <div className="w-[100%] h-[500px] flex  gap-[40px] justify-center items-center">
        <MyMap2 />
        <MyMap />
      </div>
    </main>
  );
}
