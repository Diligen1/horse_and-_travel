import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";
import "../styles/globals.css";

const inter = Roboto({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});
const Head = dynamic(() => import("next/head"));
export const metadata: Metadata = {
  title: "Horse | and | Travel",
  description:
    "Индивидуальный тур - это возможность получить те впечатления и эмоции которые вы захотите, а не выбрать только из тех что дадут",
  icons: {
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-brands/css/uicons-brands.css"
        ></link>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
