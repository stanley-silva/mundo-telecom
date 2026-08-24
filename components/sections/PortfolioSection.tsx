"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Cloud, 
  Bot, 
  ShieldAlert, 
  MessageSquareText, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function PortfolioSection() {
  const technicalCards = [
    {
      id: "telefonia-ip",
      index: "01",
      code: "STFC // VOZ CORPORATIVA",
      categoryTag: "INFRAESTRUTURA & VOZ",
      title: "Telefonia IP & Conexão STFC",
      headline: "Identificador Local Dinâmico & Alta Taxa de Atendimento",
      description: "Conexão direta às operadoras nacionais com outorga ANATEL. Chamadas ativas com o DDD da cidade do cliente, aumentando em até 3x o atendimento.",
      chips: ["Outorga Direta ANATEL", "Identificador Local (DDD)", "Portabilidade Sem Queda"],
      metric: "Atendimento até 3x maior",
      href: "/servicos#telefonia-ip",
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      id: "pabx-nuvem",
      index: "02",
      code: "CLOUD // PABX VIRTUAL",
      categoryTag: "PLATAFORMA EM NUVEM",
      title: "PABX em Nuvem Integrado",
      headline: "Central Telefônica 100% Digital Sem Hardware",
      description: "Conecte matriz, filiais e trabalho remoto em uma rede unificada de ramais com áudio em alta definição no computador, celular e aparelhos IP.",
      chips: ["Zero Servidor Físico", "Ramais Ilimitados", "Mobilidade PC & App"],
      metric: "Economia média de 40% em custos",
      href: "/servicos#pabx-nuvem",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      id: "whatsapp-omnichannel",
      index: "03",
      code: "API // OMNICHANNEL",
      categoryTag: "MENSAGERIA OFICIAL",
      title: "WhatsApp Multi-atendentes",
      headline: "Múltiplos Atendentes em 1 Só Número Oficial",
      description: "Centralize o atendimento via API Oficial do WhatsApp. Distribuição por departamentos, filas automáticas e histórico gravado na empresa.",
      chips: ["1 Número Oficial Verificado", "Filas por Departamento", "Histórico Permanente"],
      metric: "100% de controle das mensagens",
      href: "/servicos#whatsapp-omnichannel",
      icon: <MessageSquareText className="w-5 h-5" />,
    },
    {
      id: "ura-inteligente",
      index: "04",
      code: "ROUTING // URA",
      categoryTag: "EXPERIÊNCIA DO CLIENTE",
      title: "URA & Atendimento Inteligente",
      headline: "Triagem Rápida e Roteamento Humanizado",
      description: "Acolhimento automático e direcionamento rápido para o setor correto. Menus ágeis, filas organizadas e mensagens personalizadas de plantão.",
      chips: ["Redução de Tempo de Espera", "Menus de Plantão", "Distribuição Equitativa"],
      metric: "Queda no abandono de chamadas",
      href: "/servicos#ura-inteligente",
      icon: <Bot className="w-5 h-5" />,
    },
    {
      id: "gravacao-chamadas",
      index: "05",
      code: "SECURITY // COMPLIANCE",
      categoryTag: "SEGURANÇA & AUDITORIA",
      title: "Gravação 100% de Chamadas",
      headline: "Histórico Seguro em Nuvem e Proteção Jurídica",
      description: "Armazenamento criptografado em nuvem de todas as ligações de entrada e saída. Busca instantânea por data, atendente, ramal ou cliente.",
      chips: ["Criptografia Ponta a Ponta", "Busca em Segundos", "Resguardo Jurídico"],
      metric: "100% gravado e auditável",
      href: "/servicos#gravacao-chamadas",
      icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
      id: "noc-monitoramento",
      index: "06",
      code: "NETWORK // SLA 24/7",
      categoryTag: "GOVERNANÇA TÉCNICA",
      title: "NOC & Monitoramento 24/7",
      headline: "Engenharia Própria e Supervisão Contínua",
      description: "Centro de Operações de Rede vigiando a estabilidade de troncos, latência e jitter em tempo real. Resolução antecipada de oscilações.",
      chips: ["Supervisão 24/7/365", "SLA em Contrato", "Engenharia Especializada"],
      metric: "99.98% de disponibilidade",
      href: "/servicos#noc-monitoramento",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const checkScroll = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate approximate active card
    const cardWidth = el.querySelector("div")?.clientWidth || 320;
    const index = Math.round(el.scrollLeft / (cardWidth + 24));
    setActiveCardIndex(Math.min(index, technicalCards.length - 1));
  }, [technicalCards.length]);

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const card = el.querySelector("div");
    const scrollAmount = (card?.clientWidth || 340) + 24; // card width + gap

    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const card = el.querySelector("div");
    const scrollAmount = ((card?.clientWidth || 340) + 24) * index;

    el.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b08_1px,transparent_1px),linear-gradient(to_bottom,#07224b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="orange" icon={<Zap className="w-3.5 h-3.5" />}>
                PORTFÓLIO DE ENGENHARIA & TELECOM
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Soluções integradas de comunicação empresarial
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Estrutura de ponta a ponta com alta taxa de completamento, custos previsíveis e suporte técnico consultivo.
            </p>
          </div>

          {/* Carousel Navigation Arrows & Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center font-mono text-xs font-bold text-slate-400 mr-2">
              <span className="text-mundo-orange">{String(activeCardIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              <span>{String(technicalCards.length).padStart(2, "0")}</span>
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

        {/* ========================================================= */}
        {/* CAROUSEL TRACK CONTAINER (3-4 CARDS VISIBLE)              */}
        {/* ========================================================= */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory py-4 px-1 -mx-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {technicalCards.map((card) => (
            <div
              key={card.id}
              className="snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-[360px] xl:w-[380px] h-[410px] rounded-3xl bg-white border border-slate-200/90 hover:border-mundo-orange/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header: Icon, Category & Index */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mundo-navy/5 text-mundo-navy group-hover:bg-mundo-orange group-hover:text-white transition-all flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                        {card.categoryTag}
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

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors line-clamp-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 line-clamp-1">
                    {card.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 pt-1">
                    {card.description}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {card.chips.map((chip, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-600 group-hover:bg-slate-100 transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Orange Detalhes Button */}
              <div className="mt-4 pt-3.5 border-t border-slate-100">
                <Link
                  href={card.href}
                  className="w-full py-2.5 px-4 rounded-xl bg-mundo-orange hover:bg-mundo-orange-hover text-white flex items-center justify-center gap-1.5 text-xs font-display font-bold shadow-md shadow-mundo-orange/15 transition-all group-hover:shadow-lg"
                >
                  <span>Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {technicalCards.map((_, i) => (
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

export default PortfolioSection;
