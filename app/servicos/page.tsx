import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  PhoneCall, 
  Cloud, 
  Bot, 
  ShieldAlert, 
  MessageSquareText, 
  Activity, 
  Building2, 
  Landmark, 
  CheckCircle2, 
  ChevronRight,
  Radio,
  FileText,
  Clock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MetricCounter } from "@/components/sections/MetricCounter";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Soluções em Telecomunicações Corporativas e Governamentais | Mundo Telecom",
  description: "Conheça nossas soluções completas em Telefonia IP, PABX em Nuvem, Telefonia Fixa STFC, Atendimento Inteligente, Gravação de Chamadas, NOC 24/7 e Integração com WhatsApp. Operadora licenciada pela ANATEL.",
};

export default function ServicosPage() {
  const solutionIcons: Record<string, React.ReactNode> = {
    PhoneCall: <PhoneCall className="w-6 h-6" />,
    Radio: <Radio className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    Bot: <Bot className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    MessageSquareText: <MessageSquareText className="w-6 h-6" />,
    Activity: <Activity className="w-6 h-6" />,
  };

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION (SERVIÇOS)                          */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Serviços & Soluções</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <Badge
              variant="orange"
              icon={<ShieldCheck className="w-3.5 h-3.5" />}
              className="py-1 px-3.5"
            >
              OPERADORA LICENCIADA PELA ANATEL • 21 ANOS DE MERCADO
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
              Soluções de telecomunicações sob medida para aumentar a eficiência e o controle da sua organização.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Da telefonia em nuvem com identificador local para empresas até infraestruturas robustas de STFC para órgãos públicos. Entregamos alta taxa de completamento, custos previsíveis sem surpresa na fatura, gravação integral de chamadas e suporte técnico consultivo 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                href="/contato"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Fale com um Especialista
              </Button>
              <Button
                href={siteContent.brand.whatsappUrl}
                isExternal
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Atendimento via WhatsApp
              </Button>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Licença Própria ANATEL</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Acordo de Nível de Serviço (SLA) Formal</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Monitoramento NOC 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* BLOCO 2: SEGMENTAÇÃO COM FOTOGRAFIA                       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              ATENDIMENTO ESPECIALIZADO
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Tecnologia dimensionada para a realidade e criticidade da sua organização
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Estruturamos arquiteturas de comunicação específicas para atender aos objetivos de produtividade comercial do setor privado e às exigências de conformidade, transparência e segurança da administração pública.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Frente Corporativa B2B */}
            <div id="empresas" className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/b2b-corporate.jpg"
                  alt="Soluções para Empresas Mundo Telecom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <Badge variant="orange">SETOR PRIVADO (B2B)</Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-mundo-navy">
                    Frente Corporativa — Soluções para Empresas
                  </h3>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Público-Alvo:</strong>
                    Médias e grandes empresas, distribuidoras, redes de varejo, indústrias e empresas de serviços.
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Para organizações que não podem perder negócios por ligações não atendidas ou faturas imprevisíveis. Entregamos telefonia em nuvem com identificador local (DDD da região do cliente), planos estruturados com custos claros, gravação de 100% das chamadas e centralização do WhatsApp institucional em uma única plataforma.
                  </p>
                </div>
                <div className="pt-2">
                  <Button href="#catalogo" variant="primary" size="md" className="w-full sm:w-auto">
                    Conhecer Soluções para Empresas
                  </Button>
                </div>
              </div>
            </div>

            {/* Frente Governamental B2G */}
            <div id="governo" className="rounded-3xl bg-mundo-navy text-white border border-mundo-navy-border shadow-xl overflow-hidden flex flex-col justify-between group">
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/b2g-government.jpg"
                  alt="Soluções para Governo Mundo Telecom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <Badge variant="orange">SETOR PÚBLICO (B2G)</Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-white">
                    Frente Governamental — Soluções para Órgãos Públicos
                  </h3>
                  <div className="p-3.5 rounded-xl bg-mundo-navy-deep border border-white/10 text-xs text-slate-300">
                    <strong className="text-slate-200 block font-semibold">Público-Alvo:</strong>
                    Prefeituras, autarquias, câmaras municipais, universidades públicas e órgãos estaduais e federais.
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Infraestrutura robusta de Telefonia Fixa STFC e plataformas de atendimento omnichannel para conectar o cidadão com agilidade. Garantimos suporte contínuo 24/7, relatórios auditáveis para prestação de contas, alta disponibilidade de circuitos e atendimento estrito aos requisitos de segurança e termos de referência licitatórios.
                  </p>
                </div>
                <div className="pt-2">
                  <Button href="#governo-vantagens" variant="primary" size="md" className="w-full sm:w-auto">
                    Conhecer Soluções para Governo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 3: CATÁLOGO DE SOLUÇÕES EM PROFUNDIDADE             */}
      {/* ========================================================= */}
      <section id="catalogo" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              PORTFÓLIO DE ENGENHARIA & VOZ
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Nossas Soluções em Telecomunicações
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Cada solução é construída com foco em resultados práticos: fazer a ligação completar, manter os registros protegidos e garantir previsibilidade no orçamento.
            </p>
          </div>

          <div className="space-y-10">
            {siteContent.solutions.map((sol, index) => (
              <div
                key={sol.id}
                id={sol.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-mundo-orange/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-mundo-navy text-white flex items-center justify-center shrink-0">
                        {solutionIcons[sol.iconName] || <PhoneCall className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-display font-bold uppercase tracking-wider text-mundo-orange bg-mundo-orange/10 px-2.5 py-0.5 rounded-full border border-mundo-orange/20">
                          {sol.categoryTag}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-mundo-navy mt-0.5">
                          {sol.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-base font-display font-semibold text-mundo-navy leading-snug">
                      &ldquo;{sol.headline}&rdquo;
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950">
                      <strong className="font-bold block text-mundo-navy mb-0.5">Problema que resolve na sua operação:</strong>
                      {sol.problemResolved}
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 space-y-5 flex flex-col justify-between h-full shadow-sm">
                    <div className="space-y-3">
                      <h4 className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange">
                        Benefícios Chave
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {sol.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 mt-0.5" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <Button
                        href="/contato"
                        variant="primary"
                        size="md"
                        className="w-full"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        {sol.ctaText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: 6 VANTAGENS PARA ÓRGÃOS PÚBLICOS (GOVERNO B2G)   */}
      {/* ========================================================= */}
      <section id="governo-vantagens" className="py-16 sm:py-24 bg-mundo-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="orange" className="mb-2">
              SETOR PÚBLICO & GOVERNO
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              Por que a Mundo Telecom é a escolha estratégica da administração pública
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Soluções desenvolvidas para atender às exigências legais, à continuidade de serviços essenciais e à transparência da gestão municipal, estadual e federal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.governmentAdvantages.map((gov) => (
              <div
                key={gov.number}
                className="p-7 rounded-3xl bg-mundo-navy-surface border border-mundo-navy-border hover:border-mundo-orange/50 transition-all duration-300 space-y-3.5 group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-mundo-orange">
                    {gov.number}
                  </span>
                  <Landmark className="w-5 h-5 text-slate-400 group-hover:text-mundo-orange transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-mundo-orange transition-colors">
                  {gov.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {gov.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 5: NÚMEROS DE IMPACTO                               */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-mundo-navy-deep text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white">
              Nossa Trajetória em Números
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Consistência operacional comprovada no atendimento a empresas privadas e órgãos públicos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.metrics.map((metric) => (
              <MetricCounter
                key={metric.label}
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 6: CTA FINAL DE CONVERSÃO                           */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="orange">
            DIAGNÓSTICO TÉCNICO
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy">
            Pronto para modernizar a comunicação da sua organização com estabilidade e custo previsível?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Fale com um consultor técnico da Mundo Telecom. Avaliamos a sua estrutura atual e estruturamos uma proposta sob medida com implantação assistida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Fale com um Especialista
            </Button>
            <Button
              href={siteContent.brand.whatsappUrl}
              isExternal
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Falar com Consultor via WhatsApp
            </Button>
          </div>

          <div className="pt-6 text-xs text-slate-500">
            Atendimento consultivo rápido • Diagnóstico técnico gratuito • Atendimento nacional
          </div>
        </div>
      </section>
    </div>
  );
}
