"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PhoneCall, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  Headphones, 
  Building2, 
  Landmark, 
  Lock
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Don't render public header on admin CMS route
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  // Soluções para Empresas (9 Categorias Oficiais)
  const empresasItems = [
    {
      title: "Omnichannel & IA (Plataforma AIkon)",
      desc: "Plataforma própria, múltiplos atendentes em 1 número e triagem com IA",
      href: "/solucoes/omnichannel-ia-aikon",
    },
    {
      title: "Telefonia Corporativa (Voz IP & STFC)",
      desc: "Rotas oficiais STFC, portabilidade sem downtime e protocolo STIR/SHAKEN",
      href: "/solucoes/telefonia-corporativa-stfc",
    },
    {
      title: "PABX Virtual — Cloud PABX",
      desc: "URA inteligente, ramais virtuais, áudio HD e rechamada automática",
      href: "/solucoes/pabx-virtual-cloud",
    },
    {
      title: "Infraestrutura de Redes — Alta Disp.",
      desc: "Links dedicados, redundância de rotas e SLA formal com monitoramento",
      href: "/solucoes/infraestrutura-rede-alta-disponibilidade",
    },
    {
      title: "Experiência do Cliente (CX Routing)",
      desc: "Skill-based routing, URA humanizada e identificador de DDD local",
      href: "/solucoes/experiencia-cliente-cx-routing",
    },
    {
      title: "Segurança & Compliance — Cybersecurity",
      desc: "Proteção contra fraudes em voz, cofre criptografado e conformidade LGPD",
      href: "/solucoes/seguranca-compliance-cybersecurity",
    },
    {
      title: "Gestão de TI — Operações ITSM (NOC 24/7)",
      desc: "Centro de Operações 24/7/365, SLA de atendimento e engenharia proativa",
      href: "/solucoes/gestao-servicos-ti-noc-itsm",
    },
    {
      title: "Mensageria Corporativa — Meta Provider",
      desc: "API Oficial Meta, selo verde verificado, múltiplos atendentes e chatbots",
      href: "/solucoes/mensageria-corporativa-meta-provider",
    },
    {
      title: "Inteligência Artificial Aplicada à Voz",
      desc: "Agentes de voz inteligentes, reconhecimento de fala natural e URA cognitiva",
      href: "/solucoes/inteligencia-artificial-voz-voice-ai",
    },
  ];

  // Soluções para Governo (Sub-itens)
  const governoItems = [
    { title: "Telefonia STFC B2G", desc: "Atendimento a prefeituras e órgãos públicos", href: "/governo#telefonia-stfc" },
    { title: "PABX em Nuvem Governo", desc: "Comunicação pública sem aquisição de servidor", href: "/governo#pabx-governo" },
    { title: "NOC 24×7 / Monitoramento", desc: "SLA estrito para serviços essenciais", href: "/governo#noc-governo" },
    { title: "Omnichannel Governo", desc: "Canais unificados para atendimento ao cidadão", href: "/governo#omnichannel-governo" },
    { title: "Compliance & Licitações", desc: "Termos de Referência e apoio em editais", href: "/governo#compliance-licitacoes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#041530]/75 backdrop-blur-md border-b border-white/[0.08] text-slate-300 text-xs py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-5">
          <a
            href={`tel:${siteContent.brand.phoneRegional.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-1.5 hover:text-mundo-orange transition-colors text-slate-300 text-xs"
          >
            <PhoneCall className="w-3 h-3 text-mundo-orange" />
            <span className="font-semibold text-slate-200">{siteContent.brand.phoneRegional}</span>
            <span className="text-slate-400">| {siteContent.brand.phone0800}</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href={siteContent.brand.clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors text-xs"
          >
            <Lock className="w-3 h-3 text-mundo-orange" />
            <span>Área do Cliente</span>
            <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 backdrop-blur-md border-b border-white/[0.08] ${
          isScrolled
            ? "bg-[#07224B]/80 py-3.5 shadow-[0_8px_32px_0_rgba(7,34,75,0.35)]"
            : "bg-[#07224B]/70 py-4 shadow-[0_4px_20px_0_rgba(7,34,75,0.15)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Quem Somos (Direct Link) */}
            <Link
              href="/sobre-nos"
              className={`px-3.5 py-2 rounded-xl font-display text-sm font-semibold transition-all ${
                pathname === "/sobre-nos"
                  ? "text-mundo-orange bg-white/[0.08] border border-white/15 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/[0.06] border border-transparent"
              }`}
            >
              Quem Somos
            </Link>

            {/* 2. Soluções para Empresas (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("empresas")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/empresas"
                className={`px-3.5 py-2 rounded-xl font-display text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeDropdown === "empresas" || pathname.startsWith("/empresas")
                    ? "text-mundo-orange bg-white/[0.08] border border-white/15 shadow-sm"
                    : "text-slate-200 hover:text-white hover:bg-white/[0.06] border border-transparent"
                }`}
              >
                <span>Soluções para Empresas</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "empresas" ? "rotate-180 text-mundo-orange" : "text-slate-400"
                  }`}
                />
              </Link>

              {activeDropdown === "empresas" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="w-[740px] xl:w-[780px] rounded-2xl bg-[#07224B]/95 border border-white/15 p-5 shadow-2xl backdrop-blur-2xl">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange mb-3 pb-2 border-b border-white/10">
                      {"// PORTFÓLIO CORPORATIVO DE TECNOLOGIA (9 SOLUÇÕES)"}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {empresasItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="p-2.5 rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all group block"
                        >
                          <div className="space-y-0.5">
                            <div className="text-xs font-display font-bold text-white group-hover:text-mundo-orange transition-colors truncate">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-300 group-hover:text-slate-200 transition-colors leading-tight line-clamp-2">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Soluções para Governo (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("governo")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/governo"
                className={`px-3.5 py-2 rounded-xl font-display text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeDropdown === "governo" || pathname.startsWith("/governo")
                    ? "text-mundo-orange bg-white/[0.08] border border-white/15 shadow-sm"
                    : "text-slate-200 hover:text-white hover:bg-white/[0.06] border border-transparent"
                }`}
              >
                <span>Soluções para Governo</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "governo" ? "rotate-180 text-mundo-orange" : "text-slate-400"
                  }`}
                />
              </Link>

              {activeDropdown === "governo" && (
                <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="w-[420px] rounded-2xl bg-[#07224B] border border-white/15 p-4 shadow-2xl backdrop-blur-2xl">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange mb-3 pb-2 border-b border-white/10">
                      {"// ATENDIMENTO GOVERNAMENTAL B2G"}
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {governoItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all group"
                        >
                          <div className="space-y-0.5">
                            <div className="text-xs font-display font-bold text-white group-hover:text-mundo-orange transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-300 group-hover:text-slate-200 transition-colors leading-tight">
                              {item.desc}
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-mundo-orange group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blog (Direct Link) */}
            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl font-display text-sm font-semibold transition-all ${
                pathname.startsWith("/blog")
                  ? "text-mundo-orange bg-white/[0.08] border border-white/15 shadow-sm"
                  : "text-slate-200 hover:text-white hover:bg-white/[0.06] border border-transparent"
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Action CTAs (Right) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contato"
              variant="primary"
              size="sm"
              className="text-xs font-bold shadow-md"
            >
              Fale com um Especialista
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/contato"
              variant="primary"
              size="sm"
              className="text-xs px-2.5 py-1.5"
            >
              Fale Conosco
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white bg-white/10 backdrop-blur-md border border-white/15"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#041530] border-b border-white/15 px-4 pt-3 pb-8 space-y-3 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-1.5">
              {/* Quem Somos */}
              <Link
                href="/sobre-nos"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-display text-sm font-bold text-white hover:text-mundo-orange transition-colors"
              >
                <span>Quem Somos</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Soluções para Empresas (Accordion) */}
              <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === "empresas" ? null : "empresas")}
                  className="w-full flex items-center justify-between p-3 text-left font-display text-sm font-bold text-white hover:text-mundo-orange transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-mundo-orange" />
                    <span>Soluções para Empresas</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileExpandedSection === "empresas" ? "rotate-180 text-mundo-orange" : ""
                    }`}
                  />
                </button>

                {mobileExpandedSection === "empresas" && (
                  <div className="p-3 pt-1 space-y-1 border-t border-white/5 mt-1 bg-black/20">
                    {empresasItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-[11px] text-slate-400">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Soluções para Governo (Accordion) */}
              <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === "governo" ? null : "governo")}
                  className="w-full flex items-center justify-between p-3 text-left font-display text-sm font-bold text-white hover:text-mundo-orange transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Landmark className="w-4 h-4 text-mundo-orange" />
                    <span>Soluções para Governo</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      mobileExpandedSection === "governo" ? "rotate-180 text-mundo-orange" : ""
                    }`}
                  />
                </button>

                {mobileExpandedSection === "governo" && (
                  <div className="p-3 pt-1 space-y-1 border-t border-white/5 mt-1 bg-black/20">
                    {governoItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-[11px] text-slate-400">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog */}
              <Link
                href="/blog"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-display text-sm font-bold text-white hover:text-mundo-orange transition-colors"
              >
                <span>Blog</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <Button
                href={siteContent.brand.clientPortalUrl}
                isExternal
                variant="outline-white"
                size="md"
                className="w-full justify-center text-xs"
                rightIcon={<ExternalLink className="w-4 h-4" />}
              >
                Área do Cliente (Portal)
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
