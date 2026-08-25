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
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EmpresasSolutionsCarousel() {
  const b2bCards = [
    {
      id: "terceirizacao-telecom",
      index: "01",
      code: "OPEX // GESTÃO COMPLETA",
      tag: "OUTSOURCING & GOVERNANÇA",
      title: "Terceirização de Telecom",
      headline: "Gestão integral da sua infraestrutura de telefonia: fornecemos aparelhos IP, links, manutenção preventiva e suporte especializado em modelo OpEx.",
      benefits: [
        "Redução direta de custos sem imobilização de capital (CapEx)",
        "Ponto único de contato para links, ramais, aparelhos e suporte",
        "Manutenção preventiva e substituição rápida de equipamentos",
        "Acordo de Nível de Serviço (SLA) rígido com equipe de engenharia"
      ],
      ctaText: "Consultar Terceirização de Telecom",
      href: "/contato?servico=terceirizacao-telecom",
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      id: "telefonia-conectividade",
      index: "02",
      code: "STFC // VOZ CORPORATIVA",
      tag: "VOZ & PERFORMANCE COMERCIAL",
      title: "Telefonia & Conectividade",
      headline: "Suas ligações ativas tocam com o DDD da região do cliente, aumentando expressivamente o atendimento com custos fixos e previsíveis.",
      benefits: [
        "Identificador local com DDD da cidade de destino",
        "Planos estruturados sem cobrança por minuto",
        "Áudio HD em rotas corporativas homologadas pela ANATEL",
        "Portabilidade numérica rápida sem paradas na operação"
      ],
      ctaText: "Solicitar Proposta de Telefonia",
      href: "/contato?servico=telefonia-conectividade",
      icon: <PhoneCall className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "pabx-em-nuvem",
      index: "03",
      code: "CLOUD // PABX VIRTUAL",
      tag: "INFRAESTRUTURA VIRTUAL",
      title: "PABX em Nuvem",
      headline: "Central telefônica virtual para integrar matriz, filiais e equipes remotas a custo zero de chamadas internas e sem aparelhos físicos.",
      benefits: [
        "Ramais ilimitados e gratuitos entre filiais e home office",
        "Mobilidade total via computador, smartphone ou telefone IP",
        "Gestão ágil de fluxos e horários de atendimento via painel web",
        "Fim dos custos de manutenção de servidores locais e fiações"
      ],
      ctaText: "Conhecer Recursos do PABX em Nuvem",
      href: "/contato?servico=pabx-em-nuvem",
      icon: <Cloud className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "contact-center-nuvem",
      index: "04",
      code: "CALL CENTER // DAC & GRAVAÇÃO",
      tag: "ATENDIMENTO EM ESCALA",
      title: "Contact Center na Nuvem",
      headline: "Gestão avançada de atendimento com distribuição automática de chamadas (DAC), discadores inteligentes e supervisão ao vivo.",
      benefits: [
        "Filas inteligentes com distribuição automática de chamadas (DAC)",
        "Painel de monitoria ao vivo com métricas de TMA e TME",
        "Gravação integral de áudio para controle de qualidade e compliance",
        "Relatórios operacionais detalhados de produtividade por agente"
      ],
      ctaText: "Estruturar Contact Center",
      href: "/contato?servico=contact-center-nuvem",
      icon: <Headphones className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "plataforma-conecta",
      index: "05",
      code: "OMNICHANNEL // ATENDIMENTO IA",
      tag: "ATENDIMENTO DIGITAL & IA",
      title: "Plataforma Conecta (Omnichannel + IA)",
      headline: "Centralize WhatsApp oficial multiatendente, voz e chat em um único painel, com agentes de IA para triagem rápida sem menus robóticos.",
      benefits: [
        "Múltiplos atendentes em 1 único número oficial de WhatsApp",
        "Agentes de IA que compreendem o contexto e agilizam o atendimento",
        "Histórico centralizado e seguro, blindando os contatos da empresa",
        "Painel ao vivo com tempo de resposta, volume de filas e TMA"
      ],
      ctaText: "Conhecer a Plataforma Conecta",
      href: "/contato?servico=plataforma-conecta",
      icon: <MessageSquareText className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "mensageria-em-massa",
      index: "06",
      code: "MESSAGING // WHATSAPP & SMS",
      tag: "ENGAJAMENTO & NOTIFICAÇÕES",
      title: "Mensageria em Massa",
      headline: "Disparos automatizados via WhatsApp Oficial e SMS para réguas de cobrança, confirmações e avisos com alta entregabilidade.",
      benefits: [
        "Automação de réguas de cobrança e lembretes de agendamento",
        "Rotas oficiais homologadas que protegem contra bloqueios",
        "Relatórios em tempo real com taxas de entrega e leitura",
        "Integração rápida via API com seus sistemas de ERP e CRM"
      ],
      ctaText: "Ativar Mensageria em Massa",
      href: "/contato?servico=mensageria-em-massa",
      icon: <Send className="w-5 h-5" />,
      featured: false,
    },
    {
      id: "software-gestao",
      index: "07",
      code: "MANAGEMENT // AUDITORIA & RATEIO",
      tag: "CONTROLE & BILHETAGEM",
      title: "Software de Gestão",
      headline: "Painel analítico com bilhetagem em tempo real, auditoria de consumo e rateio automatizado de despesas de telefonia por centro de custo.",
      benefits: [
        "Bilhetagem detalhada com histórico e duração de cada chamada",
        "Rateio automatizado de custos por departamento ou filial",
        "Identificação imediata de desperdícios e desvios de tráfego",
        "Exportação simplificada de dados para sistemas financeiros"
      ],
      ctaText: "Conhecer o Software de Gestão",
      href: "/contato?servico=software-gestao",
      icon: <BarChart3 className="w-5 h-5" />,
      featured: false,
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
    <section id="portfolio-empresas" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
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
          {b2bCards.map((card) => (
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
