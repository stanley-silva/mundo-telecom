"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Cloud, 
  Headphones, 
  MessageSquareText, 
  Send, 
  Wrench, 
  BarChart3, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Lock,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EmpresasSolutionsCarousel() {
  const b2bCards = [
    {
      id: "omnichannel-ia-aikon",
      index: "01",
      code: "PLATAFORMA PRÓPRIA // ATENDIMENTO",
      tag: "ATENDIMENTO & IA",
      title: "Omnichannel & IA (Plataforma AIkon)",
      headline: "Centralize todos os canais de atendimento da sua empresa em uma única tela inteligente desenvolvida pela Mundo Telecom.",
      benefits: [
        "Plataforma própria AIkon com autonomia e evolução contínua",
        "Voz, WhatsApp, redes sociais e e-mail integrados em uma tela",
        "Múltiplos atendentes em 1 só número oficial com controle total",
        "Triagem ágil com IA (NLP) para resolver dúvidas 24/7 sem fila"
      ],
      ctaText: "Conhecer Plataforma AIkon",
      href: "/solucoes/omnichannel-ia-aikon",
      icon: <MessageSquareText className="w-5 h-5" />,
      featured: true,
    },
    {
      id: "telefonia-corporativa-stfc",
      index: "02",
      code: "STFC OFICIAL // OUTORGA ANATEL",
      tag: "COMUNICAÇÃO CORPORATIVA",
      title: "Telefonia Corporativa (Voz IP & STFC)",
      headline: "Operadora oficial STFC com outorga direta ANATEL, áudio HD, portabilidade sem downtime e protocolo anti-fraude STIR/SHAKEN.",
      benefits: [
        "Conexão STFC oficial licenciada pela ANATEL com numeração própria",
        "Protocolo STIR/SHAKEN: chamadas verificadas sem cair no SPAM",
        "Qualidade de voz HD cristalina com QoS no backbone próprio",
        "Portabilidade numérica assistida com zero downtime operacional"
      ],
      ctaText: "Consultar Telefonia STFC",
      href: "/solucoes/telefonia-corporativa-stfc",
      icon: <PhoneCall className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "pabx-virtual-cloud",
      index: "03",
      code: "NUVEM & IA // RECHAMADA AUTOMÁTICA",
      tag: "COMUNICAÇÃO UNIFICADA (UCaaS)",
      title: "PABX Virtual — Cloud PABX",
      headline: "Central telefônica em nuvem com URA inteligente, ramais remotos em qualquer dispositivo e rechamada automática exclusiva.",
      benefits: [
        "Rechamada automática exclusiva: nenhuma chamada perdida",
        "Ramais virtuais em computadores, smartphones ou aparelhos IP",
        "URA multinível dinâmica com direcionamento ágil e humanizado",
        "Cofre de gravações em nuvem 100% auditável com busca avançada"
      ],
      ctaText: "Conhecer PABX Virtual",
      href: "/solucoes/pabx-virtual-cloud",
      icon: <Cloud className="w-5 h-5" />,
      featured: true,
    },
    {
      id: "infraestrutura-rede-alta-disponibilidade",
      index: "04",
      code: "BACKBONE // REDUNDÂNCIA FÍSICA",
      tag: "NETWORK",
      title: "Infraestrutura de Redes — Alta Disp.",
      headline: "Conectividade dedicada, redundância física e topologia em anel para operações críticas que não podem parar.",
      benefits: [
        "SLA formal de disponibilidade para manter sua empresa faturando",
        "Links dedicados com tráfego simétrico de altíssima performance",
        "Redundância automática de circuitos contra rompimentos de fibra",
        "Interligação segura entre filiais e datacenters (VPN / SD-WAN)"
      ],
      ctaText: "Consultar Infraestrutura",
      href: "/solucoes/infraestrutura-rede-alta-disponibilidade",
      icon: <Wrench className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "experiencia-cliente-cx-routing",
      index: "05",
      code: "ROTEAMENTO // SKILL-BASED & DDD LOCAL",
      tag: "CUSTOMER EXPERIENCE",
      title: "Experiência do Cliente (CX Routing)",
      headline: "Roteamento inteligente por habilidades e identificador de DDD local para entregar a melhor jornada de contato.",
      benefits: [
        "Skill-based Routing: o cliente certo no atendente especialista certo",
        "Identificador local inteligente: chamadas ativas com DDD da região",
        "Pesquisa de satisfação automatizada (CSAT/NPS) pós-atendimento",
        "Filas transparentes com estimativa de espera e callback integrado"
      ],
      ctaText: "Otimizar Experiência do Cliente",
      href: "/solucoes/experiencia-cliente-cx-routing",
      icon: <Zap className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "seguranca-compliance-cybersecurity",
      index: "06",
      code: "LGPD // BLINDAGEM CONTRA FRAUDES",
      tag: "GOVERNANÇA DE DADOS",
      title: "Segurança & Compliance — Cybersecurity",
      headline: "Blindagem contra fraudes telefônicas, cofre criptografado em nuvem e total conformidade com a LGPD.",
      benefits: [
        "Prevenção ativa contra fraudes e roubo de tráfego de voz",
        "Cofre de gravação criptografado com trilhas de auditoria imutáveis",
        "Adequação plena à LGPD com anonimização de dados sensíveis",
        "Gestão rigorosa de acessos com autenticação em duas etapas (2FA)"
      ],
      ctaText: "Falar com Especialista em Segurança",
      href: "/solucoes/seguranca-compliance-cybersecurity",
      icon: <Lock className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "gestao-servicos-ti-noc-itsm",
      index: "07",
      code: "VIGILÂNCIA 24/7/365 // ENGENHARIA",
      tag: "NOC 24/7",
      title: "Gestão de TI — Operações ITSM (NOC 24/7)",
      headline: "Centro de Operações de Rede com vigilância ininterrupta 24/7/365 e gestão proativa de incidentes.",
      benefits: [
        "Vigilância contínua 24/7/365 por equipe própria de engenharia",
        "Detecção proativa de oscilações antes de impactar a operação",
        "Acordos de Nível de Serviço (SLA) formais para tempo de resposta",
        "Atendimento técnico direto com especialistas, sem robôs genéricos"
      ],
      ctaText: "Conhecer Operações NOC 24/7",
      href: "/solucoes/gestao-servicos-ti-noc-itsm",
      icon: <BarChart3 className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "mensageria-corporativa-meta-provider",
      index: "08",
      code: "WHATSAPP OFICIAL // META PROVIDER",
      tag: "WHATSAPP",
      title: "Mensageria Corporativa — Meta Provider",
      headline: "API Oficial do WhatsApp com selo verificado, disparos em massa homologados e atendimento sem risco de banimento.",
      benefits: [
        "Acesso à API Oficial Meta com proteção contra bloqueios de número",
        "Disparo homologado de notificações, boletos e réguas de cobrança",
        "Selo oficial de verificação para autoridade e confiança da marca",
        "Múltiplos atendentes conversando pelo mesmo número institucional"
      ],
      ctaText: "Ativar API Oficial WhatsApp",
      href: "/solucoes/mensageria-corporativa-meta-provider",
      icon: <Send className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "inteligencia-artificial-voz-voice-ai",
      index: "09",
      code: "IA GENERATIVA // VOZ NATURAL",
      tag: "IA POR VOZ",
      title: "Inteligência Artificial Aplicada à Voz",
      headline: "Agentes virtuais de voz com IA conversacional para triagem inteligente e automação de atendimento telefônico.",
      benefits: [
        "Agentes de voz inteligentes com fala fluida e compreensão natural",
        "Fim das URAs travadas: diálogo aberto que entende a necessidade",
        "Atendimento simultâneo de centenas de chamadas durante picos",
        "Transcrição e análise de sentimento em tempo real das ligações"
      ],
      ctaText: "Conhecer Soluções Voice AI",
      href: "/solucoes/inteligencia-artificial-voz-voice-ai",
      icon: <Headphones className="w-5 h-5" />,
      featured: true,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const checkScroll = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft < maxScroll - 6);

    if (maxScroll <= 0) {
      setActiveCardIndex(0);
    } else {
      const progress = Math.max(0, Math.min(1, el.scrollLeft / maxScroll));
      const index = Math.round(progress * (b2bCards.length - 1));
      setActiveCardIndex(index);
    }
  }, [b2bCards.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const card = el.querySelector<HTMLElement>(".snap-start");
    const cardWidth = card?.offsetWidth || 340;
    const scrollStep = cardWidth + 24;

    if (direction === "right") {
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

    const targetScroll = (index / (b2bCards.length - 1)) * maxScroll;
    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio-empresas" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b08_1px,transparent_1px),linear-gradient(to_bottom,#07224b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="orange" icon={<Zap className="w-3.5 h-3.5" />}>
                PORTFÓLIO CORPORATIVO
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Soluções completas de telefonia e tecnologia para empresas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Do aumento da taxa de atendimento à terceirização integral de telecom com custos previsíveis.
            </p>
          </div>

          {/* Carousel Navigation Arrows & Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center font-mono text-xs font-bold text-slate-400 mr-2">
              <span className="text-mundo-orange">{String(activeCardIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              <span>{String(b2bCards.length).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Card anterior"
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-slate-50 border-slate-200 text-mundo-navy hover:bg-mundo-orange hover:text-white hover:border-mundo-orange shadow-sm hover:shadow-md"
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
                  ? "bg-slate-50 border-slate-200 text-mundo-navy hover:bg-mundo-orange hover:text-white hover:border-mundo-orange shadow-sm hover:shadow-md"
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
          {b2bCards.map((card) => (
            <div
              key={card.id}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] xl:w-[400px] min-h-[480px] rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-mundo-orange/50 hover:shadow-xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header: Icon, Tag & Index */}
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-3.5">
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
              <div className="mt-6 pt-4 border-t border-slate-200/70">
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
          {b2bCards.map((_, i) => (
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

export default EmpresasSolutionsCarousel;
