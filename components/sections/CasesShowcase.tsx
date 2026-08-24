"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export function CasesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONFIANÇA E PARCERIA</span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-white tracking-tight">
          Organizações que confiam na solidez da Mundo Telecom
        </h3>
        <p className="text-base text-slate-300 mt-3 leading-relaxed">
          De grandes corporações privadas a instituições públicas de referência nacional, entregamos soluções que garantem continuidade, estabilidade e segurança operacional ininterrupta.
        </p>
      </div>

      {/* Interactive Horizontal Accordion (Desktop) / Vertical (Mobile) */}
      <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 lg:h-[490px] items-stretch">
        {siteContent.caseStudies.map((cs, idx) => {
          const isActive = activeIdx === idx;
          const formattedIndex = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={cs.client}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative overflow-hidden backdrop-blur-md cursor-pointer select-none ${
                isActive
                  ? "lg:flex-[3.8] h-[440px] sm:h-[420px] lg:h-full bg-mundo-navy-surface/95 border-2 border-mundo-orange/80 shadow-2xl shadow-mundo-orange/15 p-6 sm:p-8"
                  : "lg:flex-[1] h-[100px] lg:h-full bg-mundo-navy-surface/50 border border-white/10 opacity-75 hover:opacity-100 hover:border-white/30 p-4 lg:py-8 lg:px-4"
              }`}
            >
              {/* Active Background Lighting Accent */}
              {isActive && (
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-mundo-orange/10 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* ========================================================= */}
              {/* ESTADO INATIVO (DESKTOP)                                 */}
              {/* ========================================================= */}
              {!isActive && (
                <div className="hidden lg:flex flex-col items-center justify-between h-full w-full relative z-10">
                  {/* Top: Sequential Number */}
                  <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-mundo-orange transition-colors">
                    {formattedIndex}
                  </span>

                  {/* Middle 1: Client Logo/Avatar with Grayscale */}
                  {cs.image && (
                    <div className="w-12 h-12 rounded-2xl overflow-hidden relative border border-white/15 bg-white/5 p-1.5 shrink-0 my-3">
                      <Image
                        src={cs.image}
                        alt={cs.client}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}

                  {/* Middle 2: Company Name in Vertical Writing Mode */}
                  <div className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-widest font-display font-bold text-xs text-slate-300 group-hover:text-white transition-colors my-auto py-2">
                    {cs.client}
                  </div>

                  {/* Bottom: Animated Pulsing Light Point */}
                  <div className="relative flex h-3 w-3 items-center justify-center mt-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mundo-orange opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mundo-orange" />
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* ESTADO INATIVO (MOBILE BAR)                               */}
              {/* ========================================================= */}
              {!isActive && (
                <div className="flex lg:hidden items-center justify-between h-full w-full relative z-10">
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-mundo-orange bg-mundo-orange/10 px-2 py-1 rounded-md border border-mundo-orange/20">
                      {formattedIndex}
                    </span>

                    {cs.image && (
                      <div className="w-10 h-10 rounded-xl overflow-hidden relative border border-white/15 bg-white/5 p-1 shrink-0">
                        <Image
                          src={cs.image}
                          alt={cs.client}
                          fill
                          className="object-contain filter grayscale"
                        />
                      </div>
                    )}

                    <div>
                      <h4 className="text-base font-display font-bold text-white">
                        {cs.client}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {cs.segment}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="orange" className="text-[9px]">
                      {cs.tag}
                    </Badge>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* ESTADO ATIVO (DESKTOP E MOBILE) - LARGURA TRAVADA         */}
              {/* ========================================================= */}
              {isActive && (
                <div className="w-full lg:w-[560px] lg:min-w-[560px] h-full flex flex-col justify-between overflow-y-auto pr-1 relative z-10">
                  {/* Top: Header & Applied Service Tag */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-mundo-orange/20 border border-mundo-orange/40 text-mundo-orange flex items-center justify-center shrink-0">
                          <Quote className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                            {cs.tag}
                          </span>
                          <span className="text-xs text-slate-300 font-medium">
                            {cs.segment}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-xs font-bold text-slate-400 border border-white/10 px-2.5 py-1 rounded-lg bg-white/5">
                        {formattedIndex}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                        {cs.client}
                      </h4>
                    </div>
                  </div>

                  {/* Middle: Testimonial & Concrete Stats */}
                  <div className="space-y-4 my-auto py-2">
                    <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed font-normal">
                      &ldquo;{cs.description}&rdquo;
                    </p>

                    {cs.stats && (
                      <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm font-semibold text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{cs.stats}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom: Author / Organization Info */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {cs.image && (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden relative border border-white/20 bg-white/10 p-1.5 shrink-0 shadow-md">
                          <Image
                            src={cs.image}
                            alt={cs.client}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <div className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wider">
                          {cs.authorName || cs.client}
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-400">
                          {cs.authorRole || cs.segment} • {cs.client}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CasesShowcase;
