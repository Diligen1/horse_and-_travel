import image from "@/assets/images/gallery/photo1705559289.jpeg";
import image_2 from "@/assets/images/gallery/photo1705559289 (1).jpeg";
import image_3 from "@/assets/images/gallery/photo1705559289 (2).jpeg";
import image_4 from "@/assets/images/gallery/photo1705559289 (3).jpeg";
import image_5 from "@/assets/images/gallery/photo1705559289 (4).jpeg";
import image_6 from "@/assets/images/gallery/photo1705559289 (6).jpeg";
import image_7 from "@/assets/images/gallery/photo1705559289 (7).jpeg";
import image_8 from "@/assets/images/gallery/photo1705559289 (8).jpeg";
import image_9 from "@/assets/images/gallery/photo1705559289 (9).jpeg";
import image_10 from "@/assets/images/gallery/photo1705559289.jpeg";

export async function GET() {
  const data = imageData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function imageData() {
  return [
    {
      images: [
        {
          id: 1,
          image: image,
          text: "Изображение - 1",
        },
        {
          id: 2,
          image: image_2,
          text: "Изображение - 2",
        },
        {
          id: 3,
          image: image_3,
          text: "Изображение - 3",
        },
        {
          id: 4,
          image: image_4,
          text: "Изображение - 4",
        },
        {
          id: 5,
          image: image_5,
          text: "Изображение - 5",
        },
        {
          id: 6,
          image: image_6,
          text: "Изображение - 6",
        },
        {
          id: 7,
          image: image_7,
          text: "Изображение - 6",
        },
        {
          id: 8,
          image: image_8,
          text: "Изображение - 6",
        },
        {
          id: 9,
          image: image_9,
          text: "Изображение - 6",
        },
        {
          id: 10,
          image: image_10,
          text: "Изображение - 6",
        },
      ],
    },
  ];
}
