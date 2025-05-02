import { ReactNode } from "react";  
import Head from "next/head";
import "./globals.css";  // Garantir que o globals.css seja importado

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Head>
        <title>AjudarVocê - Ajuda em saúde mental</title>
        <meta name="description" content="O AjudarVocê conecta pessoas de Manaus a apoio psicológico gratuito." />
        <meta name="keywords" content="manaus, saude mental, psicólogo, ajuda" />
        <meta name="author" content="AjudarVocê" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="AjudarVocê - Sua ajuda em saúde mental" />
        <meta property="og:description" content="O AjudarVocê conecta pessoas de Manaus a apoio psicológico gratuito." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://ajudarvoce.vercel.app/" />
      </Head>
      
      <body> {/* Não precisa aplicar a fonte diretamente aqui, já que isso foi feito no globals.css */}
        {children}  {/* Renderiza os componentes filhos */}
      </body>
    </html>
  );
}
