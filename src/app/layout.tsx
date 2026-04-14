import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immediate Connect — Kereskedj kriptovalutákkal profi módon",
  description:
    "Csatlakozz az Immediate Connect platformhoz, és kapcsolódj tapasztalt brókerekhez. Egyszerű indulás, tiszta folyamat, valós piaci betekintés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
