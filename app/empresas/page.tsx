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
import { CorporateClientsMarquee } from "@/components/sections/CorporateClientsMarquee";
import { HeroPixelBackground } from "@/components/sections/HeroPixelBackground";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Soluções para Empresas (B2B) | Comunicações Inteligentes & IA | Mundo Telecom",
  description: "Sua empresa perde clientes no telefone e no WhatsApp? Atenda mais e gaste menos com PABX na nuvem, URA de IA, rechamada automática exclusiva e WhatsApp com múltiplos operadores.",
};

export default function EmpresasPage() {
  const caseStudies = [
    {
      company: "Grupo Via",
      logo: "/images/setor-privado/grupo_via_logo_1x.webp",
      metric: "-28% nos custos operacionais",
      secondary: "10+ marcas integradas",
      description: "Integração e modernização de mais de 100 estabelecimentos da rede automotiva com PABX em nuvem e suporte dedicado.",
    },
    {
      company: "TECBAN",
      logo: "/images/setor-privado/tecban_logo_1x.webp",
      metric: "Alta Conectividade 24/7",
      secondary: "Infraestrutura Crítica",
      description: "Operação com máxima resiliência, baixa latência e suporte consultivo contínuo para suportar transações corporativas.",
    },
    {
      company: "Brascamp",
      logo: "/images/setor-privado/brascamp_logo_1x.webp",
      metric: "Padronização & Controle",
      secondary: "Atendimento Corporativo",
      description: "Unificação de rotas de voz corporativas com identificador local, áudio HD e gravação integral de chamadas.",
    },
    {
      company: "Click Iluminação",
      logo: "/images/setor-privado/click_iluminacao_logo.webp",
      metric: "Centralização de Canais",
      secondary: "Agilidade Comercial",
      description: "Operação comercial integrada com PABX na nuvem e WhatsApp oficial para responder clientes sem demora.",
    },
  ];

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION B2B COM IDENTIDADE INSTITUCIONAL     */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy-deep min-h-[85vh] pt-32 pb-[380px] sm:pt-36 sm:pb-[450px] lg:pt-36 lg:pb-16 text-mundo-white overflow-hidden flex flex-col justify-center">
        {/* Dynamic PixelBlast Background */}
        <HeroPixelBackground variant="empresas" />

        {/* Full Bleed Hero Image: Flush with right edge on mobile & desktop */}
        <div className="absolute right-0 bottom-0 h-[380px] sm:h-[450px] lg:top-24 lg:bottom-0 lg:h-auto w-full sm:w-[90%] md:w-[80%] lg:w-[55%] xl:w-[50%] 2xl:w-[46%] z-0 pointer-events-none select-none flex items-end justify-end overflow-hidden">
          <div className="relative w-full h-full lg:h-[92%] xl:h-[94%]">
            <Image
              src="/images/foto-hero-section-empresas.webp"
              alt="Especialista em comunicação corporativa e tecnologia da Mundo Telecom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:py-16">
          <div className="max-w-2xl xl:max-w-3xl space-y-6 text-center lg:text-left">
            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="orange"
                icon={<Building2 className="w-3.5 h-3.5" />}
                className="py-1 px-3.5 text-[11px] sm:text-xs"
              >
                EMPRESA DE TECNOLOGIA COM INFRAESTRUTURA PRÓPRIA • +20 ANOS
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-display font-black text-mundo-white tracking-tight leading-[1.12]">
              Sua empresa perde clientes no telefone e no WhatsApp?
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              <strong>Atenda mais e gaste menos.</strong> Nossa plataforma inteligente com Inteligência Artificial assume o atendimento repetitivo, ativa múltiplos atendentes no mesmo número de WhatsApp e elimina de vez as ligações perdidas com a <strong>rechamada automática exclusiva</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contato?perfil=empresa"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Falar com um Consultor B2B
              </Button>
            </div>

            {/* Microcopy de Confiança */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Rechamada automática exclusiva</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>IA ativa no atendimento 24h</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Custo 100% previsível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 2: CLIENTES DO SETOR PRIVADO (MARQUEE B2B)          */}
      {/* ========================================================= */}
      <CorporateClientsMarquee filter="empresas" />

      {/* ========================================================= */}
      {/* BLOCO 3: PORTFÓLIO DE SOLUÇÕES EMPRESARIAIS (CARROSSEL)   */}
      {/* ========================================================= */}
      <EmpresasSolutionsCarousel />

      {/* ========================================================= */}
      {/* BLOCO 3: PROVA SOCIAL B2B (RESULTADOS MENSURADOS)          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200/80">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 h-16">
                    <div className="relative h-12 w-36 sm:w-40 flex items-center">
                      <Image
                        src={cs.logo}
                        alt={`Logo ${cs.company}`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <TrendingUp className="w-5 h-5 text-mundo-orange shrink-0" />
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
              Solicitar Atendimento para Empresas
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
