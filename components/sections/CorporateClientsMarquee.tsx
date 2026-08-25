"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CorporateClientsMarquee() {
  const logosRow1 = [
    { id: "1", src: "/images/parceiros/Logo 1.png", alt: "Cliente Corporativo 1" },
    { id: "2", src: "/images/parceiros/Logo 2.png", alt: "Cliente Corporativo 2" },
    { id: "3", src: "/images/parceiros/Logo 3.png", alt: "Cliente Corporativo 3" },
    { id: "4", src: "/images/parceiros/Logo 4.png", alt: "Cliente Corporativo 4" },
    { id: "5", src: "/images/parceiros/Logo 5.png", alt: "Cliente Corporativo 5" },
    { id: "6", src: "/images/parceiros/Logo 6.png", alt: "Cliente Corporativo 6" },
    { id: "7", src: "/images/parceiros/Logo 7.png", alt: "Cliente Corporativo 7" },
  ];

  const logosRow2 = [
    { id: "8", src: "/images/parceiros/Logo 8.png", alt: "Cliente Corporativo 8" },
    { id: "9", src: "/images/parceiros/Logo 9.png", alt: "Cliente Corporativo 9" },
    { id: "10", src: "/images/parceiros/Logo 10.png", alt: "Cliente Corporativo 10" },
    { id: "11", src: "/images/parceiros/Logo 11.png", alt: "Cliente Corporativo 11" },
    { id: "12", src: "/images/parceiros/Logo 12.png", alt: "Cliente Corporativo 12" },
    { id: "13", src: "/images/parceiros/Logo 13.png", alt: "Cliente Corporativo 13" },
  ];

  // Duplicate for seamless 100% infinite looping
  const track1 = [...logosRow1, ...logosRow1, ...logosRow1];
  const track2 = [...logosRow2, ...logosRow2, ...logosRow2];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Glow Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-mundo-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center space-y-3">
        <Badge variant="orange" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
          AUTORIDADE & CREDIBILIDADE
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy tracking-tight">
          Alguns de nossos parceiros
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Empresas e instituições que confiam suas operações de voz, atendimento e infraestrutura à Mundo Telecom.
        </p>
      </div>

      {/* Track 1: Moves Left */}
      <div className="relative w-full overflow-hidden marquee-fade-mask py-2">
        <div className="animate-marquee gap-6 sm:gap-8 flex items-center">
          {track1.map((logo, idx) => (
            <div
              key={`t1-${logo.id}-${idx}`}
              className="h-20 sm:h-24 w-44 sm:w-52 shrink-0 px-6 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-mundo-orange/50 transition-all duration-300 flex items-center justify-center group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className="max-h-12 sm:max-h-14 w-auto object-contain transition-all duration-300 opacity-85 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Moves Right */}
      <div className="relative w-full overflow-hidden marquee-fade-mask py-2 mt-4">
        <div className="animate-marquee-reverse gap-6 sm:gap-8 flex items-center">
          {track2.map((logo, idx) => (
            <div
              key={`t2-${logo.id}-${idx}`}
              className="h-20 sm:h-24 w-44 sm:w-52 shrink-0 px-6 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-mundo-orange/50 transition-all duration-300 flex items-center justify-center group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className="max-h-12 sm:max-h-14 w-auto object-contain transition-all duration-300 opacity-85 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}

export default CorporateClientsMarquee;
