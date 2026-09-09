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
  Zap,
  Calendar,
  Radio,
  Send
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function PortfolioSection() {
  const technicalCards = [
    {
      id: "pabx-nuvem",
      index: "01",
      code: "PRODUTO // IA & RECHAMADA",
      categoryTag: "TELEFONIA INTELIGENTE",
      title: "PABX na Nuvem com URA de IA & Rechamada",
      headline: "Nunca dá ocupado · Nenhuma chamada perdida",
      description: "Central telefônica virtual com inteligência artificial e rechamada automática exclusiva: se o cliente não consegue falar por fila cheia ou fora do horário, o sistema captura a ligação e retorna automaticamente. Custo 100% previsível.",
      chips: ["Rechamada Automática", "URA com IA", "Ramais Virtuais sem Fio"],
      metric: "Zero chamadas perdidas",
      href: "/solucoes/pabx-virtual-cloud",
      ctaText: "Conhecer PABX Virtual",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      id: "whatsapp-ia",
      index: "02",
      code: "PLATAFORMA // OMNICHANNEL & IA",
      categoryTag: "OMNICHANNEL & IA",
      title: "Omnichannel & IA (Plataforma AIkon)",
      headline: "Centralize voz, WhatsApp, redes sociais e e-mail em uma única tela",
      description: "Plataforma proprietária AIkon com múltiplos atendentes no mesmo número corporativo oficial, triagem automática com IA e histórico unificado do cliente.",
      chips: ["Plataforma Própria AIkon", "WhatsApp Oficial", "Triagem com IA"],
      metric: "Resposta em segundos",
      href: "/solucoes/omnichannel-ia-aikon",
      ctaText: "Conhecer Plataforma AIkon",
      icon: <MessageSquareText className="w-5 h-5" />,
    },
    {
      id: "agendamento-online",
      index: "03",
      code: "EXPERIÊNCIA // CX ROUTING",
      categoryTag: "EXPERIÊNCIA DO CLIENTE",
      title: "Experiência do Cliente & Roteamento Inteligente",
      headline: "Skill-based routing · DDD Local · Pesquisas de satisfação",
      description: "Roteamento inteligente direcionando o cliente para o atendente especialista certo, com identificador de DDD local para triplicar a taxa de atendimento e pesquisas automáticas de CSAT/NPS.",
      chips: ["Skill-Based Routing", "Identificador DDD Local", "Pesquisa CSAT/NPS"],
      metric: "3x mais atendimentos",
      href: "/solucoes/experiencia-cliente-cx-routing",
      ctaText: "Conhecer CX Routing",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "outsourcing-telecom",
      index: "04",
      code: "OPERAÇÕES // NOC 24/7 & ITSM",
      categoryTag: "GESTÃO DE TI & NOC",
      title: "Gestão de TI & Operações ITSM (NOC 24/7)",
      headline: "Vigilância ininterrupta 24/7/365 · SLA formal com engenharia",
      description: "Centro de Operações de Rede vigiando a estabilidade de troncos, circuitos e servidores em tempo real com resposta preditiva antes de qualquer impacto operacional.",
      chips: ["Vigilância 24/7/365", "Engenharia Própria", "SLA de 99,95%"],
      metric: "99,95% de disponibilidade",
      href: "/solucoes/gestao-servicos-ti-noc-itsm",
      ctaText: "Conhecer NOC 24/7",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      id: "infraestrutura-stfc",
      index: "05",
      code: "BASE // OUTORGA ANATEL",
      categoryTag: "INFRAESTRUTURA PRÓPRIA",
      title: "Telefonia Corporativa (Voz IP & STFC)",
      headline: "Outorga direta ANATEL e protocolo anti-fraude STIR/SHAKEN",
      description: "Troncos de voz de alta densidade, numeração DDR própria e protocolo STIR/SHAKEN para evitar bloqueios como SPAM. Segurança jurídica para empresas e órgãos públicos.",
      chips: ["Outorga Própria ANATEL", "Protocolo STIR/SHAKEN", "Áudio HD com QoS"],
      metric: "Compliance regulatório pleno",
      href: "/solucoes/telefonia-corporativa-stfc",
      ctaText: "Conhecer Telefonia STFC",
      icon: <Radio className="w-5 h-5" />,
    },
    {
      id: "mensageria-meta",
      index: "06",
      code: "MENSAGERIA // META PROVIDER",
      categoryTag: "WHATSAPP OFICIAL",
      title: "Mensageria Corporativa (Meta Provider)",
      headline: "API Oficial WhatsApp com selo verificado e zero risco de banimento",
      description: "Disparo homologado de notificações, boletos e réguas de cobrança no WhatsApp com múltiplos atendentes e total conformidade aos termos da Meta.",
      chips: ["API Oficial Meta", "Selo Verificado", "Disparos em Escala"],
      metric: "Zero risco de bloqueio",
      href: "/solucoes/mensageria-corporativa-meta-provider",
      ctaText: "Conhecer WhatsApp Oficial",
      icon: <Send className="w-5 h-5" />,
    },
    {
      id: "voice-ai",
      index: "07",
      code: "IA GENERATIVA // VOZ NATURAL",
      categoryTag: "IA POR VOZ",
      title: "Inteligência Artificial Aplicada à Voz (Voice AI)",
      headline: "Agentes de voz inteligentes dialogando em linguagem natural",
      description: "Substitua URAs travadas por agentes de voz cognitivos que compreendem intenções, realizam transações e transferem com contexto completo.",
      chips: ["Agentes de Voz Cognitivos", "Fim da URA Engessada", "Escala Imediata"],
      metric: "Atendimento no 1º toque",
      href: "/solucoes/inteligencia-artificial-voz-voice-ai",
      ctaText: "Conhecer Voice AI",
      icon: <Bot className="w-5 h-5" />,
    },
    {
      id: "infraestrutura-redes",
      index: "08",
      code: "NETWORK // ALTA DISPONIBILIDADE",
      categoryTag: "INFRAESTRUTURA DE REDES",
      title: "Infraestrutura de Redes (Alta Disponibilidade)",
      headline: "Links dedicados simétricos e topologia em anel com redundância",
      description: "Conectividade dedicada de fibra óptica com garantia de 100% de banda, interligação de filiais via VPN/SD-WAN e substituição expressa de hardware.",
      chips: ["Link 100% Dedicado", "Topologia em Anel", "Hardware Homologado"],
      metric: "Continuidade total",
      href: "/solucoes/infraestrutura-rede-alta-disponibilidade",
      ctaText: "Conhecer Infra de Redes",
      icon: <ShieldAlert className="w-5 h-5" />,
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
      const index = Math.round(progress * (technicalCards.length - 1));
      setActiveCardIndex(index);
    }
  }, [technicalCards.length]);

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
    const cardWidth = card?.offsetWidth || 320;
    const scrollStep = cardWidth + 24; // card width + gap

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

    const targetScroll = (index / (technicalCards.length - 1)) * maxScroll;
    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="solucoes-inteligentes" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b08_1px,transparent_1px),linear-gradient(to_bottom,#07224b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2">
              <Badge variant="orange" icon={<Zap className="w-3.5 h-3.5" />}>
                COMUNICAÇÕES INTELIGENTES & TECNOLOGIA
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Soluções inteligentes de comunicação e tecnologia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Telefonia em nuvem com rechamada automática, WhatsApp integrado com inteligência artificial, agendamento online e outsourcing completo com infraestrutura própria.
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

        {/* CAROUSEL TRACK */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory py-4 px-1 -mx-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {technicalCards.map((card) => (
            <div
              key={card.id}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] xl:w-[390px] min-h-[440px] rounded-3xl bg-white border border-slate-200/90 hover:border-mundo-orange/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden text-slate-800"
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
                  <h3 className="text-lg sm:text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 line-clamp-1">
                    {card.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4 pt-1">
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

              {/* Card Footer: Orange CTA Button */}
              <div className="mt-4 pt-3.5 border-t border-slate-100">
                <Link
                  href={card.href}
                  className="w-full py-2.5 px-4 rounded-xl bg-mundo-orange hover:bg-mundo-orange-hover text-white flex items-center justify-center gap-1.5 text-xs font-display font-bold shadow-md shadow-mundo-orange/15 transition-all group-hover:shadow-lg text-center"
                >
                  <span className="truncate">{card.ctaText || "Detalhes"}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
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
