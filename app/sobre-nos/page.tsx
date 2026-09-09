import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Building2, 
  Server, 
  Activity, 
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MetricCounter } from "@/components/sections/MetricCounter";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { siteContent } from "@/lib/content";

import { QuemSomosHeroBackground } from "@/components/sections/QuemSomosHeroBackground";
import { InstitutionalGuidelinesTabs } from "@/components/sections/InstitutionalGuidelinesTabs";

export const metadata = {
  title: "Quem Somos | Mundo Telecom — Empresa de Tecnologia com Infraestrutura e Solução Própria",
  description: "Conheça a Mundo Telecom: empresa de tecnologia com mais de 20 anos de evolução, transformando a comunicação com telefonia inteligente, IA, rechamada automática e infraestrutura própria.",
};

export default function SobreNosPage() {
  const pillars = [
    {
      number: "01",
      title: "Tecnologia & IA em Produção",
      tag: "IA ATIVA 24H",
      description: "Inteligência Artificial aplicada no atendimento de voz e texto: URA de IA, triagem inteligente e automações ativas 24 horas por dia.",
      icon: <ShieldCheck className="w-6 h-6 text-mundo-orange" />,
    },
    {
      number: "02",
      title: "Rechamada Automática Exclusiva",
      tag: "ZERO CHAMADAS PERDIDAS",
      description: "Diferencial de ponta: se o cliente ligar e não conseguir falar, o sistema registra e realiza o retorno de forma automática.",
      icon: <Server className="w-6 h-6 text-mundo-orange" />,
    },
    {
      number: "03",
      title: "Customer Success Dedicado",
      tag: "ATÉ O RESULTADO",
      description: "Não somos fornecedor que vende e some. Acompanhamos sua operação com consultoria contínua até alcançar a máxima eficiência.",
      icon: <Building2 className="w-6 h-6 text-mundo-orange" />,
    },
    {
      number: "04",
      title: "Infraestrutura Própria & NOC 24/7",
      tag: "OUTORGA ANATEL",
      description: "Base própria com outorga ANATEL e Centro de Operações de Rede vigiando a estabilidade técnica em regime 24/7/365 com SLA de 99,95%.",
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
                EMPRESA DE TECNOLOGIA COM INFRAESTRUTURA E SOLUÇÃO PRÓPRIA • +20 ANOS
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-display font-black text-white tracking-tight leading-[1.14] text-center max-w-4xl">
              Empresa de Tecnologia com infraestrutura e solução própria
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal text-center max-w-3xl mx-auto">
              Somos uma empresa de tecnologia. Das telecomunicações às comunicações inteligentes: tecnologia, IA e mensageria aplicadas ao atendimento. Licenciados pela ANATEL, operamos nossos próprios servidores e plataformas. Atendemos desde clínicas e concessionárias até ministérios públicos, com IA aplicada em produção, não é promessa, é operação.
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
                href="/produtos"
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
                <span>Infraestrutura Própria & ANATEL</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>3 Unidades Físicas (BH, BSB, SP)</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Customer Success & NOC 24/7</span>
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
      <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-mundo-orange uppercase mb-3">
              PRESENÇA NACIONAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy tracking-tight">
              Polos físicos estratégicos. Atendimento em todo o Brasil.
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Com sede de engenharia em Minas Gerais e escritórios executivos em Brasília e São Paulo, combinamos solidez física e proximidade humana com escala técnica nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
                  Minas Gerais // Sede
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-mundo-navy">
                  Belo Horizonte
                </h3>
                <p className="text-sm font-semibold text-mundo-orange">
                  Matriz & Centro de Operações (NOC 24/7)
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  Sede administrativa e centro de engenharia da Mundo Telecom. Abriga o monitoramento ininterrupto de rede (NOC Central 24/7), suporte consultivo e laboratório de inovação.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p className="text-slate-700 font-medium">Rua Hermilo Alves, 66, 2º Andar, Santa Tereza</p>
                <p className="font-mono text-slate-900 font-bold pt-1">(31) 2011-2000</p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
                  Distrito Federal // Polo B2G
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-mundo-navy">
                  Brasília
                </h3>
                <p className="text-sm font-semibold text-mundo-orange">
                  Relações Institucionais & Setor Público
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  Escritório dedicado a relacionamento institucional, contratações sob a Lei 14.133 e atendimento especializado a ministérios, órgãos e autarquias públicas.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p className="text-slate-700 font-medium">Ed. Oscar Niemeyer, Sala 1001, SCS Qd. 2</p>
                <p className="font-mono text-slate-900 font-bold pt-1">(31) 2011-2000</p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
                  São Paulo // Polo B2B
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-mundo-navy">
                  São Paulo
                </h3>
                <p className="text-sm font-semibold text-mundo-orange">
                  Grandes Contas Corporativas & Comercial
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  Unidade comercial voltada à arquitetura de soluções para redes de varejo, indústrias, contact centers e médias e grandes empresas privadas.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p className="text-slate-700 font-medium">Rua Funchal, 203, Conjunto 91, Vila Olímpia</p>
                <p className="font-mono text-slate-900 font-bold pt-1">(31) 2011-2000</p>
              </div>
            </div>
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
            Pronto para ter uma empresa de tecnologia com infraestrutura própria ao lado da sua organização?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Converse com nossos consultores técnicos e descubra como nossas soluções de telefonia em nuvem e comunicação integrada podem aumentar a eficiência e reduzir os custos da sua operação.
          </p>

          <div className="flex items-center justify-center pt-4">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Falar com Nossos Especialistas
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
