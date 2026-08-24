import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    default: "Mundo Telecom | Telefonia em Nuvem, PABX e Soluções STFC ANATEL",
    template: "%s | Mundo Telecom",
  },
  description:
    "Aumente a taxa de atendimento e a eficiência da sua comunicação com telefonia corporativa em nuvem. Operadora licenciada pela ANATEL há mais de 20 anos para empresas e governos.",
  keywords: [
    "telefonia ip",
    "pabx em nuvem",
    "stfc anatel",
    "telefonia corporativa",
    "identificador local",
    "ura inteligente",
    "gravacao de chamadas",
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
    title: "Mundo Telecom | Telefonia em Nuvem e PABX Corporativo",
    description:
      "Aumente a taxa de atendimento e a eficiência da sua comunicação com telefonia corporativa em nuvem. Operadora licenciada ANATEL.",
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
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#1E293B] antialiased selection:bg-[#EF831C] selection:text-white">
        <Header />
        <main className="flex-1 w-full bg-[#FFFEFF]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
