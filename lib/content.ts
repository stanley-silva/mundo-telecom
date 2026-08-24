export interface Solution {
  id: string;
  slug: string;
  categoryTag: string;
  title: string;
  shortTitle: string;
  headline: string;
  problemResolved: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  ctaText: string;
  iconName: string;
  targetAudience?: string;
}

export interface Plan {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  audience: string;
  price: string;
  period: string;
  priceNote?: string;
  headlineResult: string;
  objectionTreatment: string;
  valueProposition: string;
  features: string[];
  ctaText: string;
}

export interface Unit {
  id: string;
  city: string;
  state: string;
  type: string;
  description: string;
  address: string;
  cep: string;
  phone: string;
  hours?: string;
  badge?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  readTime: string;
  publishDate: string;
  summary: string;
  topics: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      highlightBox?: string;
      bulletPoints?: string[];
    }[];
  };
  cta: {
    text: string;
    buttonText: string;
    href: string;
  };
}

export interface CaseStudy {
  client: string;
  segment: string;
  tag: string;
  description: string;
  stats?: string;
}

export interface Partner {
  name: string;
  description: string;
  category: string;
}

export const siteContent = {
  brand: {
    name: "Mundo Telecom",
    wordmark: "mundo.",
    lockup: "TELECOM",
    slogan: "Telefonia corporativa e plataformas em nuvem de alta performance",
    puv: "Telefonia corporativa e plataformas em nuvem que aumentam a taxa de atendimento das suas ligações, com custo previsível e gravação de tudo — entregues por uma operadora licenciada pela ANATEL há mais de 20 anos.",
    experienceYears: "21 anos",
    anatelOutorgada: "Operadora Licenciada pela ANATEL (STFC & SCM)",
    phone0800: "0800 031 1919",
    phoneRegional: "(31) 2552-1919",
    email: "atendimento@mundotelecom.com.br",
    whatsappNumber: "553125521919",
    whatsappUrl: "https://wa.me/553125521919?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o%20t%C3%A9cnica%20da%20Mundo%20Telecom.",
    clientPortalUrl: "https://cliente.mundotelecom.com.br",
  },

  navigation: [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/sobre-nos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Produtos & Planos", href: "/produtos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ],

  metrics: [
    { value: 20, prefix: "+", suffix: " Anos", label: "Anos de Experiência", description: "Duas décadas de pioneirismo e autoridade técnica no setor de telecomunicações." },
    { value: 40, prefix: "+", suffix: " mil", label: "Linhas Ativas", description: "Canais de voz operando diariamente com estabilidade e alta taxa de entrega." },
    { value: 10, prefix: "+", suffix: " mil", label: "Clientes Atendidos", description: "Empresas e órgãos públicos que transformaram sua gestão de comunicação." },
    { value: 15, prefix: "+", suffix: " mil", label: "Ramais Ativos", description: "Postos de atendimento e estações de trabalho conectadas em todo o país." },
  ],

  differentials: [
    {
      id: "alta-disponibilidade",
      title: "Alta Disponibilidade e Redundância Operacional",
      description: "Infraestrutura robusta com múltiplos datacenters e rotas redundantes. Garantimos alta disponibilidade para que sua operação crítica nunca fique isolada.",
      icon: "ShieldCheck",
    },
    {
      id: "autoridade-regulatoria",
      title: "Licença Própria ANATEL e 21 Anos de Mercado",
      description: "Não somos intermediários ou meras revendas. Operamos com licença própria da ANATEL e duas décadas de histórico ininterrupto, assegurando contratos diretos e SLA formal.",
      icon: "Award",
    },
    {
      id: "previsibilidade-financeira",
      title: "Previsibilidade Financeira Real",
      description: "Elimine o medo da fatura no final do mês. Nossos planos contam com voz corporativa estruturada e custos fixos transparentes, sem cobranças abusivas de minutos adicionais.",
      icon: "BadgePercent",
    },
    {
      id: "escalabilidade",
      title: "Escalabilidade Modular e Imediata",
      description: "Cresça sua estrutura de comunicação no seu ritmo. Ative novos ramais, departamentos e canais de atendimento digital em questão de minutos, sem necessidade de obras ou equipamentos caros.",
      icon: "TrendingUp",
    },
    {
      id: "integracao-sistemas",
      title: "Integração Nativa com o seu Ecossistema",
      description: "Conectamos nossa plataforma de telecomunicações aos seus sistemas de gestão (ERP), CRMs e ferramentas de atendimento, centralizando os registros da sua operação.",
      icon: "Cpu",
    },
    {
      id: "suporte-consultivo",
      title: "Suporte Especializado e Monitoramento 24/7",
      description: "Equipe técnica própria disponível 24 horas por dia, 7 dias por semana. Resolução ágil de demandas críticas com atendimento humanizado e sem burocracia.",
      icon: "Headphones",
    },
  ],

  solutions: [
    {
      id: "telefonia-ip",
      slug: "telefonia-ip-stfc",
      categoryTag: "VOZ & PERFORMANCE",
      title: "Telefonia IP & Conexão STFC",
      shortTitle: "Telefonia IP & STFC",
      headline: "Ligações com identificador local e máxima taxa de completamento para a sua equipe comercial e de suporte.",
      problemResolved: "Elimina a perda recorrente de vendas e contatos causada por chamadas que tocam com DDD de outro estado (e o cliente recusa atender), além de dar fim às faturas com tarifações imprevisíveis por minuto.",
      description: "Nossa telefonia em nuvem opera com rotas corporativas de alta disponibilidade diretamente conectadas a operadoras nacionais. Com o identificador local, suas chamadas ativas aparecem com o DDD da cidade do destinatário, aumentando significativamente as chances de atendimento. A comunicação é cristalina, funciona diretamente em computadores, celulares ou aparelhos IP e possui custos fixos transparentes.",
      shortDescription: "Comunicação de voz de alta definição com infraestrutura digital e identificador local. Melhore o índice de atendimento das suas chamadas ativas e economize com pacotes corporativos estruturados sem cobranças ocultas.",
      benefits: [
        "Aumento expressivo na taxa de atendimento das chamadas ativas com identificador local",
        "Custo previsível: planos com estrutura clara, sem surpresas na fatura",
        "Portabilidade numérica ágil e sem interrupção das linhas atuais",
        "Mobilidade total: ramais funcionam no escritório, home office ou viagens",
      ],
      ctaText: "Solicitar Proposta de Telefonia IP",
      iconName: "PhoneCall",
      targetAudience: "Empresas com equipes comerciais e de atendimento ativas",
    },
    {
      id: "stfc-outorgado",
      slug: "telefonia-fixa-stfc-anatel",
      categoryTag: "CONECTIVIDADE REGULAMENTADA",
      title: "Telefonia Fixa Comutada (STFC Outorgado ANATEL)",
      shortTitle: "Telefonia STFC (ANATEL)",
      headline: "Conectividade de voz oficial com outorga direta ANATEL e total segurança jurídica.",
      problemResolved: "Atende à exigência legal e operacional de órgãos públicos, autarquias e grandes sedes corporativas que necessitam de contratação direta com operadora autorizada STFC, eliminando intermediários.",
      description: "Como detentora de licença própria da ANATEL para prestação de Serviço Telefônico Fixo Comutado, a Mundo Telecom entrega entroncamentos digitais de alta capacidade de tráfego, faixas de numeração DDR (Discagem Direta a Ramal) e portabilidade regulamentada. Garantimos estabilidade física para linhas de emergência, serviços essenciais e grandes centrais de atendimento governamentais.",
      shortDescription: "Entroncamentos digitais diretos, faixas DDR dedicadas e contratos diretos com operadora autorizada pela ANATEL para órgãos públicos e grandes empresas.",
      benefits: [
        "Contratação direta com operadora licenciada pela ANATEL (compliance Lei 14.133/2021)",
        "Numeração DDR flexível para roteamento direto entre departamentos e secretarias",
        "Alta imunidade a oscilações, ideal para serviços essenciais e defesa civil",
        "Bilhetagem detalhada e relatórios técnicos para auditoria e prestação de contas",
      ],
      ctaText: "Consultar Viabilidade STFC",
      iconName: "Radio",
      targetAudience: "Órgãos Governamentais, Autarquias e Grandes Corporações",
    },
    {
      id: "pabx-nuvem",
      slug: "pabx-em-nuvem",
      categoryTag: "INFRAESTRUTURA DIGITAL",
      title: "PABX em Nuvem Integrado",
      shortTitle: "PABX em Nuvem",
      headline: "Sua central telefônica 100% em nuvem: integre matriz, filiais e home office sem equipamentos físicos.",
      problemResolved: "Acaba com os altos custos de manutenção de servidores físicos e centrais legadas, falta de peças de reposição e barreiras para conectar colaboradores em unidades distantes.",
      description: "O PABX em Nuvem substitui centrais telefônicas físicas por uma plataforma digital segura. Ramais entre matriz, filiais e trabalho remoto comunicam-se gratuitamente com áudio de alta definição. O gestor tem controle total através de um painel administrativo intuitivo para configurar ramais, definir permissões de discagem, extrair relatórios e ajustar horários de atendimento em tempo real.",
      shortDescription: "Substitua centrais telefônicas físicas obsoletas por uma infraestrutura virtual segura. Interligue matriz, filiais e equipes remotas em uma mesma rede de ramais com mobilidade total via softphones e smartphones.",
      benefits: [
        "Zero gasto com aquisição, manutenção ou substituição de placas e servidores físicos",
        "Ramais ilimitados entre unidades com custo zero de comunicação interna",
        "Escalabilidade imediata: ative ou redistribua ramais em minutos",
        "Painel de gestão em nuvem acessível de qualquer navegador seguro",
      ],
      ctaText: "Conhecer Recursos do PABX em Nuvem",
      iconName: "Cloud",
      targetAudience: "Empresas com múltiplas unidades e equipes híbridas",
    },
    {
      id: "ura-inteligente",
      slug: "ura-atendimento-inteligente",
      categoryTag: "EXPERIÊNCIA DE ATENDIMENTO",
      title: "URA & Atendimento Inteligente",
      shortTitle: "URA Inteligente",
      headline: "Triagem rápida e roteamento objetivo para direcionar o solicitante ao setor correto sem perda de tempo.",
      problemResolved: "Elimina o abandono de chamadas em filas confusas, menus robóticos extensos e transferências repetitivas entre atendentes.",
      description: "Estruturamos fluxos de atendimento automático humanizados e diretos ao ponto. O sistema acolhe a chamada, identifica o motivo do contato e transfere imediatamente para a fila ou ramal correto. Suporta mensagens personalizadas para horários de plantão, informativos institucionais sazonais e distribuição equitativa de chamadas entre os atendentes disponíveis (DAC).",
      shortDescription: "Automatize a triagem e o roteamento de chamadas com fluxos interativos e objetivos. Reduza o tempo de espera, direcione o cliente imediatamente ao setor correto e aumente a produtividade da sua equipe.",
      benefits: [
        "Redução do tempo médio de espera e queda drástica na taxa de abandono",
        "Filas organizadas com mensagens informativas e posição na fila",
        "Flexibilidade para configurar fluxos especiais para feriados e horários de plantão",
        "Interface simplificada para alteração de mensagens e menus sem necessidade de suporte externo",
      ],
      ctaText: "Estruturar Meu Atendimento Inteligente",
      iconName: "Bot",
      targetAudience: "Centrais de atendimento ao cliente, ouvidorias e recepções",
    },
    {
      id: "gravacao-chamadas",
      slug: "gravacao-auditoria-chamadas",
      categoryTag: "SEGURANÇA & AUDITORIA",
      title: "Gravação e Registro de Chamadas",
      shortTitle: "Gravação e Auditoria",
      headline: "Armazenamento em nuvem seguro de 100% das chamadas para proteção jurídica e controle de qualidade.",
      problemResolved: "Acaba com a dependência da memória e conflitos sobre o que foi acordado verbalmente em negociações comerciais, autorizações de serviços ou atendimentos ao cidadão.",
      description: "Todas as chamadas recebidas e efetuadas são gravadas automaticamente e salvas em ambiente em nuvem com criptografia de ponta a ponta. A plataforma conta com mecanismos avançados de busca por data, hora, ramal, atendente, número discado e duração, permitindo que gestores e auditores localizem qualquer interação em segundos para treinamento ou resguardo legal.",
      shortDescription: "Mantenha o registro de 100% das chamadas da sua organização. Armazenamento seguro em nuvem para auditoria, controle de qualidade, compliance e proteção jurídica sobre todos os acordos firmados por telefone.",
      benefits: [
        "Histórico auditável e seguro para resolução incontestável de dúvidas contratuais",
        "Resguardo jurídico imediato em caso de contestações ou litígios comerciais",
        "Ferramenta prática para feedback técnico e treinamento da equipe de atendimento",
        "Download rápido e seguro de relatórios e arquivos de áudio em lote",
      ],
      ctaText: "Ativar Gravação de Chamadas",
      iconName: "ShieldAlert",
      targetAudience: "Departamentos jurídicos, financeiros, ouvidorias e vendas",
    },
    {
      id: "whatsapp-omnichannel",
      slug: "integracao-whatsapp-omnichannel",
      categoryTag: "OMNICHANNEL & CENTRALIZAÇÃO",
      title: "Integração com WhatsApp & Omnichannel",
      shortTitle: "WhatsApp Omnichannel",
      headline: "Múltiplos atendentes em um único número oficial de WhatsApp com histórico centralizado na empresa.",
      problemResolved: "Acaba com o uso descontrolado de números particulares de funcionários para atender clientes, perda de conversas e falta de visibilidade sobre o tempo de resposta.",
      description: "Conectamos sua operação à API Oficial do WhatsApp, permitindo que dezenas de colaboradores conversem simultaneamente a partir de um único número institucional verificado. A ferramenta centraliza mensagens de texto, áudios e arquivos em um painel único com distribuição por setores, histórico permanente na empresa e integração com sistemas de CRM.",
      shortDescription: "Centralize o atendimento da sua organização em um único painel. Múltiplos atendentes em um só número oficial de WhatsApp, integrando canais de voz, chat e mensageria com histórico unificado de conversas.",
      benefits: [
        "Atendimento em escala com um só número oficial e verificado de WhatsApp",
        "As conversas e os contatos pertencem à empresa, não aos aparelhos pessoais dos colaboradores",
        "Painel gerencial com métricas de tempo de espera, volume de atendimentos e produtividade",
        "Histórico unificado integrando canais de voz e mensagens digitais",
      ],
      ctaText: "Integrar Atendimento ao WhatsApp",
      iconName: "MessageSquareText",
      targetAudience: "Vendas, SAC, suporte e ouvidoria ao cidadão",
    },
    {
      id: "noc-monitoramento",
      slug: "noc-monitoramento-redes",
      categoryTag: "GOVERNANÇA & SUPORTE CRÍTICO",
      title: "NOC & Monitoramento Proativo 24/7",
      shortTitle: "NOC 24/7 Proativo",
      headline: "Vigilância técnica ininterrupta para garantir estabilidade máxima e prevenção proativa de oscilações.",
      problemResolved: "Impede que empresas e instituições descubram que a comunicação falhou apenas quando o cliente ou cidadão faz uma reclamação.",
      description: "O Centro de Operações de Rede (NOC) da Mundo Telecom atua 24 horas por dia, 7 dias por semana, monitorando ativamente a saúde dos troncos de voz, latência, perda de pacotes, jitter e consumo de banda. Nossa engenharia atua proativamente na identificação de gargalos antes que eles causem impacto na operação final, garantindo cumprimento estrito de SLA.",
      shortDescription: "Supervisão contínua da sua infraestrutura de comunicação em regime 24/7/365. Identificação antecipada de oscilações, manutenção preventiva e garantia estrita de acordos de nível de serviço (SLA).",
      benefits: [
        "Atuação preventiva: anomalias tratadas antes de afetarem a operação do cliente",
        "Acordo de Nível de Serviço (SLA) formalmente garantido em contrato",
        "Relatórios periódicos de disponibilidade e métricas técnicas de tráfego",
        "Atendimento técnico especializado 24/7 com engenharia própria",
      ],
      ctaText: "Conhecer o Monitoramento NOC 24/7",
      iconName: "Activity",
      targetAudience: "Operações críticas 24/7, saúde, segurança e grandes corporações",
    },
  ],

  plans: [
    {
      id: "plano-entrada",
      name: "Entrada",
      badge: "BASE ESSENCIAL",
      highlighted: false,
      audience: "Pequenas operações, escritórios e equipes comerciais iniciando a estruturação da sua telefonia.",
      price: "286",
      period: "/ mês",
      priceNote: "Plano estruturado sem cobrança de minutos excedentes",
      headlineResult: "Sua ligação passa a ser atendida com muito mais frequência pelos clientes.",
      objectionTreatment: "Sem surpresas no fim do mês: plano estruturado sem cobrança oculta por minuto.",
      valueProposition: "Telefonia em nuvem corporativa com identificador local para chamadas com DDD da região do cliente, ramais digitais em softphone e gravação básica para segurança operacional.",
      features: [
        "Telefonia em Nuvem de Alta Disponibilidade",
        "Identificador Local Inteligente (DDD do cliente)",
        "Voz corporativa estruturada sem tarifação por minuto",
        "Gravação de chamadas para controle e segurança",
        "Ramais virtuais para uso em computadores e celulares",
        "Suporte técnico especializado",
      ],
      ctaText: "Selecionar Plano Entrada",
    },
    {
      id: "plano-crescimento",
      name: "Crescimento",
      badge: "MAIS VENDIDO",
      highlighted: true,
      audience: "Empresas em expansão, distribuidores e equipes de vendas ativas que necessitam unificar voz e WhatsApp.",
      price: "536",
      period: "/ mês",
      priceNote: "Melhor relação custo-benefício para equipes em escala",
      headlineResult: "Sua equipe atende telefone e WhatsApp oficial no mesmo painel, sem perder o histórico do cliente.",
      objectionTreatment: "Você não precisa contratar e gerenciar dois sistemas separados para voz e mensagens.",
      valueProposition: "Pacote consolidado com mais ramais simultâneos, número oficial de WhatsApp centralizado para múltiplos atendentes, URA inteligente com roteamento ágil e gravação completa em nuvem.",
      features: [
        "Tudo incluso no Plano Entrada",
        "WhatsApp Corporativo Centralizado (múltiplos atendentes em 1 número)",
        "URA Dinâmica e Atendimento Inteligente (sem menus robóticos longos)",
        "Ampliação de ramais simultâneos para equipes maiores",
        "Painel gerencial de filas e tempo médio de resposta",
        "Suporte prioritário com SLA ágil",
      ],
      ctaText: "Selecionar Plano Crescimento",
    },
    {
      id: "plano-avancado",
      name: "Avançado",
      badge: "ALTA PERFORMANCE",
      highlighted: false,
      audience: "Operações consolidadas, centrais de suporte, contact centers e médias empresas com múltiplos departamentos.",
      price: "986",
      period: "/ mês",
      priceNote: "Para operações com alta demanda e múltiplos departamentos",
      headlineResult: "Controle total da jornada de comunicação com métricas gerenciais e integração ao seu CRM.",
      objectionTreatment: "A integração não exige meses de desenvolvimento nem paralisação da sua infraestrutura.",
      valueProposition: "Plataforma completa de comunicação corporativa com relatórios avançados de produtividade, integração a ERPs/CRMs, filas de atendimento inteligente com distribuição automática (DAC) e monitoramento de tráfego.",
      features: [
        "Tudo incluso no Plano Crescimento",
        "Integração nativa com CRMs de mercado e sistemas ERP",
        "Roteamento inteligente de chamadas por departamento e nível de prioridade",
        "Relatórios gerenciais avançados e auditoria de produtividade",
        "Armazenamento estendido de gravações de voz e conversas de texto",
        "Monitoramento proativo de rede e SLA corporativo avançado",
      ],
      ctaText: "Selecionar Plano Avançado",
    },
    {
      id: "plano-enterprise",
      name: "Sob Medida / Enterprise",
      badge: "CUSTOMIZADO / GOVERNO & GRANDES CONTAS",
      highlighted: false,
      audience: "Grandes corporações, indústrias, redes com dezenas de filiais, prefeituras, autarquias e órgãos governamentais.",
      price: "Sob Medida",
      period: "",
      priceNote: "Dimensionamento de engenharia conforme Termo de Referência",
      headlineResult: "Engenharia de telecomunicações dedicada com disponibilidade contínua e compliance rigoroso.",
      objectionTreatment: "Sua instituição contrata diretamente com operadora autorizada ANATEL, com SLA contratual e atendimento a termos licitatórios.",
      valueProposition: "Projetos especiais de conectividade com entroncamentos STFC/SIP dedicados, faixas de numeração DDR sob medida, redundância geográfica entre datacenters, monitoramento NOC 24/7/365 e gerente de conta dedicado.",
      features: [
        "SLA Dedicado e Contratual com Monitoramento NOC 24/7",
        "Entroncamentos STFC e Faixas DDR Customizadas para Secretarias/Departamentos",
        "Infraestrutura com Redundância Geográfica em múltiplos Datacenters",
        "Integrações personalizadas com sistemas legados e plataformas de governo",
        "Relatórios de bilhetagem e auditoria para prestação de contas pública",
        "Consultor de engenharia e gerente de contas exclusivo",
      ],
      ctaText: "Falar com Consultor B2B / B2G",
    },
  ],

  platforms: [
    {
      title: "Cloud Voice Engine",
      subtitle: "Motor de Telefonia em Nuvem",
      description: "Infraestrutura de voz digital que gerencia todo o roteamento de chamadas com tecnologia de identificador local inteligente. Permite que as ligações ativas da sua empresa toquem no celular ou telefone fixo do cliente exibindo o DDD da cidade dele, garantindo o maior índice de completamento e atendimento do mercado.",
      icon: "Cpu",
    },
    {
      title: "PABX Virtual & Painel de Ramais",
      subtitle: "Central Telefônica Unificada",
      description: "Central virtual que unifica ramais em escritórios, filiais e trabalho remoto. Acessível via navegador ou aplicativos para smartphone (iOS e Android) e computadores (Windows e Mac), viabilizando ligações internas com custo zero, conferências de voz e transferência direta de chamadas.",
      icon: "Server",
    },
    {
      title: "Atendimento Inteligente & URA Ágil",
      subtitle: "Módulo de Triagem Dinâmica",
      description: "Módulo de triagem e direcionamento de chamadas que elimina menus robóticos lentos e labirintos de opções. Permite configurar saudações personalizadas, regras por horário comercial ou de plantão e distribuição automática de chamadas para atendentes livres.",
      icon: "Bot",
    },
    {
      title: "Central Omnichannel & WhatsApp Oficial",
      subtitle: "API Oficial com Histórico Centralizado",
      description: "Plataforma de mensagens que integra a API Oficial do WhatsApp para múltiplos atendentes no mesmo número institucional. Centraliza histórico de mensagens, padroniza respostas rápidas, organiza departamentos e impede o uso de celulares particulares dos colaboradores.",
      icon: "MessageSquare",
    },
    {
      title: "Cofre de Gravação e Auditoria em Nuvem",
      subtitle: "Armazenamento Criptografado",
      description: "Módulo de segurança com armazenamento criptografado de 100% das chamadas telefônicas. Oferece busca rápida por data, hora, ramal, número do cliente e tempo de duração, viabilizando downloads seguros para auditoria, controle de qualidade e proteção jurídica.",
      icon: "Lock",
    },
    {
      title: "Painel de Gestão, Relatórios e Métricas",
      subtitle: "Dashboard em Tempo Real",
      description: "Dashboard gerencial com visualização em tempo real de indicadores-chave de comunicação: taxa de completamento, volume de chamadas ativas/receptivas, tempo médio de atendimento (TMA), ligações perdidas e produtividade individual por ramal.",
      icon: "BarChart3",
    },
  ],

  hardwareList: [
    {
      title: "Telefones IP Corporativos",
      description: "Aparelhos de mesa com visor digital, áudio HD e viva-voz de alta clareza para recepções, diretorias e estações de trabalho intensivo.",
      brands: "Grandstream • Fanvil • Khomp",
    },
    {
      title: "Headsets Profissionais",
      description: "Equipamentos com cancelamento ativo de ruído ambiente, conexão USB/RJ e conforto ergonômico para equipes de teleatendimento e operações comerciais.",
      brands: "Plantec • Homologados",
    },
    {
      title: "Gateways e ATAs",
      description: "Interfaces para conversão de linhas analógicas legadas e integração com sistemas legados da empresa.",
      brands: "Aligera • Khomp",
    },
    {
      title: "Softphones Multiplataforma",
      description: "Aplicativos de ramal virtual homologados para instalação rápida em notebooks, desktops e smartphones, garantindo mobilidade total a custo zero de hardware.",
      brands: "Windows • Mac • iOS • Android",
    },
  ],

  activationSteps: [
    {
      number: "01",
      title: "Diagnóstico Técnico & Alinhamento",
      description: "Entendemos o volume de chamadas, o número de ramais e as ferramentas que sua empresa já utiliza (CRM, WhatsApp, ERP), indicando o plano exato para sua operação.",
    },
    {
      number: "02",
      title: "Configuração & Homologação em Nuvem",
      description: "Nossa engenharia provisiona os ramais, estrutura o fluxo de atendimento inteligente e realiza a portabilidade numérica das suas linhas com conformidade regulatória.",
    },
    {
      number: "03",
      title: "Migração Assistida com Treinamento",
      description: "Ativamos a nova operação de forma assistida, sem nenhuma interrupção nas suas linhas telefônicas atuais, e treinamos sua equipe para uso imediato das plataformas.",
    },
  ],

  governmentAdvantages: [
    {
      number: "01",
      title: "Expertise e Compliance Regulatória no Setor Público",
      description: "Amplo domínio dos ritos e exigências da administração pública. Nossas contratações e propostas atendem integralmente à Lei nº 14.133/2021 (Nova Lei de Licitações), aos termos de referência técnicos e à regulamentação da ANATEL.",
    },
    {
      number: "02",
      title: "Soluções Inovadoras e Agilidade na Implementação",
      description: "Equipe de engenharia focada na implantação ágil e na transição assistida de tecnologias legadas. Garantimos portabilidade numérica sem risco de interrupção nas linhas institucionais da entidade.",
    },
    {
      number: "03",
      title: "Conectividade Segura e Alta Disponibilidade",
      description: "Infraestrutura de alta robustez com redundância física e lógica em múltiplos datacenters. Garantia de comunicação estável para setores críticos como saúde, ouvidoria, defesa civil e segurança pública.",
    },
    {
      number: "04",
      title: "Suporte Técnico Dedicado e Monitoramento NOC 24/7",
      description: "Centro de Operações de Rede com monitoramento ininterrupto e SLA formal de atendimento. Equipe própria capacitada para resolver demandas de alta prioridade com total agilidade.",
    },
    {
      number: "05",
      title: "Plataforma Integrada de Atendimento ao Cidadão (Omnichannel)",
      description: "Unificação dos canais de comunicação com a população. Telefone fixo, URA inteligente e WhatsApp oficial integrados em uma plataforma com protocolos de atendimento auditáveis.",
    },
    {
      number: "06",
      title: "Parcerias Tecnológicas Homologadas e Comprovadas",
      description: "Arquitetura técnica integrada aos principais fabricantes mundiais de telecomunicações (Khomp, 3CX, Fanvil, Grandstream, Aligera e Plantec), garantindo estabilidade e longevidade dos sistemas.",
    },
  ],

  units: [
    {
      id: "matriz-bh",
      city: "Belo Horizonte",
      state: "MG",
      type: "Matriz e Centro de Engenharia de Rede (NOC Central)",
      description: "Sede administrativa e operacional da Mundo Telecom. Abriga o Centro de Operações de Rede (NOC Central), a equipe principal de suporte técnico consultivo e o laboratório de engenharia e homologação de plataformas.",
      address: "Rua Hermilo Alves, 66, 2º Andar, Santa Tereza",
      cep: "31010-070",
      phone: "(31) 2552-1919",
      hours: "Comercial: Seg a Sex, das 08h às 18h | Suporte NOC: Operação Contínua 24/7/365",
      badge: "Sede Principal & NOC",
    },
    {
      id: "filial-bsb",
      city: "Brasília",
      state: "DF",
      type: "Filial de Relações Institucionais e Setor Público",
      description: "Polo estratégico para relacionamento institucional, suporte especializado a contratações públicas, licitações e atendimento a autarquias, ministérios e órgãos governamentais de esferas municipal, estadual e federal.",
      address: "Edifício Oscar Niemeyer, Sala 1001, Bloco D, Lote 3, Quadra 2, SCS",
      cep: "70316-900",
      phone: "(31) 2552-1919",
      hours: "Segunda a Sexta, das 08h às 18h",
      badge: "Polo Governamental (B2G)",
    },
    {
      id: "filial-sp",
      city: "São Paulo",
      state: "SP",
      type: "Filial Comercial e Grandes Contas Corporativas",
      description: "Unidade comercial voltada ao atendimento de médias e grandes empresas privadas, centros de distribuição, redes de varejo e indústrias, com equipe de consultoria comercial e arquitetura de soluções corporativas.",
      address: "Rua Funchal, 203, Conjunto 91, Vila Olímpia",
      cep: "04551-904",
      phone: "(31) 2552-1919",
      hours: "Segunda a Sexta, das 08h às 18h",
      badge: "Grandes Contas (B2B)",
    },
  ],

  caseStudies: [
    {
      client: "Macrocont",
      segment: "Serviços Contábeis & Consultoria",
      tag: "PABX em Nuvem + WhatsApp",
      description: "Modernizou sua infraestrutura de comunicação com PABX em Nuvem e integração ao WhatsApp, centralizando o atendimento de todas as suas unidades e obtendo relatórios gerenciais precisos para otimizar o tempo de resposta aos seus clientes.",
      stats: "Centralização de 100% dos canais e redução drástica do tempo de espera",
      image: "/images/fotos-cases/macrocont.png",
      authorName: "Diretoria de Operações",
      authorRole: "Gestão & Tecnologia",
    },
    {
      client: "PlurisMídia",
      segment: "Contact Center & Comunicação",
      tag: "Voz em Alta Escala & NOC",
      description: "Implementação de infraestrutura de alta capacidade e monitoramento contínuo de tráfego de voz, garantindo disponibilidade ininterrupta para operações de contato em larga escala com SLA rigoroso.",
      stats: "Disponibilidade 99.98% em ambiente de alta criticidade",
      image: "/images/fotos-cases/pluris-midia.png",
      authorName: "Gerência de Infraestrutura",
      authorRole: "Telecom & NOC",
    },
    {
      client: "Grupo Via",
      segment: "Varejo & Distribuição",
      tag: "+100 Estabelecimentos Conectados",
      description: "Integração completa da rede de telefonia corporativa de mais de 100 estabelecimentos do grupo, com centralização de ramais e redução expressiva dos custos operacionais de comunicação interna e externa.",
      stats: "Economia estimada de 40% em custos recorrentes de voz",
      image: "/images/fotos-cases/grupo-via.png",
      authorName: "Gestão Corporativa",
      authorRole: "Rede de Unidades",
    },
    {
      client: "Caixa Econômica Federal",
      segment: "Instituição Financeira & Setor Público",
      tag: "Telefonia para 3 Call Centers & +400 Agências",
      description: "Fornecemos serviços de telefonia para 3 call centers (DF, SP, RJ) e mais de 400 agências em todo o Brasil, garantindo comunicação eficiente e confiável.",
      stats: "3 call centers nacionais (DF, SP, RJ) e +400 agências conectadas",
      image: "/images/fotos-cases/caixa-economica.png",
      authorName: "Operações de Atendimento",
      authorRole: "Infraestrutura de Telecom",
    },
  ],

  partners: [
    { name: "3CX", description: "Plataforma de comunicação unificada global", category: "Software PABX" },
    { name: "Khomp", description: "Líder em hardware, gateways de alta densidade e telefonia", category: "Hardware & Gateways" },
    { name: "Fanvil", description: "Fabricante global de telefones IP corporativos de alta fidelidade", category: "Terminais IP" },
    { name: "Grandstream", description: "Soluções completas de endpoints de voz e vídeo SIP", category: "Terminais IP" },
    { name: "Aligera", description: "Equipamentos de telecomunicações e appliances de conversão", category: "Infraestrutura" },
    { name: "Plantec", description: "Distribuidora e tecnologia de áudio e telecomunicações", category: "Áudio & Headsets" },
  ],

  faqContact: [
    {
      question: "A Mundo Telecom atende empresas fora dos estados de MG, SP e DF?",
      answer: "Sim. Como operadora autorizada pela ANATEL com infraestrutura em nuvem e cobertura nacional, atendemos empresas privadas e órgãos públicos em todos os estados e municípios do Brasil, com ativação ágil e suporte remoto 24/7.",
    },
    {
      question: "Minha empresa perde as linhas telefônicas atuais durante a migração?",
      answer: "Não. Realizamos a portabilidade numérica regulamentada de forma totalmente assistida e programada. Suas linhas continuam funcionando sem interrupção durante todo o processo de transição.",
    },
    {
      question: "Como recebo a proposta e o dimensionamento do meu plano?",
      answer: "Após o preenchimento do formulário ou contato telefônico, nosso especialista técnico realiza um breve diagnóstico para entender seu volume de ligações e ferramentas em uso, emitindo uma proposta clara e transparente em poucas horas.",
    },
    {
      question: "Como órgãos públicos podem solicitar cotação ou termo de referência?",
      answer: "Órgãos governamentais podem encaminhar solicitações de proposta, editais ou termos de referência diretamente para o e-mail atendimento@mundotelecom.com.br ou entrar em contato com nossa filial de Brasília para suporte técnico especializado em licitações.",
    },
  ],

  blogCategories: [
    { name: "Todos os Artigos", slug: "todos" },
    { name: "Telefonia Corporativa & Produtividade B2B", slug: "telefonia-corporativa" },
    { name: "Setor Público & Governança B2G", slug: "setor-publico" },
    { name: "Atendimento Inteligente & WhatsApp", slug: "atendimento-omnichannel" },
    { name: "Infraestrutura, Redes & SLA", slug: "infraestrutura-redes" },
  ],

  blogPosts: [
    {
      slug: "por-que-clientes-nao-atendem-ligacoes-ddd-local",
      title: "Por que seus clientes não atendem suas ligações: o impacto do DDD local na taxa de completamento",
      category: "Telefonia Corporativa & Produtividade B2B",
      categorySlug: "telefonia-corporativa",
      readTime: "5 min de leitura",
      publishDate: "12 de Agosto de 2026",
      summary: "Entenda como as chamadas originadas com DDD de fora da região do destinatário reduzem drasticamente as vendas e como a tecnologia de identificador local reverte esse cenário.",
      topics: [
        "O comportamento do consumidor moderno diante de números desconhecidos",
        "O que é taxa de completamento e por que ela afeta o faturamento da sua equipe comercial",
        "Como funciona a inteligência de identificador local em tempo real",
        "Passo a passo para configurar rotas de voz eficientes sem aumentar o custo da linha",
      ],
      content: {
        intro: "No ambiente comercial contemporâneo, a taxa de atendimento de chamadas ativas tornou-se um dos principais gargalos de produtividade para equipes de vendas e cobrança. Quando um cliente em potencial visualiza uma ligação com código de área (DDD) desconhecido ou de outro estado, a taxa de rejeição ultrapassa 75%.",
        sections: [
          {
            heading: "1. O Comportamento do Consumidor Diante de Números Desconhecidos",
            body: [
              "Com o aumento exponencial de chamadas automatizadas indesejadas e spams telefônicos, o consumidor brasileiro desenvolveu um filtro defensivo imediato: qualquer chamada que não apresente o código de área da sua própria cidade ou região metropolitana é sumariamente ignorada.",
              "Para uma operação comercial sediada em Belo Horizonte ou São Paulo que precisa contatar clientes no interior do Paraná ou na Bahia, esse comportamento resulta em milhares de horas de discagem desperdiçadas todos os meses.",
            ],
            highlightBox: "Pesquisas de mercado indicam que chamadas identificadas com o DDD local da região do destinatário apresentam uma taxa de atendimento até 3,5 vezes superior às ligações de longa distância tradicionais.",
          },
          {
            heading: "2. O Que é Taxa de Completamento e Seu Impacto no Faturamento",
            body: [
              "A taxa de completamento mede a proporção de chamadas originadas que efetivamente tocam o terminal de destino e são atendidas com sucesso. Uma baixa taxa de completamento degrada o moral dos consultores comerciais e eleva o custo de aquisição de clientes (CAC).",
              "Ao utilizar troncos de voz convencionais sem identificação inteligente, empresas costumam culpar o roteiro de vendas ou o lead gerado, quando a causa real é a barreira técnica no momento da chamada.",
            ],
          },
          {
            heading: "3. Como Funciona a Tecnologia de Identificador Local em Tempo Real",
            body: [
              "A solução de Telefonia em Nuvem da Mundo Telecom incorpora o roteamento dinâmico com identificador local. Quando o seu atendente disca para um número com DDD 41, o sistema automaticamente encaminha a chamada através de uma rota que exibe um número válido de Curitiba no visor do cliente.",
              "Caso o cliente retorne a ligação mais tarde, o sistema reconhece o chamador e transfere imediatamente a chamada de volta para o ramal do atendente responsável, garantindo a continuidade do relacionamento comercial.",
            ],
            bulletPoints: [
              "Exibição dinâmica do DDD da cidade do cliente em frações de segundo",
              "Retorno inteligente de chamadas direto para a carteira do vendedor",
              "Sem necessidade de contratar centenas de planos locais fragmentados",
              "Total conformidade com os regulamentos da ANATEL para prestação STFC",
            ],
          },
        ],
      },
      cta: {
        text: "Quer aumentar o atendimento das suas ligações ativas com identificador local?",
        buttonText: "Fale com um Especialista",
        href: "/contato",
      },
    },
    {
      slug: "tarifacao-por-minuto-vs-voz-corporativa-estruturada",
      title: "Tarifação por minuto vs. Voz corporativa estruturada: como acabar com surpresas na fatura de telefone",
      category: "Telefonia Corporativa & Produtividade B2B",
      categorySlug: "telefonia-corporativa",
      readTime: "6 min de leitura",
      publishDate: "08 de Agosto de 2026",
      summary: "Descubra por que as contas de telefone variam tanto de um mês para o outro e como migrar para contratos com custos previsíveis e transparentes.",
      topics: [
        "As armadilhas das tarifas fragmentadas por minuto e excedentes contratuais",
        "O impacto financeiro da imprevisibilidade no orçamento anual de TI",
        "Vantagens do modelo de voz corporativa estruturada sem cobranças ocultas",
        "Checklist para auditar a sua fatura de telefonia atual antes de renovar contratos",
      ],
      content: {
        intro: "A imprevisibilidade de custos na telefonia corporativa é um desafio histórico para diretores financeiros e gestores de TI. Faturas que flutuam de R$ 3.000 a R$ 12.000 de um mês para outro impedem um planejamento orçamentário seguro.",
        sections: [
          {
            heading: "1. As Armadilhas da Tarifação Tradicional por Minuto",
            body: [
              "O modelo legado das operadoras convencionais baseia-se em tarifas fracionadas complexas: minutos para móvel local, móvel longa distância, fixo interurbano e taxas de conexão. Pequenos picos operacionais geram cobranças abusivas de minutos excedentes.",
              "Além disso, relatórios de bilhetagem obscuros tornam a conferência manual de milhares de linhas uma tarefa quase impossível para os departamentos de auditoria interna.",
            ],
          },
          {
            heading: "2. O Conceito de Voz Corporativa Estruturada",
            body: [
              "A Mundo Telecom estabeleceu o modelo de planos corporativos estruturados com valor fixo e transparente. A sua empresa contrata a capacidade de ramais e canais simultâneos que sua operação realmente precisa, eliminando a ansiedade sobre o tempo de duração de cada chamada.",
            ],
            highlightBox: "Previsibilidade orçamentária é mais do que economia: é a garantia de que sua equipe comercial pode ligar quantas vezes forem necessárias sem receio de penalidades na fatura.",
          },
        ],
      },
      cta: {
        text: "Calcule quanto sua empresa pode economizar com custos previsíveis.",
        buttonText: "Falar com um Consultor Técnico",
        href: "/contato",
      },
    },
    {
      slug: "telefonia-setor-publico-lei-14133-licitacoes-stfc",
      title: "Telefonia no Setor Público: como a Nova Lei de Licitações (Lei 14.133/2021) impacta a contratação de STFC e Nuvem",
      category: "Setor Público & Governança B2G",
      categorySlug: "setor-publico",
      readTime: "7 min de leitura",
      publishDate: "28 de Julho de 2026",
      summary: "Guia prático para gestores públicos elaborarem termos de referência seguros, cumprindo os critérios técnicos da ANATEL e exigências legais.",
      topics: [
        "Principais exigências de qualificação técnica para operadoras de telecomunicações",
        "A importância da licença direta ANATEL para evitar nulidade e riscos jurídicos",
        "Como estruturar acordos de nível de serviço (SLA) para serviços públicos essenciais",
        "Modelos de transição assistida para não paralisar o atendimento à população",
      ],
      content: {
        intro: "A entrada em vigor definitivo da Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021) trouxe novos parâmetros para a contratação de serviços de telecomunicações por órgãos municipais, estaduais e federais.",
        sections: [
          {
            heading: "1. Qualificação Técnica e Licenciamento ANATEL Inegociável",
            body: [
              "Um dos erros mais graves na formulação de editais é a aceitação de empresas que atuam como meras revendas de minutos sem outorga formal da ANATEL. Isso gera insegurança jurídica e risco de paralisação abrupta dos serviços por medidas regulatórias.",
              "A contratação direta com operadora autorizada STFC assegura a validade dos registros, a custódia legal das faixas de numeração DDR e o cumprimento de obrigações de sigilo e defesa civil.",
            ],
            highlightBox: "A Mundo Telecom possui mais de duas décadas de atuação e outorga plena da ANATEL, cumprindo todos os requisitos de qualificação econômico-financeira e técnica para processos licitatórios.",
          },
          {
            heading: "2. SLA e Continuidade em Serviços Críticos",
            body: [
              "Para prefeituras, câmaras municipais, ouvidorias e órgãos de saúde pública, a telefonia é a linha de frente do cidadão. Acordos de SLA devem prever tempo de resposta imediato pelo NOC 24/7 e redundância física de troncos.",
            ],
          },
        ],
      },
      cta: {
        text: "Precisa de apoio técnico para dimensionar sua demanda pública?",
        buttonText: "Conhecer Soluções para Governo",
        href: "/servicos",
      },
    },
    {
      slug: "valor-juridico-gravacao-de-chamadas-compliance",
      title: "O valor jurídico da gravação de chamadas: proteção para empresas e conformidade para o setor público",
      category: "Infraestrutura, Redes & SLA",
      categorySlug: "infraestrutura-redes",
      readTime: "5 min de leitura",
      publishDate: "20 de Julho de 2026",
      summary: "Por que depender de acordos verbais sem registro expõe sua operação a litígios comerciais e como o armazenamento em nuvem criptografado resolve esse problema.",
      topics: [
        "O custo invisível das contestações de pedidos e desacordos comerciais",
        "A validade jurídica de registros de áudio gravados em conformidade com a LGPD",
        "Critérios técnicos de armazenamento: segurança, redundância e ferramentas de busca rápida",
        "Como transformar gravações em material rico para treinamento e controle de qualidade",
      ],
      content: {
        intro: "Em qualquer negociação comercial ou atendimento ao público, divergências sobre o que foi dito ou acordado podem custar indenizações, cancelamentos contratuais e desgaste de reputação. Gravar 100% das chamadas com custódia segura é um mecanismo indispensável de governança.",
        sections: [
          {
            heading: "1. Proteção Jurídica e Validade Probatória",
            body: [
              "Gravações de áudio armazenadas em nuvem com logs de data, hora, duração e identificação dos participantes possuem alto valor comprobatório em juízo ou mediações administrativas.",
              "A solução de gravação da Mundo Telecom armazena os arquivos em datacenters seguros com criptografia e ferramentas de busca avançada por ramal, número do cliente e período.",
            ],
          },
        ],
      },
      cta: {
        text: "Proteja sua operação com histórico 100% gravado e auditável.",
        buttonText: "Ativar Gravação de Chamadas",
        href: "/produtos",
      },
    },
    {
      slug: "pabx-fisico-vs-pabx-em-nuvem-migracao",
      title: "PABX Físico vs. PABX em Nuvem: hora de desligar a central telefônica tradicional?",
      category: "Telefonia Corporativa & Produtividade B2B",
      categorySlug: "telefonia-corporativa",
      readTime: "6 min de leitura",
      publishDate: "10 de Julho de 2026",
      summary: "Comparativo técnico e financeiro entre a manutenção de centrais legadas obsoletas e a flexibilidade de ramais digitais com mobilidade total.",
      topics: [
        "Custos reais de manter um PABX físico (peças, energia, manutenção e limitações)",
        "Como a telefonia em nuvem integra matriz, filiais e home office a custo zero",
        "Tempo de implantação e processo de portabilidade sem perda de numeração DDR",
        "Análise de retorno sobre investimento (ROI) na substituição da infraestrutura",
      ],
      content: {
        intro: "Centrais telefônicas físicas instaladas em racks de TI representam um custo contínuo de manutenção, vulnerabilidade a queima de placas e incapacidade de atender equipes que trabalham em regime híbrido ou remoto.",
        sections: [
          {
            heading: "1. Fim dos Servidores Físicos e das Peças de Reposição",
            body: [
              "Com o PABX em Nuvem da Mundo Telecom, toda a inteligência da central reside em datacenters redundantes. Seus colaboradores atendem e transferem ramais pelo computador, smartphone ou aparelho IP sem necessidade de cabos proprietários.",
            ],
          },
        ],
      },
      cta: {
        text: "Modernize sua central telefônica sem adquirir novos aparelhos físicos.",
        buttonText: "Conhecer nosso PABX em Nuvem",
        href: "/produtos",
      },
    },
    {
      slug: "whatsapp-oficial-vs-celulares-pessoais-riscos-corporativos",
      title: "WhatsApp Oficial vs. WhatsApp em celulares pessoais: os riscos que sua empresa corre sem centralização",
      category: "Atendimento Inteligente & WhatsApp",
      categorySlug: "atendimento-omnichannel",
      readTime: "5 min de leitura",
      publishDate: "02 de Julho de 2026",
      summary: "Os impactos negativos do atendimento disperso em celulares particulares de vendedores e as vantagens da API Oficial com histórico centralizado.",
      topics: [
        "Riscos trabalhistas e de vazamento de dados de clientes ao usar números pessoais",
        "O que acontece com as conversas quando um colaborador se desliga da empresa",
        "Múltiplos atendentes em um único número oficial de WhatsApp: como funciona na prática",
        "Integração de filas de WhatsApp com telefonia de voz em um painel gerencial unificado",
      ],
      content: {
        intro: "Permitir que colaboradores atendam clientes em seus celulares particulares representa um risco severo para a segurança da informação, conformidade com a LGPD e retenção da carteira de clientes em casos de desligamento.",
        sections: [
          {
            heading: "1. A Propriedade da Informação e dos Contatos",
            body: [
              "Com a integração à API Oficial do WhatsApp pela Mundo Telecom, a base de clientes e o histórico de mensagens permanecem em posse da empresa em um painel seguro, mesmo com múltiplos atendentes atuando simultaneamente.",
            ],
          },
        ],
      },
      cta: {
        text: "Centralize o WhatsApp da sua empresa com segurança institucional.",
        buttonText: "Conhecer nossa Integração Omnichannel",
        href: "/servicos",
      },
    },
    {
      slug: "por-que-monitoramento-noc-24-7-essencial-operacoes-criticas",
      title: "Por que o monitoramento NOC 24/7 é essencial para operações corporativas e públicas críticas",
      category: "Infraestrutura, Redes & SLA",
      categorySlug: "infraestrutura-redes",
      readTime: "5 min de leitura",
      publishDate: "25 de Junho de 2026",
      summary: "A diferença entre agir reativamente após a reclamação do usuário e atuar de forma preditiva com monitoramento de rede ininterrupto.",
      topics: [
        "Como a latência, jitter e perda de pacotes degradam a qualidade da voz",
        "O papel do Centro de Operações de Rede (NOC) na identificação preventiva de falhas",
        "SLA formal de tempo de resposta vs. suporte genérico de operadoras tradicionais",
        "Boas práticas de contingência e rotas redundantes para telecomunicações",
      ],
      content: {
        intro: "Descobrir que um tronco de comunicação caiu através da reclamação de um cliente insatisfeito ou de um munícipe sem atendimento emergencial é inadmissível em operações de alto nível.",
        sections: [
          {
            heading: "1. Monitoramento Ativo e Prevenção de Gargalos",
            body: [
              "O Centro de Operações de Rede (NOC) da Mundo Telecom supervisiona constantemente métricas de jitter, latência e disponibilidade dos links de voz, realizando correções de rota antes que qualquer usuário perceba oscilações.",
            ],
          },
        ],
      },
      cta: {
        text: "Garanta alta disponibilidade com suporte técnico próprio 24/7.",
        buttonText: "Falar com Nossos Engenheiros",
        href: "/contato",
      },
    },
    {
      slug: "ouvidoria-atendimento-ao-cidadao-modernizacao-prefeituras",
      title: "Ouvidoria e Atendimento ao Cidadão em regime 24/7: como prefeituras estão modernizando canais públicos",
      category: "Setor Público & Governança B2G",
      categorySlug: "setor-publico",
      readTime: "6 min de leitura",
      publishDate: "15 de Junho de 2026",
      summary: "Como a integração entre URA inteligente, telefonia digital e WhatsApp oficial reduz filas e eleva a satisfação do munícipe.",
      topics: [
        "Os principais gargalos nas centrais de atendimento telefônico de órgãos municipais",
        "Triagem automática de demandas com direcionamento ágil por secretarias",
        "Geração automática de protocolos auditáveis para prestação de contas e ouvidoria",
        "Estudo de caso: como a estabilidade de telecomunicações melhora os serviços essenciais",
      ],
      content: {
        intro: "A modernização dos canais de atendimento ao cidadão é uma prioridade estratégica para prefeituras e órgãos públicos municipais que buscam eficiência, desburocratização e conformidade com os princípios da administração pública.",
        sections: [
          {
            heading: "1. Integração entre Voz, URA e WhatsApp com Protocolo Único",
            body: [
              "Ao unificar a telefonia fixa STFC com URA dinâmica e atendimento via WhatsApp oficial, secretarias de saúde, fazenda e ouvidorias reduzem o tempo de espera do munícipe e emitem protocolos auditáveis instantaneamente.",
            ],
          },
        ],
      },
      cta: {
        text: "Leve modernidade e transparência para a comunicação do seu município.",
        buttonText: "Consulte Nossos Especialistas em Governo",
        href: "/servicos",
      },
    },
  ],
};
