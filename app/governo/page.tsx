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
import { CorporateClientsMarquee } from "@/components/sections/CorporateClientsMarquee";
import { GovernoSolutionsCarousel } from "@/components/sections/GovernoSolutionsCarousel";
import { HeroPixelBackground } from "@/components/sections/HeroPixelBackground";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Soluções para Governo (B2G) | Infraestrutura STFC e Conformidade Pública | Mundo Telecom",
  description: "Infraestrutura de telecomunicações estável, segura e em total conformidade para a administração pública. Outorga direta ANATEL (STFC/SCM), Lei 14.133/2021 e NOC 24/7.",
};

export default function GovernoPage() {

  const publicCases = [
    {
      organ: "Ministério Público de Minas Gerais (MPMG)",
      logo: "/images/clientes-governamentais/mpmg_logo_1x.webp",
      metricLine1: "4.306",
      metricLine2: "ramais",
      secondary: "10 SBCs · IDV/IDM 100%",
      detail: "Operação de alta complexidade com 10 SBCs, mais de 80 mil chamadas atendidas por mês e disponibilidade operacional contínua auditada.",
    },
    {
      organ: "Defensoria Pública de Minas Gerais (DPMG)",
      logo: "/images/clientes-governamentais/dpmg_logo_1x.webp",
      metricLine1: "R$ 14,6",
      metricLine2: "milhões",
      secondary: "600+ ramais · Call Center 50 posições",
      detail: "Contrato de 36 meses fornecendo telefonia inteligente, call center e suporte 24x7 para as comarcas de todo o estado.",
    },
    {
      organ: "Prefeitura de Betim",
      logo: "/images/clientes-governamentais/prefeitura_de_betim_logo_1x.webp",
      metricLine1: "Modernização",
      metricLine2: "Pública",
      secondary: "Contratação Simplificada",
      detail: "Modernização das secretarias, ouvidorias e postos de atendimento ao cidadão com integração de ramais e redução direta de despesas.",
    },
    {
      organ: "Caixa Econômica Federal",
      logo: "/images/clientes-governamentais/caixa_economica_federal_logo_1x.webp",
      metricLine1: "99,95%",
      metricLine2: "Disponibilidade",
      secondary: "Infraestrutura Crítica & Rotas Seguras",
      detail: "Rotas corporativas seguras, outorga direta ANATEL e supervisão contínua em tempo real pelo NOC 24x7 próprio.",
    },
  ];

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION B2G COM IDENTIDADE INSTITUCIONAL     */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy-deep min-h-[85vh] pt-32 pb-[380px] sm:pt-36 sm:pb-[450px] lg:pt-36 lg:pb-16 text-mundo-white overflow-hidden flex flex-col justify-center">
        {/* Dynamic PixelBlast Background */}
        <HeroPixelBackground variant="governo" />

        {/* Full Bleed Hero Image: Flush with right edge on mobile & desktop */}
        <div className="absolute right-0 bottom-0 h-[380px] sm:h-[450px] lg:top-24 lg:bottom-0 lg:h-auto w-full sm:w-[90%] md:w-[80%] lg:w-[55%] xl:w-[50%] 2xl:w-[46%] z-0 pointer-events-none select-none flex items-end justify-end overflow-hidden">
          <div className="relative w-full h-full lg:h-[92%] xl:h-[94%]">
            <Image
              src="/images/foto-hero-section-governo.webp"
              alt="Especialista em atendimento e infraestrutura para o setor público da Mundo Telecom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:py-16">
          <div className="max-w-2xl xl:max-w-3xl space-y-6 text-center lg:text-left">
            <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-300 mb-2 font-display">
              <Link href="/" className="hover:text-mundo-orange transition-colors">
                Início
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-mundo-orange font-bold">Soluções para Governo (B2G)</span>
            </nav>

            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="orange"
                icon={<Landmark className="w-3.5 h-3.5" />}
                className="py-1 px-3.5 text-[11px] sm:text-xs"
              >
                INFRAESTRUTURA PRÓPRIA • OUTORGA DIRETA ANATEL • LEI 14.133/2021
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-display font-black text-mundo-white tracking-tight leading-[1.12]">
              Infraestrutura de tecnologia com 99,95% de disponibilidade e conformidade pública.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Contratação direta sem intermediários para órgãos municipais, estaduais e federais. Casos comprovados como <strong>DPMG (R$ 14,6 mi)</strong> e <strong>MPMG (4.306 ramais)</strong> com SLA auditável e relatórios mensais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contato?tipo=governo"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Atendimento para Governo
              </Button>
            </div>

            {/* Selos de Garantia */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Outorga direta ANATEL sem intermediários</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Adequação à Lei 14.133/2021</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Monitoramento NOC 24/7/365</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 2: CLIENTES GOVERNAMENTAIS (MARQUEE B2G)             */}
      {/* ========================================================= */}
      <CorporateClientsMarquee filter="governo" />

      {/* ========================================================= */}
      {/* BLOCO 3: CARROSSEL DE SOLUÇÕES PARA GOVERNO                */}
      {/* ========================================================= */}
      <GovernoSolutionsCarousel />

      {/* ========================================================= */}
      {/* BLOCO 3: PROVA SOCIAL B2G (CASES NO SETOR PÚBLICO)         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200/80">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicCases.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 h-16">
                    <div className="relative h-12 w-36 sm:w-40 flex items-center">
                      <Image
                        src={cs.logo}
                        alt={`Logo ${cs.organ}`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <TrendingUp className="w-5 h-5 text-mundo-orange shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-display font-black text-mundo-orange leading-tight">
                      <span className="block">{cs.metricLine1}</span>
                      <span className="block">{cs.metricLine2}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 pt-1">
                      {cs.secondary}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
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
            SLA auditável, relatório gerencial mensal e reuniões de acompanhamento.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Contratação simplificada (dispensa legal) para prefeituras e suporte total a processos licitatórios pela Nova Lei de Licitações (Lei 14.133/21).
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
