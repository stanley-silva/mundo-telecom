"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MessageSquareText, 
  Bot, 
  PhoneCall, 
  Users, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Send, 
  Smartphone, 
  Globe, 
  Mail, 
  Layers, 
  Database, 
  Lock, 
  Headphones, 
  HelpCircle,
  Zap,
  Radio
} from "lucide-react";

export default function AikomPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FFFEFF] selection:bg-[#D7593C] selection:text-white font-sans">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Exclusiva AIKOM: Fundo #163358, Acentos #D7593C e #1C3D6F)*/}
      {/* ========================================================================= */}
      <section className="relative bg-[#163358] text-white pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
        {/* Grafismo Angular de Apoio extraído do Manual AIKOM (Páginas 22, 23, 35) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Silhueta angular em corte diagonal azul institucional (#1C3D6F) */}
          <div 
            className="absolute -top-24 -right-24 w-[700px] h-[700px] opacity-25"
            style={{
              background: "linear-gradient(135deg, #1C3D6F 0%, transparent 70%)",
              clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 75%)"
            }}
          />
          {/* Brilho sutil terracota / coral nos cantos */}
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#D7593C]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1C3D6F]/40 rounded-full blur-2xl" />
          {/* Grade suave para profundidade técnica */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation com selo co-branded */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <Link href="/solucoes" className="hover:text-white transition-colors">Soluções</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="text-[#D7593C] font-bold">AIKOM Omnichannel & IA</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Plataforma Própria • Infraestrutura Mundo Telecom</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Coluna Esquerda: Apresentação da Marca & Value Proposition */}
            <div className="lg:col-span-6 space-y-5">
              {/* Logotipo Oficial AIKOM com Tipografia Branca Direta (Sem Caixa Branca) */}
              <div className="flex items-center">
                <Image
                  src="/images/logo-aikom-branco.svg"
                  alt="Logo AIKOM Omnichannel & IA"
                  width={185}
                  height={39}
                  priority
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              {/* Headline Oficial */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.12]">
                Centralize o atendimento da sua empresa com inteligência artificial e visão 360º.
              </h1>

              {/* Subheadline & Copy do MIV */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Voz, WhatsApp oficial da Meta, redes sociais e e-mail integrados em uma só tela para sua equipe. Múltiplos atendentes em um único número, triagem automática com IA (NLP) e histórico unificado de conversas.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/contato?solucao=aikom-omnichannel"
                  className="inline-flex items-center justify-center gap-2 bg-[#D7593C] hover:bg-[#c04b30] text-white font-bold shadow-lg shadow-[#D7593C]/25 text-sm sm:text-base px-7 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5"
                >
                  <span>Solicitar Demonstração da AIKOM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#recursos-aikom"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white hover:bg-white/10 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-2xl transition-all"
                >
                  <span>Explorar Recursos</span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Fotografia Real de Especialista em Atendimento Omnichannel */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/[0.03] backdrop-blur-sm group">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/images/solucoes/aikon/hero.jpg"
                    alt="Especialista em atendimento utilizando a plataforma AIKOM com headset corporativo"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente sutil para integração e legibilidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163358]/90 via-[#163358]/20 to-transparent" />
                </div>

                {/* Card Flutuante Inferior: Métrica de Produtividade */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#163358]/90 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D7593C] flex items-center justify-center shrink-0 shadow-md">
                      <Image
                        src="/images/icone-aikom.svg"
                        alt="Ícone AIKOM"
                        width={22}
                        height={22}
                        className="w-5 h-5 object-contain brightness-0 invert"
                      />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm tracking-tight block">
                        Produtividade 4x Superior
                      </span>
                      <p className="text-xs text-slate-300 font-normal">
                        Fila única de WhatsApp, Voz, Instagram e E-mail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PILARES & MÉTRICAS AUDITÁVEIS (Paleta AIKOM #1C3D6F + #D7593C)         */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#1C3D6F] tracking-tight block">
                40%
              </span>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Menos Carga Manual</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Com triagem automática por IA e autoatendimento inteligente 24/7.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#D7593C] tracking-tight block">
                3x
              </span>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Mais Velocidade</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fila unificada com distribuição instantânea por departamento.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#1C3D6F] tracking-tight block">
                100%
              </span>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Histórico Centralizado</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Adequação total à LGPD e zero perda de contatos em celulares soltos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-3xl sm:text-4xl font-display font-black text-emerald-600 tracking-tight block">
                0
              </span>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Risco de Banimento</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Operação homologada sobre a API Oficial do WhatsApp Business (Meta).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. O IMPACTO DA MODERNIZAÇÃO: CENÁRIO ANTERIOR VS COM A AIKOM             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C3D6F]/10 border border-[#1C3D6F]/20 text-[#1C3D6F] text-xs font-mono font-bold uppercase tracking-wider">
              TRANSFORMAÇÃO DIGITAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#163358] tracking-tight">
              O impacto da plataforma AIKOM na sua operação
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Substitua ferramentas improvisadas e celulares individuais por uma plataforma corporativa com SLA e supervisão completa.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Esquerda: O Cenário Tradicional */}
            <div className="p-8 sm:p-12 bg-slate-50/50 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider">
                  <span>✕ O Cenário Anterior</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 tracking-tight">
                  Atendimento Descentralizado, Sem Histórico e Sujeito a Perdas
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Atendentes respondendo clientes em aparelhos celulares próprios, mensagens acumuladas sem triagem, clientes esperando horas por respostas básicas e total incapacidade da gestão de auditar o que foi conversado.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-200/60 text-xs font-medium text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Descontrole operacional, lentidão e risco jurídico</span>
              </div>
            </div>

            {/* Direita: A Solução com a AIKOM */}
            <div className="p-8 sm:p-12 bg-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D7593C]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider">
                  <span>✓ Com a Plataforma AIKOM</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1C3D6F] tracking-tight">
                  Painel Unificado em Nuvem, IA Ativa e Gestão em Tempo Real
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Uma interface web segura onde toda a equipe atende pelo mesmo número oficial verificado. A IA resolve as dúvidas frequentes e qualifica o lead, encaminhando para o atendente correto com o histórico completo preservado.
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 text-xs font-medium text-emerald-700 flex items-center gap-2 relative z-10">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Plataforma própria com suporte direto da Mundo Telecom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ECOSSISTEMA MULTI-CANAL DA AIKOM                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D7593C]/10 border border-[#D7593C]/20 text-[#D7593C] text-xs font-mono font-bold uppercase tracking-wider">
              CANALIDADE TOTAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#163358] tracking-tight">
              Todos os seus pontos de contato em uma fila inteligente
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              O cliente escolhe o canal favorito. Sua equipe gerencia tudo através da mesma tela com a AIKOM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Canal 1: WhatsApp Oficial */}
            <div className="p-7 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#D7593C]/50 hover:shadow-xl transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#D7593C]/10 text-[#D7593C] border border-[#D7593C]/20 flex items-center justify-center group-hover:bg-[#D7593C] group-hover:text-white transition-all duration-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1C3D6F]">WhatsApp Business API Oficial</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Utilize o selo oficial verificado da Meta com múltiplos operadores no mesmo número de telefone fixo ou 0800, eliminando o risco de bloqueios.
              </p>
            </div>

            {/* Canal 2: Telefonia & Voz */}
            <div className="p-7 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#D7593C]/50 hover:shadow-xl transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#D7593C]/10 text-[#D7593C] border border-[#D7593C]/20 flex items-center justify-center group-hover:bg-[#D7593C] group-hover:text-white transition-all duration-300">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1C3D6F]">Telefonia & Voz (PABX na Nuvem)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conexão direta com a operadora STFC Mundo Telecom. O operador recebe chamadas e mensagens no mesmo painel web sem alternar de aplicativo.
              </p>
            </div>

            {/* Canal 3: Instagram & Messenger */}
            <div className="p-7 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#D7593C]/50 hover:shadow-xl transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#D7593C]/10 text-[#D7593C] border border-[#D7593C]/20 flex items-center justify-center group-hover:bg-[#D7593C] group-hover:text-white transition-all duration-300">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1C3D6F]">Instagram Direct & Facebook</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Capture mensagens diretas e comentários de anúncios em tempo real, distribuindo automaticamente para o time comercial qualificar.
              </p>
            </div>

            {/* Canal 4: E-mail Corporativo */}
            <div className="p-7 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#D7593C]/50 hover:shadow-xl transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#D7593C]/10 text-[#D7593C] border border-[#D7593C]/20 flex items-center justify-center group-hover:bg-[#D7593C] group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1C3D6F]">E-mail Corporativo com SLA</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unifique caixas de e-mail institucionais (comercial@, suporte@) com atribuição de responsáveis, controle de tempo de resposta e templates rápidos.
              </p>
            </div>

            {/* Canal 5: Webchat para Sites */}
            <div className="p-7 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#D7593C]/50 hover:shadow-xl transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#D7593C]/10 text-[#D7593C] border border-[#D7593C]/20 flex items-center justify-center group-hover:bg-[#D7593C] group-hover:text-white transition-all duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1C3D6F]">Webchat Customizável para Portais</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Widget moderno integrado ao seu site ou portal de transparência com as cores da sua empresa e atendimento inicial por inteligência artificial.
              </p>
            </div>

            {/* Canal 6: Conectores e APIs REST */}
            <div className="p-7 rounded-3xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#D7593C]/50 hover:shadow-xl transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#D7593C]/10 text-[#D7593C] border border-[#D7593C]/20 flex items-center justify-center group-hover:bg-[#D7593C] group-hover:text-white transition-all duration-300">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#1C3D6F]">Integração via API com CRMs & ERPs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conecte nativamente a ferramentas como Salesforce, RD Station, HubSpot, PipeRun, TOTVS e bases de dados internas da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ESPECIFICAÇÕES & RECURSOS DA PLATAFORMA AIKOM (#recursos-aikom)        */}
      {/* ========================================================================= */}
      <section id="recursos-aikom" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C3D6F]/10 border border-[#1C3D6F]/20 text-[#1C3D6F] text-xs font-mono font-bold uppercase tracking-wider">
              ARQUITETURA & TECNOLOGIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#163358] tracking-tight">
              Recursos construídos para alta performance de atendimento
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Descubra por que a AIKOM é a escolha de grandes corporações e órgãos governamentais para simplificar a comunicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {/* Feature 1 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:shadow-xl hover:border-[#D7593C]/50 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/solucoes/aikon/feature-nlp.jpg"
                  alt="Interface de triagem inteligente e workflow de NLP da AIKOM"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#163358]/90 text-white backdrop-blur-sm border border-white/10">
                  IA CONVERSACIONAL (NLP)
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C3D6F] group-hover:text-[#D7593C] transition-colors">
                    Triagem Inteligente com IA Cognitiva
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Compreensão de linguagem natural capaz de entender áudios e textos, qualificar a intenção do cliente, emitir segundas vias e direcionar para o atendente correto.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#D7593C]">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Atendimento autônomo 24 horas por dia</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:shadow-xl hover:border-[#D7593C]/50 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/solucoes/aikon/feature-team.jpg"
                  alt="Equipe de atendimento operando com múltiplos operadores no mesmo número de WhatsApp"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#163358]/90 text-white backdrop-blur-sm border border-white/10">
                  CENTRALIZAÇÃO
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C3D6F] group-hover:text-[#D7593C] transition-colors">
                    Múltiplos Operadores em 1 Número
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Toda a sua equipe comercial, financeira e de suporte atende através do mesmo WhatsApp oficial. Acabe com dezenas de chips e celulares individuais.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#D7593C]">
                  <Users className="w-3.5 h-3.5 shrink-0" />
                  <span>Gestão unificada de acessos e permissões</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:shadow-xl hover:border-[#D7593C]/50 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/solucoes/aikon/feature-timeline.jpg"
                  alt="Linha do tempo e histórico unificado do cliente em visão 360 graus"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#163358]/90 text-white backdrop-blur-sm border border-white/10">
                  CONTEXTO 360°
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C3D6F] group-hover:text-[#D7593C] transition-colors">
                    Linha do Tempo e Histórico Unificado
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Se o cliente ligar e depois mandar mensagem, todo o contexto é preservado na mesma timeline, eliminando a frustração de repetir informações.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#D7593C]">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Auditoria imutável de interações</span>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:shadow-xl hover:border-[#D7593C]/50 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/solucoes/aikon/feature-dashboard.jpg"
                  alt="Dashboard em tempo real com métricas de TMA, CSAT, NPS e volume por canal"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#163358]/90 text-white backdrop-blur-sm border border-white/10">
                  GESTÃO & SUPERVISÃO
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C3D6F] group-hover:text-[#D7593C] transition-colors">
                    Dashboards e SLA em Tempo Real
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Supervisores acompanham filas ao vivo, tempo médio de espera (TME), tempo médio de atendimento (TMA) e avaliações de CSAT e NPS instantâneas.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#D7593C]">
                  <BarChart3 className="w-3.5 h-3.5 shrink-0" />
                  <span>Relatórios completos para tomada de decisão</span>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:shadow-xl hover:border-[#D7593C]/50 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/solucoes/aikon/feature-nocode.jpg"
                  alt="Editor visual no-code de fluxos de atendimento e respostas automáticas"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#163358]/90 text-white backdrop-blur-sm border border-white/10">
                  PRODUTIVIDADE
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C3D6F] group-hover:text-[#D7593C] transition-colors">
                    Respostas Rápidas & Automação No-Code
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Crie fluxos de atendimento com facilidade visual, respostas pré-formatadas para dúvidas habituais e disparo de campanhas com variáveis dinâmicas.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#D7593C]">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>Agilidade operacional sem depender de devs</span>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden hover:shadow-xl hover:border-[#D7593C]/50 transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/solucoes/aikon/feature-security.jpg"
                  alt="Painel corporativo de criptografia, controle de acesso e conformidade LGPD"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 left-3.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#163358]/90 text-white backdrop-blur-sm border border-white/10">
                  SEGURANÇA JURÍDICA
                </span>
              </div>
              <div className="p-6 sm:p-7 space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#1C3D6F] group-hover:text-[#D7593C] transition-colors">
                    Criptografia e Conformidade LGPD
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Mascaramento de dados sensíveis (CPF, cartões), termos de consentimento automatizados, logs auditáveis e hospedagem em nuvem de alta segurança.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#D7593C]">
                  <Lock className="w-3.5 h-3.5 shrink-0" />
                  <span>Pronto para auditorias e compliance estrito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TABELA COMPARATIVA: AIKOM VS FERRAMENTAS NÃO OFICIAIS                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D7593C]/10 text-[#D7593C] text-xs font-mono font-bold uppercase tracking-wider">
              COMPARATIVO TÉCNICO
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#163358] tracking-tight">
              Por que a AIKOM é a escolha segura?
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg bg-white">
            <div className="grid grid-cols-12 bg-[#1C3D6F] text-white p-4 sm:p-5 font-display font-bold text-xs sm:text-sm">
              <div className="col-span-5 sm:col-span-4">Critério de Avaliação</div>
              <div className="col-span-4 sm:col-span-4 text-[#D7593C]">Plataforma AIKOM</div>
              <div className="col-span-3 sm:col-span-4 text-slate-300">Soluções Dispersas / Piratas</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-800">Homologação WhatsApp</div>
                <div className="col-span-4 sm:col-span-4 font-bold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>API Oficial da Meta (Zero risco)</span>
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500">QR Code pirata com risco de ban</div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-800">Integração de Voz & PABX</div>
                <div className="col-span-4 sm:col-span-4 font-bold text-[#1C3D6F] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1C3D6F]" />
                  <span>Nativa (Operadora STFC própria)</span>
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500">Voz isolada em central física</div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-800">Inteligência Artificial (NLP)</div>
                <div className="col-span-4 sm:col-span-4 font-bold text-[#D7593C] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D7593C]" />
                  <span>Compreensão cognitiva de áudio/texto</span>
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500">Apenas menus numéricos rígidos</div>
              </div>

              <div className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 transition-colors">
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-800">Suporte & Customer Success</div>
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Equipe própria Mundo Telecom</span>
                </div>
                <div className="col-span-3 sm:col-span-4 text-slate-500">Revendedores que somem após venda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PERGUNTAS FREQUENTES (FAQ AIKOM)                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C3D6F]/10 text-[#1C3D6F] text-xs font-mono font-bold uppercase tracking-wider">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#163358] tracking-tight">
              Perguntas frequentes sobre a AIKOM
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Minha empresa precisa trocar de número para usar o WhatsApp na AIKOM?",
                a: "Não. Realizamos a migração assistida do seu número fixo comercial ou 0800 atual diretamente para a API Oficial do WhatsApp Business da Meta, sem nenhuma perda de histórico ou interrupção de atendimento."
              },
              {
                q: "A AIKOM exige a compra ou instalação de servidores no meu escritório?",
                a: "Não. A AIKOM é uma plataforma 100% em nuvem de alta disponibilidade. Seus colaboradores e atendentes acessam pelo navegador de forma segura em qualquer computador, notebook ou smartphone com acesso à internet."
              },
              {
                q: "Como funciona a triagem com Inteligência Artificial?",
                a: "Nossa IA cognitiva processa a mensagem inicial do cliente em linguagem natural (texto ou áudio), identifica a necessidade (suporte, financeiro, vendas), responde perguntas rotineiras automaticamente e transfere com resumo em tela para a fila do setor responsável."
              },
              {
                q: "A plataforma AIKOM está em conformidade com a LGPD?",
                a: "Sim. A AIKOM conta com mascaramento automático de dados confidenciais (CPF, números de cartões), cofre de logs imutáveis, controle rigoroso de permissões por usuário e trilhas de auditoria para atender plenamente às diretrizes da LGPD."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-800 hover:text-[#1C3D6F] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${
                      openFaq === i ? "rotate-90 bg-[#D7593C] text-white" : "text-slate-500"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {openFaq === i && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BANNER FINAL DE CONVERSÃO (Cores AIKOM: Fundo #163358, CTA #D7593C)   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#163358] text-white relative overflow-hidden">
        {/* Corte angular geométrico sutil */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: "linear-gradient(135deg, #1C3D6F 0%, transparent 60%)",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D7593C]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-[#D7593C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORME A COMUNICAÇÃO DA SUA EMPRESA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            Pronto para ver a AIKOM operando na sua empresa?
          </h2>

          <p className="text-sm sm:text-base max-w-2xl mx-auto text-slate-200 leading-relaxed font-normal">
            Agende uma demonstração ao vivo guiada por um especialista da Mundo Telecom. Avalie a plataforma em produção e descubra como unificar seus canais com inteligência artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contato?solucao=aikom-omnichannel"
              className="inline-flex items-center justify-center gap-2 bg-[#D7593C] hover:bg-[#c04b30] text-white font-bold shadow-xl shadow-[#D7593C]/30 text-sm sm:text-base px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5"
            >
              <span>Solicitar Demonstração da AIKOM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white text-white hover:bg-white/10 font-semibold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all"
            >
              <span>Falar com Consultor Técnico</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
