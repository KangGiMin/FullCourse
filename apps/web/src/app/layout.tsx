import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "FullCourse | 부산 맛집 가이드",
  description: "부산의 맛집을 찾고, 사람들의 이야기를 만나다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}