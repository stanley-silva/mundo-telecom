import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  MapPin, 
  Building2, 
  Landmark, 
  PhoneCall, 
  Server, 
  Headphones, 
  Award, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  Compass,
  Eye,
  ShieldAlert,
  Sparkles,
  Target,
  Scale,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MetricCounter } from "@/components/sections/MetricCounter";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { siteContent } from "@/lib/content";

import { QuemSomosHeroBackground } from "@/components/sections/QuemSomosHeroBackground";
import { InstitutionalGuidelinesTabs } from "@/components/sections/InstitutionalGuidelinesTabs";

export const metadata = {
  title: "Quem Somos | Mundo Telecom — Operadora Licenciada ANATEL e Telefonia em Nuvem",
  description: "Conheça a Mundo Telecom: mais de 20 anos de experiência, autorizada pela ANATEL, entregando telefonia corporativa em nuvem, PABX e soluções de comunicação para empresas e governos.",
};

export default function SobreNosPage() {
  const pillars = [
    {
      number: "01",
      title: "Licença ANATEL Própria",
      tag: "STFC NACIONAL",
      description: "Autorização de Serviço Telefônico Fixo Comutado emitida pela ANATEL para atuar como operadora independente em território nacional.",
      icon: <ShieldCheck className="w-6 h-6 text-mundo-orange" />,
    },
    {
      number: "02",
      title: "NOC 24/7/365 Próprio",
      tag: "ENGENHARIA DEDICADA",
      description: "Centro de Operações de Rede com engenheiros e especialistas monitorando continuamente enlaces, rotas de voz e indicadores de latência.",
      icon: <Server className="w-6 h-6 text-mundo-orange" />,
    },
    {
      number: "03",
      title: "Infraestrutura Tier III",
      tag: "REDUNDÂNCIA GEOGRÁFICA",
      description: "Servidores alocados em datacenters redundantes com rotas contingenciadas, garantindo SLA de disponibilidade contratual de 99.98%.",
      icon: <Building2 className="w-6 h-6 text-mundo-orange" />,
    },
    {
      number: "04",
      title: "Ecossistema Homologado",
      tag: "COMPATIBILIDADE GLOBAL",
      description: "Compatibilidade e integração plena com os maiores players globais do ecossistema de telecom: 3CX, Khomp, Fanvil, Grandstream, Aligera e Plantec.",
      icon: <Activity className="w-6 h-6 text-mundo-orange" />,
    },
  ];

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION (QUEM SOMOS)                        */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-20 text-mundo-white overflow-hidden">
        {/* Animated PixelBlast Background (Autonomous, full height, no mouse interaction) */}
        <QuemSomosHeroBackground />

        {/* Ambient Gradient Overlay for Text Legibility & Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,34,75,0.2)_0%,rgba(4,21,48,0.65)_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Quem Somos</span>
          </nav>

          <div className="max-w-4xl mx-auto space-y-6 text-center flex flex-col items-center">
            <div className="flex justify-center">
              <Badge
                variant="orange"
                icon={<ShieldCheck className="w-3.5 h-3.5" />}
                className="py-1 px-3.5"
              >
                AUTORIDADE, INFRAESTRUTURA E EXPERIÊNCIA EM TELECOMUNICAÇÕES
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-display font-black text-white tracking-tight leading-[1.14] text-center max-w-4xl">
              Conectando empresas e governos com solidez técnica, conformidade regulatória e infraestrutura em nuvem.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal text-center max-w-3xl mx-auto">
              Há mais de duas décadas, a Mundo Telecom atua como operadora licenciada pela ANATEL e integradora de soluções de voz e comunicação digital. Transformamos a comunicação corporativa e pública em um motor de eficiência, previsibilidade orçamentária e total segurança operacional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                href="/contato"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Falar com Nossos Especialistas
              </Button>
              <Button
                href="/servicos"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Conhecer Soluções
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300 w-full max-w-3xl">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Licença Própria ANATEL</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>3 Unidades Físicas (BH, BSB, SP)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Suporte e Monitoramento 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 2: HISTÓRIA E TRAJETÓRIA INSTITUCIONAL (TIMELINE)   */}
      {/* ========================================================= */}
      <HistoryTimeline />

      {/* ========================================================= */}
      {/* BLOCO 3: DIRETRIZES INSTITUCIONAIS (MISSÃO, VISÃO E VALORES) */}
      {/* ========================================================= */}
      <InstitutionalGuidelinesTabs />

      {/* ========================================================= */}
      {/* BLOCO 4: ESTRUTURA TÉCNICA E PILARES OPERACIONAIS         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              NOSSOS PILARES DE EXCELÊNCIA
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Engenharia de rede desenhada para alta criticidade
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Combinamos ativos tecnológicos próprios, acordos de SLA rigorosos e parcerias com fabricantes globais para garantir operações sem interrupções.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil) => (
              <div
                key={pil.number}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-mundo-orange/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-slate-300 group-hover:text-mundo-orange transition-colors">
                      {pil.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                      {pil.icon}
                    </div>
                  </div>
                  <Badge variant="orange" className="text-[10px] mb-2">
                    {pil.tag}
                  </Badge>
                  <h3 className="text-lg font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                    {pil.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 5: NÚMEROS DE IMPACTO & ESCALA OPERACIONAL          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-mundo-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white">
              Nossa Trajetória em Números
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Resultados consolidados em mais de duas décadas de operações contínuas em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.metrics.map((metric) => (
              <MetricCounter
                key={metric.label}
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 6: UNIDADES FÍSICAS E PRESENÇA REGIONAL             */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              CAPILARIDADE E PROXIMIDADE
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Estrutura física e capilaridade técnica para atender todo o Brasil
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Com matriz em Belo Horizonte e unidades estratégicas em Brasília e São Paulo, oferecemos atendimento próximo e cobertura técnica integrada para todo o território nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.units.map((unit) => (
              <div
                key={unit.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-mundo-orange/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-mundo-navy/5 group-hover:bg-mundo-orange/10 flex items-center justify-center text-mundo-navy group-hover:text-mundo-orange transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    {unit.badge && (
                      <Badge variant="orange" className="text-[10px]">
                        {unit.badge}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                      {unit.city} ({unit.state})
                    </h3>
                    <div className="text-xs font-semibold text-mundo-orange mt-1">
                      {unit.type}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600 font-mono">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-mundo-orange shrink-0 mt-0.5" />
                    <span>{unit.address} — CEP: {unit.cep}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-mundo-orange shrink-0" />
                    <span className="font-bold text-slate-900">{unit.phone}</span>
                  </div>
                  {unit.hours && (
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{unit.hours}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 7: CTA DE FECHAMENTO                                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy-deep text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="orange">
            CONTATO CONSULTIVO
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">
            Pronto para ter uma operadora séria e transparente ao lado da sua organização?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Converse com nossos consultores técnicos e descubra como nossas soluções de telefonia em nuvem e comunicação integrada podem aumentar a eficiência e reduzir os custos da sua operação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Falar com Nossos Especialistas
            </Button>
            <Button
              href={siteContent.brand.whatsappUrl}
              isExternal
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto"
            >
              Atendimento Direto via WhatsApp
            </Button>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            Diagnóstico sem compromisso • Migração técnica assistida • Atendimento em todo o território nacional
          </div>
        </div>
      </section>
    </div>
  );
}
