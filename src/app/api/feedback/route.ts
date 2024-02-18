import svg from "@/assets/images/feedback.img/mountains.png";
import svg_2 from "@/assets/images/feedback.img/Maps.png";

export async function GET() {
  const data = feedbackData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function feedbackData() {
  return [
    {
      value: [
        {
          id: 1,
          title: "Lorem",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit eius quisquam animi fugiat repellat qui incidunt est, assumenda ad sunt dolor, quod natus nostrum quo explicabo, pariatur voluptatem nobis? ",
          img: svg,
          color: "",
        },
        {
          id: 2,
          title: "Lorem",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit eius quisquam animi fugiat repellat qui incidunt est, assumenda ad sunt dolor, quod natus nostrum quo explicabo, pariatur voluptatem nobis? ",
          img: svg_2,
        },
      ],
    },
  ];
}
