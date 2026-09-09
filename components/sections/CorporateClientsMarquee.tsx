"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Building2, Landmark } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface CorporateClientsMarqueeProps {
  filter?: "all" | "governo" | "empresas";
  title?: string;
  subtitle?: string;
  badgeText?: string;
  variant?: "light" | "navy";
  className?: string;
}

export function CorporateClientsMarquee({
  filter = "all",
  title,
  subtitle,
  badgeText,
  variant = "light",
  className = "",
}: CorporateClientsMarqueeProps) {
  const govLogos = [
    { id: "dpmg", name: "DPMG — Defensoria Pública de MG", src: "/images/clientes-governamentais/dpmg_logo_1x.webp" },
    { id: "mpmg", name: "MPMG — Ministério Público de MG", src: "/images/clientes-governamentais/mpmg_logo_1x.webp" },
    { id: "caixa", name: "Caixa Econômica Federal", src: "/images/clientes-governamentais/caixa_economica_federal_logo_1x.webp" },
    { id: "der-df", name: "DER-DF", src: "/images/clientes-governamentais/der_df_logo_1x.webp" },
    { id: "betim", name: "Prefeitura de Betim", src: "/images/clientes-governamentais/prefeitura_de_betim_logo_1x.webp" },
    { id: "ouro-preto", name: "Prefeitura de Ouro Preto", src: "/images/clientes-governamentais/prefeitura_de_ouro_preto_logo_1x.webp" },
    { id: "varzea-palma", name: "Prefeitura de Várzea da Palma", src: "/images/clientes-governamentais/prefeitura_de_varzea_da_palma_logo_1x.webp" },
    { id: "santa-rita", name: "Prefeitura de Santa Rita do Sapucaí", src: "/images/clientes-governamentais/prefeitura_de_santa_rita_do_sapuca_logo_1x.webp" },
    { id: "jaboticatubas", name: "Prefeitura de Jaboticatubas", src: "/images/clientes-governamentais/prefeitura_de_jaboticatubas_logo_1x.webp" },
    { id: "cet", name: "CET — Companhia de Engenharia de Tráfego", src: "/images/clientes-governamentais/cet_companhia_de_engenharia_de_tr_fego_logo_1x.webp" },
    { id: "sanasa", name: "SANASA Campinas", src: "/images/clientes-governamentais/sanasa_campinas_logo_1x.webp" },
    { id: "pmsp-smsu", name: "PMSP SMSU", src: "/images/clientes-governamentais/pmsp_smsu_logo_1x.webp" },
    { id: "siurb-sp", name: "SIURB-SP", src: "/images/clientes-governamentais/siurb_sp_logo_1x.webp" },
    { id: "ifmg", name: "IFMG — Instituto Federal", src: "/images/clientes-governamentais/ifmg_logo_1x.webp" },
  ];

  const privateLogos = [
    { id: "grupo-via", name: "Grupo Via", src: "/images/setor-privado/grupo_via_logo_1x.webp" },
    { id: "tecban", name: "TECBAN", src: "/images/setor-privado/tecban_logo_1x.webp" },
    { id: "brascamp", name: "Brascamp", src: "/images/setor-privado/brascamp_logo_1x.webp" },
    { id: "macrocont", name: "Macrocont", src: "/images/setor-privado/macrocont_logo_1x.webp" },
    { id: "pluris-midia", name: "PlurisMídia", src: "/images/setor-privado/pluris_midia_logo_1x.webp" },
    { id: "bm-rio", name: "BM Rio", src: "/images/setor-privado/bm_rio_logo_1x.webp" },
    { id: "itau", name: "Itaú", src: "/images/setor-privado/itau_logo_1x.webp" },
    { id: "dell", name: "Dell", src: "/images/setor-privado/dell_logo_1x.webp" },
    { id: "aligera", name: "Aligera", src: "/images/setor-privado/aligera_logo_1x.webp" },
    { id: "mikrotik", name: "MikroTik", src: "/images/setor-privado/mikrotik_logo_1x.webp" },
  ];

  let row1 = [];
  let row2 = [];
  let defaultBadge = "+60 CLIENTES ATIVOS";
  let defaultTitle = "Organizações que confiam na Mundo Telecom";
  let defaultSubtitle = (
    <>
      Grandes corporações privadas e órgãos públicos de alta criticidade, como <strong>DPMG</strong>, <strong>MPMG</strong>, <strong>Grupo Via</strong> e <strong>TECBAN</strong>, operando sobre nossa infraestrutura própria de tecnologia.
    </>
  );
  let defaultIcon = <ShieldCheck className="w-3.5 h-3.5" />;

  if (filter === "governo") {
    row1 = govLogos.slice(0, 7);
    row2 = govLogos.slice(7);
    defaultBadge = "AUTORIDADE GOVERNAMENTAL (B2G)";
    defaultTitle = "Órgãos públicos e autarquias que confiam na Mundo Telecom";
    defaultSubtitle = (
      <>
        Ministérios públicos, defensorias, prefeituras e secretarias operando com 99,95% de disponibilidade, outorga direta ANATEL e conformidade total à Lei nº 14.133/2021.
      </>
    );
    defaultIcon = <Landmark className="w-3.5 h-3.5" />;
  } else if (filter === "empresas") {
    row1 = privateLogos.slice(0, 5);
    row2 = privateLogos.slice(5);
    defaultBadge = "PROVA DE CAPACIDADE CORPORATIVA (B2B)";
    defaultTitle = "Grandes empresas que confiam na Mundo Telecom";
    defaultSubtitle = (
      <>
        Redes de concessionárias, instituições financeiras, contact centers e indústrias que aumentaram a produtividade e reduziram custos com telefonia em nuvem e IA.
      </>
    );
    defaultIcon = <Building2 className="w-3.5 h-3.5" />;
  } else {
    // "all" — Home Page (mescla equilibrada das duas categorias)
    row1 = [...govLogos.slice(0, 7), ...privateLogos.slice(0, 5)];
    row2 = [...privateLogos.slice(5), ...govLogos.slice(7)];
  }

  // Multiplica para loop contínuo infinito sem saltos
  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  const isLight = variant === "light";
  const bgStyles = isLight
    ? "bg-slate-50 border-t border-slate-200/80 text-slate-900"
    : "bg-mundo-navy border-t border-white/10 text-white";

  const titleColor = isLight ? "text-mundo-navy" : "text-white";
  const subtitleColor = isLight ? "text-slate-600" : "text-slate-300";
  const cardBg = isLight
    ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md hover:border-mundo-orange/50"
    : "bg-white/[0.04] border-white/10 hover:border-mundo-orange/50 hover:bg-white/[0.08]";

  // Velocidade calibrada: Home tem mais logos (36 itens no track), precisa de mais tempo para velocidade suave e pausada
  const isHome = filter === "all";
  const durationTrack1 = isHome ? "85s" : "35s";
  const durationTrack2 = isHome ? "92s" : "40s";

  return (
    <section className={`py-16 sm:py-24 relative overflow-hidden ${bgStyles} ${className}`}>
      {/* Subtle Glow Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-mundo-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center space-y-3">
        <Badge variant="orange" icon={defaultIcon}>
          {badgeText || defaultBadge}
        </Badge>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight ${titleColor}`}>
          {title || defaultTitle}
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${subtitleColor}`}>
          {subtitle || defaultSubtitle}
        </p>
      </div>

      {/* Track 1: Moves Left */}
      <div className="relative w-full overflow-hidden marquee-fade-mask py-2">
        <div 
          className="animate-marquee gap-6 sm:gap-8 flex items-center"
          style={{ animationDuration: durationTrack1 }}
        >
          {track1.map((logo, idx) => (
            <div
              key={`t1-${logo.id}-${idx}`}
              className={`h-20 sm:h-24 w-44 sm:w-52 shrink-0 px-6 py-4 rounded-2xl border transition-all duration-300 flex items-center justify-center group ${cardBg}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="max-h-12 sm:max-h-14 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Moves Right */}
      <div className="relative w-full overflow-hidden marquee-fade-mask py-2 mt-4">
        <div 
          className="animate-marquee-reverse gap-6 sm:gap-8 flex items-center"
          style={{ animationDuration: durationTrack2 }}
        >
          {track2.map((logo, idx) => (
            <div
              key={`t2-${logo.id}-${idx}`}
              className={`h-20 sm:h-24 w-44 sm:w-52 shrink-0 px-6 py-4 rounded-2xl border transition-all duration-300 flex items-center justify-center group ${cardBg}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="max-h-12 sm:max-h-14 w-auto object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
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
