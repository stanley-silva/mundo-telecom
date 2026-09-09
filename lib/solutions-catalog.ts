export interface DetailedSolution {
  slug: string;
  number: string;
  badge: string;
  pillar: string;
  title: string;
  shortTitle: string;
  headline: string;
  subtitle: string;
  heroDescription: string;
  heroImage?: string;
  iconName: string;
  accentColor?: string;
  
  // Bullets in Hero
  heroBullets: string[];
  
  // Pain vs Solution
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  
  // Key Features / Architecture
  features: {
    title: string;
    description: string;
    tag?: string;
    image?: string;
  }[];
  
  // Technical Differentials
  differentials: {
    title: string;
    description: string;
  }[];
  
  // Metrics / Stats
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  
  // Comparison vs Traditional Market
  comparison: {
    feature: string;
    mundo: string;
    traditional: string;
  }[];
  
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Related Cases
  cases: {
    client: string;
    segment: string;
    highlight: string;
    summary: string;
    logo?: string;
  }[];
  
  cta: {
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
}

export const detailedSolutionsCatalog: Record<string, DetailedSolution> = {
  "omnichannel-ia-aikon": {
    slug: "omnichannel-ia-aikon",
    number: "01",
    badge: "PLATAFORMA PRÓPRIA AIKON // ATENDIMENTO INTELIGENTE",
    pillar: "Atendimento & IA",
    title: "Omnichannel & IA (Plataforma AIkon)",
    shortTitle: "AIkon Omnichannel & IA",
    headline: "Centralize todos os canais de atendimento da sua empresa em uma única tela inteligente desenvolvida pela Mundo Telecom.",
    subtitle: "Plataforma proprietária AIkon, múltiplos atendentes em 1 número e triagem com inteligência artificial.",
    heroDescription: "Desenvolvemos a AIkon: nossa plataforma própria de Omnichannel e IA. Voz, WhatsApp oficial, redes sociais e e-mail integrados em uma só tela para sua equipe, com múltiplos atendentes no mesmo número, triagem automática com processamento de linguagem natural (NLP) e visão 360º do histórico do cliente.",
    heroImage: "/images/solucoes/aikon/hero.jpg",
    iconName: "MessageSquareText",
    heroBullets: [
      "Plataforma própria AIkon com autonomia total e evolução contínua sem intermediários",
      "Voz, WhatsApp Oficial, Instagram, Messenger e E-mail integrados em uma única tela",
      "Múltiplos atendentes conversando ao mesmo tempo no mesmo número corporativo oficial",
      "Triagem inteligente com Chatbots NLP reduzindo até 40% do volume manual repetitivo",
      "Linha do tempo única: histórico do cliente preservado na transição de voz para mensagem"
    ],
    problemTitle: "O Caos do Atendimento Descentralizado e Lento",
    problemDescription: "Clientes esperando horas por retorno, atendentes usando celulares pessoais sem controle da empresa, dados dispersos e perda constante de histórico de conversas entre setores.",
    solutionTitle: "Centralização Inteligente e Visão 360° do Cliente",
    solutionDescription: "A plataforma AIkon unifica todos os pontos de contato da sua empresa em uma interface web intuitiva, distribuindo conversas por departamento, com IA respondendo 24/7 e supervisão em tempo real.",
    features: [
      {
        title: "Painel Unificado Omnichannel",
        description: "Voz, WhatsApp Oficial, Instagram Direct, Facebook Messenger, Webchat e E-mail operando em uma fila sincronizada com distribuição automática de contatos (DAC).",
        tag: "MULTI-CANAL",
        image: "/images/solucoes/aikon/feature-unified.jpg"
      },
      {
        title: "Triagem Inteligente com Chatbots NLP",
        description: "Compreensão de linguagem natural para qualificar solicitações, responder dúvidas recorrentes, enviar boletos e encaminhar ao atendente certo.",
        tag: "IA CONVERSACIONAL",
        image: "/images/solucoes/aikon/feature-nlp.jpg"
      },
      {
        title: "Múltiplos Operadores em 1 Número",
        description: "Toda a sua equipe comercial e de suporte atende através do mesmo número oficial verificado da empresa, sem necessidade de múltiplos chips.",
        tag: "WHATSAPP OFICIAL",
        image: "/images/solucoes/aikon/feature-team.jpg"
      },
      {
        title: "Linha do Tempo 360° do Cliente",
        description: "Se o cliente ligar e depois mandar mensagem, todo o contexto é preservado na mesma timeline, eliminando a frustração de repetir informações.",
        tag: "HISTÓRICO INTEGRADO",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      },
      {
        title: "Dashboards e SLA em Tempo Real",
        description: "Monitore Tempo Médio de Atendimento (TMA), Tempo Médio de Espera (TME), CSAT, NPS e taxa de resolução em primeira chamada (FCR).",
        tag: "GESTÃO DE PERFORMANCE",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      },
      {
        title: "Integração via API com CRMs e ERPs",
        description: "Conectores prontos para Salesforce, HubSpot, RD Station, PipeRun, TOTVS e sistemas proprietários via API REST segura.",
        tag: "INTEGRAÇÃO NATIVA",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      }
    ],
    differentials: [
      {
        title: "Plataforma 100% Proprietária",
        description: "Desenvolvimento nacional próprio da Mundo Telecom, permitindo customizações ágeis e evolução constante sem repasse de licenças internacionais em dólar."
      },
      {
        title: "Conexão Nativa com PABX e STFC",
        description: "Integração direta com nossa operadora de telefonia própria: o atendente atende chamadas de voz e mensagens de WhatsApp no mesmo fone de ouvido."
      },
      {
        title: "Segurança e Conformidade LGPD",
        description: "Mascaramento automático de dados sensíveis (CPF, cartões), cofre de logs imutáveis e consentimento em conformidade integral com a LGPD."
      }
    ],
    stats: [
      { value: "40%", label: "Redução de Carga Manual", description: "Com triagem e autoatendimento inteligente por IA" },
      { value: "3x", label: "Velocidade de Resposta", description: "Fila unificada e distribuição instantânea por especialidade" },
      { value: "100%", label: "Histórico Centralizado", description: "Zero perda de conversas ou contatos em celulares pessoais" }
    ],
    comparison: [
      { feature: "Infraestrutura", mundo: "Plataforma própria AIkon + Operadora STFC integrada", traditional: "Sistemas dispersos que dependem de vários integradores" },
      { feature: "Atendimento no WhatsApp", mundo: "API Oficial Meta com múltiplos atendentes e selo de verificação", traditional: "Aparelhos físicos ou soluções não oficiais com risco de banimento" },
      { feature: "Transição Voz / Chat", mundo: "Linha do tempo unificada com gravação de áudio e texto", traditional: "Voz isolada em uma central física e WhatsApp solto em celulares" },
      { feature: "Suporte e Evolução", mundo: "Engenharia direta da Mundo Telecom com Customer Success", traditional: "Suporte terceirizado e abertura de chamados demorados" }
    ],
    faqs: [
      {
        question: "Minha equipe precisa trocar de número para usar o WhatsApp na AIkon?",
        answer: "Não. Realizamos a migração do seu número fixo ou 0800 atual diretamente para a API Oficial do WhatsApp sem nenhuma perda de contato ou interrupção de serviço."
      },
      {
        question: "A AIkon exige instalação de servidores na minha empresa?",
        answer: "Não. A AIkon opera 100% em nuvem de alta disponibilidade. Seus colaboradores acessam pelo navegador ou aplicativo seguro em qualquer computador ou notebook com internet."
      },
      {
        question: "Como funciona a triagem com inteligência artificial?",
        answer: "A IA processa a mensagem inicial do cliente, identifica a intenção (ex: financeiro, suporte, vendas), responde automaticamente perguntas frequentes configuradas e encaminha com o resumo para a fila do setor responsável."
      }
    ],
    cases: [
      {
        client: "Grupo Via (10+ Unidades)",
        segment: "Varejo & Serviços Automotivos",
        highlight: "Centralização de atendimento multicanal em mais de 10 concessionárias",
        summary: "Unificação de múltiplos canais de WhatsApp e voz em painel único, reduzindo em 65% o tempo de resposta aos clientes.",
        logo: "/images/fotos-cases/grupo-via.png"
      }
    ],
    cta: {
      primaryText: "Solicitar Demonstração da AIkon",
      primaryHref: "/contato?solucao=aikon-omnichannel",
      secondaryText: "Falar com Especialista",
      secondaryHref: "/contato"
    }
  },

  "telefonia-corporativa-stfc": {
    slug: "telefonia-corporativa-stfc",
    number: "02",
    badge: "OPERADORA OFICIAL ANATEL // VOZ IP CORPORATIVA",
    pillar: "Voz & Conectividade",
    title: "Telefonia Corporativa (Voz IP & STFC)",
    shortTitle: "Telefonia Voz IP & STFC",
    headline: "Operadora oficial STFC com outorga direta ANATEL, áudio HD, portabilidade sem downtime e protocolo anti-fraude STIR/SHAKEN.",
    subtitle: "Rotas oficiais STFC, portabilidade sem downtime e protocolo STIR/SHAKEN.",
    heroDescription: "Somos operadora STFC licenciada pela ANATEL há mais de 20 anos. Garantimos rotas de voz corporativas de alta densidade, numeração própria, protocolo anti-fraude STIR/SHAKEN para aumentar sua taxa de atendimento (Answer Rate) e evitar marcação como SPAM, e planos sob medida com bilhetagem segundo a segundo.",
    heroImage: "/images/b2b-corporate.jpg",
    iconName: "PhoneCall",
    heroBullets: [
      "Conexão STFC oficial licenciada pela ANATEL com segurança regulatória e numeração DDR",
      "Protocolo STIR/SHAKEN: autenticação de chamadas ativas para evitar marcação como SPAM",
      "Qualidade de voz HD cristalina com QoS (Quality of Service) no backbone próprio",
      "Portabilidade numérica assistida com zero downtime (sem interrupção na migração)",
      "Tronco SIP (SIP Trunking) de alta capacidade compatível com qualquer PABX do mercado"
    ],
    problemTitle: "Chamadas Não Atendidas por Bloqueio de SPAM e Custos Ocultos",
    problemDescription: "Empresas sofrendo com quedas nas taxas de atendimento por números marcados como spam, contratos com minutagens confusas, áudio com chiado e operadoras que cobram valores abusivos em faturas.",
    solutionTitle: "Telefonia Oficial com STIR/SHAKEN e Áudio HD Cristalino",
    solutionDescription: "Entregamos troncos SIP diretos com chancela oficial da ANATEL, protocolo de autenticação de chamadas STIR/SHAKEN para garantir atendimento e bilhetagem 100% transparente em tempo real.",
    features: [
      {
        title: "SIP Trunking de Alta Capacidade",
        description: "Interligação direta com a nuvem ou centrais locais (Asterisk, FreePBX, Avaya, Cisco, Leucotron) com escalabilidade instantânea de canais simultâneos.",
        tag: "CONECTIVIDADE SIP",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      },
      {
        title: "Protocolo Anti-SPAM STIR/SHAKEN",
        description: "Certificação criptográfica que garante que suas chamadas ativas apareçam identificadas e confiáveis nos smartphones dos clientes, triplicando a taxa de resposta.",
        tag: "AUTENTICAÇÃO DE CHAMADA",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Numeração DDR e 0800 / 400X Nacional",
        description: "Blocos de números diretos ramal a ramal (DDR) em todas as principais capitais e DDDs do país, com opções de números nacionais 0800 e 4004.",
        tag: "COBERTURA NACIONAL",
        image: "/images/solucoes/pabx/feature-callback.jpg"
      },
      {
        title: "Qualidade de Voz HD com QoS Garantido",
        description: "Codecs modernos de áudio (G.711, G.729, Opus) com priorização de pacotes de voz no nível do backbone, eliminando eco, ruídos e picotamento.",
        tag: "ÁUDIO HD",
        image: "/images/solucoes/pabx/feature-softphone.jpg"
      },
      {
        title: "Portabilidade Numérica sem Interrupção",
        description: "Processo assistido por engenharia de telecom: mantemos suas linhas atuais funcionando até o momento exato da virada técnica sem nenhum segundo fora do ar.",
        tag: "PORTABILIDADE SEGURA",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      },
      {
        title: "Extrato Detalhado Segundo a Segundo",
        description: "Portal do cliente com acompanhamento em tempo real de chamadas, duração, custos por ramal e centro de custo, sem tarifas surpresas.",
        tag: "FATURAMENTO TRANSPARENTE",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      }
    ],
    differentials: [
      {
        title: "Outorga Própria ANATEL sem Intermediários",
        description: "A Mundo Telecom é detentora de outorga STFC e SCM emitida pela ANATEL. Você contrata diretamente com a fonte geradora, garantindo segurança jurídica plena."
      },
      {
        title: "Conformidade Total com a Lei 14.133/2021",
        description: "Totalmente habilitada para contratações públicas federais, estaduais e municipais, dispensando arranjos indiretos ou sublocações de licença."
      },
      {
        title: "Infraestrutura com Redundância Geográfica",
        description: "Switches e Softswitches classe 4/5 operando em múltiplos datacenters Tier III no Brasil com failover automático."
      }
    ],
    stats: [
      { value: "+20 Anos", label: "Experiência de Mercado", description: "Pioneirismo em infraestrutura própria de voz sobre IP e STFC" },
      { value: "99.95%", label: "Disponibilidade SLA", description: "Alta resiliência contratual assegurada por NOC 24x7" },
      { value: "0 Segundos", label: "Downtime em Portabilidade", description: "Transição planejada e homologada sem perda de clientes" }
    ],
    comparison: [
      { feature: "Tipo de Contratação", mundo: "Contratação direta com detentora de outorga ANATEL", traditional: "Revendas de terceiros sem licença própria" },
      { feature: "Identificação Anti-Spam", mundo: "Protocolo STIR/SHAKEN com certificação oficial", traditional: "Números descartáveis frequentemente bloqueados por apps de SPAM" },
      { feature: "Transparência de Tarifação", mundo: "Bilhetagem segundo a segundo sem tarifas de assinatura ocultas", traditional: "Pacotes engessados com minutos perdidos e cobranças confusas" },
      { feature: "Atendimento Técnico", mundo: "Engenheiros especializados de telecom disponíveis 24/7", traditional: "Atendimento por bots de operadoras legadas com prazos de 72h" }
    ],
    faqs: [
      {
        question: "Posso manter os números de telefone fixo que minha empresa já usa há anos?",
        answer: "Sim! Fazemos a portabilidade numérica oficial junto à ANATEL de todos os seus números atuais (locais, 0800 ou DDR), sem qualquer interrupção de serviço durante o processo."
      },
      {
        question: "A telefonia da Mundo Telecom funciona com meu PABX atual?",
        answer: "Sim. Nossos troncos SIP são 100% aderentes aos padrões RFC e compatíveis com centrais Asterisk, FreePBX, Elastix, Avaya, Cisco, Leucotron, Intelbras, Panasonic e Grandstream."
      },
      {
        question: "O que é o protocolo STIR/SHAKEN e por que ele é crucial?",
        answer: "É o padrão regulatório e técnico que autentica a origem da sua ligação, provando para os smartphones e operadoras que sua chamada é legítima e não fraude/spam, elevando substancialmente a taxa de atendimento."
      }
    ],
    cases: [
      {
        client: "MPMG — Ministério Público de MG",
        segment: "Órgão Público Estadual",
        highlight: "4.306 ramais operados e 80 mil+ chamadas/mês",
        summary: "Infraestrutura robusta de telefonia IP e troncos de alta densidade interligando comarcas em todo o estado de Minas Gerais.",
        logo: "/images/fotos-cases/mpmg.png"
      }
    ],
    cta: {
      primaryText: "Consultar Telefonia STFC",
      primaryHref: "/contato?solucao=telefonia-stfc",
      secondaryText: "Falar com Consultor B2B",
      secondaryHref: "/contato"
    }
  },

  "pabx-virtual-cloud": {
    slug: "pabx-virtual-cloud",
    number: "03",
    badge: "COMUNICAÇÃO UNIFICADA // NUVEM & IA",
    pillar: "Voz & Nuvem",
    title: "PABX na Nuvem",
    shortTitle: "PABX Virtual Cloud",
    headline: "Central telefônica em nuvem com URA inteligente, ramais remotos em qualquer dispositivo e rechamada automática exclusiva.",
    subtitle: "URA inteligente, ramais virtuais, áudio HD e rechamada automática.",
    heroDescription: "Elimine custos com centrais físicas obsoletas. O PABX na Nuvem da Mundo Telecom interliga matriz, filiais e home office a custo zero de comunicação interna, com URA multinível humanizada, rechamada automática para não perder nenhum cliente em picos de ligação e cofre de gravações em nuvem para segurança jurídica.",
    heroImage: "/images/solucoes/pabx/hero.jpg",
    iconName: "Cloud",
    heroBullets: [
      "Rechamada automática exclusiva: se a fila estiver cheia, o sistema agenda e retorna automaticamente",
      "Ramais virtuais em computadores, smartphones ou telefones IP com chamadas internas gratuitas",
      "URA multinível dinâmica com menus objetivos e direcionamento ágil dos clientes",
      "Cofre de gravações em nuvem 100% auditável com busca avançada por data, ramal e atendente",
      "Filas de atendimento inteligentes com música de espera personalizada e relatórios ao vivo"
    ],
    problemTitle: "Centrais Físicas Obsoletas e Chamadas Perdidas por Ocupado",
    problemDescription: "Equipamentos de PABX físicos e caros instalados no escritório, fiação antiga que oxida, clientes dando 'ocupado' e equipes remotas isoladas sem conseguir atender ramais da empresa.",
    solutionTitle: "Comunicação 100% em Nuvem com Rechamada Automática",
    solutionDescription: "Uma central telefônica digital acessível de qualquer lugar, com URA inteligente, ramais no celular e computador e o recurso exclusivo de rechamada automática que resgata 100% dos clientes.",
    features: [
      {
        title: "Rechamada Automática (Callback Exclusivo)",
        description: "Se o cliente ligar e todos os atendentes estiverem ocupados, a plataforma pergunta se ele quer um retorno. Quando um atendente desocupa, a ligação é retornada de forma automática.",
        tag: "EXCLUSIVIDADE MUNDO",
        image: "/images/solucoes/pabx/feature-callback.jpg"
      },
      {
        title: "Ramais Multiplataforma (Softphone e IP)",
        description: "Atenda chamadas no notebook, smartphone ou telefone de mesa IP corporativo, mantendo o mesmo número institucional onde quer que o colaborador esteja.",
        tag: "MOBILIDADE TOTAL",
        image: "/images/solucoes/pabx/feature-softphone.jpg"
      },
      {
        title: "URA Multinível Humanizada",
        description: "Menus de atendimento configuráveis com mensagens profissionais gravadas em estúdio ou geradas por IA, com transferência direta para filas e departamentos.",
        tag: "ATENDIMENTO PROFISSIONAL",
        image: "/images/solucoes/pabx/feature-ura.jpg"
      },
      {
        title: "Cofre de Gravações Auditável",
        description: "Gravação de 100% das chamadas com armazenamento em nuvem criptografada, permitindo busca rápida por data, cliente, atendente e download seguro para compliance.",
        tag: "SEGURANÇA JURÍDICA",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Painel de Supervisão ao Vivo (Wallboard)",
        description: "Gestores acompanham em tempo real o status de cada ramal (livre, ocupado, em pausa), chamadas em espera e tempo de atendimento.",
        tag: "SUPERVISÃO EM TEMPO REAL",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      },
      {
        title: "Interligação Matriz, Filiais e Home Office",
        description: "Todos os escritórios e colaboradores conversam entre si via ramal com custo zero, simplificando transferências e acelerando a rotina.",
        tag: "CUSTO ZERO INTERNO",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      }
    ],
    differentials: [
      {
        title: "Modelo 100% OpEx (Sem Aquisição de Servidores)",
        description: "Elimine investimentos pesados em placas e servidores locais. Pague apenas uma mensalidade previsível com manutenção, atualizações e suporte contínuo inclusos."
      },
      {
        title: "Alta Disponibilidade com 99,95% de SLA",
        description: "Se faltar energia ou internet no seu escritório físico, as chamadas continuam sendo atendidas normalmente pelos celulares da equipe ou direcionadas para outra unidade."
      },
      {
        title: "Ativação Rápida e Suporte Humanizado",
        description: "Implantação em poucos dias úteis com treinamento prático para toda a equipe e suporte técnico ágil e consultivo."
      }
    ],
    stats: [
      { value: "0%", label: "Chamadas Perdidas", description: "Com fila de rechamada automática em picos de ligação" },
      { value: "100%", label: "Mobilidade Corporativa", description: "Ramais ativos no computador, celular ou aparelho IP físico" },
      { value: "Zero", label: "Custo de Manutenção Local", description: "Sem servidores em rack ou placas físicas para consertar" }
    ],
    comparison: [
      { feature: "Infraestrutura Física", mundo: "100% em Nuvem — zero espaço em rack e zero manutenção de hardware", traditional: "Central física em rack com placas sujeitas a queimas por surto elétrico" },
      { feature: "Chamadas em Picos de Fila", mundo: "Rechamada automática que resgata o cliente assim que um ramal desocupa", traditional: "Tom de ocupado ou ligação que cai após minutos de espera frustrante" },
      { feature: "Trabalho Híbrido e Remoto", mundo: "Softphones no PC e celular integrados instantaneamente à central", traditional: "Impossibilidade de transferir chamadas para quem está fora do escritório" },
      { feature: "Previsibilidade de Custos", mundo: "Assinatura mensal fixa sem surpresas", traditional: "Custos inesperados com visitas de técnicos e peças de reposição" }
    ],
    faqs: [
      {
        question: "Como funciona a rechamada automática na prática?",
        answer: "Quando todas as posições estiverem ocupadas ou se a ligação for realizada fora do horário comercial, o PABX Virtual captura o número do cliente e cria uma tarefa de retorno. Assim que um atendente finaliza uma chamada, o sistema disca automaticamente para o cliente e transfere a ligação pronta para o ramal."
      },
      {
        question: "Preciso comprar aparelhos telefônicos novos para usar o PABX Virtual?",
        answer: "Não é obrigatório. Sua equipe pode usar fones de ouvido no computador (softphone) ou aplicativo no smartphone. Caso prefira telefones de mesa tradicionais, fornecemos aparelhos IP homologados em regime de locação ou venda."
      },
      {
        question: "O que acontece se a internet do meu escritório cair?",
        answer: "O PABX continua funcionando na nuvem. As chamadas podem ser transferidas automaticamente para os celulares dos atendentes via 4G/5G ou direcionadas para outra filial, garantindo que nenhum cliente fique sem atendimento."
      }
    ],
    cases: [
      {
        client: "Click Iluminação",
        segment: "Comércio & Indústria B2B",
        highlight: "Migração completa de central física legada para Cloud PABX",
        summary: "Integração de matriz administrativa e fábrica em ramais digitais com URA humanizada e redução de 45% nos custos com manutenção.",
        logo: "/images/fotos-cases/macrocont.png"
      },
      {
        client: "MPMG — Ministério Público de MG",
        segment: "Órgão Público Estadual",
        highlight: "4.306 ramais operados com Cloud Voice e URA",
        summary: "Interligação de promotorias e comarcas em todo o estado com 80 mil+ chamadas/mês e disponibilidade de 99,95%.",
        logo: "/images/fotos-cases/mpmg.png"
      }
    ],
    cta: {
      primaryText: "Solicitar Atendimento de PABX",
      primaryHref: "/contato?solucao=pabx-nuvem",
      secondaryText: "Falar com Consultor",
      secondaryHref: "/contato?solucao=pabx-nuvem"
    }
  },

  "infraestrutura-rede-alta-disponibilidade": {
    slug: "infraestrutura-rede-alta-disponibilidade",
    number: "04",
    badge: "CONECTIVIDADE DE ALTA PERFORMANCE // REDUNDÂNCIA FÍSICA",
    pillar: "Infraestrutura & Redes",
    title: "Infraestrutura de Redes — Alta Disponibilidade",
    shortTitle: "Infraestrutura de Redes",
    headline: "Conectividade dedicada, redundância física e topologia em anel para operações críticas que não podem parar.",
    subtitle: "Links dedicados, redundância de rotas e SLA formal com monitoramento.",
    heroDescription: "Projetamos e operamos redes corporativas de alta performance com links dedicados simétricos, baixíssima latência e redundância física automática. Garantimos a continuidade operacional da sua matriz e filiais com hardware homologado e suporte de engenharia especializada.",
    heroImage: "/images/b2g-government.jpg",
    iconName: "Wrench",
    heroBullets: [
      "SLA formal contratual de disponibilidade para manter sua empresa faturando sem interrupções",
      "Links dedicados com tráfego simétrico de upload e download com estabilidade de fibra óptica",
      "Redundância automática de circuitos e topologia em anel para prevenção contra rompimentos de fibra",
      "Interligação segura entre filiais e datacenters (VPN / SD-WAN) para tráfego corporativo blindado",
      "Substituição expressa de hardware corporativo inclusa sem custo adicional de aquisição"
    ],
    problemTitle: "Oscilações de Conexão, Lentidão e Paradas Que Geram Prejuízo",
    problemDescription: "Internet banda larga comum que oscila em horários de pico, suporte de operadoras que demora dias para atender e rompimentos de fibra que paralisam filiais inteiras.",
    solutionTitle: "Rede Dedicada com Topologia em Anel e Engenharia 24/7",
    solutionDescription: "Circuitos simétricos exclusivos, com garantia de 100% da banda contratada, dupla abordagem de fibra e comutação instantânea em caso de falhas de terceiros.",
    features: [
      {
        title: "Link Dedicado de Fibra Óptica Simétrico",
        description: "Garantia de 100% da velocidade contratada tanto para download quanto para upload, com latência ultrabaixa para voz, ERPs e videoconferências.",
        tag: "BANDA 100% GARANTIDA",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      },
      {
        title: "Topologia em Anel com Redundância Ativa",
        description: "Abordagem por rotas físicas distintas. Se ocorrer um rompimento acidental de fibra na rua, o tráfego é desviado automaticamente em milissegundos.",
        tag: "FAILOVER AUTOMÁTICO",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      },
      {
        title: "Interligação de Unidades (VPN / SD-WAN)",
        description: "Comunicação segura e criptografada entre matriz, filiais, galpões e nuvem pública (AWS, Azure, Google Cloud).",
        tag: "CONECTIVIDADE MULTI-SITE",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Hardware Corporativo com Troca Expressa",
        description: "Roteadores, switches gerenciáveis e firewalls homologados mantidos sob gestão da Mundo Telecom, com substituição imediata em caso de falha.",
        tag: "HARDWARE HOMOLOGADO",
        image: "/images/solucoes/pabx/feature-softphone.jpg"
      },
      {
        title: "Monitoramento Proativo pelo NOC 24/7",
        description: "Identificação de anomalias, perda de pacotes ou saturação de links antes mesmo que a equipe da sua empresa perceba qualquer lentidão.",
        tag: "VIGILÂNCIA CONSTANTE",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      },
      {
        title: "SLA Contratual Rigoroso",
        description: "Compromisso formal de tempo de restabelecimento e disponibilidade de 99,95% com relatórios técnicos periódicos de tráfego.",
        tag: "SLA AUDITÁVEL",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      }
    ],
    differentials: [
      {
        title: "Engenharia Própria de Telecomunicações",
        description: "Projetos desenhados sob medida por engenheiros certificados, avaliando a topografia e a criticidade de cada filial da sua organização."
      },
      {
        title: "Atendimento Direto sem Terceirizações",
        description: "Equipes de campo próprias e frota técnica para intervenções físicas rápidas no estado de Minas Gerais e polos corporativos."
      },
      {
        title: "Outorga SCM e STFC da ANATEL",
        description: "Operação 100% legalizada perante os órgãos reguladores com blocos de IP próprios e AS (Autonomous System) com BGP resiliente."
      }
    ],
    stats: [
      { value: "100%", label: "Garantia de Banda", description: "Velocidade simétrica dedicada sem compartilhamento de tráfego" },
      { value: "< 15ms", label: "Latência Ultrabaixa", description: "Tráfego otimizado para sistemas de missão crítica e voz IP" },
      { value: "99.95%", label: "Disponibilidade SLA", description: "Infraestrutura redundante com comutação instantânea" }
    ],
    comparison: [
      { feature: "Garantia de Velocidade", mundo: "100% da banda contratada simétrica (Download = Upload)", traditional: "Banda larga assimétrica com oscilações e garantia mínima regulatória" },
      { feature: "Prevenção contra Rompimentos", mundo: "Topologia em anel com rotas redundantes de fibra", traditional: "Cabo único que, ao romper, deixa a empresa dias fora do ar" },
      { feature: "Suporte e Atendimento", mundo: "NOC 24/7 com engenheiros dedicados e chamado imediato", traditional: "Central 103xx com robôs de atendimento e prazos de 48h a 72h" },
      { feature: "Gestão de Equipamentos", mundo: "Switches e roteadores corporativos gerenciados e com troca expressa", traditional: "Modems domésticos simples que travam com excesso de conexões" }
    ],
    faqs: [
      {
        question: "Qual a diferença entre banda larga comum e link dedicado da Mundo Telecom?",
        answer: "A banda larga comum compartilha a infraestrutura da rua com dezenas de outros usuários e entrega velocidades assimétricas com alta oscilação. O link dedicado é um circuito exclusivo para a sua empresa com 100% da banda garantida, tráfego simétrico e SLA contratual com penalidades caso haja indisponibilidade."
      },
      {
        question: "Vocês atendem filiais em diferentes cidades e estados?",
        answer: "Sim. Estruturamos projetos multi-site com interligação segura via VPN/SD-WAN conectando matriz e unidades em diferentes municípios com gerenciamento centralizado."
      },
      {
        question: "O que está incluso na substituição expressa de hardware?",
        answer: "Caso algum roteador, switch ou interface corporativa fornecida apresente qualquer defeito físico ou elétrico, nossa equipe técnica realiza a substituição pelo mesmo modelo homologado sem custo adicional."
      }
    ],
    cases: [
      {
        client: "DPMG — Defensoria Pública de MG",
        segment: "Órgão Público Estadual",
        highlight: "300 links de dados dedicados via fibra óptica",
        summary: "Conectividade de alta disponibilidade interligando centenas de unidades de atendimento com total resiliência técnica.",
        logo: "/images/fotos-cases/dpmg.png"
      }
    ],
    cta: {
      primaryText: "Falar com Engenheiro de Redes",
      primaryHref: "/contato?solucao=infraestrutura-redes",
      secondaryText: "Solicitar Análise de Viabilidade",
      secondaryHref: "/contato"
    }
  },

  "experiencia-cliente-cx-routing": {
    slug: "experiencia-cliente-cx-routing",
    number: "05",
    badge: "EXPERIÊNCIA DO CLIENTE // ROTEAMENTO INTELIGENTE",
    pillar: "Experiência do Cliente",
    title: "Experiência do Cliente — Automação de Rotas (CX Routing)",
    shortTitle: "CX Routing & Automação",
    headline: "Roteamento inteligente por habilidades e identificador de DDD local para entregar a melhor jornada de contato.",
    subtitle: "Skill-based routing, URA humanizada e identificador de DDD local.",
    heroDescription: "Transforme a experiência de quem entra em contato com sua empresa. Nosso motor de roteamento direciona o cliente automaticamente para o atendente mais preparado (Skill-based Routing), utiliza identificador de DDD local nas chamadas ativas para maximizar a taxa de atendimento e dispara pesquisas imediatas de CSAT e NPS.",
    heroImage: "/images/solucoes/aikon/hero.jpg",
    iconName: "Zap",
    heroBullets: [
      "Roteamento por habilidades (Skill-based Routing): o cliente certo no atendente especialista certo",
      "Aumento da resolução no primeiro contato (FCR) reduzindo transferências desnecessárias",
      "Identificador local inteligente: chamadas ativas com DDD da região do cliente para triplicar o atendimento",
      "Pesquisa de satisfação automatizada (CSAT e NPS) ao término de chamadas e mensagens",
      "Gestão de filas transparentes com aviso de posição e previsão de espera"
    ],
    problemTitle: "Transferências Infinitas e Clientes Irritados",
    problemDescription: "O cliente liga para a empresa, passa por 3 atendentes diferentes, repete o problema em todos e desliga insatisfeito, derrubando os índices de fidelização.",
    solutionTitle: "Roteamento Preciso por Contexto e Habilidades",
    solutionDescription: "O motor CX Routing identifica quem está ligando pelo número ou CPF, consulta o sistema de CRM e conecta diretamente ao profissional mais qualificado para solucionar a demanda no primeiro contato.",
    features: [
      {
        title: "Skill-Based Routing (Roteamento por Competência)",
        description: "Direcione chamadas e chats baseado na especialidade do operador (idioma, nível técnico, segmento do cliente, carteira dedicada).",
        tag: "DIRECIONAMENTO EFICIENTE",
        image: "/images/solucoes/aikon/feature-team.jpg"
      },
      {
        title: "Identificador Local Inteligente (DDD Local)",
        description: "Ao discar para clientes de outras cidades ou estados, o sistema apresenta na bina o DDD da localidade de destino, multiplicando a taxa de atendimento.",
        tag: "ANSWER RATE MÁXIMO",
        image: "/images/solucoes/pabx/feature-callback.jpg"
      },
      {
        title: "Pesquisa de Satisfação Automática (CSAT / NPS)",
        description: "Ao finalizar o atendimento, o cliente avalia a experiência com notas de 1 a 5 ou 0 a 10 diretamente pelo teclado ou mensagem no WhatsApp.",
        tag: "MÉTRICAS DE QUALIDADE",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      },
      {
        title: "Aviso de Fila e Tempo Estimado",
        description: "Informação transparente sobre a posição na fila ('Você é o 2º da fila, tempo previsto: 2 minutos') com opção de agendar retorno automático.",
        tag: "TRANSPARÊNCIA TOTAL",
        image: "/images/solucoes/pabx/feature-ura.jpg"
      },
      {
        title: "Integração CTI com CRM e ERP",
        description: "Pop-up na tela do atendente com a ficha completa do cliente antes mesmo de atender a ligação (Screen Pop), permitindo atendimento personalizado.",
        tag: "CTI INTEGRADO",
        image: "/images/solucoes/aikon/feature-unified.jpg"
      },
      {
        title: "Agendamento Online com Lembretes",
        description: "Confirmações automáticas de consultas e reuniões por WhatsApp, permitindo ao cliente confirmar ou reagendar em poucos cliques.",
        tag: "AUTOMAÇÃO DE AGENDAS",
        image: "/images/solucoes/aikon/feature-nlp.jpg"
      }
    ],
    differentials: [
      {
        title: "Motor de Regras Customizável",
        description: "Crie e edite fluxos de roteamento facilmente pelo painel administrativo, alterando horários, regras de transbordo e prioridades em tempo real."
      },
      {
        title: "Visão 360° do Atendimento",
        description: "Relatórios analíticos que mostram exatamente onde os clientes encontram atrito e quais filas possuem maior taxa de resolução no primeiro contato (FCR)."
      },
      {
        title: "Experiência Humanizada e Eficiente",
        description: "Sem menus labirínticos. O foco é resolver o problema do cliente no menor tempo e com o menor esforço possível."
      }
    ],
    stats: [
      { value: "3x", label: "Mais Atendimentos Ativos", description: "Com identificador de DDD local nas chamadas para clientes" },
      { value: "+35%", label: "Resolução em 1º Contato (FCR)", description: "Encaminhamento direto para o operador especialista no assunto" },
      { value: "100%", label: "Pesquisas Automatizadas", description: "Coleta imediata de feedback para gestão contínua de qualidade" }
    ],
    comparison: [
      { feature: "Direcionamento de Fila", mundo: "Roteamento inteligente por habilidades e histórico do cliente", traditional: "Distribuição linear cega que gera transferências repetitivas" },
      { feature: "Chamadas Ativas", mundo: "Identificador com DDD local que passa confiança e evita recusa", traditional: "Número de DDD distante ou 'número desconhecido' rejeitado pelo cliente" },
      { feature: "Pesquisa de Satisfação", mundo: "Disparo automático por voz e WhatsApp integrado ao dashboard", traditional: "Processo manual esporádico ou inexistente" },
      { feature: "Integração com CRM", mundo: "Pop-up em tela com histórico completo do cliente ao receber a chamada", traditional: "Atendente precisa perguntar todos os dados do zero" }
    ],
    faqs: [
      {
        question: "Como o identificador de DDD local funciona?",
        answer: "A plataforma detecta automaticamente o código de área do número para o qual você está ligando (ex: DDD 11 para São Paulo, DDD 21 para o Rio de Janeiro) e apresenta na tela do cliente um número com o mesmo DDD, transmitindo segurança e elevando as chances de a ligação ser atendida."
      },
      {
        question: "O sistema se integra com meu software de gestão ou CRM?",
        answer: "Sim. Dispomos de webhooks e APIs para integração com Salesforce, HubSpot, RD Station, Zoho, TOTVS, ERPs médicos e sistemas proprietários."
      },
      {
        question: "É possível configurar filas prioritárias para clientes VIP?",
        answer: "Sim. O sistema pode reconhecer clientes categorizados como estratégicos ou em situação de urgência e colocá-los diretamente no início da fila de atendimento."
      }
    ],
    cases: [
      {
        client: "Macrocont",
        segment: "Serviços Financeiros & Contabilidade",
        highlight: "Implementação de roteamento por carteira e identificador local",
        summary: "Aumento de 42% no índice de resolução no primeiro contato e elevação expressiva do NPS de clientes atendidos.",
        logo: "/images/fotos-cases/macrocont.png"
      }
    ],
    cta: {
      primaryText: "Otimizar Experiência do Cliente",
      primaryHref: "/contato?solucao=cx-routing",
      secondaryText: "Falar com Especialista em CX",
      secondaryHref: "/contato"
    }
  },

  "seguranca-compliance-cybersecurity": {
    slug: "seguranca-compliance-cybersecurity",
    number: "06",
    badge: "GOVERNANÇA & SEGURANÇA // LGPD BLINDADA",
    pillar: "Segurança & Governança",
    title: "Segurança & Compliance — Cybersecurity",
    shortTitle: "Cybersecurity & Compliance",
    headline: "Blindagem contra fraudes telefônicas, cofre criptografado em nuvem e total conformidade com a LGPD.",
    subtitle: "Proteção contra fraudes em voz, cofre criptografado e conformidade LGPD.",
    heroDescription: "Proteja as comunicações e os dados confidenciais da sua organização. Fornecemos proteção ativa contra roubo de tráfego telefônico (Toll Fraud), cofre de gravações criptografado com logs de auditoria imutáveis e arquitetura rigorosamente alinhada às normas da LGPD.",
    heroImage: "/images/b2b-corporate.jpg",
    iconName: "Lock",
    heroBullets: [
      "Prevenção e bloqueio automático de fraudes telefônicas e consumo anômalo de tráfego de voz",
      "Cofre de gravação com criptografia de ponta a ponta e guarda segura para respaldo jurídico",
      "Trilhas de auditoria detalhadas registrando quem ouviu, baixou ou compartilhou cada áudio/mensagem",
      "Adequação plena à LGPD com anonimização de dados sensíveis e controle de retenção",
      "Gestão rigorosa de acessos com autenticação em duas etapas (2FA) e permissões por perfil"
    ],
    problemTitle: "Fraudes Telefônicas, Vazamento de Dados e Multas Regulatórias",
    problemDescription: "Ataques de força bruta em troncos SIP gerando faturas milionárias (Toll Fraud), gravações desprotegidas em servidores locais vulneráveis e risco de penalidades por não conformidade à LGPD.",
    solutionTitle: "Blindagem Ativa, Criptografia AES-256 e Auditoria Contínua",
    solutionDescription: "Camada completa de cibersegurança aplicada à infraestrutura de voz e mensagens, com monitoramento heurístico de tráfego, autenticação multifator e retenção segura em conformidade com as leis vigentes.",
    features: [
      {
        title: "Bloqueio Ativo contra Toll Fraud (Fraude de Voz)",
        description: "Algoritmos inteligentes que detectam tentativas anômalas de discagem internacional ou picos de chamadas fora do expediente, bloqueando o ataque instantaneamente.",
        tag: "PROTEÇÃO ANTI-FRAUDE",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Cofre de Gravações Criptografado (AES-256)",
        description: "Gravações de áudio e histórico de mensagens armazenados com criptografia de ponta a ponta em datacenters certificados Tier III.",
        tag: "CRIPTOGRAFIA DE DADOS",
        image: "/images/solucoes/pabx/feature-interconnection.jpg"
      },
      {
        title: "Trilhas de Auditoria Imutáveis (Audit Log)",
        description: "Registro detalhado e imutável de todas as ações: quem acessou, escutou, baixou ou excluiu qualquer gravação, com carimbo de data, hora e IP.",
        tag: "LOGS DE AUDITORIA",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      },
      {
        title: "Conformidade Plena com a LGPD",
        description: "Ferramentas integradas para mascaramento de cartões de crédito e CPFs durante a chamada, além de termo de consentimento automático.",
        tag: "COMPLIANCE LGPD",
        image: "/images/solucoes/aikon/feature-unified.jpg"
      },
      {
        title: "Controle de Acesso Granular (RBAC + 2FA)",
        description: "Definição estrita de privilégios por cargo e departamento, com obrigatoriedade de autenticação em duas etapas para acesso ao sistema.",
        tag: "GESTÃO DE IDENTIDADE",
        image: "/images/solucoes/aikon/feature-team.jpg"
      },
      {
        title: "Backups Automatizados e Retenção Customizável",
        description: "Políticas de retenção de dados configuráveis (ex: 90 dias, 5 anos) atendendo aos requisitos específicos do seu setor (bancário, saúde, jurídico).",
        tag: "GUARDA SEGURA",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      }
    ],
    differentials: [
      {
        title: "Arquitetura Testada em Órgãos de Justiça",
        description: "Nossa infraestrutura de segurança atende aos mais rígidos padrões de sigilo exigidos por Ministérios Públicos e Defensorias Públicas estaduais."
      },
      {
        title: "Monitoramento Heurístico 24/7",
        description: "O Centro de Operações de Segurança (SOC/NOC) vigia 24 horas por dia o comportamento de tráfego da rede para agir proativamente contra invasões."
      },
      {
        title: "Respaldo Jurídico para Contratos e Defesas",
        description: "Gravações com hash de integridade que garantem validade probatória em processos judiciais e auditorias formais."
      }
    ],
    stats: [
      { value: "AES-256", label: "Criptografia Militar", description: "Proteção máxima de dados em repouso e em trânsito" },
      { value: "100%", label: "Rastreabilidade de Acesso", description: "Logs completos de quem ouviu ou exportou cada gravação" },
      { value: "Zero", label: "Incidentes de Toll Fraud", description: "Bloqueio proativo de tentativas de invasão em troncos SIP" }
    ],
    comparison: [
      { feature: "Proteção contra Invasões", mundo: "Algoritmos anti-Toll Fraud em tempo real com bloqueio instantâneo", traditional: "Operadoras tradicionais que cobram a fatura do cliente mesmo após invasão" },
      { feature: "Armazenamento de Gravações", mundo: "Nuvem criptografada com hash de integridade e logs de auditoria", traditional: "Pastas locais desprotegidas no servidor do escritório sem controle de acesso" },
      { feature: "Adequação à LGPD", mundo: "Mascaramento automático de dados e controle de retenção configurável", traditional: "Sistemas legados sem conformidade e com dados expostos" },
      { feature: "Autenticação", mundo: "Autenticação em dois fatores (2FA) e perfis estritos de acesso", traditional: "Senhas fracas ou compartilhadas entre vários funcionários" }
    ],
    faqs: [
      {
        question: "O que é Toll Fraud e como a Mundo Telecom protege minha empresa?",
        answer: "Toll Fraud é o ataque cibernético no qual invasores hackeiam centrais telefônicas para discar para números internacionais caros gerando faturas exorbitantes. Nosso sistema monitora padrões de tráfego 24/7 e bloqueia discagens suspeitas em segundos, sem gerar custos para sua empresa."
      },
      {
        question: "As gravações telefônicas possuem validade jurídica em disputas?",
        answer: "Sim. Todas as gravações contam com carimbo de tempo inviolável e assinatura hash digital, garantindo que o áudio não sofreu edições ou adulterações e pode ser utilizado como prova pericial."
      },
      {
        question: "Como o sistema atende aos requisitos da LGPD?",
        answer: "Possuímos mecanismos para coleta de consentimento na URA, mascaramento de dados bancários/pessoais nos áudios e permissão granular para exclusão e portabilidade de dados solicitados por titulares."
      }
    ],
    cases: [
      {
        client: "TECBAN",
        segment: "Tecnologia Bancária & Autoatendimento",
        highlight: "Comunicação crítica com altíssimo padrão de segurança e conformidade",
        summary: "Fornecimento de infraestrutura de voz e conectividade com rigorosos controles de compliance e criptografia de ponta a ponta.",
        logo: "/images/fotos-cases/tecban.png"
      }
    ],
    cta: {
      primaryText: "Falar com Especialista em Segurança",
      primaryHref: "/contato?solucao=cybersecurity",
      secondaryText: "Solicitar Diagnóstico de Vulnerabilidade",
      secondaryHref: "/contato"
    }
  },

  "gestao-servicos-ti-noc-itsm": {
    slug: "gestao-servicos-ti-noc-itsm",
    number: "07",
    badge: "OPERAÇÃO CRÍTICA // SUPERVISÃO 24/7/365",
    pillar: "Operações & Suporte",
    title: "Gestão de Serviços de TI — Operações ITSM (NOC 24/7)",
    shortTitle: "NOC 24/7 & ITSM",
    headline: "Centro de Operações de Rede com vigilância ininterrupta 24/7/365 e gestão proativa de incidentes.",
    subtitle: "Centro de Operações 24/7/365, SLA de atendimento e engenharia proativa.",
    heroDescription: "Deixe a vigilância da sua infraestrutura crítica com quem entende. Nosso NOC próprio monitora troncos de voz, circuitos de dados e servidores 24 horas por dia, 365 dias por ano, mitigando oscilações de forma proativa antes que sua equipe perceba.",
    heroImage: "/images/solucoes/pabx/feature-wallboard.jpg",
    iconName: "BarChart3",
    heroBullets: [
      "Monitoramento contínuo ininterrupto (24 horas por dia, 7 dias por semana, 365 dias por ano)",
      "Detecção proativa de anomalias com acionamento imediato da equipe de engenharia",
      "Acordos de Nível de Serviço (SLA) formais para tempo de resposta e restabelecimento",
      "Relatórios executivos mensais de saúde técnica, volumetria e disponibilidade de circuitos",
      "Atendimento técnico especializado direto com engenheiros, sem robôs intermediários"
    ],
    problemTitle: "Falhas Descobertas Apenas Quando o Cliente Reclama",
    problemDescription: "Equipes de TI sobrecarregadas apagando incêndios, lentidão crônica não diagnosticada e fornecedores que demoram horas para admitir instabilidades em suas redes.",
    solutionTitle: "Vigilância Preditiva 24/7 e Gestão de Incidentes com SLA",
    solutionDescription: "Monitoramento em tempo real de latência, jitter, perda de pacotes e consumo de canais, com equipe de engenharia atuando de forma preventiva para neutralizar riscos antes do impacto operacional.",
    features: [
      {
        title: "Vigilância Ininterrupta 24/7/365",
        description: "Engenheiros e analistas monitorando telas de telemetria em tempo real, todos os dias do ano, inclusive feriados e madrugadas.",
        tag: "MONITORAMENTO ATIVO",
        image: "/images/solucoes/pabx/feature-wallboard.jpg"
      },
      {
        title: "Detecção Preditiva de Falhas",
        description: "Alertas automáticos disparados aos primeiros sinais de degradação de sinal óptico, perda de pacotes ou elevação de latência.",
        tag: "AÇÃO ANTECIPADA",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      },
      {
        title: "Processos Alinhados a ITSM / ITIL",
        description: "Gestão estruturada de incidentes, problemas, mudanças e configurações, com registro formal de chamados e histórico técnico auditável.",
        tag: "BOAS PRÁTICAS ITIL",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      },
      {
        title: "SLA Contratual Estrito de Resposta",
        description: "Prazos máximos garantidos em contrato para início de atendimento e restabelecimento de serviços conforme o nível de severidade.",
        tag: "GARANTIA DE SLA",
        image: "/images/solucoes/pabx/feature-vault.jpg"
      },
      {
        title: "Relatórios Executivos Mensais",
        description: "Documentação transparente entregue à diretoria com índices de disponibilidade (uptime), volumetria de chamadas e ações preventivas executadas.",
        tag: "GOVERNANÇA TÉCNICA",
        image: "/images/solucoes/aikon/feature-unified.jpg"
      },
      {
        title: "Suporte Nível 2 e 3 sem Intermediários",
        description: "Contato direto com quem resolve: engenheiros de rede e telecomunicações prontos para atuar sem passar por atendentes despreparados.",
        tag: "ENGENHARIA DIRETA",
        image: "/images/solucoes/aikon/feature-team.jpg"
      }
    ],
    differentials: [
      {
        title: "NOC Próprio Sediado no Brasil",
        description: "Centro de operações próprio em Belo Horizonte e Brasília com profissionais contratados e certificados, sem terceirizações em países distantes."
      },
      {
        title: "Mais de Duas Décadas em Operações Críticas",
        description: "Experiência comprovada mantendo no ar sistemas vitais de Ministérios Públicos, Defensorias, redes hospitalares e bancos."
      },
      {
        title: "Compromisso de Customer Success",
        description: "Acompanhamento proativo contínuo para sugerir melhorias de capacidade, upgrades de links e otimizações de rota."
      }
    ],
    stats: [
      { value: "24/7/365", label: "Vigilância Ininterrupta", description: "Monitoramento contínuo em tempo real todos os dias" },
      { value: "99.95%", label: "Disponibilidade SLA", description: "Métrica média auditada em clientes públicos e corporativos" },
      { value: "< 15 min", label: "Tempo de Resposta", description: "Atendimento imediato para incidentes de alta criticidade" }
    ],
    comparison: [
      { feature: "Regime de Monitoramento", mundo: "Centro de Operações de Rede próprio em regime 24/7/365 ativo", traditional: "Horário comercial padrão ou monitoramento reativo por tickets" },
      { feature: "Tipo de Resposta", mundo: "Ação preditiva antes que a falha atinja a experiência dos usuários", traditional: "Ação apenas após o cliente ligar furioso reclamando" },
      { feature: "Qualificação do Suporte", mundo: "Engenheiros e especialistas de redes N2 e N3 direto no atendimento", traditional: "Atendentes de telemarketing lendo scripts genéricos" },
      { feature: "Relatórios Gerenciais", mundo: "Extratos mensais detalhados de disponibilidade e métricas técnicas", traditional: "Falta total de relatórios de desempenho e histórico de falhas" }
    ],
    faqs: [
      {
        question: "O que o NOC da Mundo Telecom monitora exatamente?",
        answer: "Monitoramos a saúde completa da infraestrutura de telecom e TI: disponibilidade de links de fibra óptica, troncos SIP, jitter, latência, perda de pacotes, consumo de largura de banda, servidores de PABX e status de hardware gerenciado."
      },
      {
        question: "Como somos notificados caso ocorra algum incidente na madrugada?",
        answer: "Nossos sistemas automatizados e a equipe do NOC abrem o chamado de intervenção imediata e enviam alertas via WhatsApp, e-mail e ligação telefônica para os responsáveis técnicos da sua organização."
      },
      {
        question: "O NOC pode assumir a gestão de equipamentos já existentes da minha empresa?",
        answer: "Sim. Podemos incorporar switches, roteadores e centrais homologadas do seu parque tecnológico ao nosso painel de gerenciamento ITSM sob contrato de outsourcing gerenciado."
      }
    ],
    cases: [
      {
        client: "PlurisMídia",
        segment: "Contact Center & Atendimento em Escala",
        highlight: "Gestão contínua de infraestrutura de voz de alta densidade",
        summary: "Supervisão 24/7 de troncos e servidores, garantindo zero interrupção em operações de call center de missão crítica.",
        logo: "/images/fotos-cases/pluris-midia.png"
      }
    ],
    cta: {
      primaryText: "Conhecer Operações NOC 24/7",
      primaryHref: "/contato?solucao=noc-itsm",
      secondaryText: "Falar com Consultor de Operações",
      secondaryHref: "/contato"
    }
  },

  "mensageria-corporativa-meta-provider": {
    slug: "mensageria-corporativa-meta-provider",
    number: "08",
    badge: "WHATSAPP OFICIAL // META BUSINESS PROVIDER",
    pillar: "Mensageria & WhatsApp",
    title: "Mensageria Corporativa — Meta Provider (WhatsApp)",
    shortTitle: "Meta Provider WhatsApp",
    headline: "API Oficial do WhatsApp com selo verificado, disparos em massa homologados e atendimento sem risco de banimento.",
    subtitle: "API Oficial Meta, selo verde verificado, múltiplos atendentes e chatbots.",
    heroDescription: "Conecte sua empresa diretamente à API Oficial do WhatsApp. Garanta o selo oficial verificado, envie notificações transacionais, boletos e lembretes com máxima entregabilidade e automatize fluxos de vendas e cobrança com total segurança de não bloqueio de número.",
    heroImage: "/images/solucoes/aikon/hero.jpg",
    iconName: "Send",
    heroBullets: [
      "Acesso à API Oficial do WhatsApp (Meta Business Solution Provider) com segurança jurídica e técnica",
      "Envio automatizado em escala de lembretes, confirmações de consulta, boletos e alertas",
      "Selo de verificação oficial que transmite máxima credibilidade e autoridade para sua marca",
      "Múltiplos operadores e setores atendendo pelo mesmo número oficial corporativo",
      "Integração rápida via API REST com qualquer CRM, ERP ou sistema proprietário"
    ],
    problemTitle: "Números Bloqueados no WhatsApp e Mensagens que Não Chegam",
    problemDescription: "Uso de ferramentas piratas de automação que resultam no banimento repentino do número comercial da empresa, perda irrecuperável de clientes e falta de controle da equipe de vendas.",
    solutionTitle: "API Oficial Meta com Selo de Verificação e Zero Risco",
    solutionDescription: "Infraestrutura homologada diretamente com a Meta (WhatsApp Business API), garantindo alta taxa de entrega de mensagens transacionais, múltiplos atendentes e proteção definitiva contra banimentos.",
    features: [
      {
        title: "API Oficial do WhatsApp (Cloud API Meta)",
        description: "Conexão oficial e homologada que garante estabilidade jurídica, alta capacidade de processamento de mensagens e imunidade a bloqueios indevidos.",
        tag: "HOMOLOGAÇÃO META",
        image: "/images/solucoes/aikon/feature-unified.jpg"
      },
      {
        title: "Disparo Homologado de Mensagens Transacionais",
        description: "Envie réguas de cobrança, boletos em PDF, confirmações de agendamento e alertas de pedidos com modelos de mensagem pré-aprovados pela Meta.",
        tag: "MENSAGENS EM ESCALA",
        image: "/images/solucoes/aikon/feature-nlp.jpg"
      },
      {
        title: "Selo Verde de Verificação Oficial",
        description: "Assessoria completa para solicitação e obtenção do selo de conta comercial oficial verificada (Official Business Account) na Meta.",
        tag: "CREDIBILIDADE MÁXIMA",
        image: "/images/solucoes/aikon/feature-team.jpg"
      },
      {
        title: "Múltiplos Atendentes em 1 Só Número",
        description: "Atenda centenas de clientes simultaneamente através do mesmo número oficial da empresa, distribuindo as conversas por carteiras e departamentos.",
        tag: "EQUIPE UNIFICADA",
        image: "/images/solucoes/pabx/feature-softphone.jpg"
      },
      {
        title: "Chatbots e Fluxos de Autoatendimento",
        description: "Crie árvores de atendimento inteligente com botões interativos e respostas rápidas para dúvidas frequentes e qualificação de leads.",
        tag: "AUTOMAÇÃO 24/7",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      },
      {
        title: "Integração Completa via API REST / Webhooks",
        description: "Dispare mensagens automaticamente a partir de eventos do seu ERP ou CRM (ex: venda realizada, fatura emitida, agendamento confirmado).",
        tag: "INTEGRAÇÃO DIRETA",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      }
    ],
    differentials: [
      {
        title: "Proteção Definitiva contra Banimentos",
        description: "Elimine o medo de perder o número de telefone principal da sua empresa por utilizar métodos não oficiais de automação."
      },
      {
        title: "Painel de Métricas em Tempo Real",
        description: "Acompanhe status de cada mensagem (enviada, entregue, lida e respondida), tempo médio de atendimento e taxa de conversão."
      },
      {
        title: "Custos Transparentes e Faturamento em Reais",
        description: "Faturamento consolidado em moeda nacional sem sustos com variações cambiais de cartão de crédito internacional."
      }
    ],
    stats: [
      { value: "98%", label: "Taxa de Abertura", description: "Mensagens no WhatsApp lidas nos primeiros 3 minutos" },
      { value: "0%", label: "Risco de Banimento", description: "Pleno cumprimento dos termos de serviço da Meta" },
      { value: "100%", label: "Escalabilidade de Disparo", description: "Capacidade para milhares de notificações por segundo" }
    ],
    comparison: [
      { feature: "Tipo de Conexão", mundo: "API Oficial Meta Business com infraestrutura corporativa", traditional: "Sistemas não oficiais (emuladores de QR Code) com risco alto de banimento" },
      { feature: "Selo de Verificação", mundo: "Elegível para selo oficial de verificação da Meta", traditional: "Impossibilidade de obter verificação oficial" },
      { feature: "Disparos em Escala", mundo: "Templates aprovados com alta entregabilidade garantida", traditional: "Disparos manuais ou bloqueados após poucas mensagens" },
      { feature: "Integração com Sistemas", mundo: "API REST moderna e webhooks com documentação completa", traditional: "Sem integração direta, exigindo cópia manual de conversas" }
    ],
    faqs: [
      {
        question: "Qual a diferença entre o WhatsApp Business convencional e a API Oficial?",
        answer: "O app WhatsApp Business comum é voltado para pequenos comércios e só roda em um celular por vez (ou poucos dispositivos conectados via QR Code), sem suporte a múltiplos atendentes reais nem integração a sistemas corporativos. A API Oficial é uma infraestrutura em nuvem que permite centenas de operadores no mesmo número, disparos em massa homologados e chatbots complexos."
      },
      {
        question: "Posso usar meu número fixo atual na API Oficial do WhatsApp?",
        answer: "Sim! Podemos ativar a API Oficial do WhatsApp no seu número fixo corporativo atual, permitindo que seus clientes liguem e enviem mensagens pelo mesmo número que já conhecem."
      },
      {
        question: "Como funciona a cobrança das mensagens da Meta?",
        answer: "A Meta cobra por conversas iniciadas de acordo com as categorias (utilidade, autenticação, marketing ou serviço). Nossa equipe auxilia na modelagem mais econômica para o seu fluxo de mensagens."
      }
    ],
    cases: [
      {
        client: "Brascamp",
        segment: "Indústria & Equipamentos",
        highlight: "Implementação de WhatsApp Oficial para vendas B2B e logística",
        summary: "Envio automático de status de pedidos e atendimento centralizado de representantes em todo o Brasil.",
        logo: "/images/fotos-cases/grupo-via.png"
      }
    ],
    cta: {
      primaryText: "Ativar API Oficial WhatsApp",
      primaryHref: "/contato?solucao=meta-provider",
      secondaryText: "Falar com Especialista em WhatsApp",
      secondaryHref: "/contato"
    }
  },

  "inteligencia-artificial-voz-voice-ai": {
    slug: "inteligencia-artificial-voz-voice-ai",
    number: "09",
    badge: "IA GENERATIVA // AGENTES DE VOZ COGNITIVOS",
    pillar: "Inteligência Artificial",
    title: "Inteligência Artificial Aplicada à Voz (Voice AI)",
    shortTitle: "Voice AI (IA por Voz)",
    headline: "Agentes virtuais de voz com IA conversacional para triagem inteligente e automação de atendimento telefônico.",
    subtitle: "Agentes de voz inteligentes, reconhecimento de fala natural e URA cognitiva.",
    heroDescription: "Eleve a telefonia da sua empresa para a era da IA generativa. Nossos agentes de voz inteligentes dialogam de forma natural com quem liga, compreendem intenções sem menus numéricos travados, realizam agendamentos, consultam dados em sistemas e transferem chamadas com contexto completo.",
    heroImage: "/images/solucoes/pabx/hero.jpg",
    iconName: "Headphones",
    heroBullets: [
      "Agentes de voz inteligentes que conversam em linguagem natural, entendendo sotaques e variações",
      "Substituição de URAs antigas e engessadas ('digite 1 ou 2') por atendimento falado e humanizado",
      "Capacidade de atender simultaneamente centenas de ligações durante picos sem fila de espera",
      "Transcrição automática e análise de sentimento em tempo real de 100% das chamadas",
      "Automação de processos repetitivos por voz (status de pedidos, 2ª via, confirmação de presença)"
    ],
    problemTitle: "URAs Engessadas que Irritam e Filas de Espera Intermináveis",
    problemDescription: "Clientes digitando números em menus lentos de URA tradicional, caindo em opções erradas e desligando frustrados após longos minutos de espera por um atendente humano.",
    solutionTitle: "Conversação Natural Fluida com Agentes de Voz Cognitivos",
    solutionDescription: "Agentes virtuais de voz treinados com IA generativa e síntese de voz ultra-realista que compreendem a fala do cliente em linguagem coloquial e resolvem solicitações em segundos.",
    features: [
      {
        title: "Reconhecimento de Voz Natural (ASR Cognitivo)",
        description: "Compreensão de sotaques regionais, gírias e frases completas ('quero saber o saldo da minha fatura de agosto'), sem obrigar o cliente a dizer apenas palavras fixas.",
        tag: "VOZ INTELIGENTE",
        image: "/images/solucoes/pabx/feature-ura.jpg"
      },
      {
        title: "Vozes Ultra-Realistas com Expressividade",
        description: "Síntese de voz com entonação humana natural, pausas realistas e ritmo agradável que proporcionam uma experiência acolhedora e agradável.",
        tag: "TTS AVANÇADO",
        image: "/images/solucoes/aikon/feature-nlp.jpg"
      },
      {
        title: "Integração Transacional com Bancos de Dados",
        description: "O agente de voz consulta saldos, status de pedidos, agenda reuniões e envia confirmações por SMS/WhatsApp em tempo real durante a ligação.",
        tag: "AÇÕES TRANSACIONAIS",
        image: "/images/solucoes/aikon/feature-unified.jpg"
      },
      {
        title: "Transferência Assistida com Resumo Contextual",
        description: "Se for necessário falar com um atendente humano, a chamada é transferida e o atendente recebe na tela o resumo completo do que o cliente já explicou à IA.",
        tag: "CONTINUIDADE TOTAL",
        image: "/images/solucoes/aikon/feature-timeline.jpg"
      },
      {
        title: "Transcrição e Análise de Sentimento",
        description: "Transcrição textual de 100% dos diálogos com classificação de sentimento (positivo, neutro, insatisfeito) para auditoria contínua de qualidade.",
        tag: "ANÁLISE DE QUALIDADE",
        image: "/images/solucoes/aikon/feature-dashboard.jpg"
      },
      {
        title: "Capacidade de Escala Imediata em Picos",
        description: "Atenda 500 clientes ao mesmo tempo sem criar nenhuma fila de espera durante campanhas de marketing ou períodos de alta sazonalidade.",
        tag: "ESCALABILIDADE INFINITA",
        image: "/images/solucoes/pabx/feature-callback.jpg"
      }
    ],
    differentials: [
      {
        title: "Conexão Direta ao Backbone STFC da Mundo Telecom",
        description: "Latência mínima de processamento e áudio de alta fidelidade sem picotamento, garantindo respostas em menos de 1 segundo."
      },
      {
        title: "Treinamento Personalizado com seu Vocabulário",
        description: "Customizamos o modelo com os termos técnicos, nomes de produtos e regras de negócio específicas da sua organização."
      },
      {
        title: "Economia Expressiva de Custos Operacionais",
        description: "Reduza até 60% do custo por chamada resolvida sem comprometer a satisfação e a humanização do atendimento."
      }
    ],
    stats: [
      { value: "< 1s", label: "Tempo de Resposta", description: "Processamento de linguagem natural ultra-rápido durante a conversa" },
      { value: "60%", label: "Redução de Custo por Chamada", description: "Resolução autônoma de dúvidas e rotinas repetitivas" },
      { value: "24/7", label: "Disponibilidade sem Escalas", description: "Atendimento imediato a qualquer hora do dia ou da noite" }
    ],
    comparison: [
      { feature: "Interação com o Usuário", mundo: "Diálogo falado livre e natural com compreensão semântica profunda", traditional: "Menu numérico arcaico ('digite 1 para compras, 2 para suporte')" },
      { feature: "Tempo de Espera na Fila", mundo: "Zero espera: centenas de chamadas atendidas simultaneamente no primeiro toque", traditional: "Fila de espera com música repetitiva até um atendente desocupar" },
      { feature: "Transferência de Atendimento", mundo: "Transferência com resumo contextual do que já foi falado", traditional: "Cliente tem que repetir tudo do zero para o novo atendente" },
      { feature: "Análise de Qualidade", mundo: "100% das chamadas transcritas e analisadas por sentimento", traditional: "Amostragem manual de menos de 1% das gravações" }
    ],
    faqs: [
      {
        question: "A voz da IA parece um robô travado?",
        answer: "Não! Utilizamos modelos modernos de síntese de voz neural que reproduzem entonação, pausas, respiração e modulação emocional de forma praticamente indistinguível de uma fala humana acolhedora."
      },
      {
        question: "O que acontece se o cliente fizer uma pergunta complexa que a IA não sabe responder?",
        answer: "O agente virtual reconhece educadamente o limite do seu conhecimento e transfere a ligação imediatamente para a equipe humana especializada, passando o contexto resumido na tela do atendente."
      },
      {
        question: "A IA pode realizar chamadas ativas ou apenas receber ligações?",
        answer: "Ela opera em ambos os fluxos: pode receber chamadas receptivas e também realizar chamadas ativas inteligentes (ex: confirmações de agendamento, pesquisas de pós-venda e lembretes de renovação)."
      }
    ],
    cases: [
      {
        client: "Prefeituras & Órgãos de Atendimento ao Cidadão",
        segment: "Setor Público (B2G)",
        highlight: "Agente cognitivo de voz para agendamentos e informações públicas",
        summary: "Automatização de 70% das ligações receptivas para agendamento de consultas e emissão de guias com alta aprovação da população.",
        logo: "/images/fotos-cases/mpmg.png"
      }
    ],
    cta: {
      primaryText: "Conhecer Soluções Voice AI",
      primaryHref: "/contato?solucao=voice-ai",
      secondaryText: "Agendar Demonstração ao Vivo",
      secondaryHref: "/contato"
    }
  }
};

// Aliases for legacy/card route handling
export const solutionSlugAliases: Record<string, string> = {
  "pabx-em-nuvem": "pabx-virtual-cloud",
  "pabx-nuvem": "pabx-virtual-cloud",
  "whatsapp-atendimento-ia": "mensageria-corporativa-meta-provider",
  "whatsapp-ia": "mensageria-corporativa-meta-provider",
  "agendamento-online-inteligente": "experiencia-cliente-cx-routing",
  "agendamento-online": "experiencia-cliente-cx-routing",
  "outsourcing-comunicacao-gerenciada": "gestao-servicos-ti-noc-itsm",
  "outsourcing-telecom": "gestao-servicos-ti-noc-itsm",
  "infraestrutura-voz-stfc": "telefonia-corporativa-stfc",
  "infraestrutura-stfc": "telefonia-corporativa-stfc",
  "noc-monitoramento-redes": "gestao-servicos-ti-noc-itsm",
  "noc-monitoramento": "gestao-servicos-ti-noc-itsm",
  "aikon-omnichannel": "omnichannel-ia-aikon",
  "voice-ai": "inteligencia-artificial-voz-voice-ai",
  "telefonia-stfc": "telefonia-corporativa-stfc",
  "infraestrutura-redes": "infraestrutura-rede-alta-disponibilidade",
  "cx-routing": "experiencia-cliente-cx-routing",
  "cybersecurity": "seguranca-compliance-cybersecurity",
  "noc-itsm": "gestao-servicos-ti-noc-itsm",
  "meta-provider": "mensageria-corporativa-meta-provider",
  "pabx-virtual": "pabx-virtual-cloud"
};
