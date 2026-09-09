"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export function CasesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cases = siteContent.caseStudies;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div className="max-w-3xl space-y-2.5 text-left">
          <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>PROVA DE CAPACIDADE • CASOS REAIS AUDITÁVEIS</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-white tracking-tight leading-tight">
            Grandes organizações operando sobre nossa tecnologia
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            De órgãos públicos estaduais com milhares de ramais a grandes redes corporativas privadas: entregamos comunicações inteligentes com 99,95% de disponibilidade e monitoramento NOC 24/7.
          </p>
        </div>

        {/* Header Controls (Prev/Next + Counter) */}
        <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
          <div className="font-mono text-xs font-bold text-slate-400 mr-2">
            <span className="text-mundo-orange">{String(activeIdx + 1).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            <span>{String(cases.length).padStart(2, "0")}</span>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Case anterior"
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-mundo-orange hover:text-white text-slate-200 border border-white/15 flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo case"
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-mundo-orange hover:text-white text-slate-200 border border-white/15 flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Horizontal Accordion (Desktop) / Vertical Tabs (Mobile) */}
      <div className="w-full flex flex-col lg:flex-row gap-3 sm:gap-4 lg:h-[500px] xl:h-[520px] items-stretch">
        {cases.map((cs, idx) => {
          const isActive = activeIdx === idx;
          const formattedIndex = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={cs.client}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdx(idx);
                }
              }}
              aria-expanded={isActive}
              className={`rounded-3xl transition-all duration-500 ease-out relative overflow-hidden backdrop-blur-md cursor-pointer select-none min-w-0 ${
                isActive
                  ? "lg:flex-[3.8] xl:flex-[4.2] h-auto lg:h-full bg-mundo-navy-surface/95 border-2 border-mundo-orange shadow-2xl shadow-mundo-orange/20 p-6 sm:p-8"
                  : "lg:flex-[1] h-auto lg:h-full bg-white/[0.04] border border-white/10 hover:border-mundo-orange/50 hover:bg-white/[0.08] p-4 lg:py-8 lg:px-3"
              }`}
            >
              {/* Active Background Glow Accent */}
              {isActive && (
                <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-mundo-orange/15 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* ========================================================= */}
              {/* ESTADO INATIVO (DESKTOP)                                 */}
              {/* ========================================================= */}
              {!isActive && (
                <div className="hidden lg:flex flex-col items-center justify-between h-full w-full relative z-10 pointer-events-none">
                  {/* Top: Sequential Number */}
                  <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-mundo-orange transition-colors">
                    {formattedIndex}
                  </span>

                  {/* Middle 1: Client Logo */}
                  {cs.image && (
                    <div className="w-11 h-11 rounded-2xl overflow-hidden relative border border-white/15 bg-white/5 p-1.5 shrink-0 my-2">
                      <Image
                        src={cs.image}
                        alt={cs.client}
                        fill
                        className="object-contain filter grayscale opacity-75"
                      />
                    </div>
                  )}

                  {/* Middle 2: Company Name in Vertical Writing Mode */}
                  <div className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-widest font-display font-bold text-xs text-slate-300 my-auto py-2 max-h-[180px] truncate">
                    {cs.client}
                  </div>

                  {/* Bottom: Animated Pulsing Light Point */}
                  <div className="relative flex h-3 w-3 items-center justify-center mt-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mundo-orange opacity-40" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mundo-orange" />
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* ESTADO INATIVO (MOBILE BAR)                               */}
              {/* ========================================================= */}
              {!isActive && (
                <div className="flex lg:hidden items-center justify-between h-full w-full relative z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs font-bold text-mundo-orange bg-mundo-orange/10 px-2.5 py-1 rounded-lg border border-mundo-orange/20 shrink-0">
                      {formattedIndex}
                    </span>

                    {cs.image && (
                      <div className="w-9 h-9 rounded-xl overflow-hidden relative border border-white/15 bg-white/5 p-1 shrink-0">
                        <Image
                          src={cs.image}
                          alt={cs.client}
                          fill
                          className="object-contain filter grayscale opacity-80"
                        />
                      </div>
                    )}

                    <div className="min-w-0">
                      <h4 className="text-sm font-display font-bold text-white truncate">
                        {cs.client}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">
                        {cs.segment}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <Badge variant="orange" className="text-[10px] hidden sm:inline-flex">
                      Ver Case
                    </Badge>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* ESTADO ATIVO (DESKTOP E MOBILE) - TOTALMENTE RESPONSIVO   */}
              {/* ========================================================= */}
              {isActive && (
                <div className="w-full min-w-0 h-full flex flex-col justify-between relative z-10">
                  {/* Top Section: Client Header, Title & Description Grouped Together */}
                  <div className="space-y-3.5 sm:space-y-4 min-w-0">
                    <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3.5 min-w-0">
                        {cs.image && (
                          <div className="w-12 h-12 rounded-2xl overflow-hidden relative border border-white/20 bg-white/10 p-2 shrink-0 shadow-md">
                            <Image
                              src={cs.image}
                              alt={cs.client}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-tight leading-snug truncate">
                            {cs.client}
                          </h4>
                          <span className="text-xs text-slate-300 font-medium block truncate">
                            {cs.segment}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-xs font-bold text-slate-400 border border-white/10 px-2.5 py-1 rounded-lg bg-white/5 shrink-0">
                        {formattedIndex}
                      </span>
                    </div>

                    {/* Main Headline: Highlighted Feature / Key Advantage */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight leading-tight break-words">
                      {cs.tag}
                    </h3>

                    {/* Description Text directly connected to the title */}
                    <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed font-normal break-words pt-0.5">
                      &ldquo;{cs.description}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Section: Only the Green Stats / Results Box at the end */}
                  {cs.stats && (
                    <div className="mt-auto pt-4 min-w-0">
                      <div className="flex items-start sm:items-center gap-2.5 p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-xs sm:text-sm font-semibold text-emerald-300 break-words">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5 sm:mt-0" />
                        <span className="leading-snug">{cs.stats}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation Dots for Direct Access */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {cases.map((cs, i) => (
          <button
            key={cs.client}
            type="button"
            onClick={() => setActiveIdx(i)}
            aria-label={`Visualizar case ${cs.client}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIdx === i
                ? "w-8 bg-mundo-orange"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CasesShowcase;

