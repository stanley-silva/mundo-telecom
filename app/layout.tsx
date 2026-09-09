import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mundo Telecom | Empresa de Tecnologia com Infraestrutura e Solução Própria",
    template: "%s | Mundo Telecom",
  },
  description:
    "Comunicações inteligentes para empresas e órgãos públicos. PABX na nuvem com URA de IA, rechamada automática exclusiva, WhatsApp integrado e infraestrutura própria com outorga ANATEL e NOC 24/7.",
  keywords: [
    "empresa de tecnologia",
    "comunicacoes inteligentes",
    "pabx na nuvem",
    "rechamada automatica",
    "ia no atendimento",
    "whatsapp com ia",
    "agendamento online",
    "outsourcing de telecom",
    "stfc anatel",
    "telefonia corporativa",
    "telefonia setor publico",
    "noc 24/7",
    "mundo telecom",
  ],
  authors: [{ name: "Mundo Telecom" }],
  creator: "Mundo Telecom",
  publisher: "Mundo Telecom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mundotelecom.com.br"),
  openGraph: {
    title: "Mundo Telecom | Empresa de Tecnologia com Infraestrutura e Solução Própria",
    description:
      "PABX na nuvem com URA de IA, rechamada automática exclusiva de ligações perdidas, WhatsApp integrado e infraestrutura própria.",
    url: "https://mundotelecom.com.br",
    siteName: "Mundo Telecom",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#050505] text-[#1E293B] antialiased selection:bg-[#EF831C] selection:text-white"
      >
        <Header />
        <main className="flex-1 w-full bg-[#FFFEFF]">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
