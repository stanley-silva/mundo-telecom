"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Headphones, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  Building2,
  Landmark,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteContent } from "@/lib/content";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano") || undefined;
  const tipo = searchParams.get("tipo") || searchParams.get("perfil") || undefined;

  return <ContactForm initialProfile={tipo} initialPlan={plano} />;
}

export default function ContatoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION (CONTATO)                           */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Contato & Atendimento</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <Badge
              variant="orange"
              icon={<PhoneCall className="w-3.5 h-3.5" />}
              className="py-1 px-3.5"
            >
              ATENDIMENTO CONSULTIVO & SUPORTE TÉCNICO NACIONAL
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
              Fale com a Mundo Telecom e descubra a estrutura ideal para sua operação.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Estamos prontos para analisar sua infraestrutura de telefonia atual, dimensionar sua demanda de ramais e apresentar uma proposta sob medida com custos transparentes, migração assistida e sem surpresas na fatura.
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Resposta rápida em horário comercial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Diagnóstico técnico sem custo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Atendimento Nacional para Empresas e Governos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* BLOCO 2 & 3: FORMULÁRIO + CANAIS IMEDIATOS                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 rounded-3xl bg-white animate-pulse h-96" />}>
                <ContactFormWithParams />
              </Suspense>
            </div>

            {/* Direct Channels Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
                  CONTATO DIRETO
                </div>
                <h3 className="text-2xl font-display font-bold text-mundo-navy">
                  Prefere falar diretamente pelos nossos canais oficiais?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Nossa equipe está disponível em múltiplos canais para prestar atendimento ágil e direcionado.
                </p>
              </div>

              {/* Canal 1: 0800 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-mundo-orange/50 transition-all duration-200 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500">
                    Central de Atendimento Nacional
                  </span>
                  <PhoneCall className="w-4 h-4 text-mundo-orange" />
                </div>
                <div className="text-2xl font-display font-black text-mundo-navy">
                  0800 031 1919
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Regional MG: (31) 2552-1919
                </div>
                <p className="text-xs text-slate-600 pt-1">
                  Ligação gratuita para todo o território nacional. Informações comerciais, contratações e direcionamento para filiais.
                </p>
              </div>

              {/* Canal 2: WhatsApp */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-mundo-orange/50 transition-all duration-200 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500">
                    WhatsApp Oficial
                  </span>
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-600">
                  Fale em tempo real com nossa equipe de consultores para tirar dúvidas rápidas sobre planos e soluções corporativas.
                </p>
                <Button
                  href={siteContent.brand.whatsappUrl}
                  isExternal
                  variant="primary"
                  size="sm"
                  className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 shadow-none border-none"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Iniciar Conversa no WhatsApp
                </Button>
              </div>

              {/* Canal 3: E-mail */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-mundo-orange/50 transition-all duration-200 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500">
                    E-mail Geral e Propostas
                  </span>
                  <Mail className="w-4 h-4 text-mundo-orange" />
                </div>
                <a
                  href={`mailto:${siteContent.brand.email}`}
                  className="text-base font-display font-bold text-mundo-navy hover:text-mundo-orange transition-colors block"
                >
                  {siteContent.brand.email}
                </a>
                <p className="text-xs text-slate-600">
                  Envio de solicitações formais, editais públicos, pedidos de orçamento e termos de referência técnica.
                </p>
              </div>

              {/* Canal 4: Suporte NOC 24/7 */}
              <div className="p-6 rounded-2xl bg-mundo-navy text-white space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
                    Área do Cliente & Central NOC 24/7
                  </span>
                  <Headphones className="w-4 h-4 text-mundo-orange" />
                </div>
                <p className="text-xs text-slate-300">
                  Canal exclusivo para clientes ativos abrirem chamados técnicos, monitorarem circuitos e acionarem o suporte emergencial ininterrupto.
                </p>
                <Button
                  href={siteContent.brand.clientPortalUrl}
                  isExternal
                  variant="outline-white"
                  size="sm"
                  className="w-full justify-center"
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Acessar Área do Cliente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: UNIDADES FÍSICAS E PRESENÇA REGIONAL             */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              ESTRUTURA FÍSICA
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Onde estamos localizados
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Estrutura própria de engenharia, laboratório e consultoria corporativa com presença estratégica nos principais polos do país.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.units.map((unit) => (
              <div
                key={unit.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-mundo-orange/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
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

                <div className="space-y-2 pt-4 border-t border-slate-200/60 text-xs text-slate-600 font-mono">
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
      {/* BLOCO 5: FAQ SOBRE O PRIMEIRO CONTATO                     */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy-deep text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <Badge variant="orange" icon={<HelpCircle className="w-3.5 h-3.5" />}>
              PERGUNTAS FREQUENTES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              Dúvidas comuns antes de falar com nosso time
            </h2>
          </div>

          <div className="space-y-4">
            {siteContent.faqContact.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-mundo-navy-surface border border-mundo-navy-border overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white hover:text-mundo-orange transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-mundo-orange shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
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
