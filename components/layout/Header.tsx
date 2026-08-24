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
  Cloud,
  MessageSquare,
  Send,
  Star,
  BarChart2,
  ShieldCheck,
  FileCheck,
  Lock,
  ArrowRight
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

  // Soluções para Empresas (Sub-itens)
  const empresasItems = [
    { title: "Telefonia & Conectividade", desc: "Rotas de voz e identificador local (DDD)", href: "/servicos#telefonia-ip", icon: <PhoneCall className="w-4 h-4 text-mundo-orange" /> },
    { title: "PABX em Nuvem", desc: "Central sem hardware para matriz e filiais", href: "/servicos#pabx-nuvem", icon: <Cloud className="w-4 h-4 text-mundo-orange" /> },
    { title: "Contact Center na Nuvem", desc: "Discadores, filas e supervisão ao vivo", href: "/servicos#contact-center", icon: <Headphones className="w-4 h-4 text-mundo-orange" /> },
    { title: "Omnichannel + IA (Plataforma Conecta)", desc: "WhatsApp oficial com múltiplos atendentes", href: "/servicos#whatsapp-omnichannel", icon: <MessageSquare className="w-4 h-4 text-mundo-orange" /> },
    { title: "Mensageria em Massa", desc: "Disparos oficiais de SMS e WhatsApp", href: "/servicos#mensageria", icon: <Send className="w-4 h-4 text-mundo-orange" /> },
    { 
      title: "Terceirização de Telecom", 
      desc: "Gestão completa de infraestrutura e custos", 
      href: "/servicos#terceirizacao", 
      icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400" />,
      badge: "PRODUTO MAIS RENTÁVEL"
    },
    { title: "Software de Gestão", desc: "Tarifação, auditoria e bilhetagem precisa", href: "/servicos#software-gestao", icon: <BarChart2 className="w-4 h-4 text-mundo-orange" /> },
  ];

  // Soluções para Governo (Sub-itens)
  const governoItems = [
    { title: "Telefonia STFC B2G", desc: "Atendimento a prefeituras e órgãos públicos", href: "/governo#telefonia-stfc", icon: <PhoneCall className="w-4 h-4 text-mundo-orange" /> },
    { title: "PABX em Nuvem Governo", desc: "Comunicação pública sem aquisição de servidor", href: "/governo#pabx-governo", icon: <Cloud className="w-4 h-4 text-mundo-orange" /> },
    { title: "NOC 24×7 / Monitoramento", desc: "SLA estrito para serviços essenciais", href: "/governo#noc-governo", icon: <ShieldCheck className="w-4 h-4 text-mundo-orange" /> },
    { title: "Omnichannel Governo", desc: "Canais unificados para atendimento ao cidadão", href: "/governo#omnichannel-governo", icon: <MessageSquare className="w-4 h-4 text-mundo-orange" /> },
    { title: "Compliance & Licitações", desc: "Termos de Referência e apoio em editais", href: "/governo#compliance-licitacoes", icon: <FileCheck className="w-4 h-4 text-mundo-orange" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#041530]/90 backdrop-blur-xl border-b border-white/[0.08] text-slate-300 text-xs py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-5">
          <a
            href={`tel:${siteContent.brand.phoneRegional.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-1.5 hover:text-mundo-orange transition-colors text-slate-300 text-xs"
          >
            <PhoneCall className="w-3 h-3 text-mundo-orange" />
            <span className="font-semibold text-slate-200">{siteContent.brand.phone0800}</span>
            <span className="text-slate-400">| {siteContent.brand.phoneRegional}</span>
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
        className={`w-full transition-all duration-300 backdrop-blur-2xl border-b border-white/[0.08] ${
          isScrolled
            ? "bg-[#041530]/95 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
            : "bg-[#041530]/85 py-3 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]"
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
                <div className="absolute top-full left-0 mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="w-[480px] rounded-2xl bg-[#07224B] border border-white/15 p-4 shadow-2xl backdrop-blur-2xl">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span>{"// PORTFÓLIO CORPORATIVO B2B"}</span>
                      <Link href="/empresas" className="hover:underline flex items-center gap-1 text-slate-300 hover:text-white">
                        Ver todas <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {empresasItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-all group ${
                            item.badge
                              ? "bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20"
                              : "hover:bg-white/10 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-mundo-orange shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-mundo-orange transition-colors flex items-center gap-2">
                                <span>{item.title}</span>
                                {item.badge && (
                                  <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-full bg-mundo-orange text-white">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-300">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-mundo-orange group-hover:translate-x-0.5 transition-all" />
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
                  <div className="w-[420px] rounded-2xl bg-[#07224B] border-2 border-mundo-orange/40 p-4 shadow-2xl backdrop-blur-2xl">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-mundo-orange mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span>{"// ATENDIMENTO GOVERNAMENTAL B2G"}</span>
                      <span className="text-[10px] bg-mundo-orange/20 text-mundo-orange px-2 py-0.5 rounded-md font-bold">ANATEL STFC</span>
                    </div>
                    <div className="space-y-1.5">
                      {governoItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-mundo-orange shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-mundo-orange transition-colors">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-300">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-mundo-orange group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Cases (Direct Link) */}
            <Link
              href="/#cases"
              className="px-3.5 py-2 rounded-xl font-display text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/[0.06] border border-transparent transition-all"
            >
              Cases
            </Link>

            {/* 5. Blog (Direct Link) */}
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
              leftIcon={<Headphones className="w-4 h-4" />}
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
                  <div className="p-3 pt-0 space-y-2 border-t border-white/5 mt-1 bg-black/20">
                    {empresasItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-mundo-orange text-white font-bold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
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
                  <div className="p-3 pt-0 space-y-2 border-t border-white/5 mt-1 bg-black/20">
                    {governoItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cases */}
              <Link
                href="/#cases"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-display text-sm font-bold text-white hover:text-mundo-orange transition-colors"
              >
                <span>Cases</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

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
              <Button
                href={siteContent.brand.whatsappUrl}
                isExternal
                variant="primary"
                size="md"
                className="w-full justify-center text-xs bg-emerald-600 hover:bg-emerald-700 border-none shadow-none"
                rightIcon={<MessageSquare className="w-4 h-4" />}
              >
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
