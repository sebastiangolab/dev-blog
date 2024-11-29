import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImDevBlog",
  description:
    "Blog about programming, javascript, react, nextjs, good practices and others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Container>
          <Header />

          {children}
        </Container>
      </body>
    </html>
  );
}
