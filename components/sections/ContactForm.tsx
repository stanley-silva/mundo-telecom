"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  Landmark, 
  Users, 
  Phone, 
  Mail, 
  User, 
  MessageSquare,
  Sparkles,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  initialProfile?: string;
  initialPlan?: string;
}

export function ContactForm({ initialProfile, initialPlan }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    perfil: initialProfile === "governo" ? "Órgão Público / Governo (B2G)" : "Empresa Privada (B2B)",
    ramais: "De 6 a 15 ramais",
    necessidades: initialPlan ? [`Plano ${initialPlan}`] : ["Telefonia em Nuvem com Identificador Local"],
    mensagem: "",
    honeypot: "", // anti-spam bot trap
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => {
      const exists = prev.necessidades.includes(option);
      if (exists) {
        return {
          ...prev,
          necessidades: prev.necessidades.filter((item) => item !== option),
        };
      } else {
        return {
          ...prev,
          necessidades: [...prev.necessidades, option],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.warn("Spam detected");
      return;
    }

    // Required fields validation
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim() || !formData.empresa.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios (*) para que possamos direcionar seu atendimento.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          errorData.error ||
            "Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo telefone 0800 031 1919."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Ocorreu um erro de conexão. Por favor, verifique sua internet ou entre em contato pelo telefone 0800 031 1919.");
    }
  };

  const serviceOptions = [
    "Telefonia em Nuvem com Identificador Local",
    "WhatsApp Corporativo Centralizado (múltiplos atendentes)",
    "Redução de custos e eliminação de surpresas na fatura",
    "Central PABX em Nuvem sem equipamentos físicos",
    "Gravação de chamadas e conformidade jurídica",
    "Conectividade STFC para Órgãos Públicos / Licitação",
    "Outros / Consultoria personalizada",
  ];

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-mundo-navy-surface border border-emerald-500/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Mensagem enviada com sucesso!
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Um consultor especializado da Mundo Telecom entrará em contato em breve para apresentar a proposta dimensionada para a sua necessidade.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-mundo-navy-deep/80 border border-white/10 text-xs text-slate-400 max-w-md mx-auto">
          Caso tenha urgência ou deseje atendimento imediato, ligue gratuitamente para <strong className="text-white">0800 031 1919</strong> ou acione nosso WhatsApp.
        </div>
        <Button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              nome: "",
              email: "",
              telefone: "",
              empresa: "",
              perfil: "Empresa Privada (B2B)",
              ramais: "De 6 a 15 ramais",
              necessidades: ["Telefonia em Nuvem com Identificador Local"],
              mensagem: "",
              honeypot: "",
            });
          }}
          variant="outline-white"
          size="md"
        >
          Enviar Nova Solicitação
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6"
    >
      {/* Hidden Honeypot Field */}
      <input
        type="text"
        name="website_url_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="sr-only hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-mundo-navy">
          Solicite um Diagnóstico Técnico ou Fale com um Especialista
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Preencha as informações abaixo para que nosso especialista comercial e técnico entre em contato com a solução dimensionada para a sua necessidade.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Grid: Name, Email, Phone, Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-mundo-orange" />
            Nome Completo *
          </label>
          <input
            type="text"
            required
            placeholder="Ex.: Ricardo Andrade"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-mundo-orange" />
            E-mail Corporativo / Institucional *
          </label>
          <input
            type="email"
            required
            placeholder="Ex.: ricardo@suaempresa.com.br"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-mundo-orange" />
            Telefone / WhatsApp com DDD *
          </label>
          <input
            type="tel"
            required
            placeholder="Ex.: (11) 99999-9999"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-mundo-orange" />
            Nome da Empresa ou Órgão Público *
          </label>
          <input
            type="text"
            required
            placeholder="Ex.: Distribuidora ABC / Prefeitura Municipal"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>
      </div>

      {/* Dropdowns: Profile & Ramais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-mundo-orange" />
            Perfil da Organização *
          </label>
          <select
            value={formData.perfil}
            onChange={(e) => setFormData({ ...formData, perfil: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 bg-white outline-none transition-all"
          >
            <option value="Empresa Privada (B2B)">Empresa Privada (B2B)</option>
            <option value="Órgão Público / Governo (B2G)">Órgão Público / Governo (B2G)</option>
            <option value="Parceiro de Tecnologia / Integrador">Parceiro de Tecnologia / Integrador</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-mundo-orange" />
            Quantidade Estimada de Ramais / Usuários *
          </label>
          <select
            value={formData.ramais}
            onChange={(e) => setFormData({ ...formData, ramais: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 bg-white outline-none transition-all"
          >
            <option value="De 1 a 5 ramais">De 1 a 5 ramais</option>
            <option value="De 6 a 15 ramais">De 6 a 15 ramais</option>
            <option value="De 16 a 30 ramais">De 16 a 30 ramais</option>
            <option value="De 31 a 50 ramais">De 31 a 50 ramais</option>
            <option value="Mais de 50 ramais / Projeto Especial">Mais de 50 ramais / Projeto Especial</option>
          </select>
        </div>
      </div>

      {/* Checkboxes: Solution Interests */}
      <div className="space-y-2.5">
        <label className="text-xs font-display font-bold text-slate-800 block">
          Principal Necessidade ou Solução de Interesse (selecione uma ou mais)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceOptions.map((option) => {
            const isSelected = formData.necessidades.includes(option);
            return (
              <label
                key={option}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-all ${
                  isSelected
                    ? "bg-mundo-orange/10 border-mundo-orange/60 text-mundo-navy font-semibold"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleCheckboxChange(option)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all shrink-0 ${
                    isSelected
                      ? "bg-mundo-orange border-mundo-orange text-white"
                      : "border-slate-400 bg-white"
                  }`}
                >
                  {isSelected && <span className="text-[10px] font-black">✓</span>}
                </div>
                <span className="leading-tight">{option}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Message textarea */}
      <div className="space-y-1.5">
        <label className="text-xs font-display font-bold text-slate-800 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-mundo-orange" />
          Mensagem ou Detalhes da Demanda (Opcional)
        </label>
        <textarea
          rows={3}
          placeholder="Conte-nos brevemente o volume aproximado de chamadas ou o principal desafio atual da sua telefonia..."
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
        />
      </div>

      {/* Submit Button & LGPD */}
      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          disabled={status === "loading"}
          variant="primary"
          size="lg"
          className="w-full justify-center"
          rightIcon={status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        >
          {status === "loading" ? "Processando solicitação..." : "Solicitar Diagnóstico e Proposta sem Compromisso"}
        </Button>
        <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          Seus dados estão protegidos de acordo com a LGPD e serão utilizados exclusivamente para o contato do nosso time técnico.
        </p>
      </div>
    </form>
  );
}
