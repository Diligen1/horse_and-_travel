export async function POST() {
  const data = reviewsData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function reviewsData() {
  return [
    {
      reviews: [
        { id: 1, name: "", title: "", text: "" },
        { id: 2, name: "", title: "", text: "" },
      ],
    },
  ];
}
