export async function GET() {
  const data = reviewsData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

import image from "@/assets/images/gallery/photo1705559289 (4).jpeg";
import image_2 from "@/assets/images/gallery/photo1705559289 (5).jpeg";
function reviewsData() {
  return [
    {
      review: [
        {
          id: 1,
          image: image,
          name: "Маратбеков Самат",
          title: "Хорошая была поездка",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti nisi nesciunt tempora, voluptatibus quam cum voluptas, obcaecati enim sit, id quos facere nulla ipsa veritatis corporis ex harum quis.",
        },
        {
          id: 2,
          image: image_2,
          name: "Абакиров Талантбек",
          title: "Не понравилось ",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti nisi nesciunt tempora, voluptatibus quam cum voluptas, obcaecati enim sit, id quos facere nulla ipsa veritatis corporis ex harum quis.",
        },
        {
          id: 3,
          image: image_2,
          name: "Камчыбеков уулу Искендер",
          title: "Не понравилось ",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti nisi nesciunt tempora, voluptatibus quam cum voluptas, obcaecati enim sit, id quos facere nulla ipsa veritatis corporis ex harum quis.",
        },
      ],
    },
  ];
}
