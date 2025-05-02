'use client';

import React, { Suspense } from "react";
import { Header } from "@/components/Header/Header";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import HowFeel from "@/components/HowFeel/HowFeel";
import ColorSystem from "@/components/ColorSystem/ColorSystem";
import Locations from "@/components/Locations/Locations";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <HowFeel />
      <ColorSystem />
      
      <Suspense fallback={<div>Carregando locais...</div>}>
        <Locations />
      </Suspense>
    </main>
  );
}
