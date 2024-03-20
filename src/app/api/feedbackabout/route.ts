export async function GET() {
  const data = infoData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}
import img from "@/assets/images/feedbackabout/1.jpg";
import img_2 from "@/assets/images/feedbackabout/2.jpg";
import img_3 from "@/assets/images/feedbackabout/3.jpg";

function infoData() {
  return [
    {
      info: [
        {
          id: 1,
          image: img,
          title: "Title",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione aliquid consectetur vero nihil ex cupiditate non facere voluptatem quae quia tempore sed maiores nisi, quisquam pariatur fugit assumenda optio!",
        },
        {
          id: 2,
          image: img_2,
          title: "lorem",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione aliquid consectetur vero nihil ex cupiditate non facere voluptatem quae quia tempore sed maiores nisi, quisquam pariatur fugit assumenda optio!",
        },
        {
          id: 3,
          image: img_3,
          title: "Kuba",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione aliquid consectetur vero nihil ex cupiditate non facere voluptatem quae quia tempore sed maiores nisi, quisquam pariatur fugit assumenda optio!",
        },
      ],
    },
  ];
}
