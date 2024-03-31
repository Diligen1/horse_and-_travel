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
          title: "О нас",
          text: "Мы компания конные путешествие  с 2017 года занимаемся по организации конных туров о́зеро Сон Куль. У нас работает про́фессиональные местные гиды Жакшылык Султан Эрлан, Мы работаем без посредников на прямую с клиентами. Имеется лошади ю́рто́чные лагеря гостевой до́м в Кызарт Мы всегда рады к сотрудничеству, добро  по́жаловать солнечный Кы́ргызстан, В компании конные путешествие",
        },
      ],
    },
  ];
}
