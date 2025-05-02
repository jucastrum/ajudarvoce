import { ReactNode } from "react";
import Head from "next/head";
import "./globals.css"; // Garantir que o globals.css seja importado

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Breathing+Personal+Use+Only&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=SF+Pro+Text:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=SF+UI+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
