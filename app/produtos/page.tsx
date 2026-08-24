import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  Bot, 
  Lock, 
  BarChart3, 
  Server, 
  Cpu, 
  Headphones, 
  CheckCircle2, 
  ChevronRight,
  HardDrive,
  Radio,
  Zap,
  Building2,
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { InteractiveSimulator } from "@/components/sections/InteractiveSimulator";
import { siteContent } from "@/lib/content";

export const metadata = {
  title: "Planos e Plataformas de Telefonia em Nuvem | Mundo Telecom",
  description: "Conheça nossas plataformas e planos de telefonia em nuvem corporativa. Identificador local, voz ilimitada, gravação em nuvem, WhatsApp centralizado e PABX virtual com licença própria ANATEL.",
};

export default function ProdutosPage() {
  const platformIcons: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-mundo-orange" />,
    Server: <Server className="w-6 h-6 text-mundo-orange" />,
    Bot: <Bot className="w-6 h-6 text-mundo-orange" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-mundo-orange" />,
    Lock: <Lock className="w-6 h-6 text-mundo-orange" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-mundo-orange" />,
  };

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION (PRODUTOS)                          */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Produtos & Plataformas</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <Badge
              variant="orange"
              icon={<ShieldCheck className="w-3.5 h-3.5" />}
              className="py-1 px-3.5"
            >
              TECNOLOGIA ESCALÁVEL • OPERADORA LICENCIADA PELA ANATEL
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
              Comece pela telefonia de alta performance e escale seus canais no ritmo da sua operação.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Plataformas integradas em nuvem e planos estruturados para eliminar cobranças ocultas, aumentar a taxa de atendimento com identificador local e registrar 100% das interações da sua empresa ou órgão público.
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
                <span>Voz corporativa sem surpresa</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Migração sem parada técnica</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-mundo-orange shrink-0 stroke-[3]" />
                <span>Suporte e SLA formal 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* BLOCO 2: ARQUITETURA DE PLANOS EM DEGRAUS                 */}
      {/* ========================================================= */}
      <section id="planos" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              PLANOS EM DEGRAUS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Estruturas que se adaptam exatamente à sua fase atual de crescimento
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Na Mundo Telecom, toda contratação começa pela base essencial de telefonia confiável. Você não é obrigado a contratar ferramentas complexas de uma vez: adicione ramais, canais de WhatsApp, automações inteligentes e integrações à medida que sua demanda exigir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {siteContent.plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? "bg-mundo-navy text-white shadow-2xl border-2 border-mundo-orange ring-4 ring-mundo-orange/20"
                    : "bg-slate-50 text-slate-900 border border-slate-200 hover:border-mundo-orange/40 hover:bg-white hover:shadow-xl"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <Badge
                      variant={plan.highlighted ? "orange" : "navy"}
                      className="text-[10px]"
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-display font-bold ${plan.highlighted ? "text-white" : "text-mundo-navy"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                      {plan.audience}
                    </p>
                  </div>

                  {/* Preço */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Sob Medida" && (
                        <span className={`text-xs font-semibold ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                          A partir de R$
                        </span>
                      )}
                      <span className={`text-3xl sm:text-4xl font-display font-black ${plan.highlighted ? "text-mundo-orange" : "text-mundo-navy"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.period}
                      </span>
                    </div>
                    {plan.priceNote && (
                      <p className={`text-[10px] mt-1 ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Resultado ROV */}
                  <div className={`p-3.5 rounded-xl text-xs leading-relaxed ${plan.highlighted ? "bg-mundo-navy-surface border border-white/10 text-slate-200" : "bg-white border border-slate-200 text-slate-700"}`}>
                    <strong className="block text-mundo-orange font-bold mb-1">Resultado na Operação:</strong>
                    &ldquo;{plan.headlineResult}&rdquo;
                  </div>

                  {/* Lista de Recursos */}
                  <div className="space-y-2 pt-2">
                    <div className={`text-xs font-display font-bold uppercase tracking-wider ${plan.highlighted ? "text-mundo-orange" : "text-mundo-navy"}`}>
                      Recursos Inclusos:
                    </div>
                    <ul className="space-y-2 text-xs">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-mundo-orange shrink-0 mt-0.5" />
                          <span className={`leading-snug ${plan.highlighted ? "text-slate-200" : "text-slate-600"}`}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/40">
                  <Button
                    href={`/contato?plano=${plan.name.toLowerCase()}`}
                    variant={plan.highlighted ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 3: PLATAFORMAS DE SOFTWARE MUNDO TELECOM            */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-mundo-navy-deep text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              PLATAFORMAS DE SOFTWARE
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
              Conheça os módulos que compõem o ecossistema Mundo Telecom
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Softwares desenvolvidos para trazer eficiência diária à sua equipe e controle gerencial absoluto para a liderança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.platforms.map((plat) => (
              <div
                key={plat.title}
                className="p-7 rounded-3xl bg-mundo-navy-surface border border-mundo-navy-border hover:border-mundo-orange/50 transition-all duration-300 space-y-4 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-mundo-orange/15 border border-mundo-orange/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {platformIcons[plat.icon] || <Cpu className="w-6 h-6 text-mundo-orange" />}
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-mundo-orange transition-colors">
                    {plat.title}
                  </h3>
                  <div className="text-xs font-semibold text-mundo-orange mt-0.5">
                    {plat.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {plat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: EQUIPAMENTOS E HARDWARE HOMOLOGADOS              */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              HARDWARE & TERMINAIS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Compatibilidade absoluta com os maiores fabricantes globais
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Nossas plataformas são compatíveis com qualquer equipamento padrão SIP do mercado, com homologação direta dos líderes mundiais da indústria de telecomunicações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.hardwareList.map((hw) => (
              <div
                key={hw.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-mundo-orange/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-mundo-navy">
                    {hw.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {hw.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono font-semibold text-mundo-orange">
                  {hw.brands}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 5: COMO FUNCIONA A CONTRATAÇÃO & ATIVAÇÃO           */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange mb-2">
              PROCESSO SIMPLES E TRANSPARENTE
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
              Três etapas simples para modernizar sua comunicação sem parar sua empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.activationSteps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-mundo-orange/50 hover:shadow-xl transition-all duration-300 space-y-4 relative group"
              >
                <div className="text-4xl font-display font-black text-slate-300 group-hover:text-mundo-orange transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 6: ATENDIMENTO CONSULTIVO (CTA FINAL)               */}
      {/* ========================================================= */}
      <section id="especialista" className="py-16 sm:py-24 bg-mundo-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="orange" className="mb-3">
              FALE COM UM ESPECIALISTA
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">
              Descubra qual plano cobre a sua operação com o melhor custo-benefício
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Fale diretamente com um especialista técnico da Mundo Telecom para diagnosticar sua operação e estruturar a proposta sob medida.
            </p>
          </div>

          <InteractiveSimulator />
        </div>
      </section>
    </div>
  );
}
