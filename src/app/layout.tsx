import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const inter = Roboto({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Horse | and | Travel",
  description: "Конный тур в Бишкеке",
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
