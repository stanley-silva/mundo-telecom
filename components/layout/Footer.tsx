"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ExternalLink 
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteContent } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Don't render public footer on admin CMS route
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-mundo-navy-deep text-slate-300 border-t border-mundo-navy-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Brand & Central Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
              Mundo Telecom — Operadora e integradora de soluções inteligentes em telecomunicações corporativas e públicas. Licenciada pela ANATEL há mais de 20 anos.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-mundo-orange shrink-0" />
                <span className="font-semibold text-white">0800 031 1919</span>
                <span className="text-slate-400">| (31) 2552-1919</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mundo-orange shrink-0" />
                <a
                  href={`mailto:${siteContent.brand.email}`}
                  className="hover:text-mundo-orange transition-colors"
                >
                  {siteContent.brand.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-mundo-orange transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="hover:text-mundo-orange transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-mundo-orange transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="hover:text-mundo-orange transition-colors">
                  Para Empresas (B2B)
                </Link>
              </li>
              <li>
                <Link href="/governo" className="hover:text-mundo-orange transition-colors">
                  Para Governo (B2G)
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-mundo-orange transition-colors">
                  Produtos & Planos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-mundo-orange transition-colors">
                  Blog & Conteúdo
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-mundo-orange transition-colors">
                  Contato & Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white">
              Soluções
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/servicos#telefonia-ip" className="hover:text-mundo-orange transition-colors">
                  Telefonia IP Corporativa
                </Link>
              </li>
              <li>
                <Link href="/servicos#pabx-nuvem" className="hover:text-mundo-orange transition-colors">
                  PABX em Nuvem
                </Link>
              </li>
              <li>
                <Link href="/servicos#stfc-outorgado" className="hover:text-mundo-orange transition-colors">
                  Telefonia STFC (ANATEL)
                </Link>
              </li>
              <li>
                <Link href="/servicos#ura-inteligente" className="hover:text-mundo-orange transition-colors">
                  URA & Atendimento Inteligente
                </Link>
              </li>
              <li>
                <Link href="/servicos#gravacao-chamadas" className="hover:text-mundo-orange transition-colors">
                  Gravação de Chamadas
                </Link>
              </li>
              <li>
                <Link href="/servicos#whatsapp-omnichannel" className="hover:text-mundo-orange transition-colors">
                  WhatsApp Oficial & Omnichannel
                </Link>
              </li>
              <li>
                <Link href="/servicos#noc-monitoramento" className="hover:text-mundo-orange transition-colors">
                  NOC & Monitoramento 24/7
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Units (Clean & Minimalist List) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-mundo-orange" />
              Unidades Físicas
            </h4>

            <div className="space-y-3 text-xs">
              <div className="space-y-0.5">
                <div className="font-display font-bold text-white">
                  Belo Horizonte / MG <span className="text-[10px] text-mundo-orange font-normal font-sans">(Matriz & NOC)</span>
                </div>
                <p className="text-slate-400 leading-snug">
                  Rua Hermilo Alves, 66, 2º Andar, Santa Tereza — CEP: 31010-070
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="font-display font-bold text-white">
                  Brasília / DF <span className="text-[10px] text-slate-400 font-normal font-sans">(Setor Público)</span>
                </div>
                <p className="text-slate-400 leading-snug">
                  Ed. Oscar Niemeyer, Sala 1001, Bloco D, SCS — CEP: 70316-900
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="font-display font-bold text-white">
                  São Paulo / SP <span className="text-[10px] text-slate-400 font-normal font-sans">(Grandes Contas)</span>
                </div>
                <p className="text-slate-400 leading-snug">
                  Rua Funchal, 203, Cj. 91, Vila Olímpia — CEP: 04551-904
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {currentYear} Mundo Telecomunicações. Todos os direitos reservados. Operadora Licenciada ANATEL.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/sobre-nos" className="hover:text-mundo-orange transition-colors">
              Institucional
            </Link>
            <Link href="/contato" className="hover:text-mundo-orange transition-colors">
              Suporte 24/7
            </Link>
            <a
              href={siteContent.brand.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mundo-orange transition-colors flex items-center gap-1"
            >
              Área do Cliente <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
