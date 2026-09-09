"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Landmark, 
  Cloud, 
  Activity, 
  MessageSquareText, 
  FileCheck2, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function GovernoSolutionsCarousel() {
  const govCards = [
    {
      id: "telefonia-stfc-b2g",
      index: "01",
      code: "STFC OFICIAL // OUTORGA ANATEL",
      tag: "CONECTIVIDADE PÚBLICA OFICIAL",
      title: "Telefonia STFC B2G",
      headline: "Linhas fixas oficiais com outorga direta ANATEL e faixas DDR para secretarias e autarquias, garantindo segurança jurídica e continuidade operacional.",
      benefits: [
        "Contratação direta respaldada por outorga ANATEL (STFC/SCM)",
        "Blocos de numeração DDR para distribuição precisa entre secretarias",
        "Alta disponibilidade física para serviços essenciais e emergências",
        "Relatórios detalhados de bilhetagem para prestação de contas"
      ],
      ctaText: "Solicitar Viabilidade STFC",
      href: "/contato?tipo=governo&servico=telefonia-stfc",
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      id: "pabx-em-nuvem-governo",
      index: "02",
      code: "NUVEM & IA // INTEGRAÇÃO PÚBLICA",
      tag: "MODERNIZAÇÃO ADMINISTRATIVA",
      title: "PABX em Nuvem Governo",
      headline: "Central virtual unificada para interligar secretarias, escolas e polos administrativos a custo zero de ligação interna.",
      benefits: [
        "Chamadas internas gratuitas entre todos os prédios públicos",
        "Ramais em aparelhos IP, computadores ou celulares institucionais",
        "Painel web para remanejamento rápido de ramais entre secretarias",
        "Fim dos contratos terceirizados para manutenção de fiação física"
      ],
      ctaText: "Cotar PABX para Órgão Público",
      href: "/contato?tipo=governo&servico=pabx-governo",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      id: "noc-monitoramento-governo",
      index: "03",
      code: "SUPERVISÃO CONTÍNUA // SLA FORMAL",
      tag: "ALTA DISPONIBILIDADE",
      title: "NOC 24×7 / Monitoramento",
      headline: "Centro de Operações de Rede com vigilância ininterrupta de circuitos e troncos para garantir a continuidade dos canais públicos essenciais.",
      benefits: [
        "Monitoramento 24/7/365 por equipe própria de engenharia",
        "Acordo de Nível de Serviço (SLA) formal com métricas contratuais",
        "Prevenção proativa de quedas em canais críticos e de emergência",
        "Relatórios técnicos periódicos de disponibilidade e saúde de rede"
      ],
      ctaText: "Solicitar Proposta de Monitoramento",
      href: "/contato?tipo=governo&servico=noc-monitoramento",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      id: "omnichannel-governo",
      index: "04",
      code: "PLATAFORMA AIKON // PROTOCOLOS AUDITÁVEIS",
      tag: "ATENDIMENTO AO CIDADÃO & OUVIDORIAS",
      title: "Omnichannel Governo (AIkon)",
      headline: "Centralize ouvidorias, WhatsApp oficial verificado e telefone em uma plataforma integrada com geração de protocolos auditáveis.",
      benefits: [
        "Atendimento ao cidadão via WhatsApp oficial com múltiplos atendentes",
        "Geração e rastreamento automático de números de protocolo",
        "URA dinâmica e objetiva para direcionamento rápido por secretaria",
        "Gravação e guarda segura de 100% das interações com o cidadão"
      ],
      ctaText: "Agendar Demonstração para Ouvidoria",
      href: "/contato?tipo=governo&servico=omnichannel-governo",
      icon: <MessageSquareText className="w-5 h-5" />,
    },
    {
      id: "compliance-licitacoes",
      index: "05",
      code: "LEI 14.133/2021 // SEGURANÇA JURÍDICA",
      tag: "SEGURANÇA JURÍDICA & LICITAÇÕES",
      title: "Compliance & Licitações",
      headline: "Suporte técnico especializado e total enquadramento à Nova Lei de Licitações (Lei nº 14.133/2021) para elaboração e execução de editais.",
      benefits: [
        "Enquadramento técnico à Lei 14.133/2021 e às normas da ANATEL",
        "Atestados sólidos de capacidade técnica no setor público",
        "Relatórios transparentes de consumo para auditoria de tribunais",
        "Equipe dedicada para suporte técnico a termos de referência"
      ],
      ctaText: "Falar com Especialista em Licitações",
      href: "/contato?tipo=governo&interesse=licitacoes",
      icon: <FileCheck2 className="w-5 h-5" />,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Drag-to-scroll state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const left = el.scrollLeft;
    const max = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(left > 10);
    setCanScrollRight(left < max - 10);

    // Calculate active dot based on scroll progress
    if (max > 0) {
      const progress = left / max;
      const index = Math.min(
        Math.round(progress * (govCards.length - 1)),
        govCards.length - 1
      );
      setActiveCardIndex(index);
    }
  }, [govCards.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    // Mouse drag support
    const handleMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      isDown.current = false;
      el.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown.current = false;
      el.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      el.scrollLeft = scrollLeft.current - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = 380;
    const gap = 24;
    const scrollStep = cardWidth + gap;

    if (direction === "right") {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const target = Math.min(el.scrollLeft + scrollStep, maxScroll);
      el.scrollTo({ left: target, behavior: "smooth" });
    } else {
      const target = Math.max(el.scrollLeft - scrollStep, 0);
      el.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const targetScroll = (index / (govCards.length - 1)) * maxScroll;
    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio-governo" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b08_1px,transparent_1px),linear-gradient(to_bottom,#07224b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="orange" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                PORTFÓLIO GOVERNAMENTAL
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Soluções estruturadas para o setor público
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Infraestrutura de voz, atendimento ao cidadão e governança técnica para órgãos de todas as esferas.
            </p>
          </div>

          {/* Carousel Navigation Arrows & Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center font-mono text-xs font-bold text-slate-400 mr-2">
              <span className="text-mundo-orange">{String(activeCardIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              <span>{String(govCards.length).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Card anterior"
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white border-slate-200 text-mundo-navy hover:bg-mundo-orange hover:text-white hover:border-mundo-orange shadow-sm hover:shadow-md"
                  : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Próximo card"
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white border-slate-200 text-mundo-navy hover:bg-mundo-orange hover:text-white hover:border-mundo-orange shadow-sm hover:shadow-md"
                  : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory py-4 px-1 -mx-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {govCards.map((card) => (
            <div
              key={card.id}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] xl:w-[400px] min-h-[480px] rounded-3xl bg-white border border-slate-200/90 hover:border-mundo-orange/50 hover:shadow-xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header: Icon, Tag & Index */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mundo-navy/5 text-mundo-navy group-hover:bg-mundo-orange group-hover:text-white transition-all flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                        {card.tag}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block truncate max-w-[170px]">
                        {card.code}
                      </span>
                    </div>
                  </div>

                  <span className="text-base font-mono font-black text-slate-300 group-hover:text-mundo-orange/60 transition-colors">
                    {card.index}
                  </span>
                </div>

                {/* Title & Headline */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.headline}
                  </p>
                </div>

                {/* Benefits list */}
                <div className="pt-2">
                  <div className="text-xs font-display font-bold text-mundo-navy mb-2">
                    Benefícios Chave:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {card.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 mt-0.5" />
                        <span className="leading-tight">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Orange CTA Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={card.href}
                  className="w-full py-2.5 px-4 rounded-xl bg-mundo-orange hover:bg-mundo-orange-hover text-white flex items-center justify-center gap-1.5 text-xs font-display font-bold shadow-md shadow-mundo-orange/15 transition-all group-hover:shadow-lg text-center"
                >
                  <span className="truncate">{card.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {govCards.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir para card ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCardIndex === i
                  ? "w-8 bg-mundo-orange"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovernoSolutionsCarousel;
