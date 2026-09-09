"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  initialProfile?: string;
  initialPlan?: string;
  initialSolution?: string;
}

export function ContactForm({ initialProfile, initialPlan, initialSolution }: ContactFormProps) {
  const getDefaultSolution = () => {
    if (initialSolution) return initialSolution;
    if (initialPlan) return `Plano ${initialPlan}`;
    if (initialProfile === "governo") return "Telefonia Corporativa (Voz IP & STFC)";
    return "PABX Virtual — Cloud PABX";
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    perfil: initialProfile === "governo" ? "Órgão Público / Governo (B2G)" : "Empresa Privada (B2B)",
    solucao: getDefaultSolution(),
    ramais: "De 6 a 15 ramais",
    mensagem: "",
    honeypot: "", // anti-spam trap
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn("Spam detected");
      return;
    }

    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim() || !formData.empresa.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha todos os campos obrigatórios (*) para direcionarmos seu atendimento.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          necessidades: [formData.solucao],
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          errorData.error || "Ocorreu um erro ao enviar. Por favor, tente novamente ou ligue para 0800 031 1919."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Erro de conexão. Por favor, tente novamente ou fale pelo WhatsApp oficial.");
    }
  };

  const solutionList = [
    "PABX Virtual — Cloud PABX",
    "Omnichannel & IA (Plataforma AIkon)",
    "Telefonia Corporativa (Voz IP & STFC)",
    "Infraestrutura de Redes (Alta Disponibilidade)",
    "Experiência do Cliente (CX Routing)",
    "Segurança & Compliance (Cybersecurity / LGPD)",
    "Gestão de Serviços de TI (NOC 24/7 & ITSM)",
    "Mensageria Corporativa (WhatsApp Meta Provider)",
    "Inteligência Artificial por Voz (Voice AI)",
    "Licitações e Editais Públicos (Lei 14.133)",
    "Consultoria e Diagnóstico Geral",
  ];

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-500/40 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-display font-black text-mundo-navy">
            Solicitação recebida com sucesso!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Nosso especialista comercial entrará em contato em breve para apresentar a proposta dimensionada para sua operação.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 max-w-md mx-auto">
          Caso tenha urgência, ligue gratuitamente para <strong className="text-mundo-navy">0800 031 1919</strong> ou acione nosso WhatsApp direto.
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
              solucao: "PABX Virtual — Cloud PABX",
              ramais: "De 6 a 15 ramais",
              mensagem: "",
              honeypot: "",
            });
          }}
          variant="outline"
          size="md"
        >
          Enviar Nova Mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-5 relative overflow-hidden"
    >
      {/* Honeypot field for bot protection */}
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
        <h3 className="text-xl sm:text-2xl font-display font-black text-mundo-navy">
          Solicitar Proposta ou Atendimento
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Preencha os dados abaixo para receber um diagnóstico técnico sem compromisso.
        </p>
      </div>

      {status === "error" && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Nome & E-mail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 block">
            Nome Completo *
          </label>
          <input
            type="text"
            required
            placeholder="Ex.: Ricardo Andrade"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 block">
            E-mail Corporativo *
          </label>
          <input
            type="email"
            required
            placeholder="Ex.: ricardo@empresa.com.br"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 2: Telefone/WhatsApp & Empresa/Órgão */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 block">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="Ex.: (31) 99999-9999"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 block">
            Empresa ou Órgão Público *
          </label>
          <input
            type="text"
            required
            placeholder="Ex.: Grupo ABC / Prefeitura Municipal"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 3: Perfil & Ramais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 block">
            Perfil da Operação *
          </label>
          <select
            value={formData.perfil}
            onChange={(e) => setFormData({ ...formData, perfil: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 bg-white outline-none transition-all"
          >
            <option value="Empresa Privada (B2B)">Empresa Privada (B2B)</option>
            <option value="Órgão Público / Governo (B2G)">Órgão Público / Governo (B2G)</option>
            <option value="Parceiro / Integrador">Parceiro / Integrador de TI</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-display font-bold text-slate-800 block">
            Quantidade de Ramais / Usuários
          </label>
          <select
            value={formData.ramais}
            onChange={(e) => setFormData({ ...formData, ramais: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 bg-white outline-none transition-all"
          >
            <option value="De 1 a 5 ramais">De 1 a 5 ramais</option>
            <option value="De 6 a 15 ramais">De 6 a 15 ramais</option>
            <option value="De 16 a 30 ramais">De 16 a 30 ramais</option>
            <option value="De 31 a 50 ramais">De 31 a 50 ramais</option>
            <option value="Mais de 50 ramais / Projeto Especial">Mais de 50 ramais / Projeto Especial</option>
          </select>
        </div>
      </div>

      {/* Row 4: Solução de Interesse (Select Categorizado) */}
      <div className="space-y-1.5">
        <label className="text-xs font-display font-bold text-slate-800 block">
          Solução de Interesse Principal *
        </label>
        <select
          value={formData.solucao}
          onChange={(e) => setFormData({ ...formData, solucao: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 bg-white outline-none transition-all font-medium"
        >
          {solutionList.map((sol) => (
            <option key={sol} value={sol}>
              {sol}
            </option>
          ))}
        </select>
      </div>

      {/* Row 5: Mensagem Opcional */}
      <div className="space-y-1.5">
        <label className="text-xs font-display font-bold text-slate-800 block">
          Mensagem ou Detalhes da Demanda (Opcional)
        </label>
        <textarea
          rows={2}
          placeholder="Ex.: Desejamos migrar centrais físicas para nuvem ou cotar links dedicados..."
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-mundo-orange focus:ring-2 focus:ring-mundo-orange/20 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="space-y-2.5 pt-1">
        <Button
          type="submit"
          disabled={status === "loading"}
          variant="primary"
          size="lg"
          className="w-full justify-center shadow-lg shadow-mundo-orange/20"
          rightIcon={status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        >
          {status === "loading" ? "Enviando solicitação..." : "Solicitar Atendimento Comercial"}
        </Button>
        <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          Seus dados estão protegidos pela LGPD e serão utilizados exclusivamente para este atendimento.
        </p>
      </div>
    </form>
  );
}

export default ContactForm;

