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

  const isLight = variant === "light";
  const isNavy = variant === "navy";

  const bgStyles = isLight
    ? "bg-slate-50 text-slate-900 border-y border-slate-200/80"
    : isNavy
    ? "bg-mundo-navy text-white border-y border-white/10"
    : "bg-[#111827] text-white border-y border-slate-800";

  const cardBg = isLight
    ? "bg-white border-slate-200/90 hover:border-mundo-orange/60 hover:shadow-xl text-slate-800"
    : "bg-white/[0.04] border-white/10 hover:border-mundo-orange/60 hover:bg-white/[0.08] text-white";

  const titleColor = isLight ? "text-mundo-navy" : "text-white";
  const subtitleColor = isLight ? "text-slate-600" : "text-slate-300";
  const descColor = isLight ? "text-slate-500" : "text-slate-400";
  const badgeCatStyle = isLight
    ? "bg-slate-100 text-slate-700 border-slate-200"
    : "bg-white/10 text-slate-300 border-white/15";

  return (
    <section
      id="parceiros-tecnologia"
      className={`relative overflow-hidden ${compact ? "py-12 sm:py-16" : "py-16 sm:py-24"} ${bgStyles} ${className}`}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b05_1px,transparent_1px),linear-gradient(to_bottom,#07224b05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="orange" icon={<Cpu className="w-3.5 h-3.5" />}>
                INTEROPERABILIDADE & HARDWARE HOMOLOGADO
              </Badge>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-black ${titleColor} tracking-tight`}>
              Tecnologias parceiras e equipamentos homologados
            </h2>
            <p className={`text-sm sm:text-base ${subtitleColor} leading-relaxed font-normal`}>
              Nossa plataforma de comunicações inteligentes opera com padrões abertos e infraestrutura própria, integrando-se perfeitamente aos principais sistemas e fabricantes globais de telecomunicação.
            </p>
          </div>
        )}

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${cardBg}`}
            >
              <div className="space-y-4">
                {/* Header: Logo do Parceiro + Categoria */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-current/10">
                  <div className="relative h-10 sm:h-11 w-28 sm:w-32 shrink-0 flex items-center justify-start">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        fill
                        sizes="(max-width: 768px) 120px, 140px"
                        className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className={`text-lg sm:text-xl font-display font-black tracking-tight ${titleColor}`}>
                        {partner.name}
                      </span>
                    )}
                  </div>

                  <span className={`text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 text-right ${badgeCatStyle}`}>
                    {partner.category}
                  </span>
                </div>

                {/* Descrição Técnica */}
                <p className={`text-xs sm:text-sm leading-relaxed ${descColor}`}>
                  {partner.description}
                </p>
              </div>

              {/* Rodapé: Selo de Homologação */}
              <div className="pt-4 mt-4 border-t border-current/10 flex items-center gap-2 text-[11px] font-mono font-medium text-mundo-orange">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Integração nativa homologada</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechPartnersSection;

