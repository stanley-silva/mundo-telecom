"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle, 
  Building2,
  Landmark,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteContent } from "@/lib/content";
import { useSearchParams } from "next/navigation";
import { HeroPixelBackground } from "@/components/sections/HeroPixelBackground";

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano") || undefined;
  const tipo = searchParams.get("tipo") || searchParams.get("perfil") || undefined;
  const solucao = searchParams.get("solucao") || searchParams.get("servico") || undefined;

  return <ContactForm initialProfile={tipo} initialPlan={plano} initialSolution={solucao} />;
}

export default function ContatoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION                                     */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy-deep min-h-[85vh] pt-32 pb-[380px] sm:pt-36 sm:pb-[450px] lg:pt-36 lg:pb-16 text-mundo-white overflow-hidden flex flex-col justify-center">
        {/* Dynamic PixelBlast Background */}
        <HeroPixelBackground variant="contato" />

        {/* Full Bleed Hero Image: Flush with right edge on mobile & desktop */}
        <div className="absolute right-0 bottom-0 h-[380px] sm:h-[450px] lg:top-24 lg:bottom-0 lg:h-auto w-full sm:w-[90%] md:w-[80%] lg:w-[55%] xl:w-[50%] 2xl:w-[46%] z-0 pointer-events-none select-none flex items-end justify-end overflow-hidden">
          <div className="relative w-full h-full lg:h-[92%] xl:h-[94%]">
            <Image
              src="/images/foto-hero-section-contato.webp"
              alt="Especialista em atendimento e consultoria técnica da Mundo Telecom"
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
              <span className="text-mundo-orange font-bold">Contato & Atendimento</span>
            </nav>

            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="orange"
                icon={<PhoneCall className="w-3.5 h-3.5" />}
                className="py-1 px-3.5 text-[11px] sm:text-xs"
              >
                ATENDIMENTO CONSULTIVO NACIONAL • INFRAESTRUTURA PRÓPRIA
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-display font-black text-mundo-white tracking-tight leading-[1.12]">
              Converse com nossos especialistas em comunicação inteligente.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Análise técnica sem custo, propostas personalizadas para empresas e órgãos públicos e suporte de engenharia especializada com <strong>SLA garantido em todo o Brasil</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href={`https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor da Mundo Telecom.")}`}
                isExternal
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Falar no WhatsApp Agora
              </Button>
            </div>

            {/* Selos de Garantia */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Resposta ágil em horário comercial</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Atendimento B2B e B2G nacional</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Engenharia e infraestrutura própria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 2: SEÇÃO PRINCIPAL (FORMULÁRIO + PAINEL UNIFICADO)  */}
      {/* ========================================================= */}
      <section id="formulario-contato" className="py-14 sm:py-20 bg-slate-50 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Coluna Esquerda: Painel Unificado de Contato Direto (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
                <div className="space-y-1.5 border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                    CANAIS OFICIAIS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-mundo-navy">
                    Atendimento Direto
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Prefere falar agora com nossa equipe? Escolha o canal de sua preferência:
                  </p>
                </div>

                {/* Canal 1: Telefone & 0800 */}
                <div className="space-y-1">
                  <span className="text-xs font-display font-bold text-slate-700 block">
                    Telefonia Oficial & 0800
                  </span>
                  <div className="text-lg font-display font-black text-mundo-navy">
                    {siteContent.brand.phoneRegional}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    Ligação Gratuita: {siteContent.brand.phone0800}
                  </div>
                </div>

                {/* Canal 2: WhatsApp */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <span className="text-xs font-display font-bold text-slate-700 block">
                    WhatsApp Corporativo
                  </span>
                  <div className="text-lg font-display font-black text-emerald-600">
                    {siteContent.brand.whatsappDisplay}
                  </div>
                  <a
                    href={siteContent.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-display font-bold transition-all shadow-sm w-full"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Canal 3: E-mail */}
                <div className="space-y-1 pt-4 border-t border-slate-100">
                  <span className="text-xs font-display font-bold text-slate-700 block">
                    E-mail Comercial & Propostas
                  </span>
                  <div>
                    <a
                      href={`mailto:${siteContent.brand.email}`}
                      className="text-sm font-display font-bold text-mundo-navy hover:text-mundo-orange transition-colors"
                    >
                      {siteContent.brand.email}
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Editais, orçamentos e documentação técnica
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Contato Enxuto (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 rounded-3xl bg-white animate-pulse h-96" />}>
                <ContactFormWithParams />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 3: ESTRUTURA FÍSICA & PRESENÇA NACIONAL             */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
              PRESENÇA ESTRATÉGICA
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-mundo-navy">
              Nossas Unidades
            </h2>
            <p className="text-sm text-slate-600">
              Presença física nos principais polos do país com engenharia e suporte regional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.units.map((unit) => (
              <div
                key={unit.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-mundo-orange/40 hover:bg-white hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-mundo-navy/5 group-hover:bg-mundo-orange/10 flex items-center justify-center text-mundo-navy group-hover:text-mundo-orange transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    {unit.badge && (
                      <Badge variant="orange" className="text-[9px] py-0.5 px-2">
                        {unit.badge}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-bold text-mundo-navy">
                      {unit.city} ({unit.state})
                    </h3>
                    <div className="text-xs font-semibold text-mundo-orange">
                      {unit.type}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/70 text-xs text-slate-600 font-mono">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-mundo-orange shrink-0 mt-0.5" />
                    <span>{unit.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-mundo-orange shrink-0" />
                    <span className="font-bold text-slate-900">{unit.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: FAQ (DÚVIDAS FREQUENTES)                         */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-mundo-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <Badge variant="orange" icon={<HelpCircle className="w-3.5 h-3.5" />}>
              PERGUNTAS FREQUENTES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              Dúvidas comuns antes do primeiro contato
            </h2>
          </div>

          <div className="space-y-3">
            {siteContent.faqContact.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-white hover:text-mundo-orange transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-mundo-orange shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
