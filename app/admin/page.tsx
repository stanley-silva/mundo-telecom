"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Layers, 
  FileText, 
  Tag, 
  Package, 
  Users, 
  Building2, 
  MapPin, 
  Mail, 
  Cpu, 
  ArrowRight,
  ExternalLink,
  Plus,
  Search,
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<string>("posts");
  const [search, setSearch] = useState("");

  const collectionsMeta = [
    { id: "posts", name: "Artigos do Blog", count: siteContent.blogPosts.length, icon: <FileText className="w-5 h-5" />, desc: "Publicação e edição de artigos, SEO e categorias" },
    { id: "solutions", name: "Soluções de Telecom", count: siteContent.solutions.length, icon: <Layers className="w-5 h-5" />, desc: "Portfólio de telefonia, PABX, URA, gravação e NOC" },
    { id: "plans", name: "Planos & Tiers", count: siteContent.plans.length, icon: <Package className="w-5 h-5" />, desc: "Planos Entrada, Crescimento, Avançado e Sob Medida" },
    { id: "units", name: "Unidades Físicas", count: siteContent.units.length, icon: <MapPin className="w-5 h-5" />, desc: "Matriz BH, Filial Brasília e Filial São Paulo" },
    { id: "cases", name: "Cases de Clientes", count: siteContent.caseStudies.length, icon: <Users className="w-5 h-5" />, desc: "Macrocont, PlurisMídia, Grupo Via, UFV" },
    { id: "partners", name: "Parceiros Tecnológicos", count: siteContent.partners.length, icon: <Cpu className="w-5 h-5" />, desc: "3CX, Khomp, Fanvil, Grandstream, Aligera, Plantec" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
      {/* Admin Top Header */}
      <header className="bg-mundo-navy text-white px-6 py-4 border-b border-mundo-navy-border flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo variant="light" size="sm" />
          <div className="h-5 w-px bg-white/20 hidden sm:block" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-mundo-orange bg-mundo-orange/10 px-2 py-0.5 rounded border border-mundo-orange/20">
            Painel CMS
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PostgreSQL / SQLite Headless Ativo</span>
          </div>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
          >
            <span>Ver Site Ao Vivo</span>
            <ExternalLink className="w-3.5 h-3.5 text-mundo-orange" />
          </Link>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Navigation Sidebar */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-slate-400">
              Coleções do CMS
            </div>
            <div className="space-y-1">
              {collectionsMeta.map((col) => {
                const isActive = activeTab === col.id;
                return (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => setActiveTab(col.id)}
                    className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-sm font-medium ${
                      isActive
                        ? "bg-mundo-navy text-white shadow"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-mundo-orange" : "text-slate-400"}>
                        {col.icon}
                      </span>
                      <span>{col.name}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                        isActive
                          ? "bg-mundo-orange text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {col.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-mundo-navy-surface text-white border border-mundo-navy-border space-y-3 text-xs shadow-md">
            <div className="flex items-center gap-2 text-mundo-orange font-bold font-display">
              <ShieldCheck className="w-4 h-4" />
              <span>Controle de Publicação e Edição</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              O conteúdo do portal institucional está 100% tipado e centralizado no módulo de dados estruturados em <code className="text-mundo-orange">lib/content.ts</code>.
            </p>
          </div>
        </aside>

        {/* Right Content Management Workspace */}
        <main className="lg:col-span-8 space-y-6">
          {/* Active Collection Header */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-display font-bold text-mundo-navy">
                  {collectionsMeta.find((c) => c.id === activeTab)?.name}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {collectionsMeta.find((c) => c.id === activeTab)?.desc}
                </p>
              </div>

              <Button
                type="button"
                variant="primary"
                size="sm"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={() => alert("Função de criação habilitada para o editor autenticado.")}
              >
                Novo Registro
              </Button>
            </div>

            {/* Collection Items Table Preview */}
            <div className="space-y-3 pt-2">
              {activeTab === "posts" && (
                <div className="space-y-3">
                  {siteContent.blogPosts.map((post) => (
                    <div
                      key={post.slug}
                      className="p-4 rounded-xl border border-slate-200 hover:border-mundo-orange/40 transition-all flex items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-mundo-orange bg-mundo-orange/10 px-2 py-0.5 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            {post.readTime}
                          </span>
                        </div>
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {post.summary}
                        </p>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-xs font-display font-bold text-mundo-navy hover:text-mundo-orange shrink-0 flex items-center gap-1"
                      >
                        Visualizar <ExternalLink className="w-3.5 h-3.5 text-mundo-orange" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "solutions" && (
                <div className="space-y-3">
                  {siteContent.solutions.map((sol) => (
                    <div
                      key={sol.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-mundo-orange/40 transition-all flex items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div>
                        <div className="text-[10px] font-bold uppercase text-mundo-orange">
                          {sol.categoryTag}
                        </div>
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          {sol.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {sol.shortDescription}
                        </p>
                      </div>
                      <Link
                        href={`/servicos#${sol.id}`}
                        target="_blank"
                        className="text-xs font-display font-bold text-mundo-navy hover:text-mundo-orange shrink-0 flex items-center gap-1"
                      >
                        Ver no Site <ExternalLink className="w-3.5 h-3.5 text-mundo-orange" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "plans" && (
                <div className="space-y-3">
                  {siteContent.plans.map((plan) => (
                    <div
                      key={plan.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-mundo-orange/40 transition-all flex items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-display font-bold text-mundo-navy">
                            {plan.name}
                          </h4>
                          {plan.badge && (
                            <span className="text-[10px] font-bold text-mundo-orange bg-mundo-orange/10 px-2 py-0.5 rounded">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">
                          {plan.price !== "Sob Medida" ? `R$ ${plan.price}${plan.period}` : "Sob Medida / Governamental"}
                        </p>
                      </div>
                      <Link
                        href="/produtos#planos"
                        target="_blank"
                        className="text-xs font-display font-bold text-mundo-navy hover:text-mundo-orange shrink-0 flex items-center gap-1"
                      >
                        Ver no Site <ExternalLink className="w-3.5 h-3.5 text-mundo-orange" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "units" && (
                <div className="space-y-3">
                  {siteContent.units.map((unit) => (
                    <div
                      key={unit.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-mundo-orange/40 transition-all flex items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div>
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          {unit.city} ({unit.state}) — {unit.type}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {unit.address} • Tel: {unit.phone}
                        </p>
                      </div>
                      <Link
                        href="/contato"
                        target="_blank"
                        className="text-xs font-display font-bold text-mundo-navy hover:text-mundo-orange shrink-0 flex items-center gap-1"
                      >
                        Ver no Site <ExternalLink className="w-3.5 h-3.5 text-mundo-orange" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "cases" && (
                <div className="space-y-3">
                  {siteContent.caseStudies.map((cs) => (
                    <div
                      key={cs.client}
                      className="p-4 rounded-xl border border-slate-200 hover:border-mundo-orange/40 transition-all flex items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div>
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          {cs.client} ({cs.segment})
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {cs.description}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-600 font-bold shrink-0">
                        {cs.tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "partners" && (
                <div className="space-y-3">
                  {siteContent.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="p-4 rounded-xl border border-slate-200 hover:border-mundo-orange/40 transition-all flex items-center justify-between gap-4 bg-slate-50/50"
                    >
                      <div>
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          {partner.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {partner.category} • {partner.description}
                        </p>
                      </div>
                      <Badge variant="navy" className="text-[10px]">
                        Homologado
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
