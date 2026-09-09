"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AutomaticCallbackSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#041530] text-white relative overflow-hidden border-y border-white/10">
      {/* Background radial sutil para profundidade, sem ruído visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mundo-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10 sm:space-y-12">
        {/* Badge Minimalista */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-mundo-orange text-xs font-mono font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-mundo-orange" />
          <span>RECHAMADA AUTOMÁTICA</span>
        </div>

        {/* Headline & Subtitle com Espaçamento Limpo */}
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.15]">
            Nenhuma chamada perdida. <br className="hidden sm:inline" />
            <span className="text-mundo-orange">Nem em horários de pico, nem fora do expediente.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Quando suas linhas estiverem ocupadas ou um cliente ligar fora do horário de atendimento, nossa plataforma registra o contato e realiza o retorno telefônico de forma automática. Sem espera, sem discagem manual e sem perder vendas.
          </p>
        </div>

        {/* 3 Pilares Minimalistas (Clean Cards sem poluição) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors space-y-3">
            <div className="text-2xl font-display font-black text-mundo-orange">
              01
            </div>
            <h3 className="text-base font-display font-bold text-white">
              Identificação Imediata
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              O sistema captura instantaneamente o número da ligação que não pôde ser atendida no momento.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors space-y-3">
            <div className="text-2xl font-display font-black text-mundo-orange">
              02
            </div>
            <h3 className="text-base font-display font-bold text-white">
              Retorno Automatizado
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Assim que um atendente se desocupa, a central disca de volta para o cliente e conecta a ligação ao operador.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors space-y-3">
            <div className="text-2xl font-display font-black text-mundo-orange">
              03
            </div>
            <h3 className="text-base font-display font-bold text-white">
              Zero Esforço do Cliente
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              O cliente não precisa insistir discando várias vezes nem ouvir o tom de ocupado. A sua empresa toma a iniciativa.
            </p>
          </div>
        </div>

        {/* CTA Minimalista */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contato?interesse=rechamada-automatica"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-lg shadow-mundo-orange/20 font-bold"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Ativar Rechamada no Meu PABX
          </Button>
          <Button
            href="/produtos"
            variant="outline-white"
            size="lg"
            className="w-full sm:w-auto"
          >
            Conhecer Planos de PABX
          </Button>
        </div>
      </div>
    </section>
  );
}
