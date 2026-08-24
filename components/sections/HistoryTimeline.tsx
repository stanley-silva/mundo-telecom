"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface TimelineItem {
  number: string;
  period: string;
  highlight: string;
  title: string;
  desc: string;
  keyPoints?: string[];
}

export function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress with smooth spring physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineItems: TimelineItem[] = [
    {
      number: "01",
      period: "2005 — 2010",
      highlight: "FUNDAÇÃO & RIGOR TÉCNICO",
      title: "Origem, Rigor Técnico e Resolução de Gargalos",
      desc: "A Mundo Telecom nasceu com a missão de eliminar as falhas de completamento de chamadas e a opacidade tarifária que historicamente prejudicavam a comunicação entre organizações e seus clientes. Estruturou suas operações com foco em conectividade estável e suporte próximo.",
      keyPoints: [
        "Eliminação de cobranças ocultas na fatura",
        "Conectividade de voz de alta fidelidade",
        "Suporte técnico consultivo desde o primeiro dia"
      ]
    },
    {
      number: "02",
      period: "2011 — 2016",
      highlight: "OUTORGA DIRETA ANATEL (STFC)",
      title: "Licenciamento Próprio ANATEL e Independência de Rede",
      desc: "Conquista da licença oficial da Agência Nacional de Telecomunicações para prestação de STFC. Superamos o modelo de simples revenda de software para operar infraestrutura de engenharia própria, garantindo segurança jurídica absoluta a empresas e órgãos públicos.",
      keyPoints: [
        "Outorga direta ANATEL sem intermediação",
        "Atendimento em compliance com normas públicas",
        "Entroncamentos digitais e faixas DDR dedicadas"
      ]
    },
    {
      number: "03",
      period: "2017 — 2021",
      highlight: "EXPANSÃO NACIONAL & NUVEM",
      title: "PABX em Nuvem, Gravação Auditável e Tripla Sede",
      desc: "Migração completa para infraestrutura digital e abertura de filiais estratégicas em Belo Horizonte, Brasília e São Paulo. Substituição definitiva de centrais físicas legadas por plataformas em nuvem escaláveis e sistemas de gravação 100% auditáveis.",
      keyPoints: [
        "Unidades próprias em BH, Brasília e São Paulo",
        "Zero custo de hardware físico para os clientes",
        "Armazenamento em nuvem com conformidade LGPD"
      ]
    },
    {
      number: "04",
      period: "2022 — HOJE",
      highlight: "OMNICHANNEL & ALTA PERFORMANCE",
      title: "Identificador Local, WhatsApp Oficial e NOC 24/7",
      desc: "Consolidação de tecnologias de ponta: chamadas ativas com identificador local (DDD da região do cliente), WhatsApp institucional centralizado para múltiplos atendentes, URA inteligente e Centro de Operações de Rede (NOC) monitorando tráfego 24/7/365.",
      keyPoints: [
        "Identificador Local para triplicar atendimento",
        "API Oficial do WhatsApp com histórico permanente",
        "Engenharia e NOC 24/7 com SLA formal de 99.98%"
      ]
    },
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#07224b08_1px,transparent_1px),linear-gradient(to_bottom,#07224b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* CABEÇALHO CENTRALIZADO                                    */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3"
        >
          <div className="flex items-center justify-center gap-2">
            <Badge variant="orange" icon={<Sparkles className="w-3.5 h-3.5" />}>
              HISTÓRIA E EVOLUÇÃO
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy tracking-tight">
            Mais de duas décadas transformando desafios de comunicação em resultados concretos
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Conheça as etapas que construíram a nossa autoridade como operadora licenciada e referência nacional em telefonia corporativa e governamental.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* TIMELINE CONTAINER COM LINHA DINÂMICA                     */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Linha de Fundo Estática */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-slate-200" />

          {/* Linha Dinâmica Animada com Scroll (Framer Motion) */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-mundo-navy via-mundo-orange to-mundo-orange origin-top rounded-full shadow-[0_0_12px_rgba(239,131,28,0.5)] z-0"
          />

          {/* Lista de Etapas */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {timelineItems.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.number}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } relative`}
                >
                  {/* ========================================================= */}
                  {/* NÓ CENTRAL NUMERADO (STEP BADGE)                          */}
                  {/* ========================================================= */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-6 w-12 h-12 rounded-2xl bg-white border-2 border-mundo-orange shadow-lg flex items-center justify-center z-20 group"
                  >
                    <span className="font-mono text-sm font-black text-mundo-navy group-hover:text-mundo-orange transition-colors">
                      {item.number}
                    </span>
                    <div className="absolute -inset-1 bg-mundo-orange/20 rounded-2xl blur-sm -z-10" />
                  </motion.div>

                  {/* ========================================================= */}
                  {/* CARD DA ETAPA COM ANIMAÇÃO DIRECIONAL                    */}
                  {/* ========================================================= */}
                  <div className="w-full pl-16 md:pl-0 md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-mundo-orange/50 transition-all duration-300 group ${
                        isEven ? "md:mr-10" : "md:ml-10"
                      }`}
                    >
                      {/* Barra Superior do Card */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange block">
                            ETAPA {item.number} • {item.highlight}
                          </span>
                          <span className="text-xs font-mono font-semibold text-slate-400 block">
                            {item.period}
                          </span>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 group-hover:bg-mundo-orange group-hover:text-white group-hover:border-mundo-orange transition-all duration-300 flex items-center justify-center shrink-0">
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                      </div>

                      {/* Corpo do Card */}
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Pontos-chave */}
                        {item.keyPoints && (
                          <div className="pt-3 border-t border-slate-100/80 space-y-1.5">
                            {item.keyPoints.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-mundo-orange shrink-0" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Espaçador vazio no lado oposto (Desktop) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;
