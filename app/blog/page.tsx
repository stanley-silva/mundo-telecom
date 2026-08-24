"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  Search, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Send,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { siteContent, BlogPost } from "@/lib/content";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");

  const filteredPosts = siteContent.blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "todos" || post.categorySlug === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setNewsletterStatus("success");
  };

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* ========================================================= */}
      {/* BLOCO 1: HERO SECTION (BLOG)                              */}
      {/* ========================================================= */}
      <section className="relative bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold">Blog & Artigos</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <Badge
              variant="orange"
              icon={<BookOpen className="w-3.5 h-3.5" />}
              className="py-1 px-3.5"
            >
              CONTEÚDO TÉCNICO & ESTRATÉGICO
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
              Informação prática para quem decide sobre a comunicação da sua organização.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Análises sobre eficiência de chamadas, comparativos de infraestrutura em nuvem, melhores práticas para o setor público e guias para eliminar desperdícios na telefonia corporativa. Conteúdo direto ao ponto, escrito por quem opera telecomunicações há mais de 20 anos.
            </p>

            <div className="pt-2 text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mundo-orange" />
              <span>Sem termos vazios de marketing • Foco em redução de custos, conformidade e produtividade operacional</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* ========================================================= */}
      {/* BLOCO 2 & 3: FILTROS, BUSCA & LISTAGEM DE ARTIGOS         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Controls: Search and Categories */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar artigos por palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                />
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Exibindo <strong>{filteredPosts.length}</strong> artigos
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {siteContent.blogCategories.map((cat) => {
                const isSelected = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all whitespace-nowrap ${
                      isSelected
                        ? "bg-mundo-navy text-white shadow"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-mundo-orange/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-mundo-orange bg-mundo-orange/10 px-2.5 py-0.5 rounded-full border border-mundo-orange/20">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-display font-bold text-mundo-navy group-hover:text-mundo-orange transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Tópicos Abordados:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {post.topics.slice(0, 2).map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="text-mundo-orange">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {post.publishDate}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-display font-bold text-mundo-orange group-hover:text-mundo-orange-hover"
                  >
                    <span>Ler Artigo</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <p className="text-base text-slate-600">
                Nenhum artigo encontrado para os filtros selecionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("todos");
                  setSearchQuery("");
                }}
                className="text-xs font-display font-bold text-mundo-orange hover:underline"
              >
                Limpar filtros e ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 4: NEWSLETTER INSTITUCIONAL                         */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-mundo-navy-deep text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="orange" icon={<Mail className="w-3.5 h-3.5" />}>
            NEWSLETTER INSTITUCIONAL
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
            Receba inteligência prática sobre telecomunicações no seu e-mail
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sem spam. Apenas análises regulatórias da ANATEL, guias técnicos de economia de infraestrutura e novidades do setor de telecom.
          </p>

          {newsletterStatus === "success" ? (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Inscrição confirmada com sucesso!
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                required
                placeholder="Digite seu e-mail corporativo..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-mundo-navy-surface border border-mundo-navy-border text-sm text-white placeholder:text-slate-400 outline-none focus:border-mundo-orange"
              />
              <Button
                type="submit"
                disabled={newsletterStatus === "loading"}
                variant="primary"
                size="md"
              >
                {newsletterStatus === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Inscrever-se"}
              </Button>
            </form>
          )}

          <p className="text-[11px] text-slate-400">
            Respeitamos sua privacidade de acordo com a LGPD. Você pode cancelar o envio a qualquer momento.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOCO 5: CTA PRÉ-RODAPÉ                                   */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-mundo-navy">
            Tem um desafio específico de comunicação na sua empresa ou órgão público?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Nossa equipe técnica avalia sua estrutura e desenha o plano ideal com custos transparentes e migração assistida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Falar com um Especialista Técnico
            </Button>
            <Button
              href={siteContent.brand.whatsappUrl}
              isExternal
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Atendimento via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
