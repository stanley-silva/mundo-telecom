"use client";

import React from "react";
import { 
  PhoneOff, 
  MessageSquareWarning, 
  Receipt, 
  HelpCircle
} from "lucide-react";

export function CustomerPainPointsSection() {
  const painPoints = [
    {
      number: "01",
      icon: <PhoneOff className="w-5 h-5 text-mundo-orange" />,
      title: "Ligações perdidas no ocupado",
      description:
        "Em horários de pico ou fora do expediente, o cliente ouve sinal de ocupado, cansa de esperar e busca o concorrente no Google. Sua empresa nem fica sabendo que perdeu a venda.",
    },
    {
      number: "02",
      icon: <MessageSquareWarning className="w-5 h-5 text-mundo-orange" />,
      title: "WhatsApp lotado e sem resposta",
      description:
        "Mensagens acumuladas sem triagem, operadores respondendo em celulares individuais e clientes esperando horas por respostas para dúvidas simples e repetitivas.",
    },
    {
      number: "03",
      icon: <Receipt className="w-5 h-5 text-mundo-orange" />,
      title: "Fatura imprevisível e hardware legado",
      description:
        "Cobranças ocultas por minuto de voz, sustos no final do mês e centrais físicas que vivem quebrando, exigindo chamados caros de manutenção presencial.",
    },
    {
      number: "04",
      icon: <HelpCircle className="w-5 h-5 text-mundo-orange" />,
      title: "Fornecedor que some após a venda",
      description:
        "Contratos engessados de fornecedores legados que demoram dias para atender chamados simples e não têm qualquer compromisso com o resultado da sua operação.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Cabeçalho Minimalista */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-mundo-orange">
            DIAGNÓSTICO OPERACIONAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-black text-mundo-navy tracking-tight leading-[1.15]">
            Sua organização enfrenta algum desses gargalos no dia a dia?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Limitações da telefonia tradicional que sobrecarregam sua equipe, frustram clientes e geram desperdício orçamentário.
          </p>
        </div>

        {/* Grid de 4 Dores — Design Limpo & Executivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((pain) => (
            <div
              key={pain.number}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-mundo-orange/40 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-mundo-orange/10 flex items-center justify-center">
                    {pain.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-mundo-orange transition-colors">
                    {pain.number}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-mundo-navy leading-snug">
                  {pain.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
