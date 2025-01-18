import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
