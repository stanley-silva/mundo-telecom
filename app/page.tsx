import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  ArrowRight,
  Check,
  Building2,
  Landmark,
  PhoneCall,
  Cloud,
  Bot,
  ShieldAlert,
  MessageSquareText,
  Activity,
  Sparkles,
  Award,
  BadgePercent,
  TrendingUp,
  Cpu,
  Headphones,
  CheckCircle2,
  Lock,
  ChevronRight,
  Calculator
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MetricCounter } from "@/components/sections/MetricCounter";
import { InteractiveSimulator } from "@/components/sections/InteractiveSimulator";
import { CasesShowcase } from "@/components/sections/CasesShowcase";
import { CorporateClientsMarquee } from "@/components/sections/CorporateClientsMarquee";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Mundo Telecom | Telefonia em Nuvem e PABX Corporativo ANATEL",
  description: "Aumente a taxa de atendimento e a eficiência da sua comunicação com telefonia corporativa em nuvem. Operadora licenciada pela ANATEL há mais de 20 anos para empresas e governos.",
};

export default function HomePage() {
  const solutionIcons: Record<string, React.ReactNode> = {
    PhoneCall: <PhoneCall className="w-5 h-5" />,
    Radio: <Activity className="w-5 h-5" />,
    Cloud: <Cloud className="w-5 h-5" />,
    Bot: <Bot className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    MessageSquareText: <MessageSquareText className="w-5 h-5" />,
    Activity: <Activity className="w-5 h-5" />,
  };

  const differentialIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
    BadgePercent: <BadgePercent className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Headphones: <Headphones className="w-5 h-5" />,
  };

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION COM IDENTIDADE INSTITUCIONAL        */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy-deep min-h-[640px] lg:min-h-[720px] pt-32 pb-[380px] sm:pt-36 sm:pb-[450px] lg:pt-40 lg:pb-0 text-mundo-white overflow-hidden flex flex-col justify-center">
        {/* Ambient Glow Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(0, 89, 242, 0.12) 0%, rgba(7, 34, 75, 0.6) 50%, rgba(4, 18, 38, 0.98) 100%)"
          }}
        />

        {/* Subtle Arc Motif Layer */}
        <div className="arc-decor w-[600px] h-[600px] -top-64 -right-48 opacity-20 hidden lg:block pointer-events-none z-1" />
        <div className="arc-decor-glow w-[500px] h-[500px] -bottom-48 -left-32 opacity-15 hidden lg:block pointer-events-none z-1" />

        {/* Full Bleed Hero Image: Flush with right edge on mobile & desktop */}
        <div className="absolute right-0 bottom-0 h-[380px] sm:h-[450px] lg:top-24 lg:bottom-0 lg:h-auto w-full sm:w-[90%] md:w-[80%] lg:w-[55%] xl:w-[50%] 2xl:w-[46%] z-1 pointer-events-none select-none flex items-end justify-end overflow-hidden">
          <div className="relative w-full h-full lg:h-[92%] xl:h-[94%]">
            <Image
              src="/images/fotos-home/foto-hero-section-1.png"
              alt="Especialista em atendimento e telefonia corporativa da Mundo Telecom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:py-16">
          <div className="max-w-2xl xl:max-w-3xl space-y-6 text-center lg:text-left">
            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="orange"
                icon={<ShieldCheck className="w-3.5 h-3.5" />}
                className="py-1 px-3.5 text-[11px] sm:text-xs"
              >
                OPERADORA LICENCIADA PELA ANATEL • MAIS DE 20 ANOS DE MERCADO
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-display font-black text-mundo-white tracking-tight leading-[1.12]">
              Aumente a taxa de atendimento e a eficiência da sua comunicação com telefonia corporativa em nuvem.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Soluções completas de Telefonia IP, PABX em Nuvem, Atendimento Inteligente e Telefonia STFC para empresas e órgãos públicos. Elimine faturas imprevisíveis, aumente o completamento de chamadas com identificador local e mantenha todas as ligações gravadas com SLA garantido.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contato"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Fale com um Especialista
              </Button>
              <Button
                href="/governo"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Conhecer Soluções para Governo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Voz corporativa sem surpresa</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Migração técnica sem interrupção</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Suporte e NOC 24/7 próprio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 2: ALGUNS DE NOSSOS CLIENTES CORPORATIVOS (MARQUEE) */}
      {/* ========================================================= */}
      <CorporateClientsMarquee />

      {/* ========================================================= */}
      {/* BLOCO 3: SEGMENTAÇÃO COM FOTOGRAFIA (EMPRESAS vs GOVERNO) */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              ATENDIMENTO DIMENSIONADO
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Tecnologia dimensionada para a realidade e criticidade da sua organização
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Atendemos desde empresas privadas que buscam produtividade e previsibilidade orçamentária até órgãos públicos que exigem total conformidade com normas regulatórias e segurança de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: B2B Empresas com Imagem */}
            <div className="rounded-3xl bg-white border border-slate-200 hover:border-mundo-orange/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/b2b-corporate.jpg"
                  alt="Equipe corporativa utilizando telefonia em nuvem Mundo Telecom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-mundo-navy">
                    Soluções para Empresas
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Potencialize suas operações comerciais e de suporte. Conte com identificador local para aumentar o atendimento das suas ligações, integre sua telefonia ao WhatsApp e elimine centrais físicas com um PABX em Nuvem completo e escalável.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Telefonia em nuvem com alta taxa de completamento</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Gravação integral de chamadas e histórico auditável</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Planos estruturados com custo previsível sem surpresas</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Integração com WhatsApp, CRM e sistemas legados</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    href="/empresas"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explorar Soluções Corporativas
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2: B2G Governo com Imagem */}
            <div className="rounded-3xl bg-mundo-navy text-white border border-mundo-navy-border hover:border-mundo-orange/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/b2g-government.jpg"
                  alt="Reunião institucional de setor público com infraestrutura Mundo Telecom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-white">
                    Soluções para Órgãos Públicos
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Infraestrutura robusta de Telefonia STFC e plataformas de comunicação para órgãos municipais, estaduais e federais. Conectividade segura, transparência operacional e atendimento ao cidadão em regime 24/7 com total conformidade.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Licenciamento direto ANATEL e conformidade Lei 14.133/2021</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Conectividade segura para serviços essenciais e emergências</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Relatórios gerenciais detalhados para prestação de contas</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0" />
                      <span>Suporte técnico dedicado e monitoramento NOC 24/7 ininterrupto</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    href="/governo"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explorar Soluções para Governo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: NÚMEROS DE IMPACTO & AUTORIDADE COMPROVADA       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              AUTORIDADE COMPROVADA
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Nossa Trajetória em Números
            </h2>
            <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
              Consistência e escala técnica comprovadas no atendimento a empresas privadas e governos em todo o território nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {siteContent.metrics.map((metric) => (
              <MetricCounter
                key={metric.label}
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
                description={metric.description}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 5: PORTFÓLIO DE SOLUÇÕES (BENTO GRID MODERNO)       */}
      {/* ========================================================= */}
      <PortfolioSection />

      {/* ========================================================= */}
      {/* BLOCO 6: DIFERENCIAIS COMPETITIVOS                        */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white text-slate-900 relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              DIFERENCIAIS EXCLUSIVOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Motivos para escolher a Mundo Telecom como sua parceira estratégica
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Unimos a solidez técnica de uma operadora licenciada à flexibilidade e proximidade de atendimento que sua empresa ou órgão público necessita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.differentials.map((diff) => (
              <div
                key={diff.id}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-mundo-orange/50 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-3.5 shadow-sm group"
              >
                <div className="w-11 h-11 rounded-xl bg-mundo-orange/10 border border-mundo-orange/25 text-mundo-orange flex items-center justify-center group-hover:scale-105 transition-transform">
                  {differentialIcons[diff.icon] || <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 7: PROVA SOCIAL & CASES DE SUCESSO                  */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy text-white relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CasesShowcase />
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 8: ATENDIMENTO CONSULTIVO E CTA DE CONVERSÃO        */}
      {/* ========================================================= */}
      <section id="especialista" className="py-20 sm:py-28 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveSimulator />
        </div>
      </section>
    </div>
  );
}
