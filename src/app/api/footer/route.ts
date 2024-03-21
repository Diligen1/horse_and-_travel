export async function GET() {
  const data = infoData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function infoData() {
  return [
    {
      info: [
        {
          id: 1,
          number: "707 087 008",
          email: "shekerbek.suranchiev@gmail.com",
          adress: "kyzart@horse-travel.kg",
        },
      ],
    },
  ];
}
