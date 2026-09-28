import React from "react";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  PhoneCall, 
  Cloud, 
  Activity, 
  Landmark, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Building2, 
  TrendingUp, 
  Award, 
  HelpCircle,
  Shield,
  Layers,
  Sparkles
} from "lucide-react";
import { 
  detailedGovernoSolutionsCatalog, 
  governoSlugAliases 
} from "@/lib/governo-solutions-catalog";
import { DetailedSolution } from "@/lib/solutions-catalog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactModalButton } from "@/components/ui/ContactModal";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getGovernoSolutionIcon(iconName: string, className: string = "w-6 h-6") {
  switch (iconName) {
    case "Cloud":
      return <Cloud className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "Landmark":
      return <Landmark className={className} />;
    case "FileCheck2":
      return <FileCheck2 className={className} />;
    case "PhoneCall":
      return <PhoneCall className={className} />;
    default:
      return <Landmark className={className} />;
  }
}

export async function generateStaticParams() {
  return Object.keys(detailedGovernoSolutionsCatalog).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const targetSlug = governoSlugAliases[slug] || slug;
  const solution: DetailedSolution | undefined = detailedGovernoSolutionsCatalog[targetSlug];

  if (!solution) {
    return {
      title: "Solução para Governo | Mundo Telecom",
    };
  }

  return {
    title: `${solution.title} | Mundo Telecom Governo`,
    description: solution.headline,
    keywords: [
      solution.title,
      "Governo B2G",
      "Lei 14.133/2021",
      "Mundo Telecom",
      "Outorga ANATEL",
      "Licitação Telecomunicações",
      "Termo de Referência"
    ],
    openGraph: {
      title: `${solution.title} | Mundo Telecom Governo`,
      description: solution.headline,
      type: "website",
      url: `https://mundotelecom.com.br/governo/solucoes/${solution.slug}`,
    },
  };
}

