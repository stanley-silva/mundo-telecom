import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  PhoneCall, 
  Cloud, 
  Headphones, 
  MessageSquareText, 
  Send, 
  Wrench, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Lock, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  Building2,
  HelpCircle,
  TrendingUp,
  Award,
  ArrowUpRight,
  Shield
} from "lucide-react";
import { 
  detailedSolutionsCatalog, 
  solutionSlugAliases, 
  DetailedSolution 
} from "@/lib/solutions-catalog";
import { siteContent } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Icon helper
function getSolutionIcon(iconName: string, className: string = "w-6 h-6") {
  switch (iconName) {
    case "MessageSquareText":
      return <MessageSquareText className={className} />;
    case "PhoneCall":
      return <PhoneCall className={className} />;
    case "Cloud":
      return <Cloud className={className} />;
    case "Wrench":
      return <Wrench className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Lock":
      return <Lock className={className} />;
    case "BarChart3":
      return <BarChart3 className={className} />;
    case "Send":
      return <Send className={className} />;
    case "Headphones":
      return <Headphones className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

// Generate static params for all solutions and aliases
export async function generateStaticParams() {
  const officialSlugs = Object.keys(detailedSolutionsCatalog).map((slug) => ({
    slug,
  }));
  const aliasSlugs = Object.keys(solutionSlugAliases).map((slug) => ({
    slug,
  }));
  return [...officialSlugs, ...aliasSlugs];
}

// Generate SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const targetSlug = solutionSlugAliases[slug] || slug;
  const solution = detailedSolutionsCatalog[targetSlug];

  if (!solution) {
    return {
      title: "Solução não encontrada | Mundo Telecom",
      description: "A solução solicitada não foi encontrada.",
    };
  }

  return {
    title: `${solution.title} | Mundo Telecom`,
    description: solution.heroDescription,
    keywords: [
      solution.title,
      solution.pillar,
      "Mundo Telecom",
      "Comunicação Inteligente",
      "Infraestrutura Própria",
      "Outorga ANATEL",
      "Telefonia Corporativa",
      "IA para Empresas"
    ],
    openGraph: {
      title: `${solution.title} | Mundo Telecom`,
      description: solution.headline,
      type: "website",
      url: `https://mundotelecom.com.br/solucoes/${solution.slug}`,
    },
  };
}

export default async function SolutionLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const targetSlug = solutionSlugAliases[slug] || slug;
  const solution: DetailedSolution | undefined = detailedSolutionsCatalog[targetSlug];

  if (!solution) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FFFEFF] selection:bg-mundo-orange selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Clean, High-End Corporate with Real Photography)          */}
      {/* ========================================================================= */}
      <section className="relative bg-mundo-navy-deep text-white pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Subtle grid and accent glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(0, 89, 242, 0.12) 0%, rgba(7, 34, 75, 0.6) 50%, rgba(4, 18, 38, 0.98) 100%)"
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-mundo-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <Link href="/empresas" className="hover:text-mundo-orange transition-colors">
              Soluções
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-mundo-orange font-bold truncate">
              {solution.shortTitle}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & Bullets */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <Badge variant="orange" icon={getSolutionIcon(solution.iconName, "w-3.5 h-3.5")}>
                  {solution.badge}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.12]">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                {solution.headline}
              </p>

              {/* Value Bullets */}
              <div className="pt-2 space-y-3">
                {solution.heroBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mundo-orange/20 border border-mundo-orange/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-mundo-orange" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href={solution.cta.primaryHref}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="text-sm font-bold shadow-xl shadow-mundo-orange/25"
                >
                  {solution.cta.primaryText}
                </Button>
              </div>
            </div>

            {/* Right Column: High Quality Visual Showcase Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#041530]/60 backdrop-blur-md group">
                {/* Hero Image Container */}
                <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] w-full">
                  <Image
                    src={solution.heroImage || "/images/b2b-corporate.jpg"}
                    alt={solution.title}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041530]/90 via-[#041530]/20 to-transparent" />
                </div>

                {/* Floating Glassmorphism Status Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#07224B]/90 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mundo-orange text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-mundo-orange/30">
                      {getSolutionIcon(solution.iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                        INFRAESTRUTURA PRÓPRIA & OUTORGA ANATEL
                      </span>
                      <span className="text-xs sm:text-sm font-display font-bold text-white block truncate">
                        {solution.shortTitle}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                    <Shield className="w-3.5 h-3.5" />
                    <span>99,95% SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Diagonal Cut */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-8 bg-slate-50"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </section>

      {/* ========================================================================= */}
      {/* 2. TRANSFORMAÇÃO DIGITAL (Modern, Clean, Uncluttered Before vs After)       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="navy" icon={<TrendingUp className="w-3.5 h-3.5" />}>
              TRANSFORMAÇÃO DIGITAL
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              O impacto da modernização na sua operação
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Substitua os gargalos da telefonia tradicional por uma plataforma digital de alto desempenho.
            </p>
          </div>

          {/* Sleek Split Container */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Left: O Cenário Tradicional / Gargalos */}
            <div className="p-8 sm:p-12 bg-slate-50/50 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider">
                  <span>✕ O Cenário Anterior</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 tracking-tight">
                  {solution.problemTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {solution.problemDescription}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-200/60 text-xs font-medium text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Gargalos operacionais, chamadas perdidas e custos ocultos</span>
              </div>
            </div>

            {/* Right: A Solução Mundo Telecom */}
            <div className="p-8 sm:p-12 bg-white flex flex-col justify-between relative overflow-hidden">
              {/* Subtle Orange Accent Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mundo-orange/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider">
                  <span>✓ Com a Mundo Telecom</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-mundo-navy tracking-tight">
                  {solution.solutionTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {solution.solutionDescription}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 text-xs font-medium text-emerald-700 flex items-center gap-2 relative z-10">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Plataforma em nuvem, controle total e estabilidade contínua</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ARQUITETURA E RECURSOS (Each Card with Illustrative Image)              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl space-y-2.5">
              <Badge variant="orange" icon={<Sparkles className="w-3.5 h-3.5" />}>
                ESPECIFICAÇÕES & RECURSOS
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
                Arquitetura e Recursos Avançados
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Cada módulo desenvolvido sobre infraestrutura própria para máxima performance, segurança e usabilidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50/70 border border-slate-200/90 overflow-hidden hover:border-mundo-orange/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Attachment for Feature */}
                {feature.image && (
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-navy bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-sm">
                        {feature.tag || "RECURSO"}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {!feature.image && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange bg-mundo-orange/10 px-2.5 py-1 rounded-md inline-block">
                        {feature.tag || "RECURSO"}
                      </span>
                    )}

                    <h3 className="text-lg font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>MÓDULO {String(idx + 1).padStart(2, "0")}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-mundo-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DIFERENCIAIS EXCLUSIVOS MUNDO TELECOM                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#07224B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="orange" icon={<Award className="w-3.5 h-3.5" />}>
              EXCLUSIVIDADE MUNDO TELECOM
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              Diferenciais que nenhuma operadora convencional oferece
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Somos uma empresa de tecnologia com infraestrutura e solução própria, sem intermediários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.differentials.map((diff, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white/[0.06] border border-white/15 p-8 backdrop-blur-md space-y-4 hover:bg-white/[0.1] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-mundo-orange text-white flex items-center justify-center font-display font-black text-base shadow-lg shadow-mundo-orange/30">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COMPARATIVO TÉCNICO (Expanded to max-w-7xl)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="navy" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
              COMPARATIVO TÉCNICO
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Mundo Telecom vs. Mercado Tradicional
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Entenda por que empresas e órgãos públicos migram para a nossa infraestrutura.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xl">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-mundo-navy text-white p-5 sm:p-6 font-display text-xs sm:text-sm font-bold items-center">
              <div className="col-span-4 sm:col-span-3 uppercase tracking-wider text-slate-300 font-mono text-[11px]">
                Critério de Avaliação
              </div>
              <div className="col-span-4 sm:col-span-5 text-mundo-orange flex items-center gap-2 text-sm font-bold">
                <Sparkles className="w-4 h-4" />
                Mundo Telecom (Solução Própria)
              </div>
              <div className="col-span-4 sm:col-span-4 text-slate-300 font-semibold">
                Operadoras Tradicionais
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {solution.comparison.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-5 sm:p-6 text-xs sm:text-sm items-center hover:bg-slate-50/80 transition-colors"
                >
                  <div className="col-span-4 sm:col-span-3 font-display font-bold text-slate-900 pr-3">
                    {row.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-5 text-slate-800 font-medium pr-4 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{row.mundo}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-500 leading-relaxed">
                    {row.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. QUEM JÁ CONFIA NESTA SOLUÇÃO (Home Case Card Standard & max-w-7xl)       */}
      {/* ========================================================================= */}
      {solution.cases.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <Badge variant="orange" icon={<Building2 className="w-3.5 h-3.5" />}>
                PROVA SOCIAL AUDITÁVEL
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
                Grandes organizações operando sobre nossa tecnologia
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Casos reais com infraestrutura em produção e resultados mensuráveis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solution.cases.map((c, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl hover:border-mundo-orange/40 transition-all duration-300 group"
                >
                  <div className="space-y-5">
                    {/* Top Bar: Logo & Client Info */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
                      <div className="flex items-center gap-4 min-w-0">
                        {c.logo && (
                          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 p-2 shrink-0 relative overflow-hidden flex items-center justify-center shadow-sm">
                            <Image
                              src={c.logo}
                              alt={c.client}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                            {c.segment}
                          </span>
                          <h3 className="text-lg sm:text-xl font-display font-bold text-mundo-navy truncate">
                            {c.client}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{c.highlight}</span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {c.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 7. PERGUNTAS FREQUENTES (Expanded to max-w-7xl)                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="navy" icon={<HelpCircle className="w-3.5 h-3.5" />}>
              DÚVIDAS FREQUENTES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Perguntas Frequentes sobre {solution.shortTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Tudo o que você precisa saber sobre prazos, portabilidade e implantação assistida.
            </p>
          </div>

          <div className="space-y-4">
            {solution.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 [&_summary::-webkit-details-marker]:hidden transition-all shadow-sm hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-slate-900 font-display font-bold text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-open:bg-mundo-orange group-open:text-white transition-colors">
                    <ChevronRight className="w-4 h-4 transition duration-300 group-open:rotate-90" />
                  </div>
                </summary>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL HIGH-CONVERSION CTA BANNER (max-w-7xl)                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#07224B] via-[#041530] to-[#07224B] p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl border border-white/15">
          {/* Subtle Orange Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-mundo-orange/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <Badge variant="orange" icon={<PhoneCall className="w-3.5 h-3.5" />}>
              CONSULTORIA TÉCNICA GRATUITA
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-tight">
              Pronto para transformar a comunicação da sua empresa com {solution.shortTitle}?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              Fale diretamente com os engenheiros e especialistas da Mundo Telecom. Sem intermediários, sem surpresas na fatura e com portabilidade assistida.
            </p>
            <div className="pt-4 flex items-center justify-center">
              <Button
                href={solution.cta.primaryHref}
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-sm font-bold shadow-xl shadow-mundo-orange/30 px-8 py-4"
              >
                {solution.cta.primaryText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
