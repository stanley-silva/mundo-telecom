"use client";

import React from "react";
import Image from "next/image";
import { Cpu, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export interface TechPartnersSectionProps {
  variant?: "light" | "navy" | "dark";
  compact?: boolean;
  showTitle?: boolean;
  className?: string;
}

export function TechPartnersSection({
  variant = "light",
  compact = false,
  showTitle = true,
  className = "",
}: TechPartnersSectionProps) {
  const partners = siteContent.techPartners;

  // Multiplicamos por 4 para garantir o loop contínuo infinito (-50% translation)
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  const isLight = variant === "light";
  const isNavy = variant === "navy";

  const bgStyles = isLight
    ? "bg-slate-50 text-slate-900 border-y border-slate-200/80"
    : isNavy
    ? "bg-mundo-navy text-white border-y border-white/10"
    : "bg-[#111827] text-white border-y border-slate-800";

  const cardBg = isLight
    ? "bg-white border-slate-200/90 hover:border-mundo-orange/60 hover:shadow-md text-slate-800"
    : "bg-white/[0.04] border-white/10 hover:border-mundo-orange/60 hover:bg-white/[0.08] text-white";

  const titleColor = isLight ? "text-mundo-navy" : "text-white";
  const subtitleColor = isLight ? "text-slate-600" : "text-slate-300";
  const badgeCatStyle = isLight
    ? "bg-slate-100 text-slate-700 border-slate-200/90"
    : "bg-white/10 text-slate-300 border-white/15";

  return (
    <section
      id="parceiros-tecnologia"
      className={`relative overflow-hidden ${compact ? "py-10 sm:py-12" : "py-14 sm:py-18"} ${bgStyles} ${className}`}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b05_1px,transparent_1px),linear-gradient(to_bottom,#07224b05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="orange" icon={<Cpu className="w-3.5 h-3.5" />}>
                INTEROPERABILIDADE & HARDWARE HOMOLOGADO
              </Badge>
            </div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-display font-black ${titleColor} tracking-tight`}>
              Tecnologias parceiras e equipamentos homologados
            </h2>
            <p className={`text-xs sm:text-sm ${subtitleColor} leading-relaxed font-normal`}>
              Nossa plataforma de comunicações inteligentes opera com padrões abertos e infraestrutura própria, integrando-se nativamente às principais fabricantes mundiais.
            </p>
          </div>
        )}
      </div>

      {/* Marquee Track: Linha única contínua com pausa no hover */}
      <div className="relative w-full overflow-hidden marquee-fade-mask py-2">
        <div 
          className="animate-marquee gap-5 sm:gap-6 flex items-center"
          style={{ animationDuration: "50s" }}
        >
          {marqueePartners.map((partner, idx) => (
            <div
              key={`tp-${partner.name}-${idx}`}
              className={`h-16 sm:h-20 min-w-[330px] sm:min-w-[370px] w-auto shrink-0 px-6 sm:px-7 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-5 sm:gap-6 group ${cardBg}`}
            >
              {/* Logo do Parceiro */}
              <div className="h-8 sm:h-10 w-28 sm:w-32 shrink-0 flex items-center justify-start">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={140}
                    height={40}
                    style={{ maxHeight: "40px", width: "auto" }}
                    className="max-h-8 sm:max-h-10 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className={`text-base sm:text-lg font-display font-black tracking-tight ${titleColor}`}>
                    {partner.name}
                  </span>
                )}
              </div>

              {/* Tag de Categoria */}
              <span className={`text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-lg border shrink-0 whitespace-nowrap text-right ${badgeCatStyle}`}>
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechPartnersSection;

