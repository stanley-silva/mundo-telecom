"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Landmark, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Send,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export function InteractiveSimulator() {
  const [segment, setSegment] = useState<"b2b" | "b2g">("b2b");

  // B2B State
  const [b2bData, setB2bData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    ramais: "",
    gastoAtual: "",
    usaWhatsapp: "Sim, usamos ativamente",
    honeypot: ""
  });

  // B2G State
  const [b2gData, setB2gData] = useState({
    nome: "",
    email: "",
    telefone: "",
    orgao: "",
    ramais: "",
    cargo: "",
    temTermoReferencia: "Sim, temos termo pronto",
    honeypot: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const isB2b = segment === "b2b";
    const currentData = isB2b ? b2bData : b2gData;
    const orgName = isB2b ? b2bData.empresa : b2gData.orgao;

    if (!currentData.nome.trim() || !currentData.email.trim() || !currentData.telefone.trim() || !orgName.trim()) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios marcados com *.");
      return;
    }

    setIsSubmitting(true);

    const payload = isB2b
      ? {
          tipoSegmento: "Empresa Privada (B2B)",
          nome: b2bData.nome,
          email: b2bData.email,
          telefone: b2bData.telefone,
          empresa: b2bData.empresa,
          ramais: b2bData.ramais,
          gastoAtual: b2bData.gastoAtual,
          usaWhatsapp: b2bData.usaWhatsapp,
          honeypot: b2bData.honeypot
        }
      : {
          tipoSegmento: "Órgão Público (B2G)",
          nome: b2gData.nome,
          email: b2gData.email,
          telefone: b2gData.telefone,
          empresa: b2gData.orgao,
          ramais: b2gData.ramais,
          cargo: b2gData.cargo,
          temTermoReferencia: b2gData.temTermoReferencia,
          honeypot: b2gData.honeypot
        };

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        const errorRes = await res.json();
        setErrorMessage(errorRes.error || "Ocorreu um erro ao enviar. Tente novamente ou chame no WhatsApp.");
      }
    } catch {
      setErrorMessage("Falha de conexão com o servidor. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ========================================================= */}
        {/* COLUNA ESQUERDA: COPY INSTITUCIONAL & BENEFÍCIOS (LIGHT)  */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <Badge variant="orange" className="text-xs">
            FALE COM UM ESPECIALISTA
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-black text-mundo-navy tracking-tight leading-[1.15]">
            Fale com um especialista e descubra qual plano cobre sua operação
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Insira as informações da sua organização. Nosso especialista técnico avaliará sua demanda e entrará em contato com a melhor proposta e dimensionamento sem compromisso.
          </p>

          <div className="space-y-3.5 pt-2 text-sm text-slate-700">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-5 h-5 rounded-full bg-mundo-orange/15 border border-mundo-orange/30 text-mundo-orange flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Estudo de viabilidade de DDDs locais gratuito</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-5 h-5 rounded-full bg-mundo-orange/15 border border-mundo-orange/30 text-mundo-orange flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Plano de migração e continuidade sem quedas de linha</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-5 h-5 rounded-full bg-mundo-orange/15 border border-mundo-orange/30 text-mundo-orange flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Suporte técnico humanizado e NOC 24/7 próprio</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COLUNA DIREITA: CARD DO FORMULÁRIO (LIGHT CARD)           */}
        {/* ========================================================= */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden text-slate-900">
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-mundo-orange/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

            {/* Segment Toggle */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center max-w-md w-full border border-slate-200/90 shadow-inner">
                <button
                  type="button"
                  onClick={() => {
                    setSegment("b2b");
                    setIsSuccess(false);
                    setErrorMessage("");
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-display font-bold transition-all duration-300 ${
                    segment === "b2b"
                      ? "bg-mundo-navy text-white shadow-md"
                      : "text-slate-600 hover:text-mundo-navy"
                  }`}
                >
                  <Building2 className="w-4 h-4 text-mundo-orange" />
                  <span>Empresa Privada</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSegment("b2g");
                    setIsSuccess(false);
                    setErrorMessage("");
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-display font-bold transition-all duration-300 ${
                    segment === "b2g"
                      ? "bg-mundo-navy text-white shadow-md"
                      : "text-slate-600 hover:text-mundo-navy"
                  }`}
                >
                  <Landmark className="w-4 h-4 text-mundo-orange" />
                  <span>Órgão Público</span>
                </button>
              </div>
            </div>

            {/* Form Title */}
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-mundo-orange mb-5">
              {"// SOLICITAÇÃO DE ESTUDO DE VIABILIDADE"}
            </div>

            {/* Success Message */}
            {isSuccess ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-display font-bold text-mundo-navy">
                    Solicitação Enviada com Sucesso!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Nossos consultores entrarão em contato em instantes para apresentar a proposta técnica dimensionada.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    href={siteContent.brand.whatsappUrl}
                    isExternal
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 border-none shadow-none"
                    rightIcon={<MessageSquare className="w-4 h-4" />}
                  >
                    Falar Imediatamente no WhatsApp
                  </Button>
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      setB2bData({
                        nome: "",
                        email: "",
                        telefone: "",
                        empresa: "",
                        ramais: "",
                        gastoAtual: "",
                        usaWhatsapp: "Sim, usamos ativamente",
                        honeypot: ""
                      });
                      setB2gData({
                        nome: "",
                        email: "",
                        telefone: "",
                        orgao: "",
                        ramais: "",
                        cargo: "",
                        temTermoReferencia: "Sim, temos termo pronto",
                        honeypot: ""
                      });
                    }}
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Nova Solicitação
                  </Button>
                </div>
              </div>
            ) : (
              /* Simple Form Inputs */
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* ========================================================= */}
                {/* CAMPOS EMPRESA PRIVADA (B2B)                              */}
                {/* ========================================================= */}
                {segment === "b2b" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <User className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>Nome Completo: *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Carlos Silva"
                          value={b2bData.nome}
                          onChange={(e) => setB2bData({ ...b2bData, nome: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <Mail className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>E-mail corporativo: *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Ex: carlos@empresa.com.br"
                          value={b2bData.email}
                          onChange={(e) => setB2bData({ ...b2bData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <Phone className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>Telefone para contato: *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ex: (11) 99999-9999"
                          value={b2bData.telefone}
                          onChange={(e) => setB2bData({ ...b2bData, telefone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <Building className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>Nome da Empresa: *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Tech Soluções LTDA"
                          value={b2bData.empresa}
                          onChange={(e) => setB2bData({ ...b2bData, empresa: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nº de ramais/funcionários:
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: 25"
                          value={b2bData.ramais}
                          onChange={(e) => setB2bData({ ...b2bData, ramais: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Gasto mensal atual (R$):
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: 2.800"
                          value={b2bData.gastoAtual}
                          onChange={(e) => setB2bData({ ...b2bData, gastoAtual: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* WhatsApp Toggle Question */}
                    <div className="pt-1">
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Já usa WhatsApp para vender/atender? *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          "Sim, usamos ativamente",
                          "Não, apenas ligação"
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setB2bData({ ...b2bData, usaWhatsapp: opt })}
                            className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                              b2bData.usaWhatsapp === opt
                                ? "bg-mundo-orange text-white border-mundo-orange shadow-md"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* ========================================================= */}
                {/* CAMPOS ÓRGÃO PÚBLICO (B2G)                                */}
                {/* ========================================================= */}
                {segment === "b2g" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <User className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>Nome do Responsável: *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Dra. Juliana Mendes"
                          value={b2gData.nome}
                          onChange={(e) => setB2gData({ ...b2gData, nome: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <Mail className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>E-mail institucional: *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Ex: contato@orgao.gov.br"
                          value={b2gData.email}
                          onChange={(e) => setB2gData({ ...b2gData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <Phone className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>Telefone / WhatsApp: *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ex: (61) 99999-9999"
                          value={b2gData.telefone}
                          onChange={(e) => setB2gData({ ...b2gData, telefone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                          <Building className="w-3.5 h-3.5 text-mundo-orange" />
                          <span>Nome do Órgão / Município: *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Prefeitura Municipal de..."
                          value={b2gData.orgao}
                          onChange={(e) => setB2gData({ ...b2gData, orgao: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nº estimado de ramais/DDR:
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: 50 a 100 ramais"
                          value={b2gData.ramais}
                          onChange={(e) => setB2gData({ ...b2gData, ramais: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Cargo / Secretaria:
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Sec. de Administração / TI"
                          value={b2gData.cargo}
                          onChange={(e) => setB2gData({ ...b2gData, cargo: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-mundo-orange focus:ring-1 focus:ring-mundo-orange text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Term of Reference Question */}
                    <div className="pt-1">
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Possui Termo de Referência pronto? *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          "Sim, temos termo pronto",
                          "Não, preciso de apoio técnico"
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setB2gData({ ...b2gData, temTermoReferencia: opt })}
                            className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                              b2gData.temTermoReferencia === opt
                                ? "bg-mundo-orange text-white border-mundo-orange shadow-md"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Honeypot */}
                <input
                  type="text"
                  value={segment === "b2b" ? b2bData.honeypot : b2gData.honeypot}
                  onChange={(e) => {
                    if (segment === "b2b") setB2bData({ ...b2bData, honeypot: e.target.value });
                    else setB2gData({ ...b2gData, honeypot: e.target.value });
                  }}
                  className="hidden"
                  tabIndex={-1}
                />

                {/* Submit Action */}
                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full py-4 text-sm sm:text-base font-display font-bold shadow-xl"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {isSubmitting
                      ? "Processando Solicitação..."
                      : segment === "b2b"
                      ? "Falar com especialista & Qualificar Linhas"
                      : "Solicitar Atendimento & Qualificar Linhas"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveSimulator;
