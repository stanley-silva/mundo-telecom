import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  PhoneCall, 
  Cloud, 
  Bot, 
  ShieldAlert, 
  MessageSquareText, 
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Lock,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { InteractiveSimulator } from "@/components/sections/InteractiveSimulator";
import { MetricCounter } from "@/components/sections/MetricCounter";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Telefonia em Nuvem e PABX para Empresas (B2B) | Mundo Telecom",
  description: "Aumente a taxa de atendimento comercial e o controle das chamadas da sua empresa. Telefonia em Nuvem com Identificador Local, PABX sem centrais físicas, WhatsApp oficial e 100% de gravação.",
};

export default function EmpresasPage() {
  const b2bSolutions = siteContent.solutions.filter(
    (s) => s.id !== "stfc-outorgado"
  );

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* HERO SECTION B2B                                          */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/servicos" className="hover:text-mundo-orange transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Para Empresas (B2B)</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="orange"
                icon={<Building2 className="w-3.5 h-3.5" />}
                className="py-1 px-3.5"
              >
                SOLUÇÕES CORPORATIVAS B2B • OPERADORA LICENCIADA ANATEL
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
                Telefonia em nuvem corporativa para vender mais, atender melhor e controlar custos.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Elimine a perda de vendas por chamadas não atendidas com nosso <strong>Identificador Local Inteligente</strong> (DDD da região do cliente). Centralize sua comunicação com PABX em Nuvem, WhatsApp oficial institucional e 100% de gravação de chamadas sem cobranças abusivas na fatura.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  href="/contato?perfil=empresa"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Fale com um Especialista
                </Button>
                <Button
                  href={`https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista B2B da Mundo Telecom.")}`}
                  isExternal
                  variant="outline-white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Atendimento WhatsApp B2B
                </Button>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Identificador Local Inteligente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Gravação e Histórico Auditável</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Suporte Especializado 24/7</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-mundo-navy-surface group">
                <div className="relative w-full h-[340px] sm:h-[400px]">
                  <Image
                    src="/images/b2b-corporate.jpg"
                    alt="Equipe corporativa utilizando telefonia em nuvem Mundo Telecom"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy-deep/90 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-mundo-navy-surface/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="text-sm font-display font-bold text-white">
                    Eficiência Comercial Comprovada
                  </div>
                  <div className="text-xs text-slate-300">
                    Aumento de até 4x na taxa de conversão de chamadas ativas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* DESAFIOS QUE RESOLVEMOS NO SETOR CORPORATIVO               */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              DESAFIOS CRÍTICOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Os 4 gargalos que impedem sua equipe de performar no telefone
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Descubra como a Mundo Telecom elimina as principais dores operacionais e financeiras da sua comunicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-display font-bold text-mundo-navy">
                Ligações Recusadas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clientes recusam chamadas com DDD de outros estados. Com o <strong>Identificador Local</strong>, sua ligação toca com o DDD da cidade do cliente, multiplicando o atendimento.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-display font-bold text-mundo-navy">
                Faturas com Surpresas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cobranças abusivas de minutos adicionais geram imprevisibilidade financeira. Nossos planos contam com estrutura clara e custo previsível fixo.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-mundo-navy flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-display font-bold text-mundo-navy">
                Falta de Gravação e Registro
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sem gravação, conflitos contratuais e divergências de negociação geram prejuízos. Gravamos 100% das interações em nuvem segura com busca ágil.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-lg font-display font-bold text-mundo-navy">
                WhatsApp Pessoal Descontrolado
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Atendentes usando celulares pessoais levam os contatos da empresa ao sair. Centralizamos a API oficial em um único número com múltiplos postos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SOLUÇÕES PARA EMPRESAS                                    */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              PORTFÓLIO CORPORATIVO
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Módulos e tecnologias sob medida para sua empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bSolutions.map((sol) => (
              <div
                key={sol.id}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-mundo-orange/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-mundo-orange bg-mundo-orange/10 px-2.5 py-1 rounded-full border border-mundo-orange/20">
                      {sol.categoryTag}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.shortDescription}
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-slate-700">
                    {sol.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mundo-orange shrink-0 mt-0.5" />
                        <span className="leading-tight">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-200/80 mt-5">
                  <Link
                    href={`/servicos#${sol.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors"
                  >
                    <span>Ver Detalhes da Solução</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ATENDIMENTO CONSULTIVO B2B                                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="orange" className="mb-3">
              FALE COM UM ESPECIALISTA B2B
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">
              Dimensione a estrutura ideal para a sua equipe
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Converse diretamente com nossos especialistas técnicos para avaliar sua operação e receber uma proposta personalizada.
            </p>
          </div>

          <InteractiveSimulator />
        </div>
      </section>
    </div>
  );
}
