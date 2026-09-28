import { DetailedSolution } from "./solutions-catalog";

export const detailedGovernoSolutionsCatalog: Record<string, DetailedSolution> = {
  "pabx-governo-editais": {
    slug: "pabx-governo-editais",
    number: "01",
    badge: "EDITAIS & LEI 14.133 // MULTI-FABRICANTE & NUVEM",
    pillar: "Governo & Comunicação Pública",
    title: "PABX em Nuvem e Telefonia IP para Governo & Editais",
    shortTitle: "PABX Governo & Editais",
    headline: "Atendimento integral a especificações técnicas de editais públicos com múltiplos fabricantes homologados e plataforma própria de comunicação.",
    subtitle: "Grandstream, 3CX, Leucotron, Khomp e plataforma própria AIKOM — tecnologia flexível para atender a qualquer Termo de Referência (TR).",
    heroDescription: "A Mundo Telecom entende que cada órgão público possui particularidades e exigências estritas em seus termos de referência e processos licitatórios. Operamos com arquitetura multi-fabricante e multiplataforma: fornecemos e integramos desde centrais líderes de mercado (Grandstream, 3CX, Leucotron, Khomp) até nossa plataforma em nuvem proprietária AIKOM, garantindo total conformidade com editais e máxima economia para os cofres públicos.",
    heroImage: "/images/solucoes/pabx/hero.jpg",
    iconName: "Cloud",
    heroBullets: [
      "Arquitetura multi-fabricante: suporte a Grandstream, 3CX, Leucotron, Khomp, Asterisk e plataforma própria AIKOM",
      "Conformidade técnica estrita com Termos de Referência (TR) e editais sob a Nova Lei de Licitações (Lei 14.133/21)",
      "Interligação completa a custo zero de ligação entre secretarias, escolas, postos de saúde e polos administrativos",
      "Modelo OPEX (locação de serviço): fornecimento de aparelhos IP homologados pela ANATEL sem imobilização de capital",
      "Alta disponibilidade com SLA anual contratual, redundância geográfica e suporte especializado da engenharia"
    ],
    problemTitle: "Centrais Legadas, Peças Fora de Linha e Restrições de Editais",
    problemDescription: "Órgãos públicos frequentemente ficam reféns de centrais telefônicas físicas obsoletas, fiações antigas com alto custo de manutenção e fornecedores que não conseguem atender às marcas exigidas nos editais técnicos de licitação.",
    solutionTitle: "Flexibilidade Multi-Fabricante e Modernização em Nuvem",
    solutionDescription: "Entregamos a solução exata demandada pelo seu Termo de Referência: seja implementando centrais proprietárias homologadas (3CX, Grandstream, Leucotron) ou migrando para nossa plataforma virtual em nuvem, com ramais em computadores, telefones IP e celulares funcionais.",
    features: [
      {
        title: "Compatibilidade Multi-Fabricante Homologada",
        description: "Capacidade técnica comprovada para fornecer, configurar e manter centrais e gateways Grandstream, 3CX, Leucotron, Khomp e Sangoma, atendendo às marcas de referência de qualquer licitação.",
        tag: "FLEXIBILIDADE DE EDITAL",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      },
      {
        title: "Interligação de Unidades Administrativas",
        description: "Comunicação ramal a ramal gratuita e instantânea entre comarcas, secretarias municipais, escolas e unidades de saúde em todo o território governamental.",
        tag: "ECONOMIA PÚBLICA",
        image: "/images/solucoes/pabx/feature-softphone.jpg"
      },
      {
        title: "URA Cognitiva para Cidadãos & Ouvidorias",
        description: "Unidade de Resposta Audível inteligente com triagem por setor, direcionamento imediato para secretarias e redução de filas de espera no atendimento ao público.",
        tag: "ATENDIMENTO AO CIDADÃO",
        image: "/images/solucoes/pabx/feature-callback.jpg"
      },
      {
        title: "Gravação e Guarda Criptografada de Áudio",
        description: "Armazenamento seguro de 100% das chamadas com trilha de auditoria para atendimento a determinações judiciais, LGPD e prestação de contas aos Tribunais de Contas.",
        tag: "SEGURANÇA & AUDITORIA",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Relatórios de Bilhetagem e Consumo por Secretaria",
        description: "Painel web de gestão com detalhamento de consumo, tráfego e utilização por centro de custo, garantindo total transparência no controle orçamentário.",
        tag: "TRANSPARÊNCIA ORÇAMENTÁRIA",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      },
      {
        title: "Aparelhos IP & Gateways em Modelo de Serviço",
        description: "Fornecimento de telefones IP corporativos, headsets ergonômicos e ATAs com manutenção e substituição preventiva inclusas no contrato, sem necessidade de aquisição patrimonial.",
        tag: "ZERO IMOBILIZAÇÃO",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      }
    ],
    differentials: [
      {
        title: "Multi-Fabricante e Multi-Plataforma sem Bloqueio de Marca",
        description: "Atendemos o que o edital exige: se o Termo de Referência especificar 3CX, entregamos 3CX; se especificar Grandstream ou Leucotron, entregamos hardware e licenças oficiais com atestados técnicos."
      },
      {
        title: "Mais Alta Taxa de Disponibilidade Contínua (SLA Anual)",
        description: "Acordo de nível de serviço com base anual protegendo o órgão contra instabilidades e respaldado por monitoramento proativo em regime 24/7/365."
      },
      {
        title: "Atestados Sólidos no Setor Público",
        description: "Histórico comprovado em contratações de grande escala, como a Defensoria Pública de Minas Gerais (+3.000 ramais) e o Ministério Público de Minas Gerais (4.306 ramais)."
      }
    ],
    stats: [
      { value: "+3.000", label: "Ramais na DPMG", description: "Plataformas de comunicação em nuvem com 300 links dedicados em todo o estado de MG" },
      { value: "SLA Anual", label: "Alta Disponibilidade", description: "Proteção contratual com mensuração anual sem riscos de descontinuidade" },
      { value: "100%", label: "Adequação à Lei 14.133", description: "Conformidade documental integral para licitações e dispensas legais" }
    ],
    comparison: [
      { feature: "Atendimento a Editais", mundo: "Multi-fabricante (Grandstream, 3CX, Leucotron, Khomp e Aikom)", traditional: "Engessamento em uma única marca própria que gera impugnação" },
      { feature: "Infraestrutura", mundo: "Nuvem com redundância geográfica e suporte NOC 24/7 próprio", traditional: "Servidores físicos locais obsoletos sem peças de reposição" },
      { feature: "Modelo de Contratação", mundo: "Serviço continuado (OPEX) com aparelhos IP e manutenção inclusos", traditional: "Compra onerosa de equipamentos (CAPEX) com depreciação rápida" },
      { feature: "Bilhetagem Técnica", mundo: "Painel transparente em tempo real por secretaria e centro de custo", traditional: "Planilhas manuais e faturas confusas sem detalhamento auditável" }
    ],
    faqs: [
      {
        question: "Como a Mundo Telecom atende a editais que exigem marcas específicas como Grandstream, 3CX ou Leucotron?",
        answer: "Possuímos parceria e certificação técnica com os principais fabricantes mundiais de telecomunicações (Grandstream, 3CX, Leucotron, Khomp, Fanvil). Fornecemos os equipamentos homologados com documentação oficial do fabricante, atestados de capacidade e garantia integral em estrita conformidade com o edital."
      },
      {
        question: "Qual a base de cálculo do SLA para evitar riscos de glosas e multas contratuais?",
        answer: "Nossos acordos de nível de serviço (SLA) são contratualmente orientados pela base anual de apuração, alinhados com as melhores práticas da ANATEL e do mercado de telecomunicações, garantindo máxima disponibilidade contínua com previsibilidade jurídica tanto para o órgão quanto para a prestadora."
      },
      {
        question: "É possível migrar sem perder os números telefônicos já conhecidos pela população?",
        answer: "Sim. Como operadora com outorga direta da ANATEL, realizamos a portabilidade numérica oficial mantendo todos os números e faixas DDR das secretarias sem qualquer segundo de interrupção no atendimento ao público."
      }
    ],
    cases: [
      {
        client: "DPMG — Defensoria Pública de Minas Gerais",
        segment: "Órgão Governamental Estadual",
        highlight: "+3.000 ramais em nuvem, 140 plataformas e 300 links dedicados",
        summary: "Modernização completa da infraestrutura de comunicação da DPMG, conectando todas as comarcas do estado com telefonia em nuvem, URA de atendimento e suporte NOC 24/7.",
        logo: "/images/clientes-governamentais/dpmg_logo_1x.webp"
      },
      {
        client: "Prefeitura de Betim",
        segment: "Administração Pública Municipal",
        highlight: "Integração telefônica de secretarias e postos de atendimento ao cidadão",
        summary: "Eliminação de custos com ligações entre prédios públicos municipais e implantação de URA unificada de atendimento ao cidadão.",
        logo: "/images/clientes-governamentais/prefeitura_de_betim_logo_1x.webp"
      }
    ],
    cta: {
      primaryText: "Solicitar Proposta para Edital / TR",
      primaryHref: "#contato",
      secondaryText: "Falar com Consultor B2G",
      secondaryHref: "https://wa.me/553120112000"
    }
  },

  "noc-governo-monitoramento": {
    slug: "noc-governo-monitoramento",
    number: "02",
    badge: "CENTRO DE OPERAÇÕES DE REDE // SLA ANUAL GARANTIDO",
    pillar: "Governo & Continuidade Operacional",
    title: "NOC 24×7 & Monitoramento Contínuo para Órgãos Públicos",
    shortTitle: "NOC 24×7 Governo",
    headline: "Supervisão técnica ininterrupta de troncos, circuitos e canais essenciais com histórico comprovado em prefeituras, defensorias e ministérios públicos.",
    subtitle: "Painéis robustos de monitoramento, equipe de engenharia própria e prevenção proativa contra quedas em serviços críticos ao cidadão.",
    heroDescription: "Comunicação pública não pode parar. O Centro de Operações de Rede (NOC) da Mundo Telecom atua em regime 24/7/365 vigiando parâmetros críticos — latência, jitter, perda de pacotes, disponibilidade de troncos SIP/E1 e rotas de voz. Com cases sólidos de operação em órgãos de grande porte como Defensoria Pública de Minas Gerais (+3.000 ramais), MPMG (4.306 ramais) e prefeituras, nossa engenharia antecipa falhas e assegura atendimento ininterrupto à população.",
    heroImage: "/images/solucoes/pabx/feature-wallboard.jpg",
    iconName: "Activity",
    heroBullets: [
      "Centro de Operações de Rede (NOC) 24/7/365 próprio com equipe sênior de engenharia de telecomunicações",
      "Monitoramento proativo de latência, jitter, perda de pacotes e troncos digitais com alertas automatizados",
      "Painéis executivos e técnicos em tempo real para acompanhamento da saúde dos circuitos de secretarias e comarcas",
      "Mais alta taxa de disponibilidade contínua respaldada por Acordo de Nível de Serviço (SLA) com apuração anual",
      "Histórico comprovado em órgãos públicos de alta criticidade (DPMG, MPMG, DER-DF e Prefeituras)"
    ],
    problemTitle: "Canais de Atendimento Fora do Ar e Respostas Reativas",
    problemDescription: "Gestores públicos descobrindo que linhas de emergência, ouvidorias ou secretarias estão incomunicáveis apenas após reclamações da população ou matérias na imprensa, sem visibilidade técnica em tempo real.",
    solutionTitle: "Vigilância Técnica Contínua e Ação Preventiva Imediata",
    solutionDescription: "O NOC da Mundo Telecom monitora cada enlace, tronco e servidor segundo a segundo. Identificamos e mitigamos degradações de rota antes que qualquer usuário ou cidadão seja impactado.",
    features: [
      {
        title: "Painéis de Monitoria em Tempo Real (Wallboards)",
        description: "Telas de monitoramento gráfico dedicadas para visualização de tráfego, volume de chamadas simultâneas, status de ramais e saúde dos troncos de cada secretaria.",
        tag: "VISIBILIDADE TOTAL",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      },
      {
        title: "Engenharia Preventiva 24/7/365",
        description: "Engenheiros de rede atuando em regime contínuo, analisando variações de jitter e latência para acionar rotas redundantes de contingência em milissegundos.",
        tag: "AÇÃO PROATIVA",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      },
      {
        title: "Monitoramento Específico de Serviços Essenciais",
        description: "Configuração de prioridade máxima de vigilância para canais de atendimento crítico: Samu, Defesa Civil, Guarda Municipal, Ouvidorias e Centrais de Agendamento de Saúde.",
        tag: "SERVIÇOS ESSENCIAIS",
        image: "/images/solucoes/pabx/feature-callback.jpg"
      },
      {
        title: "Relatórios Técnicos Auditáveis para Prestação de Contas",
        description: "Emissão de relatórios periódicos de disponibilidade, volumetria e cumprimento de metas de SLA para anexação aos processos de pagamento e fiscalização do contrato.",
        tag: "AUDITORIA TÉCNICA",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      },
      {
        title: "Protocolo Rápido de Resolução de Incidentes",
        description: "Matriz clara de escalonamento com tempos de resposta imediatos para incidentes de alta prioridade, garantindo a pronta recuperação de rotas.",
        tag: "RESPOSTA RÁPIDA",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Redundância Automática de Circuitos de Voz",
        description: "Comutação instantânea para rotas alternativas de contingência caso ocorra rompimento físico de fibra ou falha de conexão na ponta do cliente.",
        tag: "ALTA DISPONIBILIDADE",
        image: "/images/solucoes/pabx/feature-softphone.jpg"
      }
    ],
    differentials: [
      {
        title: "Experiência Real com Redes Governamentais Complexas",
        description: "Operamos diariamente a infraestrutura de telecomunicações de órgãos que exigem disponibilidade ininterrupta, incluindo mais de 7.300 ramais operados simultaneamente entre DPMG e MPMG."
      },
      {
        title: "Equipe Técnica Própria com Certificação ANATEL",
        description: "Sem terceirização de NOC. Nossa equipe interna de engenharia responde diretamente pelos chamados e mantém contato proativo com os fiscais de contrato do órgão."
      },
      {
        title: "SLA Anual sem Riscos de Distorções Mensais",
        description: "Padrão de governança técnica que utiliza bases anuais para aferição de disponibilidade, conferindo estabilidade orçamentária e jurídica para a administração pública."
      }
    ],
    stats: [
      { value: "24/7/365", label: "Monitoramento Ininterrupto", description: "Centro de Operações ativo todos os dias do ano, incluindo feriados" },
      { value: "+7.300", label: "Ramais Supervisionados", description: "Volume somado de ramais críticos governamentais sob operação ativa" },
      { value: "SLA Anual", label: "Garantia em Contrato", description: "Alta taxa de disponibilidade com indicadores técnicos auditáveis" }
    ],
    comparison: [
      { feature: "Vigilância de Rede", mundo: "Monitoramento proativo 24/7 com intervenção antes do impacto no cidadão", traditional: "Suporte reativo acionado apenas quando a linha já caiu" },
      { feature: "Equipe de Suporte", mundo: "Engenheiros de rede próprios da Mundo Telecom com acesso direto", traditional: "Call centers terceirizados que abrem tickets com prazo de 48h a 72h" },
      { feature: "Painéis de Acompanhamento", mundo: "Gráficos transparentes em tempo real para os gestores do órgão", traditional: "Caixa-preta sem relatórios claros de causa raiz e disponibilidade" },
      { feature: "Histórico Público", mundo: "Cases em órgãos estaduais e prefeituras com atestados válidos", traditional: "Empresas sem experiência na complexidade e escala do setor público" }
    ],
    faqs: [
      {
        question: "Como o fiscal do contrato governamental acompanha a disponibilidade da rede?",
        answer: "Disponibilizamos acesso aos dashboards do NOC com métricas em tempo real, além de emitir relatórios técnicos mensais auditáveis que consolidam o uptime, o volume de chamadas e o histórico de eventuais intervenções, servindo como base documental para o ateste da nota fiscal."
      },
      {
        question: "O que acontece se houver rompimento de fibra óptica na cidade do órgão?",
        answer: "Nossa infraestrutura opera com redundância de rotas. O NOC identifica a queda em milissegundos e direciona o tráfego de voz e dados para circuitos de contingência ou rotas de backup automaticamente, mantendo as comunicações essenciais ativas enquanto a equipe de campo realiza o reparo físico."
      },
      {
        question: "O NOC da Mundo Telecom cobre feriados, fins de semana e madrugadas?",
        answer: "Sim. O Centro de Operações funciona ininterruptamente em regime 24/7/365, com engenheiros de plantão contínuo, vigiando as conexões e atendendo aos chamados de emergência do setor público a qualquer hora."
      }
    ],
    cases: [
      {
        client: "MPMG — Ministério Público de MG",
        segment: "Órgão Governamental Estadual",
        highlight: "Supervisão de 4.306 ramais e +80 mil chamadas/mês",
        summary: "Monitoramento contínuo de 10 SBCs e dezenas de comarcas estaduais, garantindo a estabilidade das comunicações ministeriais em todo o território mineiro.",
        logo: "/images/fotos-cases/mpmg.png"
      },
      {
        client: "DPMG — Defensoria Pública de MG",
        segment: "Órgão Governamental Estadual",
        highlight: "Supervisão de 300 links dedicados e +3.000 ramais em nuvem",
        summary: "Centro de monitoramento dedicado com painéis em tempo real e resposta ágil para suporte aos atendimentos jurídicos da defensoria.",
        logo: "/images/clientes-governamentais/dpmg_logo_1x.webp"
      }
    ],
    cta: {
      primaryText: "Solicitar Proposta de Monitoramento NOC",
      primaryHref: "#contato",
      secondaryText: "Falar com Engenharia B2G",
      secondaryHref: "https://wa.me/553120112000"
    }
  }
};

export const governoSlugAliases: Record<string, string> = {
  "pabx-governo": "pabx-governo-editais",
  "pabx-em-nuvem-governo": "pabx-governo-editais",
  "pabx-editais": "pabx-governo-editais",
  "noc-monitoramento": "noc-governo-monitoramento",
  "noc-monitoramento-governo": "noc-governo-monitoramento",
  "noc-governo": "noc-governo-monitoramento"
};
