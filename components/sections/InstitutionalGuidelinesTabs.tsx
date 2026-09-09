'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'missao' | 'visao' | 'valores';

interface TabItem {
  id: TabType;
  label: string;
}

export const InstitutionalGuidelinesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('missao');

  const tabs: TabItem[] = [
    { id: 'missao', label: 'Nossa Missão' },
    { id: 'visao', label: 'Nossa Visão' },
    { id: 'valores', label: 'Nossos Valores' },
  ];

  const valuesList = [
    {
      number: '01',
      title: 'Confiabilidade',
      description: 'Estabilidade da infraestrutura própria, 99,95% de disponibilidade garantida em SLA e conformidade regulatória plena.',
    },
    {
      number: '02',
      title: 'Transparência',
      description: 'Previsibilidade orçamentária real, contratos claros sem tarifas ocultas e dados de bilhetagem auditáveis.',
    },
    {
      number: '03',
      title: 'Customer Success',
      description: 'Não vendemos e abandonamos. Assumimos a responsabilidade pela operação e acompanhamos o cliente até o resultado.',
    },
    {
      number: '04',
      title: 'Inovação & IA',
      description: 'Inteligência Artificial aplicada ao atendimento em produção: URA de IA, rechamada automática e WhatsApp inteligente.',
    },
    {
      number: '05',
      title: 'Transformação Digital',
      description: 'Conduzimos empresas e governos da telefonia tradicional e legada para a era digital com mobilidade e controle total.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80 text-mundo-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono font-bold tracking-widest text-mundo-orange uppercase">
            DIRETRIZES INSTITUCIONAIS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-mundo-navy tracking-tight">
            Os pilares que sustentam cada conexão e decisão
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Conheça o propósito, a perspectiva estratégica e os valores que orientam a Mundo Telecom como empresa de tecnologia com infraestrutura e solução própria.
          </p>
        </div>

        {/* Barra de Navegação das 3 Abas (Minimalista e sem ícones/badges) */}
        <div className="flex justify-center">
          <div 
            role="tablist" 
            aria-label="Diretrizes Institucionais"
            className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm gap-1 sm:gap-2"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 sm:px-7 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-mundo-navy shadow-sm border border-slate-200/80 bg-slate-50'
                      : 'text-slate-500 hover:text-mundo-navy hover:bg-slate-50/50'
                  }`}
                >
                  {/* Fundo ativo animado */}
                  {isActive && (
                    <motion.div
                      layoutId="active-guideline-tab"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200/90 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Conteúdo Dinâmico da Aba Ativa */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'missao' && (
              <motion.div
                key="tab-panel-missao"
                id="panel-missao"
                role="tabpanel"
                aria-labelledby="tab-missao"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  {/* Coluna Esquerda: Headline de Missão */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
                      Missão
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-mundo-navy leading-tight">
                      Transformar a comunicação de empresas e órgãos públicos com telefonia inteligente, IA e infraestrutura própria.
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">
                      Ajudar organizações a atender, vender e operar melhor, eliminando falhas de comunicação com inteligência e previsibilidade.
                    </p>
                  </div>

                  {/* Coluna Direita: Descrição e Pilares */}
                  <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-slate-100 lg:pl-12">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Transformamos a telefonia tradicional em uma operação de alta tecnologia: PABX na nuvem com URA de IA, rechamada automática exclusiva de ligações perdidas, WhatsApp oficial integrado e custos 100% previsíveis com compromisso de Customer Success.
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          Rechamada Automática Exclusiva
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          Nenhuma chamada perdida: se a linha estiver ocupada ou fora de horário, o sistema retorna automaticamente ao cliente.
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          IA Aplicada ao Atendimento 24h
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          Inteligência artificial ativa triando dúvidas e acelerando respostas no WhatsApp oficial e na voz.
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          Compromisso de Customer Success
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          Acompanhamento consultivo contínuo e engenharia dedicada com NOC 24/7 para garantir o resultado final.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'visao' && (
              <motion.div
                key="tab-panel-visao"
                id="panel-visao"
                role="tabpanel"
                aria-labelledby="tab-visao"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  {/* Coluna Esquerda: Headline de Visão */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
                      Visão
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-mundo-navy leading-tight">
                      Ser a empresa de tecnologia referência nacional em comunicações inteligentes e infraestrutura própria.
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">
                      Liderar a evolução digital da telefonia corporativa e governamental no Brasil com inovação contínua e foco em customer success.
                    </p>
                  </div>

                  {/* Coluna Direita: Descrição e Pilares */}
                  <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-slate-100 lg:pl-12">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Nossa visão é ser a escolha definitiva para organizações que buscam mais confiabilidade, previsibilidade e controle sobre sua comunicação. Ocupamos o espaço entre as grandes operadoras engessadas e os fornecedores que apenas revendem tecnologia, assumindo a responsabilidade integral da operação.
                    </p>

                    <div className="space-y-4 pt-2">
                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          Disponibilidade com SLA de 99.98%
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          Infraestrutura redundante em datacenters Tier e rotas de tráfego com tolerância a falhas.
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          Evolução Tecnológica Integrada
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          PABX Cloud conectado nativamente a agentes de IA, WhatsApp multiatendimento e CRM.
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-sm font-display font-bold text-mundo-navy">
                          Segurança Regulatória & Lei 14.133
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          Atendimento a padrões exigidos pelo setor público e grandes corporações privadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'valores' && (
              <motion.div
                key="tab-panel-valores"
                id="panel-valores"
                role="tabpanel"
                aria-labelledby="tab-valores"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-10"
              >
                <div className="max-w-2xl">
                  <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
                    Valores
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-mundo-navy mt-2">
                    Cinco compromissos inegociáveis
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Princípios fundamentais que regem cada chamada, contrato e atendimento desde 2005.
                  </p>
                </div>

                {/* Grid dos 5 Valores minimalista e sem poluição */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                  {valuesList.map((val) => (
                    <div
                      key={val.number}
                      className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all duration-200 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <span className="font-mono font-bold text-xs text-mundo-orange">
                          {val.number}
                        </span>

                        <h4 className="text-base font-display font-bold text-mundo-navy">
                          {val.title}
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalGuidelinesTabs;