export default async function GovernoSolutionPage({ params }: PageProps) {
  const { slug } = await params;

  // Shared redirects
  if (slug === "telefonia-stfc-b2g" || slug === "telefonia-stfc") {
    redirect("/solucoes/telefonia-corporativa-stfc");
  }
  if (slug === "omnichannel-governo" || slug === "aikom") {
    redirect("/aikom");
  }

  const targetSlug = governoSlugAliases[slug] || slug;
  const solution: DetailedSolution | undefined = detailedGovernoSolutionsCatalog[targetSlug];

  if (!solution) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FFFEFF] selection:bg-mundo-orange selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Light Theme, High-End Corporate & Public Sector Ready)   */}
      {/* ========================================================================= */}
      <section className="relative bg-white text-slate-900 pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(239, 131, 28, 0.05) 0%, rgba(7, 34, 75, 0.03) 50%, rgba(248, 250, 252, 0.9) 100%)"
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-mundo-orange/[0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/governo" className="hover:text-mundo-orange transition-colors">
              Governo
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-mundo-orange font-bold truncate">
              {solution.shortTitle}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & Bullets */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <Badge variant="orange" icon={getGovernoSolutionIcon(solution.iconName, "w-3.5 h-3.5")}>
                  {solution.badge}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy tracking-tight leading-[1.12]">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                {solution.headline}
              </p>

              {/* Value Bullets */}
              <div className="pt-2 space-y-3">
                {solution.heroBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mundo-orange/15 border border-mundo-orange/35 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-mundo-orange" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="#contato"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Solicitar Proposta / Edital
                </Button>

                <Button
                  href="https://wa.me/553120112000?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20B2G%20da%20Mundo%20Telecom."
                  isExternal
                  variant="outline"
                  size="lg"
                >
                  Falar no WhatsApp
                </Button>
              </div>

              {/* Legal & SLA Badges */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-mundo-orange" />
                  <span>Lei 14.133/21</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-mundo-orange" />
                  <span>Outorga ANATEL</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-mundo-orange" />
                  <span>SLA Anual Contratual</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
                {/* Hero Image Container */}
                <div className="relative h-[360px] sm:h-[440px] lg:h-[480px] w-full">
                  <Image
                    src={solution.heroImage || "/images/b2g-government.jpg"}
                    alt={solution.title}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating Glassmorphism Status Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mundo-orange text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-mundo-orange/30">
                      {getGovernoSolutionIcon(solution.iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                        OUTORGA ANATEL & LEI 14.133
                      </span>
                      <span className="text-xs sm:text-sm font-display font-bold text-slate-900 block truncate">
                        {solution.shortTitle}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                    <Shield className="w-3.5 h-3.5" />
                    <span>SLA ANUAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ENQUADRAMENTO PÚBLICO & DIRETRIZES DE EDITAIS                          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Subtitle, Description & Technical Support Box */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <Badge variant="orange" icon={<Landmark className="w-3.5 h-3.5" />}>
                  ENQUADRAMENTO PÚBLICO & ESPECIFICAÇÕES DE EDITAIS
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-mundo-navy tracking-tight leading-tight">
                {solution.subtitle}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {solution.heroDescription}
              </p>

              <div className="pt-2">
                <div className="p-5 rounded-2xl bg-mundo-navy text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-mundo-orange font-bold uppercase tracking-wider">
                      SUPORTE A TERMOS DE REFERÊNCIA (TR)
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      Nossa equipe de engenharia e compliance está à disposição para sanar dúvidas técnicas de comissões de contratação.
                    </div>
                  </div>
                  <Link
                    href="#contato"
                    className="px-4 py-2.5 rounded-xl bg-mundo-orange hover:bg-mundo-orange-hover text-white text-xs font-display font-bold transition-all shrink-0 text-center shadow-md shadow-mundo-orange/20"
                  >
                    Apoio Técnico a Editais
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Operational Metrics & Authority Stats */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {solution.stats.map((st, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-mundo-orange/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-mundo-orange/10 text-mundo-orange flex items-center justify-center font-bold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-display font-black text-mundo-navy">
                      {st.value}
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {st.label}
                    </div>
                    <div className="text-xs text-slate-500 leading-snug">
                      {st.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PAIN VS SOLUTION                                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Pain */}
            <div className="p-8 rounded-3xl bg-white border border-red-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 block">
                  DESAFIO EM ÓRGÃOS PÚBLICOS
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                  {solution.problemTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {solution.problemDescription}
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-white border border-emerald-200/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block">
                  RESPOSTA MUNDO TELECOM
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                  {solution.solutionTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {solution.solutionDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DETAILED FEATURES GRID                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="orange">RECURSOS & ESPECIFICAÇÕES TÉCNICAS</Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Projetado para atender aos mais altos padrões de exigência pública.
            </h2>
            <p className="text-base text-slate-600">
              Arquitetura homologada, segurança de dados e relatórios auditáveis para órgãos municipais, estaduais e federais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200/80 bg-white hover:border-mundo-orange/40 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden"
              >
                <div className="space-y-4">
                  {feat.tag && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange px-2.5 py-1 rounded-full bg-mundo-orange/10 border border-mundo-orange/20 inline-block">
                      {feat.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Conformidade Lei 14.133</span>
                  <CheckCircle2 className="w-4 h-4 text-mundo-orange" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPARISON TABLE: MUNDO TELECOM VS TRADICIONAL                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="orange">ANÁLISE COMPARATIVA</Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Mundo Telecom vs. Mercado Tradicional de Telecom
            </h2>
            <p className="text-base text-slate-600">
              Por que órgãos de controle e grandes instituições escolhem nossa infraestrutura e modelo de contratação.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
            {/* Header Row */}
            <div className="hidden md:grid grid-cols-12 bg-mundo-navy text-white p-6 font-display text-xs sm:text-sm font-bold items-center border-b border-mundo-navy">
              <div className="col-span-3 uppercase tracking-wider text-slate-300 font-mono text-[11px]">
                Critério Técnico / Contratual
              </div>
              <div className="col-span-5 text-mundo-orange flex items-center gap-2 text-sm sm:text-base font-bold pl-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                Mundo Telecom (Infraestrutura Própria & Outorga)
              </div>
              <div className="col-span-4 text-slate-300 font-semibold pl-2">
                Fornecedores & Mercado Tradicional
              </div>
            </div>

            {/* Comparative Rows */}
            <div className="divide-y divide-slate-100">
              {solution.comparison.map((comp, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-7 text-xs sm:text-sm gap-4 md:gap-0 items-center hover:bg-slate-50/70 transition-colors"
                >
                  <div className="md:col-span-3 font-display font-bold text-slate-900 md:pr-6 text-sm sm:text-base">
                    {comp.feature}
                  </div>
                  <div className="md:col-span-5 text-slate-800 font-medium md:pr-8 flex items-start gap-3 bg-mundo-orange/[0.04] md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none border border-mundo-orange/10 md:border-transparent">
                    <CheckCircle2 className="w-5 h-5 text-mundo-orange shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-900">{comp.mundo}</span>
                  </div>
                  <div className="md:col-span-4 text-slate-500 leading-relaxed md:pl-2">
                    <span className="md:hidden text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                      Mercado Tradicional:
                    </span>
                    {comp.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CASES DE SUCESSO NO SETOR PÚBLICO                                      */}
      {/* ========================================================================= */}
      {solution.cases.length > 0 && (
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="orange">PROVA SOCIAL AUDITÁVEL</Badge>
              <h2 className="text-3xl font-display font-black text-mundo-navy tracking-tight">
                Casos Reais em Operação Contínua
              </h2>
              <p className="text-sm text-slate-600">
                Instituições públicas que confiam sua comunicação crítica à nossa engenharia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {solution.cases.map((cs, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                      {cs.logo ? (
                        <div className="relative w-36 h-12">
                          <Image
                            src={cs.logo}
                            alt={cs.client}
                            fill
                            className="object-contain object-left"
                          />
                        </div>
                      ) : (
                        <span className="font-display font-black text-mundo-navy text-lg">{cs.client}</span>
                      )}
                      <span className="text-xs font-mono font-bold text-mundo-orange uppercase">
                        {cs.segment}
                      </span>
                    </div>

                    <div className="text-base sm:text-lg font-display font-bold text-slate-900 leading-snug">
                      {cs.highlight}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Atestado de Capacidade Válido</span>
                    <ShieldCheck className="w-4 h-4 text-mundo-orange" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. FAQS TÉCNICAS E CONTRATUAIS                                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="orange">DÚVIDAS FREQUENTES</Badge>
            <h2 className="text-3xl font-display font-black text-mundo-navy tracking-tight">
              Perguntas Frequentes sobre Contratação Pública
            </h2>
            <p className="text-sm text-slate-600">
              Esclarecimentos técnicos e regulatórios para gestores e membros de comissão de licitação.
            </p>
          </div>

          <div className="space-y-4">
            {solution.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5"
              >
                <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-mundo-orange shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL IN-PAGE CTA WITH MODAL POPUP                                     */}
      {/* ========================================================================= */}
      <section id="contato" className="py-20 sm:py-28 bg-mundo-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#EF831C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <Badge variant="orange">CONSULTORIA ESPECIALIZADA B2G</Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Pronto para adequar sua comunicação aos termos da Lei 14.133?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de engenharia e compliance elabora análises de viabilidade e apoia comissões de contratação com dados técnicos claros e fundamentados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ContactModalButton
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              initialProfile="governo"
              initialSolution={solution.title}
              modalTitle={`Solicitar Diagnóstico: ${solution.shortTitle}`}
              modalSubtitle="Preencha os dados do órgão público para receber proposta técnica em conformidade com a Lei 14.133/21."
            >
              {solution.cta.primaryText}
            </ContactModalButton>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>• Atendimento em todo o território nacional</span>
            <span>• Suporte direto à comissão de contratação</span>
            <span>• Total sigilo e conformidade com a LGPD</span>
          </div>
        </div>
      </section>
    </div>
  );
}
