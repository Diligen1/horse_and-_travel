import image from "@/assets/images/promoHome/banner.jpeg";

export async function GET() {
  const data = imageData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function imageData() {
  return [
    {
      image: [
        {
          id: 1,
          img: image,
        },
      ],
    },
  ];
}
