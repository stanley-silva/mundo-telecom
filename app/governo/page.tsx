import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Landmark, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Cloud, 
  Activity, 
  MessageSquareText, 
  FileCheck2,
  ChevronRight,
  CheckCircle2,
  Building,
  TrendingUp,
  Award,
  Lock,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Soluções para Governo (B2G) | Infraestrutura STFC e Conformidade Pública | Mundo Telecom",
  description: "Infraestrutura de telecomunicações estável, segura e em total conformidade para a administração pública. Outorga direta ANATEL (STFC/SCM), Lei 14.133/2021 e NOC 24/7.",
};

export default function GovernoPage() {
  const govCards = [
    {
      id: "telefonia-stfc-b2g",
      tag: "CONECTIVIDADE PÚBLICA OFICIAL",
      title: "Telefonia STFC B2G",
      headline: "Linhas fixas oficiais com outorga direta ANATEL e faixas DDR para secretarias e autarquias, garantindo segurança jurídica e continuidade operacional.",
      benefits: [
        "Contratação direta respaldada por outorga ANATEL (STFC/SCM)",
        "Blocos de numeração DDR para distribuição precisa entre secretarias",
        "Alta disponibilidade física para serviços essenciais e emergências",
        "Relatórios detalhados de bilhetagem para prestação de contas"
      ],
      ctaText: "Consultar Viabilidade STFC",
      href: "/contato?tipo=governo&servico=telefonia-stfc",
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      id: "pabx-em-nuvem-governo",
      tag: "MODERNIZAÇÃO ADMINISTRATIVA",
      title: "PABX em Nuvem Governo",
      headline: "Central virtual unificada para interligar secretarias, escolas e polos administrativos a custo zero de ligação interna.",
      benefits: [
        "Chamadas internas gratuitas entre todos os prédios públicos",
        "Ramais em aparelhos IP, computadores ou celulares institucionais",
        "Painel web para remanejamento rápido de ramais entre secretarias",
        "Fim dos contratos terceirizados para manutenção de fiação física"
      ],
      ctaText: "Modernizar Telefonia Governamental",
      href: "/contato?tipo=governo&servico=pabx-governo",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      id: "noc-monitoramento-governo",
      tag: "ALTA DISPONIBILIDADE",
      title: "NOC 24×7 / Monitoramento",
      headline: "Centro de Operações de Rede com vigilância ininterrupta de circuitos e troncos para garantir a continuidade dos canais públicos essenciais.",
      benefits: [
        "Monitoramento 24/7/365 por equipe própria de engenharia",
        "Acordo de Nível de Serviço (SLA) formal com métricas contratuais",
        "Prevenção proativa de quedas em canais críticos e de emergência",
        "Relatórios técnicos periódicos de disponibilidade e saúde de rede"
      ],
      ctaText: "Conhecer Monitoramento NOC 24/7",
      href: "/contato?tipo=governo&servico=noc-monitoramento",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      id: "omnichannel-governo",
      tag: "ATENDIMENTO AO CIDADÃO & OUVIDORIAS",
      title: "Omnichannel Governo",
      headline: "Centralize ouvidorias, WhatsApp oficial verificado e telefone em uma plataforma integrada com geração de protocolos auditáveis.",
      benefits: [
        "Atendimento ao cidadão via WhatsApp oficial com múltiplos atendentes",
        "Geração e rastreamento automático de números de protocolo",
        "URA dinâmica e objetiva para direcionamento rápido por secretaria",
        "Gravação e guarda segura de 100% das interações com o cidadão"
      ],
      ctaText: "Integrar Canais de Atendimento",
      href: "/contato?tipo=governo&servico=omnichannel-governo",
      icon: <MessageSquareText className="w-5 h-5" />,
    },
    {
      id: "compliance-licitacoes",
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
      href: "/contato?tipo=governo&servico=licitacoes",
      icon: <FileCheck2 className="w-5 h-5" />,
    },
  ];

  const publicCases = [
    {
      organ: "CAIXA Econômica Federal",
      tag: "INSTITUIÇÃO FINANCEIRA PÚBLICA",
      metric: "Redução de 35% nos custos",
      detail: "Otimização de telefonia em agências e call centers com infraestrutura de alta densidade.",
    },
    {
      organ: "BBTS",
      tag: "TECNOLOGIA & SERVIÇOS",
      metric: "99,99% de disponibilidade",
      detail: "Melhoria de 40% na eficiência operacional com conexões dedicadas e SLA rigoroso.",
    },
    {
      organ: "UFV (Universidade Federal de Viçosa)",
      tag: "ENSINO SUPERIOR FEDERAL",
      metric: "Economia de 32% e +7.500 ramais",
      detail: "Unificação completa de ramais em todos os campi da universidade sem custos de ligações internas.",
    },
    {
      organ: "Prefeitura de Ribeirão das Neves",
      tag: "ADMINISTRAÇÃO MUNICIPAL",
      metric: "Mais de 3.000 ramais modernizados",
      detail: "Modernização do atendimento comunitário com suporte técnico NOC 24/7 ininterrupto.",
    },
  ];

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION B2G                                  */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#EF831C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-mundo-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/servicos" className="hover:text-mundo-orange transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Soluções para Governo</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="orange"
                icon={<Landmark className="w-3.5 h-3.5" />}
                className="py-1 px-3.5"
              >
                LICENÇA PRÓPRIA ANATEL (STFC/SCM) • CONFORMIDADE PÚBLICA
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
                Infraestrutura de telecomunicações estável, segura e em total conformidade para a administração pública.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Conectividade de alta disponibilidade e plataformas integradas de atendimento para órgãos municipais, estaduais e federais com estrito cumprimento legal.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  href="/contato?tipo=governo"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Solicitar Atendimento para Governo
                </Button>
                <Button
                  href="/contato?tipo=governo&interesse=licitacoes"
                  variant="outline-white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Consultar Equipe de Licitações
                </Button>
              </div>

              {/* Selos de Garantia */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Outorga direta ANATEL sem intermediários</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Adequação à Lei 14.133/2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Monitoramento NOC 24/7/365</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-mundo-navy-surface group">
                <div className="relative w-full h-[340px] sm:h-[400px]">
                  <Image
                    src="/images/b2g-government.jpg"
                    alt="Infraestrutura de telecomunicações para administração pública Mundo Telecom"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy-deep/90 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-mundo-navy-surface/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="text-sm font-display font-bold text-white">
                    Conformidade & Transparência
                  </div>
                  <div className="text-xs text-slate-300">
                    Bilhetagem detalhada e dados auditáveis para órgãos e tribunais de controle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* BLOCO 2: PORTFÓLIO DE SOLUÇÕES PARA GOVERNO                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
              PORTFÓLIO GOVERNAMENTAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy tracking-tight">
              Soluções estruturadas para o setor público
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Infraestrutura de voz, atendimento ao cidadão e governança técnica para órgãos de todas as esferas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {govCards.map((card) => (
              <div
                key={card.id}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-mundo-orange/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-mundo-navy/5 text-mundo-navy group-hover:bg-mundo-orange group-hover:text-white transition-all flex items-center justify-center shrink-0">
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange">
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.headline}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-display font-bold text-mundo-navy mb-2.5">
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

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    href={card.href}
                    className="w-full py-2.5 px-4 rounded-xl bg-mundo-orange hover:bg-mundo-orange-hover text-white flex items-center justify-center gap-1.5 text-xs font-display font-bold shadow-md shadow-mundo-orange/15 transition-all group-hover:shadow-lg text-center"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 3: PROVA SOCIAL B2G (CASES NO SETOR PÚBLICO)         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
              CASOS DE SUCESSO COMPROVADOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Resultados comprovados na administração pública
            </h2>
            <p className="text-base text-slate-600">
              Órgãos federais, autarquias, prefeituras e universidades que confiam sua comunicação institucional à Mundo Telecom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicCases.map((cs, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                    <span className="text-[10px] font-mono font-bold uppercase text-mundo-orange">
                      {cs.tag}
                    </span>
                    <Landmark className="w-4 h-4 text-slate-400 group-hover:text-mundo-orange transition-colors" />
                  </div>
                  <h3 className="text-base font-display font-black text-mundo-navy">
                    {cs.organ}
                  </h3>
                  <div className="text-lg font-display font-black text-mundo-orange">
                    {cs.metric}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {cs.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: CONVERSÃO FINAL (CTA B2G)                         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#EF831C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <Badge variant="orange">
            SUPORTE A GESTORES & LICITAÇÕES
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Leve estabilidade técnica e transparência para o seu órgão público.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe analisa termos de referência, estudos de viabilidade e projetos especiais com agilidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contato?tipo=governo"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Solicitar Atendimento para Governo
            </Button>
            <Button
              href={`https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor B2G da Mundo Telecom via WhatsApp.")}`}
              isExternal
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto"
            >
              Falar com Consultor B2G no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
