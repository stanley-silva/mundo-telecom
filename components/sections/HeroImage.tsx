"use client";

import React from "react";
import Image from "next/image";
import { Headphones, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function HeroImage() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center lg:justify-end">
      {/* Decorative Brand Arcs Behind */}
      <div className="arc-decor w-80 h-80 -top-8 -right-8 opacity-25 hidden sm:block pointer-events-none" />
      <div className="arc-decor-glow w-96 h-96 -bottom-10 -left-10 opacity-20 hidden sm:block pointer-events-none" />

      {/* Main Image Container */}
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] xl:h-[560px] flex items-end justify-center lg:justify-end">
        <Image
          src="/images/fotos-home/foto-hero-section-1.png"
          alt="Especialista em atendimento e telefonia corporativa da Mundo Telecom"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
          className="object-contain object-bottom lg:object-right-bottom transition-transform duration-700 hover:scale-[1.02]"
        />

        {/* Floating Verified Support Badge */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-xs p-3 sm:p-3.5 rounded-2xl bg-mundo-navy-surface/90 backdrop-blur-md border border-white/20 text-white flex items-center gap-3 shadow-2xl z-20">
          <div className="w-9 h-9 rounded-xl bg-mundo-orange/20 border border-mundo-orange/40 text-mundo-orange flex items-center justify-center shrink-0">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-display font-bold text-white leading-tight">
              Suporte Técnico Humanizado
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-300">
              Operação 24/7 por especialistas próprios
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
