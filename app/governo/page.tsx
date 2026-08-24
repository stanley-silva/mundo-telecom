import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Landmark, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Radio, 
  Cloud, 
  Bot, 
  ShieldAlert, 
  Activity, 
  ChevronRight,
  CheckCircle2,
  FileText,
  Award,
  Lock,
  Headphones,
  FileCheck2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Telefonia Fixa STFC e Soluções para Órgãos Públicos (B2G) | Mundo Telecom",
  description: "Infraestrutura de Telefonia Fixa STFC outorgada pela ANATEL para prefeituras, autarquias, câmaras e órgãos federais. Conformidade legal, alta disponibilidade e suporte NOC 24/7.",
};

export default function GovernoPage() {
  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* HERO SECTION B2G                                          */}
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
            <span className="text-mundo-orange font-bold">Para Governo (B2G)</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="orange"
                icon={<Landmark className="w-3.5 h-3.5" />}
                className="py-1 px-3.5"
              >
                SETOR PÚBLICO & GOVERNO (B2G) • OUTORGA ANATEL STFC
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
                Infraestrutura de telecomunicações com segurança jurídica, alta disponibilidade e conformidade total.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Atendemos prefeituras, autarquias, câmaras municipais, universidades públicas e tribunais com <strong>contratação direta como operadora outorgada ANATEL</strong> (dispensando intermediários). Entregamos entroncamentos digitais STFC, faixas DDR dedicadas, relatórios auditáveis para prestação de contas e NOC 24/7 ininterrupto.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  href="/contato?tipo=governo"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Solicitar Proposta para Órgão Público
                </Button>
                <Button
                  href="/servicos#stfc-outorgado"
                  variant="outline-white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Conhecer Especificações STFC
                </Button>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Compliance Lei 14.133/2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Outorga Direta ANATEL STFC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>SLA Formal e NOC 24/7 Próprio</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-mundo-navy-surface group">
                <div className="relative w-full h-[340px] sm:h-[400px]">
                  <Image
                    src="/images/b2g-government.jpg"
                    alt="Reunião institucional de setor público com infraestrutura Mundo Telecom"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy-deep/90 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-mundo-navy-surface/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="text-sm font-display font-bold text-white">
                    Conformidade e Transparência
                  </div>
                  <div className="text-xs text-slate-300">
                    Bilhetagem detalhada e dados auditáveis para órgãos de controle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* 6 PILARES DE AUTORIDADE PARA O SETOR PÚBLICO             */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              DIFERENCIAIS REGULATÓRIOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Por que órgãos públicos confiam na Mundo Telecom
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Estruturamos soluções que atendem com rigor aos termos de referência e garantem estabilidade para serviços essenciais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.governmentAdvantages.map((gov) => (
              <div
                key={gov.number}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-mundo-orange/50 transition-all duration-300 space-y-3.5 shadow-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-mundo-orange">
                    {gov.number}
                  </span>
                  <Landmark className="w-5 h-5 text-slate-400 group-hover:text-mundo-orange transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                  {gov.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {gov.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA PARA LICITAÇÕES & TERMOS DE REFERÊNCIA                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="orange">
            SUPORTE A LICITAÇÕES & EDITAIS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">
            Precisa de auxílio técnico para elaboração de Termo de Referência ou análise de viabilidade STFC?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de engenharia consultiva apoia gestores e comissões de contratação na correta especificação técnica de projetos de telefonia com total conformidade à Lei 14.133/2021.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contato?tipo=governo"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Falar com Engenharia de Setor Público
            </Button>
            <Button
              href={`tel:${siteContent.brand.phone0800.replace(/[^0-9]/g, "")}`}
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto"
            >
              Ligue 0800 031 1919
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
