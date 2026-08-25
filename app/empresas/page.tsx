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
  Headphones, 
  MessageSquareText, 
  Send,
  Wrench,
  BarChart3,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  Zap,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { EmpresasSolutionsCarousel } from "@/components/sections/EmpresasSolutionsCarousel";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Soluções para Empresas (B2B) | Telefonia & PABX em Nuvem | Mundo Telecom",
  description: "Telefonia corporativa e plataformas em nuvem para vender mais e reduzir custos. Identificador local inteligente, WhatsApp e voz com IA na Plataforma Conecta e custos previsíveis.",
};

export default function EmpresasPage() {
  const caseStudies = [
    {
      company: "Macrocont",
      metric: "-45% no tempo de atendimento",
      secondary: "+30% na satisfação dos clientes",
      description: "Resultados obtidos com a implementação do PABX em Nuvem e WhatsApp oficial unificado em único painel.",
    },
    {
      company: "PlurisMídia",
      metric: "+25% de produtividade da equipe",
      secondary: "Alta estabilidade de voz",
      description: "Eficiência alcançada através da plataforma omnichannel integrada e rotas de voz corporativas de alta disponibilidade.",
    },
    {
      company: "Grupo Via",
      metric: "-28% nos custos operacionais",
      secondary: "+100 estabelecimentos integrados",
      description: "Economia e padronização obtidas ao unificar a infraestrutura de telefonia de toda a rede de lojas.",
    },
  ];

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION B2B                                  */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#EF831C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-mundo-orange/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-mundo-orange font-bold">Soluções para Empresas</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="orange"
                icon={<Building2 className="w-3.5 h-3.5" />}
                className="py-1 px-3.5"
              >
                OPERADORA LICENCIADA ANATEL • 21 ANOS DE MERCADO
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
                Telefonia corporativa e plataformas em nuvem para vender mais e reduzir custos.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Aumente o atendimento das suas ligações com identificador local, unifique voz e WhatsApp com Inteligência Artificial na Plataforma Conecta e tenha custos 100% previsíveis.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  href="/contato?perfil=empresa"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Simular Solução Corporativa
                </Button>
                <Button
                  href={`https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor técnico da Mundo Telecom para empresas.")}`}
                  isExternal
                  variant="outline-white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Falar com Consultor Técnico
                </Button>
              </div>

              {/* Microcopy de Confiança */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Sem surpresa na fatura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Portabilidade sem interrupção</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                  <span>Suporte NOC 24/7</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-mundo-navy-surface group">
                <div className="relative w-full h-[340px] sm:h-[400px]">
                  <Image
                    src="/images/b2b-corporate.jpg"
                    alt="Equipe corporativa operando telefonia em nuvem Mundo Telecom"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy-deep/90 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-mundo-navy-surface/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="text-sm font-display font-bold text-white">
                    Eficiência & Previsibilidade
                  </div>
                  <div className="text-xs text-slate-300">
                    Comunicação empresarial integrada com suporte consultivo contínuo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* BLOCO 2: PORTFÓLIO DE SOLUÇÕES EMPRESARIAIS (CARROSSEL)   */}
      {/* ========================================================= */}
      <EmpresasSolutionsCarousel />

      {/* ========================================================= */}
      {/* BLOCO 3: PROVA SOCIAL B2B (RESULTADOS MENSURADOS)          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
              RESULTADOS COMPROVADOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy tracking-tight">
              Empresas que transformaram sua comunicação
            </h2>
            <p className="text-base text-slate-600">
              Impacto real na rotina operacional, redução de despesas e produtividade de equipes comerciais e de suporte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                    <span className="text-lg font-display font-black text-mundo-navy">
                      {cs.company}
                    </span>
                    <TrendingUp className="w-5 h-5 text-mundo-orange" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-display font-black text-mundo-orange">
                      {cs.metric}
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      {cs.secondary}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {cs.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: CONVERSÃO FINAL (CTA DE FECHAMENTO)               */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#EF831C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <Badge variant="orange">
            CONVERSÃO CORPORATIVA
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Pronto para modernizar a comunicação da sua empresa com custos previsíveis?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Fale com nossos consultores técnicos e receba uma proposta dimensionada para sua operação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contato?perfil=empresa"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Simular Solução Corporativa
            </Button>
            <Button
              href={`https://wa.me/${siteContent.brand.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor via WhatsApp sobre soluções corporativas.")}`}
              isExternal
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto"
            >
              Falar com Consultor via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
