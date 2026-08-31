"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PhoneCall, 
  Mail, 
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
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Main Row: Logo column on the left, 3 grouped columns on the right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 xl:gap-28 pb-12 border-b border-white/10">
          {/* Brand Column (Left) */}
          <div className="w-full lg:max-w-xs xl:max-w-sm space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Operadora e integradora de soluções inteligentes em telecomunicações corporativas e públicas. <strong className="text-white font-medium">Mais de duas décadas de tradição, solidez e relacionamento.</strong>
            </p>
          </div>

          {/* Grouped Columns (Right) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 w-full lg:w-auto">
            {/* Column 1: Menu Principal */}
            <div className="space-y-3.5">
              <h4 className="text-xs sm:text-sm font-display font-bold text-mundo-orange">
                Menu Principal
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nos" className="hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/empresas" className="hover:text-white transition-colors">
                    Soluções B2B
                  </Link>
                </li>
                <li>
                  <Link href="/governo" className="hover:text-white transition-colors">
                    Soluções B2G
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Soluções */}
            <div className="space-y-3.5">
              <h4 className="text-xs sm:text-sm font-display font-bold text-mundo-orange">
                Soluções
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li>
                  <Link href="/servicos#pabx-nuvem" className="hover:text-white transition-colors">
                    PABX em Nuvem
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#stfc-outorgado" className="hover:text-white transition-colors">
                    Telefonia STFC
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#ura-inteligente" className="hover:text-white transition-colors">
                    URA Inteligente & IA
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#whatsapp-omnichannel" className="hover:text-white transition-colors">
                    WhatsApp Omnichannel
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#noc-monitoramento" className="hover:text-white transition-colors">
                    NOC & Monitoramento
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contato & Endereço */}
            <div className="space-y-3.5">
              <h4 className="text-xs sm:text-sm font-display font-bold text-mundo-orange">
                Contato
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div>
                  <span className="font-bold text-white block">0800 031 1919</span>
                  <span className="text-slate-400 text-xs">(31) 2552-1919</span>
                </div>

                <div className="pt-1.5 space-y-1">
                  <h5 className="text-xs font-display font-bold text-mundo-orange">
                    Endereço
                  </h5>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Rua Hermilo Alves, 66, 2º Andar<br />
                    Santa Tereza — Belo Horizonte, MG<br />
                    CEP: 31010-070
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            Mundo Telecom @ {currentYear}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/sobre-nos" className="hover:text-white transition-colors">
              Quem Somos
            </Link>
            <Link href="/contato" className="hover:text-white transition-colors">
              Suporte 24/7
            </Link>
            <a
              href={siteContent.brand.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mundo-orange transition-colors flex items-center gap-1 font-medium"
            >
              Área do Cliente <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
