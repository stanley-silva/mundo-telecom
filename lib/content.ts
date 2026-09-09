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
  image?: string;
}

export interface Partner {
  name: string;
  description: string;
  category: string;
}

export interface CommercialSolution {
  id: string;
  number: string;
  name: string;
  shortName: string;
  tag: string;
  pillar: string;
  headline: string;
  subtitle: string;
  description: string;
  benefits: string[];
  differentials: string[];
  ctaText: string;
  href: string;
  iconName: string;
  featured?: boolean;
}

export const siteContent = {
  brand: {
    name: "Mundo Telecom",
    wordmark: "mundo.",
    lockup: "TELECOM",
    slogan: "Empresa de Tecnologia com infraestrutura e solução própria",
    puv: "Transformamos a comunicação de empresas e órgãos públicos com telefonia inteligente, inteligência artificial e mensageria sobre infraestrutura própria — com URA de IA, rechamada automática e customer success.",
    keyPhrase: "Empresa de Tecnologia com infraestrutura e solução própria.",
    experienceYears: "+20 anos",
    anatelOutorgada: "Infraestrutura Própria & Outorga ANATEL (STFC & SCM)",
    phone0800: "0800 031 1919",
    phoneRegional: "(31) 2011-2000",
    email: "comercial@mundotelecom.com.br",
    whatsappNumber: "553120112000",
    whatsappDisplay: "(31) 2011-2000",
    whatsappUrl: "https://wa.me/553120112000?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20da%20Mundo%20Telecom%20sobre%20comunica%C3%A7%C3%A3o%20inteligente.",
    clientPortalUrl: "https://cliente.mundotelecom.com.br",
    cnpj: "07.403.266/0001-24",
    razaoSocial: "Mundo Telecomunicações e Informática Ltda.",
  },

  navigation: [
    { name: "Início", href: "/" },
    { name: "Quem Somos", href: "/sobre-nos" },
    { name: "Empresas (B2B)", href: "/empresas" },
    { name: "Governo (B2G)", href: "/governo" },
    { name: "Produtos & Planos", href: "/produtos" },
    { name: "Serviços", href: "/servicos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ],

  metrics: [
    { value: 20, prefix: "+", suffix: "Anos", label: "Tempo de Mercado", description: "Duas décadas de pioneirismo tecnológico, evolução contínua e solidez operacional." },
    { value: 60, prefix: "+", suffix: "Clientes", label: "Clientes Ativos", description: "Grandes corporações e órgãos públicos com comunicação crítica em produção." },
    { value: 4306, prefix: "", suffix: "Ramais", label: "Ramais no MPMG", description: "4.306 ramais operados no Ministério Público de Minas Gerais com 80 mil+ chamadas/mês." },
    { value: 99.95, prefix: "", suffix: "%", label: "Disponibilidade SLA", description: "SLA de 99,95% de disponibilidade com monitoramento proativo contínuo via NOC 24x7." },
  ],

  differentials: [
    {
      id: "tecnologia-ia",
      title: "Tecnologia & IA Aplicada",
      description: "Inteligência Artificial em produção no atendimento — não é promessa de futuro, é tecnologia ativa triando, respondendo e qualificando contatos 24 horas por dia.",
      icon: "Cpu",
    },
    {
      id: "rechamada-automatica",
      title: "Rechamada Automática: Nenhuma Chamada Perdida",
      description: "Se o cliente ligar e a fila estiver ocupada ou fora de horário, o sistema registra e realiza a rechamada de forma automática. O concorrente perde a chamada; nós a capturamos e retornamos.",
      icon: "PhoneCall",
    },
    {
      id: "comunicacoes-inteligentes",
      title: "Comunicações Inteligentes & Omnichannel",
      description: "Voz, WhatsApp oficial, mensageria inteligente e canais digitais unificados em uma única plataforma, eliminando a dispersão em aparelhos pessoais.",
      icon: "MessageSquare",
    },
    {
      id: "customer-success",
      title: "Compromisso de Customer Success",
      description: "Não somos fornecedor que vende e some. Acompanhamos a sua operação com suporte técnico consultivo e engenharia especializada até garantir o resultado.",
      icon: "ShieldCheck",
    },
    {
      id: "transformacao-digital",
      title: "Transformação Digital Sem Atrito",
      description: "Conduzimos sua empresa da telefonia tradicional e legada para a era digital com portabilidade assistida, zero perda de linhas e treinamento completo da equipe.",
      icon: "TrendingUp",
    },
    {
      id: "infraestrutura-propria",
      title: "Infraestrutura Própria & Solução Completa",
      description: "Base própria com outorga ANATEL que garante estabilidade jurídica e técnica, somada a um software completo de gestão, gravação e inteligência.",
      icon: "Award",
    },
  ],

  solutions: [
    {
      id: "pabx-nuvem",
      slug: "pabx-em-nuvem",
      categoryTag: "PRODUTO PRINCIPAL",
      title: "PABX na Nuvem com URA de IA & Rechamada Automática",
      shortTitle: "PABX na Nuvem",
      headline: "Nunca dá ocupado · Nenhuma chamada perdida · IA atende · Custo 100% previsível.",
      problemResolved: "Elimina ligações perdidas por filas cheias, centrais telefônicas físicas que quebram e faturas imprevisíveis com cobranças abusivas por minuto.",
      description: "Central telefônica virtual de alta disponibilidade com inteligência artificial integrada e rechamada automática exclusiva. Quando o cliente não consegue falar (pico de ligações ou fora de horário), o sistema registra o número e agenda o retorno automático. Integra matriz, filiais e home office em ramais digitais com áudio HD e custo zero de comunicação interna.",
      shortDescription: "Central telefônica virtual com URA de IA e rechamada automática. Nunca dá ocupado, nenhuma chamada perdida e custo fixo previsível para toda a sua equipe.",
      benefits: [
        "Rechamada automática exclusiva: o cliente não precisa ligar de novo se a linha estiver ocupada",
        "URA inteligente com IA para atendimento humanizado e roteamento imediato ao setor correto",
        "Ramais virtuais para uso em computadores, smartphones ou aparelhos IP sem fios proprietários",
        "Previsibilidade total de custos: sem tarifas ocultas ou sustos na fatura no final do mês",
      ],
      ctaText: "Conhecer PABX na Nuvem",
      iconName: "Cloud",
      targetAudience: "Empresas com equipes de atendimento, vendas e múltiplas unidades",
    },
    {
      id: "whatsapp-ia",
      slug: "whatsapp-atendimento-ia",
      categoryTag: "MENSAGERIA INTELIGENTE",
      title: "WhatsApp + IA: Atendimento Automático Inteligente",
      shortTitle: "WhatsApp + IA",
      headline: "Resposta 24h · Ninguém fica sem resposta · Múltiplos atendentes em 1 número oficial.",
      problemResolved: "Acaba com o atendimento disperso em celulares pessoais de funcionários, perda de conversas com clientes e demora de horas para enviar uma resposta.",
      description: "Plataforma de mensagens inteligentes integrada à API Oficial do WhatsApp. Permite que múltiplos colaboradores atendam simultaneamente no mesmo número institucional verificado, com inteligência artificial operando 24h por dia para triar pedidos, responder dúvidas frequentes e agendar contatos com total rastreabilidade.",
      shortDescription: "Atendimento automático inteligente no WhatsApp com múltiplos operadores em um único número oficial verificado e respostas imediatas 24 horas por dia.",
      benefits: [
        "Atendimento imediato 24/7 com IA: nenhum cliente fica aguardando resposta",
        "Múltiplos atendentes conversando ao mesmo tempo a partir de um só número verificado",
        "Histórico e base de contatos 100% sob custódia da empresa (conformidade LGPD)",
        "Distribuição automática de conversas por departamento e tempo de resposta monitorado",
      ],
      ctaText: "Ativar WhatsApp com IA",
      iconName: "MessageSquareText",
      targetAudience: "Equipes de vendas, suporte, SAC e recepção de empresas e órgãos públicos",
    },
    {
      id: "agendamento-online",
      slug: "agendamento-online-inteligente",
      categoryTag: "PRODUTIVIDADE & AUTOMAÇÃO",
      title: "Agendamento Online com Confirmação e Lembretes",
      shortTitle: "Agendamento Online",
      headline: "Menos faltas · Mais eficiência operacional · Confirmações automáticas por WhatsApp.",
      problemResolved: "Reduz drasticamente o índice de faltas (no-show) em consultas, reuniões comerciais e serviços agendados que geram ociosidade na equipe e prejuízo financeiro.",
      description: "Sistema integrado de agendamento online inteligente que sincroniza horários em tempo real e envia confirmações e lembretes automáticos para o cliente via WhatsApp e voz. O próprio cliente pode confirmar, remarcar ou cancelar em poucos cliques, liberando horários vagos de forma automática.",
      shortDescription: "Agenda com confirmação e lembretes automáticos por WhatsApp. Reduza faltas a reuniões e compromissos, aumentando a produtividade e o faturamento.",
      benefits: [
        "Queda expressiva nas taxas de não comparecimento (no-show) com lembretes programados",
        "Sincronização em tempo real de agendas de múltiplos especialistas e setores",
        "Confirmação ou remarcação rápida diretamente pelo WhatsApp do cliente",
        "Eliminação do trabalho manual repetitivo da equipe de recepção e secretariado",
      ],
      ctaText: "Automatizar Agendamentos",
      iconName: "Calendar",
      targetAudience: "Clínicas, consultorias, escritórios de advocacia, serviços e vendas consultivas",
    },
    {
      id: "outsourcing-telecom",
      slug: "outsourcing-comunicacao-gerenciada",
      categoryTag: "GESTÃO COMPLETA & SLA",
      title: "Outsourcing de Telecom & Comunicação Gerenciada",
      shortTitle: "Outsourcing de Telecom",
      headline: "Comunicação inteira na nossa conta com SLA · Um fornecedor · Uma fatura · Zero dor de cabeça.",
      problemResolved: "Acaba com o desgaste de gerenciar múltiplos fornecedores legados de telefonia, PABX, aparelhos e TI, sem saber a quem recorrer quando a comunicação falha.",
      description: "Assumimos a responsabilidade integral pela operação de comunicação da sua organização. Fornecemos plataforma, infraestrutura de voz, hardware homologado, monitoramento NOC 24/7 e suporte técnico dedicado. Um único parceiro de tecnologia com SLA auditável em contrato e fatura previsível.",
      shortDescription: "Sua comunicação sob gestão completa com SLA garantido: um único fornecedor, uma fatura consolidada e monitoramento técnico contínuo 24/7.",
      benefits: [
        "Um único ponto de contato responsável pela estabilidade de voz e mensagens",
        "Hardware homologado (telefones IP, headsets e switches) sem necessidade de imobilização",
        "Monitoramento contínuo NOC 24x7 com atendimento preventivo de incidentes",
        "SLA formalmente assegurado em contrato com relatórios gerenciais periódicos",
      ],
      ctaText: "Contratar Outsourcing",
      iconName: "ShieldAlert",
      targetAudience: "Médias e grandes empresas, redes de varejo, indústrias e setor público",
    },
    {
      id: "infraestrutura-stfc",
      slug: "infraestrutura-voz-stfc",
      categoryTag: "INFRAESTRUTURA PRÓPRIA",
      title: "Conectividade STFC & Faixas DDR (Outorga ANATEL)",
      shortTitle: "Infraestrutura STFC",
      headline: "Outorga direta ANATEL · Numeração DDR · Total conformidade à Lei 14.133/2021.",
      problemResolved: "Atende à exigência legal e regulatória de contratação direta com empresa detentora de outorga STFC, eliminando intermediários e garantindo validade jurídica.",
      description: "Como detentora de outorga própria da ANATEL para prestação de STFC (Serviço Telefônico Fixo Comutado), a Mundo Telecom entrega entroncamentos de alta densidade, faixas de numeração DDR e portabilidade numérica sem interrupção. Base sólida para órgãos governamentais e corporações com comunicação em escala.",
      shortDescription: "Entroncamentos digitais diretos com outorga ANATEL e faixas DDR flexíveis, garantindo segurança jurídica e continuidade para operações públicas e privadas.",
      benefits: [
        "Contratação direta sem intermediários (pleno atendimento à Lei 14.133/2021 de Licitações)",
        "Faixas de numeração DDR dedicadas para secretarias, comarcas e departamentos",
        "Alta resiliência para serviços de utilidade pública e canais de emergência",
        "Relatórios de bilhetagem técnica auditáveis para prestação de contas",
      ],
      ctaText: "Consultar Infraestrutura STFC",
      iconName: "Radio",
      targetAudience: "Órgãos Públicos, Autarquias, Ministérios e Grandes Corporações",
    },
    {
      id: "noc-monitoramento",
      slug: "noc-monitoramento-redes",
      categoryTag: "OPERAÇÃO CRÍTICA",
      title: "NOC 24/7 & Monitoramento Proativo de Rede",
      shortTitle: "NOC 24/7 Proativo",
      headline: "Supervisão ininterrupta 24/7/365 · 99,95% de disponibilidade garantida em SLA.",
      problemResolved: "Impede que falhas ou lentidões de rede sejam descobertas apenas quando um cliente ou usuário reclama, protegendo operações críticas.",
      description: "O Centro de Operações de Rede (NOC) da Mundo Telecom opera 24 horas por dia, 7 dias por semana, monitorando ativamente latência, jitter, perda de pacotes e consumo de tráfego. Nossa equipe de engenharia age preventivamente na identificação e correção de gargalos antes de qualquer impacto na ponta final.",
      shortDescription: "Monitoramento contínuo em regime 24/7/365 com resposta preventiva e garantia estrita de acordos de nível de serviço (SLA de 99,95%).",
      benefits: [
        "Ação preventiva antes de qualquer degradação perceptível na qualidade da chamada",
        "Garantia contratual de 99,95% de disponibilidade da plataforma",
        "Relatórios técnicos mensais de tráfego, volume e métricas de desempenho",
        "Equipe técnica própria disponível 24 horas por dia, sem robôs burocráticos no suporte",
      ],
      ctaText: "Conhecer o NOC 24/7",
      iconName: "Activity",
      targetAudience: "Operações 24/7, saúde, segurança, órgãos públicos e grandes empresas",
    },
  ],

  commercialSolutions: [
    {
      id: "omnichannel-ia-aikon",
      number: "01",
      name: "Omnichannel & IA (Plataforma AIkon)",
      shortName: "AIkon Omnichannel & IA",
      tag: "ATENDIMENTO",
      pillar: "Atendimento & IA",
      headline: "Centralize todos os canais de atendimento da sua empresa em uma única tela inteligente desenvolvida pela Mundo Telecom.",
      subtitle: "Plataforma própria AIkon, múltiplos atendentes em 1 número e triagem com IA.",
      benefits: [
        "Plataforma própria AIkon com autonomia e evolução contínua sem depender de terceiros",
        "Painel centralizado: Voz, WhatsApp, redes sociais e e-mail integrados em uma única tela",
        "Múltiplos atendentes em 1 só número oficial com distribuição ágil e controle de conversas",
        "Triagem com IA e Chatbots NLP para reduzir até 40% da carga manual e resolver dúvidas 24/7",
        "Linha do tempo integrada: o histórico acompanha o cliente mesmo alternando entre voz e mensagem",
        "Dashboards em tempo real com métricas de SLA, CSAT/NPS e integração via API com os principais CRMs",
      ],
      differentials: [
        "Plataforma proprietária desenvolvida pela Mundo Telecom com customização avançada e suporte sem intermediários",
        "Conexão nativa entre o PABX Mundo Telecom e a plataforma AIkon",
        "Conformidade absoluta com a LGPD com criptografia e mascaramento de dados sensíveis",
      ],
      ctaText: "Solicitar Demonstração da AIkon",
      href: "/solucoes/omnichannel-ia-aikon",
      iconName: "MessageSquareText",
      featured: true,
    },
    {
      id: "telefonia-corporativa-stfc",
      number: "02",
      name: "Telefonia Corporativa (Voz IP & STFC)",
      shortName: "Telefonia Voz IP & STFC",
      tag: "COMUNICAÇÃO CORPORATIVA",
      pillar: "Voz & Conectividade",
      headline: "Operadora oficial STFC com outorga direta ANATEL, áudio HD, portabilidade sem downtime e protocolo anti-fraude STIR/SHAKEN.",
      subtitle: "Rotas oficiais STFC, portabilidade sem downtime e protocolo STIR/SHAKEN.",
      description: "Somos operadora STFC licenciada pela ANATEL há mais de 20 anos. Garantimos rotas de voz corporativas de alta densidade, numeração própria, protocolo anti-fraude STIR/SHAKEN para aumentar sua taxa de atendimento (Answer Rate) e evitar marcação como SPAM, e planos sob medida com bilhetagem segundo a segundo.",
      benefits: [
        "Conexão STFC oficial licenciada pela ANATEL com segurança regulatória e numeração DDR própria",
        "Protocolo STIR/SHAKEN que autentica suas chamadas ativas e evita que sejam marcadas como SPAM",
        "Qualidade de voz HD cristalina com priorização de tráfego (QoS) configurada direto no backbone",
        "Portabilidade numérica assistida com zero downtime (sem interrupção de serviço)",
        "Tronco SIP (SIP Trunking) de alta capacidade compatível com todas as marcas de PABX do mercado",
        "Abrangência nacional com números 0800 e 400X para presença comercial em todo o Brasil",
      ],
      differentials: [
        "Mais de duas décadas de expertise e outorga direta da ANATEL sem intermediários",
        "Painel financeiro transparente com acompanhamento de consumo em tempo real",
      ],
      ctaText: "Consultar Telefonia STFC",
      href: "/solucoes/telefonia-corporativa-stfc",
      iconName: "PhoneCall",
      featured: false,
    },
    {
      id: "pabx-virtual-cloud",
      number: "03",
      name: "PABX Virtual — Cloud PABX",
      shortName: "PABX Virtual Cloud",
      tag: "COMUNICAÇÃO UNIFICADA (UCaaS)",
      pillar: "Voz & Nuvem",
      headline: "Central telefônica em nuvem com URA inteligente, ramais remotos em qualquer dispositivo e rechamada automática exclusiva.",
      subtitle: "URA inteligente, ramais virtuais, áudio HD e rechamada automática.",
      description: "Elimine custos com centrais físicas obsoletas. O PABX Virtual da Mundo Telecom interliga matriz, filiais e home office a custo zero de comunicação interna, com URA multinível humanizada, rechamada automática para não perder nenhum cliente em picos de ligação e cofre de gravações em nuvem para segurança jurídica.",
      benefits: [
        "Rechamada automática exclusiva: se a fila estiver cheia, o sistema registra e retorna automaticamente",
        "Ramais virtuais em computadores, smartphones ou telefones IP com chamadas internas gratuitas",
        "URA multinível dinâmica com menus objetivos para direcionamento ágil dos clientes",
        "Cofre de gravações em nuvem 100% auditável com busca avançada por data, ramal e atendente",
        "Filas de atendimento inteligentes com música de espera personalizada e relatórios ao vivo",
        "Gestão simplificada via painel web para adicionar e remanejar ramais em segundos",
      ],
      differentials: [
        "Modelo 100% OpEx sem necessidade de servidores locais ou contratos terceirizados de fiação",
        "99,95% de disponibilidade operacional com infraestrutura redundante e suporte consultivo contínuo",
      ],
      ctaText: "Conhecer PABX Virtual",
      href: "/solucoes/pabx-virtual-cloud",
      iconName: "Cloud",
      featured: true,
    },
    {
      id: "infraestrutura-rede-alta-disponibilidade",
      number: "04",
      name: "Infraestrutura de Redes — Alta Disponibilidade",
      shortName: "Infraestrutura de Redes",
      tag: "NETWORK",
      pillar: "Infraestrutura & Redes",
      headline: "Conectividade dedicada, redundância física e topologia em anel para operações críticas que não podem parar.",
      subtitle: "Links dedicados, redundância de rotas e SLA formal com monitoramento.",
      description: "Projetamos e operamos redes corporativas de alta performance com links dedicados simétricos, baixíssima latência e redundância física automática. Garantimos a continuidade operacional da sua matriz e filiais com hardware homologado e suporte de engenharia especializada.",
      benefits: [
        "SLA formal contratual de disponibilidade para manter sua empresa faturando sem interrupções",
        "Links dedicados com tráfego simétrico de upload e download com estabilidade de fibra óptica",
        "Redundância automática de circuitos e topologia em anel para prevenção contra rompimentos de fibra",
        "Interligação segura entre filiais e datacenters (VPN / SD-WAN) para tráfego corporativo blindado",
        "Substituição expressa de hardware corporativo inclusa sem custo adicional de aquisição",
      ],
      differentials: [
        "Engenharia de telecom própria e infraestrutura com múltiplos pontos de presença e redundância geográfica",
        "Atendimento consultivo e arquitetura dimensionada sob medida para o porte da sua organização",
      ],
      ctaText: "Falar com Engenheiro de Redes",
      href: "/solucoes/infraestrutura-rede-alta-disponibilidade",
      iconName: "Wrench",
      featured: false,
    },
    {
      id: "experiencia-cliente-cx-routing",
      number: "05",
      name: "Experiência do Cliente — Automação de Rotas (CX Routing)",
      shortName: "CX Routing & Automação",
      tag: "CUSTOMER EXPERIENCE",
      pillar: "Experiência do Cliente",
      headline: "Roteamento inteligente por habilidades e identificador de DDD local para entregar a melhor jornada de contato.",
      subtitle: "Skill-based routing, URA humanizada e identificador de DDD local.",
      description: "Transforme a experiência de quem entra em contato com sua empresa. Nosso motor de roteamento direciona o cliente automaticamente para o atendente mais preparado (Skill-based Routing), utiliza identificador de DDD local nas chamadas ativas para maximizar a taxa de atendimento e dispara pesquisas imediatas de CSAT e NPS.",
      benefits: [
        "Roteamento por habilidades (Skill-based Routing): o cliente certo no atendente especialista certo",
        "Aumento da resolução no primeiro contato (FCR) reduzindo transferências desnecessárias",
        "Identificador local inteligente: chamadas ativas com DDD da região do cliente para triplicar o atendimento",
        "Pesquisa de satisfação automatizada (CSAT e NPS) ao término de chamadas e mensagens",
        "Gestão de filas transparentes com aviso de posição e previsão de espera",
      ],
      differentials: [
        "Regras de negócio 100% customizáveis diretamente pelo gestor no painel de controle",
        "Integração nativa com CRMs para puxar dados do cliente antes mesmo do atendente dizer 'olá'",
      ],
      ctaText: "Otimizar Experiência do Cliente",
      href: "/solucoes/experiencia-cliente-cx-routing",
      iconName: "Zap",
      featured: false,
    },
    {
      id: "seguranca-compliance-cybersecurity",
      number: "06",
      name: "Segurança & Compliance — Cybersecurity",
      shortName: "Cybersecurity & Compliance",
      tag: "GOVERNANÇA DE DADOS",
      pillar: "Segurança & Governança",
      headline: "Blindagem contra fraudes telefônicas, cofre criptografado em nuvem e total conformidade com a LGPD.",
      subtitle: "Proteção contra fraudes em voz, cofre criptografado e conformidade LGPD.",
      description: "Proteja as comunicações e os dados confidenciais da sua organização. Fornecemos proteção ativa contra roubo de tráfego telefônico (Toll Fraud), cofre de gravações criptografado com logs de auditoria imutáveis e arquitetura rigorosamente alinhada às normas da LGPD.",
      benefits: [
        "Prevenção e bloqueio automático de fraudes telefônicas e consumo anômalo de tráfego de voz",
        "Cofre de gravação com criptografia de ponta a ponta e guarda segura para respaldo jurídico",
        "Trilhas de auditoria detalhadas registrando quem ouviu, baixou ou compartilhou cada áudio/mensagem",
        "Adequação plena à LGPD com anonimização de dados sensíveis e controle de retenção",
        "Gestão rigorosa de acessos com autenticação em duas etapas (2FA) e permissões por perfil",
      ],
      differentials: [
        "Solução estruturada para setores de alta criticidade (financeiro, saúde, jurídico e órgãos públicos)",
        "Relatórios técnicos preparados para auditorias internas e externas de compliance",
      ],
      ctaText: "Falar com Especialista em Segurança",
      href: "/solucoes/seguranca-compliance-cybersecurity",
      iconName: "Lock",
      featured: false,
    },
    {
      id: "gestao-servicos-ti-noc-itsm",
      number: "07",
      name: "Gestão de Serviços de TI — Operações ITSM (NOC 24/7)",
      shortName: "NOC 24/7 & ITSM",
      tag: "NOC 24/7",
      pillar: "Operações & Suporte",
      headline: "Centro de Operações de Rede com vigilância ininterrupta 24/7/365 e gestão proativa de incidentes.",
      subtitle: "Centro de Operações 24/7/365, SLA de atendimento e engenharia proativa.",
      description: "Deixe a vigilância da sua infraestrutura crítica com quem entende. Nosso NOC próprio monitora troncos de voz, circuitos de dados e servidores 24 horas por dia, 365 dias por ano, mitigando oscilações de forma proativa antes que sua equipe perceba.",
      benefits: [
        "Monitoramento contínuo ininterrupto (24 horas por dia, 7 dias por semana, 365 dias por ano)",
        "Detecção proativa de anomalias com acionamento imediato da equipe de engenharia",
        "Acordos de Nível de Serviço (SLA) formais para tempo de resposta e restabelecimento",
        "Relatórios executivos mensais de saúde técnica, volumetria e disponibilidade de circuitos",
        "Atendimento técnico especializado direto com engenheiros, sem robôs intermediários",
      ],
      differentials: [
        "NOC próprio sediado no Brasil com mais de duas décadas de experiência em telecomunicações críticas",
        "Metodologia alinhada aos padrões de gestão de serviços de TI (ITSM / ITIL)",
      ],
      ctaText: "Conhecer Operações NOC 24/7",
      href: "/solucoes/gestao-servicos-ti-noc-itsm",
      iconName: "BarChart3",
      featured: false,
    },
    {
      id: "mensageria-corporativa-meta-provider",
      number: "08",
      name: "Mensageria Corporativa — Meta Provider (WhatsApp)",
      shortName: "Meta Provider WhatsApp",
      tag: "WHATSAPP",
      pillar: "Mensageria & WhatsApp",
      headline: "API Oficial do WhatsApp com selo verificado, disparos em massa homologados e atendimento sem risco de banimento.",
      subtitle: "API Oficial Meta, selo verde verificado, múltiplos atendentes e chatbots.",
      description: "Conecte sua empresa diretamente à API Oficial do WhatsApp. Garanta o selo oficial verificado, envie notificações transacionais, boletos e lembretes com máxima entregabilidade e automatize fluxos de vendas e cobrança com total segurança de não bloqueio de número.",
      benefits: [
        "Acesso à API Oficial do WhatsApp (Meta Business Solution Provider) com segurança jurídica e técnica",
        "Envio automatizado em escala de lembretes, confirmações de consulta, boletos e alertas",
        "Selo de verificação oficial que transmite máxima credibilidade e autoridade para sua marca",
        "Múltiplos operadores e setores atendendo pelo mesmo número oficial corporativo",
        "Integração rápida via API REST com qualquer CRM, ERP ou sistema proprietário",
      ],
      differentials: [
        "Proteção definitiva contra bloqueios e banimentos de números causados por ferramentas não oficiais",
        "Painel de métricas com status em tempo real de mensagens enviadas, entregues e lidas",
      ],
      ctaText: "Ativar API Oficial WhatsApp",
      href: "/solucoes/mensageria-corporativa-meta-provider",
      iconName: "Send",
      featured: false,
    },
    {
      id: "inteligencia-artificial-voz-voice-ai",
      number: "09",
      name: "Inteligência Artificial Aplicada à Voz (Voice AI)",
      shortName: "Voice AI (IA por Voz)",
      tag: "IA POR VOZ",
      pillar: "Inteligência Artificial",
      headline: "Agentes virtuais de voz com IA conversacional para triagem inteligente e automação de atendimento telefônico.",
      subtitle: "Agentes de voz inteligentes, reconhecimento de fala natural e URA cognitiva.",
      description: "Eleve a telefonia da sua empresa para a era da IA generativa. Nossos agentes de voz inteligentes dialogam de forma natural com quem liga, compreendem intenções sem menus numéricos travados, realizam agendamentos, consultam dados em sistemas e transferem chamadas com contexto completo.",
      benefits: [
        "Agentes de voz inteligentes que conversam em linguagem natural, entendendo sotaques e variações",
        "Substituição de URAs antigas e engessadas ('digite 1 ou 2') por atendimento falado e humanizado",
        "Capacidade de atender simultaneamente centenas de ligações durante picos sem fila de espera",
        "Transcrição automática e análise de sentimento em tempo real de 100% das chamadas",
        "Automação de processos repetitivos por voz (status de pedidos, 2ª via, confirmação de presença)",
      ],
      differentials: [
        "Conexão nativa e direta com a infraestrutura de telefonia STFC da Mundo Telecom",
        "Evolução contínua dos modelos de IA adaptados ao vocabulário específico do seu segmento",
      ],
      ctaText: "Conhecer Soluções Voice AI",
      href: "/solucoes/inteligencia-artificial-voz-voice-ai",
      iconName: "Headphones",
      featured: true,
    },
  ],

  plans: [
    {
      id: "plano-entrada",
      name: "Entrada",
      badge: "BASE ESSENCIAL",
      highlighted: false,
      audience: "Pequenas empresas, consultórios e escritórios que precisam profissionalizar o atendimento.",
      price: "286",
      period: "/ mês",
      priceNote: "Plano estruturado com custo fixo previsível, sem surpresas na fatura",
      headlineResult: "Nunca mais perca chamadas de clientes e transmita autoridade desde o primeiro toque.",
      objectionTreatment: "Sem surpresas no fim do mês: valor fixo sem cobrança de minutos adicionais.",
      valueProposition: "PABX em Nuvem completo com ramais virtuais para computador e smartphone, URA básica de boas-vindas, identificador local e gravação de chamadas para segurança operacional.",
      features: [
        "PABX na Nuvem de Alta Disponibilidade",
        "Ramais Virtuais para Computador e Smartphone",
        "Identificador Local Inteligente (DDD da região do cliente)",
        "Rechamada Automática em chamadas não completadas",
        "Gravação de Chamadas com armazenamento em nuvem",
        "Suporte técnico consultivo especializado",
      ],
      ctaText: "Selecionar Plano Entrada",
    },
    {
      id: "plano-crescimento",
      name: "Crescimento",
      badge: "MAIS ESCOLHIDO",
      highlighted: true,
      audience: "Empresas em expansão e equipes de vendas e atendimento que buscam unificar voz e WhatsApp.",
      price: "536",
      period: "/ mês",
      priceNote: "Melhor relação de custo e produtividade para equipes comerciais",
      headlineResult: "Voz e WhatsApp Oficial operando juntos: IA cuida do repetitivo e a equipe atende mais.",
      objectionTreatment: "Sua empresa não precisa contratar múltiplos softwares dispersos para telefone e chat.",
      valueProposition: "Plataforma integrada unificando PABX na Nuvem, WhatsApp Oficial verificado com múltiplos atendentes simultâneos, URA com IA e fila de rechamada automática.",
      features: [
        "Tudo incluso no Plano Entrada",
        "WhatsApp Oficial com Múltiplos Atendentes no mesmo número",
        "URA Inteligente com IA e triagem ágil de contatos",
        "Rechamada Automática prioritária para não perder negócios",
        "Painel gerencial de filas e tempo médio de resposta",
        "Suporte prioritário com acompanhamento de customer success",
      ],
      ctaText: "Selecionar Plano Crescimento",
    },
    {
      id: "plano-avancado",
      name: "Avançado",
      badge: "ALTA PERFORMANCE",
      highlighted: false,
      audience: "Operações consolidadas, contact centers e médias empresas com múltiplos departamentos e rotinas de agendamento.",
      price: "986",
      period: "/ mês",
      priceNote: "Para empresas com alta demanda, fluxos complexos e múltiplos setores",
      headlineResult: "Automação completa da jornada de comunicação com IA, agendamento online e integração ao seu CRM.",
      objectionTreatment: "Implantação assistida e rápida, conectando a nova plataforma ao seu sistema atual sem paradas.",
      valueProposition: "Solução robusta com Agendamento Online automatizado por WhatsApp, integração a sistemas CRM/ERP, distribuição inteligente de chamadas (DAC) e relatórios executivos.",
      features: [
        "Tudo incluso no Plano Crescimento",
        "Módulo de Agendamento Online com lembretes automáticos",
        "Integração nativa com CRMs e ERPs do mercado",
        "Distribuição Automática de Chamadas (DAC) por habilidade e fila",
        "Relatórios executivos e auditoria de produtividade em tempo real",
        "Monitoramento contínuo de tráfego com SLA prioritário",
      ],
      ctaText: "Selecionar Plano Avançado",
    },
    {
      id: "plano-enterprise",
      name: "Sob Medida / Enterprise",
      badge: "GOVERNO & GRANDES CONTAS",
      highlighted: false,
      audience: "Órgãos públicos, prefeituras, autarquias, defensorias, ministérios públicos e grandes corporações.",
      price: "Sob Medida",
      period: "",
      priceNote: "Dimensionamento de engenharia conforme Termo de Referência ou Edital",
      headlineResult: "Infraestrutura própria, 99,95% de disponibilidade e casos comprovados como DPMG e MPMG.",
      objectionTreatment: "Contratação direta com detentora de outorga ANATEL e total atendimento à Nova Lei de Licitações (Lei 14.133/21).",
      valueProposition: "Projetos de alta complexidade com entroncamentos STFC dedicados, faixas DDR sob medida, redundância geográfica entre datacenters, monitoramento NOC 24/7/365 e gerente de conta exclusivo.",
      features: [
        "Disponibilidade formal de 99,95% com monitoramento NOC 24/7/365",
        "Casos auditáveis: DPMG (R$ 14,6 mi / 36m) e MPMG (4.306 ramais)",
        "Entroncamentos STFC dedicados e faixas DDR customizadas",
        "Redundância física e geográfica entre múltiplos datacenters",
        "Relatórios técnicos de bilhetagem para prestação de contas pública",
        "Gerente de contas exclusivo e engenharia dedicada",
      ],
      ctaText: "Falar com Consultor B2B / B2G",
    },
  ],

  platforms: [
    {
      title: "PABX na Nuvem & Rechamada Automática",
      subtitle: "Nenhuma Chamada Perdida",
      description: "Central virtual com inteligência artificial que unifica ramais em qualquer lugar e realiza o retorno automático de chamadas sempre que o cliente não conseguir falar. O concorrente perde a ligação; nós capturamos e retornamos.",
      icon: "Server",
    },
    {
      title: "WhatsApp + IA & Omnichannel",
      subtitle: "Mensageria Inteligente 24h",
      description: "API Oficial do WhatsApp integrada para múltiplos atendentes no mesmo número corporativo. IA ativa 24 horas para triar dúvidas e agilizar respostas, centralizando conversas e mantendo o histórico sob domínio da empresa.",
      icon: "MessageSquare",
    },
    {
      title: "Agendamento Online Automatizado",
      subtitle: "Menos Faltas e Mais Eficiência",
      description: "Módulo inteligente de agendamento de reuniões e consultas com envio automatizado de confirmações e lembretes via WhatsApp e voz, reduzindo faltas e otimizando a agenda das equipes.",
      icon: "Calendar",
    },
    {
      title: "Identificador Local & Cloud Voice",
      subtitle: "Máxima Taxa de Atendimento",
      description: "Tecnologia que exibe o código de área (DDD) da cidade do destinatário nas chamadas ativas da sua empresa, aumentando expressivamente a taxa de atendimento e eliminando a rejeição por números desconhecidos.",
      icon: "Cpu",
    },
    {
      title: "Cofre de Gravação em Nuvem & Auditoria",
      subtitle: "Segurança e Proteção Jurídica",
      description: "Gravação criptografada de 100% das chamadas com busca avançada por data, hora, ramal, número e atendente. Registros auditáveis para resguardo legal, controle de qualidade e treinamentos.",
      icon: "Lock",
    },
    {
      title: "Dashboard Gerencial & Métricas NOC",
      subtitle: "Controle Operacional em Tempo Real",
      description: "Painel em tempo real com métricas completas de tempo médio de atendimento (TMA), volume de chamadas, fila de rechamadas, conversas de WhatsApp e indicadores de SLA.",
      icon: "BarChart3",
    },
  ],

  hardwareList: [
    {
      title: "Telefones IP Corporativos",
      description: "Aparelhos homologados com visor digital, áudio de alta definição (HD) e viva-voz de alta clareza para recepções, diretorias e estações de trabalho.",
      brands: "Fanvil • Grandstream • Khomp",
    },
    {
      title: "Headsets Profissionais",
      description: "Equipamentos com cancelamento ativo de ruído, conexão USB/RJ e ergonomia para equipes de vendas e atendimento de alta intensidade.",
      brands: "Plantec • Homologados",
    },
    {
      title: "Gateways e Adaptadores",
      description: "Interfaces de telecomunicação para integração de linhas legadas e ambientes híbridos com total estabilidade.",
      brands: "Aligera • Khomp",
    },
    {
      title: "Softphones Multiplataforma (Sem Custo de Hardware)",
      description: "Aplicativos de ramal virtual homologados para instalação rápida em computadores e smartphones, permitindo mobilidade total a custo zero de aparelhos físicos.",
      brands: "Windows • macOS • iOS • Android",
    },
  ],

  activationSteps: [
    {
      number: "01",
      title: "Diagnóstico Técnico & Alinhamento de Dores",
      description: "Analisamos o volume de atendimento, fluxos de chamadas, WhatsApp e sistemas atuais da sua organização, definindo o modelo ideal de comunicação inteligente.",
    },
    {
      number: "02",
      title: "Configuração da Plataforma & Fluxos de IA",
      description: "Provisionamos os ramais em nuvem, configuramos a URA de IA, a regra de rechamada automática e o WhatsApp oficial, realizando a portabilidade sem interrupção.",
    },
    {
      number: "03",
      title: "Transição Assistida & Customer Success",
      description: "Ativamos a operação de forma assistida com treinamento prático para a sua equipe e acompanhamento contínuo de customer success focado em resultados reais.",
    },
  ],

  governmentAdvantages: [
    {
      number: "01",
      title: "Outorga Própria ANATEL e Pleno Compliance com a Lei 14.133/2021",
      description: "Contratação direta com detentora de licença própria da ANATEL, atendendo rigorosamente aos critérios de qualificação técnica da Nova Lei de Licitações e Contratos Administrativos.",
    },
    {
      number: "02",
      title: "Casos de Sucesso Comprovados em Grandes Órgãos Públicos",
      description: "Operamos 4.306 ramais com mais de 80 mil chamadas/mês no MPMG e mantemos contrato de R$ 14,6 milhões (36 meses) na DPMG, além de dezenas de prefeituras e autarquias.",
    },
    {
      number: "03",
      title: "Disponibilidade de 99,95% e Redundância Geográfica",
      description: "Infraestrutura própria com múltiplos datacenters interligados para garantir estabilidade contínua a serviços públicos essenciais, ouvidorias, saúde e defesa civil.",
    },
    {
      number: "04",
      title: "Monitoramento Contínuo NOC 24/7 com SLA Formal",
      description: "Centro de Operações de Rede com supervisão 24/7/365 e engenharia própria, garantindo tempo ágil de resposta técnica e relatórios mensais de bilhetagem.",
    },
    {
      number: "05",
      title: "Canais Omnichannel de Atendimento ao Cidadão",
      description: "Integração de telefonia fixa digital, URA inteligente e WhatsApp institucional verificado com geração de protocolos auditáveis para a ouvidoria pública.",
    },
    {
      number: "06",
      title: "Portabilidade Numérica Assistida Sem Paralisação",
      description: "Migração segura e assistida de linhas telefônicas institucionais preexistentes sem nenhum segundo de interrupção no atendimento à população.",
    },
  ],

  units: [
    {
      id: "matriz-bh",
      city: "Belo Horizonte",
      state: "MG",
      type: "Matriz e Centro de Engenharia de Rede (NOC Central)",
      description: "Sede administrativa e centro de engenharia da Mundo Telecom. Abriga o Centro de Operações de Rede (NOC Central 24/7), o núcleo de Customer Success e os laboratórios de desenvolvimento de IA e plataformas.",
      address: "Rua Hermilo Alves, 66, 2º Andar, Santa Tereza",
      cep: "31010-070",
      phone: "(31) 2011-2000",
      hours: "Comercial: Seg a Sex, das 08h às 18h | Suporte NOC: Operação Contínua 24/7/365",
      badge: "Sede Principal & NOC",
    },
    {
      id: "filial-bsb",
      city: "Brasília",
      state: "DF",
      type: "Filial de Relações Institucionais e Setor Público (B2G)",
      description: "Polo estratégico voltado ao relacionamento institucional, suporte especializado a contratações públicas, licitações federais, estaduais e atendimento direto a autarquias e ministérios.",
      address: "Edifício Oscar Niemeyer, Sala 1001, Bloco D, Lote 3, Quadra 2, SCS",
      cep: "70316-900",
      phone: "(31) 2011-2000",
      hours: "Segunda a Sexta, das 08h às 18h",
      badge: "Polo Governamental (B2G)",
    },
    {
      id: "filial-sp",
      city: "São Paulo",
      state: "SP",
      type: "Filial Comercial e Grandes Contas Corporativas (B2B)",
      description: "Unidade comercial focada no atendimento de médias e grandes corporações, indústrias e redes de varejo, com equipe de arquitetura de soluções digitais e consultoria comercial executiva.",
      address: "Rua Funchal, 203, Conjunto 91, Vila Olímpia",
      cep: "04551-904",
      phone: "(31) 2011-2000",
      hours: "Segunda a Sexta, das 08h às 18h",
      badge: "Grandes Contas (B2B)",
    },
  ],

  caseStudies: [
    {
      client: "DPMG — Defensoria Pública de MG",
      segment: "Órgão Público Estadual (B2G)",
      tag: "Contrato de R$ 14,6 Milhões (36 meses)",
      description: "Fornecemos soluções de telecomunicações em todo o estado de Minas Gerais há mais de 10 anos. O projeto abrange mais de 3.000 ramais, 140 plataformas de comunicação e 300 links de dados, todos entregues via fibra óptica. Além disso, oferecemos telefonia fixa e 1.200 aparelhos IP.",
      stats: "Contrato de R$ 14,6 milhões em 36 meses com SLA de 99,95% e suporte NOC 24x7",
      image: "/images/fotos-cases/dpmg.png",
      authorName: "Diretoria de Tecnologia e Comunicação",
      authorRole: "Gestão Pública Estadual",
    },
    {
      client: "MPMG — Ministério Público de MG",
      segment: "Órgão Público Estadual (B2G)",
      tag: "4.306 Ramais & 80 mil+ Chamadas/Mês",
      description: "Operação crítica de 4.306 ramais corporativos interligados em nuvem, processando mais de 80 mil chamadas mensais com alta fidelidade de voz, gravação e monitoramento proativo contínuo de tráfego.",
      stats: "4.306 ramais operados com mais de 80 mil ligações/mês e alta disponibilidade",
      image: "/images/fotos-cases/mpmg.png",
      authorName: "Superintendência de TI",
      authorRole: "Infraestrutura Crítica",
    },
    {
      client: "Grupo Via",
      segment: "Varejo Automotivo & Distribuição (B2B)",
      tag: "10+ Marcas (Via Trucks, Via Jap, DAF, Ford SP...)",
      description: "Centralização e modernização da telefonia de mais de 100 estabelecimentos das bandeiras Via Trucks, Via Jap, Via Natsu, DAF, Ford SP e GB Multimarcas, com integração de ramais e redução expressiva de custos.",
      stats: "Mais de 100 estabelecimentos integrados com economia de 40% em custos de voz",
      image: "/images/fotos-cases/grupo-via.png",
      authorName: "Gestão Corporativa",
      authorRole: "Rede de Concessionárias",
    },
    {
      client: "TECBAN",
      segment: "Tecnologia Bancária (B2B)",
      tag: "Infraestrutura Crítica de Alta Conectividade",
      description: "Fornecimento de infraestrutura de conectividade de alta confiabilidade para suportar operações financeiras de alta criticidade e tráfego contínuo em regime 24/7.",
      stats: "Infraestrutura corporativa de alta resiliência e suporte proativo especializado",
      image: "/images/fotos-cases/tecban.png",
      authorName: "Operações de Conectividade",
      authorRole: "Infraestrutura & Redes",
    },
    {
      client: "Macrocont",
      segment: "Serviços Contábeis & Consultoria (B2B)",
      tag: "PABX na Nuvem + WhatsApp Oficial",
      description: "Modernizou sua operação com PABX na Nuvem e WhatsApp inteligente, centralizando o atendimento de todas as suas unidades em um único painel e otimizando o tempo de resposta aos clientes.",
      stats: "Centralização de 100% dos canais e redução drástica do tempo de espera",
      image: "/images/fotos-cases/macrocont.png",
      authorName: "Diretoria de Operações",
      authorRole: "Gestão & Tecnologia",
    },
    {
      client: "PlurisMídia",
      segment: "Contact Center & Comunicação (B2B)",
      tag: "Voz em Alta Escala & NOC 24/7",
      description: "Implementação de infraestrutura de alta capacidade de tráfego de voz e monitoramento contínuo, garantindo estabilidade ininterrupta para operações de contato em larga escala.",
      stats: "Disponibilidade de 99,98% em ambiente de contact center de alta criticidade",
      image: "/images/fotos-cases/pluris-midia.png",
      authorName: "Gerência de Infraestrutura",
      authorRole: "Telecom & NOC",
    },
  ],

  realClients: {
    governo: [
      "DPMG (Defensoria Pública de MG)",
      "MPMG (Ministério Público de MG)",
      "Prefeitura de Betim",
      "Prefeitura de Ouro Preto",
      "Prefeitura de Ribeirão das Neves",
      "Prefeitura de Várzea da Palma",
      "Prefeitura de Raposos",
      "Prefeitura de Santa Rita do Sapucaí",
      "Prefeitura de Jaboticatubas",
      "Prefeitura de Confins",
      "DER-DF",
      "Polícia Civil DF",
      "Caixa Econômica Federal",
      "CET",
      "SANASA",
      "PMSP-SMSU",
      "SIURB-SP",
      "IFMG",
    ],
    empresas: [
      "Grupo Via (Via Trucks, Via Jap, Via Natsu, DAF, Ford SP, GB Multimarcas)",
      "TECBAN",
      "Brascamp",
      "Click Iluminação",
      "Macrocont",
      "PlurisMídia",
      "3A Soluções",
      "AR P13",
      "Belém Veículos",
      "BM Rio",
    ],
    provedoresSCM: [
      "BH Fibra",
      "Century",
      "CNT Fiber",
      "FL Telecom/Fibnet",
      "Global Link",
      "Interouro",
      "Nero",
      "Raplo",
      "Speedy Way",
      "Universo",
      "Vis Ondas",
      "VS Internet",
      "WF Telecom",
    ],
  },

  techPartners: [
    { name: "3CX", logo: "/images/parceiros-logo/3cx.png", description: "Plataforma homologada de comunicações unificadas", category: "Software UC" },
    { name: "Khomp", logo: "/images/parceiros-logo/khomp.png", description: "Appliances, gateways e hardware de voz de alta densidade", category: "Hardware & Gateways" },
    { name: "Fanvil", logo: "/images/parceiros-logo/fanvil.png", description: "Terminais IP corporativos de alta fidelidade acústica", category: "Terminais IP" },
    { name: "Grandstream", logo: "/images/parceiros-logo/grandstream.png", description: "Endpoints de voz SIP e infraestrutura IP", category: "Terminais IP" },
    { name: "Aligera", logo: "/images/parceiros-logo/aligera.png", description: "Appliances e equipamentos de integração digital", category: "Infraestrutura" },
    { name: "Plantec", logo: "/images/parceiros-logo/Plantec.png", description: "Headsets profissionais homologados e áudio corporativo", category: "Áudio & Headsets" },
    { name: "Sipulse", logo: "/images/parceiros-logo/sipulse.png", description: "Tecnologia parceira de inteligência e roteamento de voz", category: "Integração" },
    { name: "Leucotron", logo: "/images/parceiros-logo/leucotron.png", description: "Tecnologia parceira homologada para ambientes híbridos", category: "Integração" },
    { name: "Sangoma", logo: "/images/parceiros-logo/sangoma.png", description: "Sistemas e conectividade avançada de telefonia", category: "Integração" },
  ],

  // Mantido para compatibilidade retroativa com componentes legados
  partners: [
    { name: "3CX", description: "Plataforma homologada de comunicações unificadas", category: "Software PABX" },
    { name: "Khomp", description: "Appliances, gateways de alta densidade e telefonia", category: "Hardware & Gateways" },
    { name: "Fanvil", description: "Fabricante global de telefones IP corporativos", category: "Terminais IP" },
    { name: "Grandstream", description: "Soluções completas de endpoints de voz e vídeo SIP", category: "Terminais IP" },
    { name: "Aligera", description: "Equipamentos de conectividade e integração digital", category: "Infraestrutura" },
    { name: "Plantec", description: "Headsets e tecnologia de áudio profissional", category: "Áudio & Headsets" },
  ],

  faqContact: [
    {
      question: "A Mundo Telecom atende empresas fora dos estados de MG, SP e DF?",
      answer: "Sim. Como empresa de tecnologia detentora de outorga própria da ANATEL, infraestrutura em nuvem e cobertura nacional, atendemos empresas privadas e órgãos públicos em todos os estados e municípios do Brasil, com ativação ágil e suporte remoto 24/7.",
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
      answer: "Órgãos governamentais podem encaminhar solicitações de proposta, editais ou termos de referência diretamente para o e-mail comercial@mundotelecom.com.br ou entrar em contato com nossa filial de Brasília para suporte técnico especializado em licitações.",
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
        "Principais exigências de qualificação técnica para empresas de tecnologia e STFC",
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
              "A contratação direta com empresa detentora de outorga própria STFC assegura a validade dos registros, a custódia legal das faixas de numeração DDR e o cumprimento de obrigações de sigilo e defesa civil.",
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
        "SLA formal de tempo de resposta vs. suporte genérico de fornecedores legados",
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
