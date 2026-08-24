---
trigger: always_on
---

# Design System — Mundo Telecom (skill para Antigravity)

Use este arquivo como guia de design obrigatório para todo o site. Ele é baseado no manual de marca oficial do cliente — os tokens abaixo não são sugestões, são a identidade real da Mundo Telecom e devem ser seguidos à risca.

## Fundamento da marca (para orientar tom visual e copy)

**Posicionamento**: A Mundo Telecom ocupa o espaço entre as grandes operadoras engessadas e os fornecedores que apenas revendem tecnologia. Com 21 anos de experiência e licença própria da ANATEL, entrega telefonia em nuvem para empresas que dependem da comunicação para vender, atender e operar — com eficiência nas chamadas, custos previsíveis e registro das interações.

**Missão**: Ajudar empresas a vender, atender e operar melhor por meio de soluções de telefonia em nuvem, integradas a inteligência artificial, WhatsApp e CRM, com custos previsíveis, registro das interações e suporte responsável.

**Visão**: Ser referência nacional em telefonia empresarial para organizações que buscam mais confiabilidade, previsibilidade e controle sobre sua comunicação.

**Valores**: Confiabilidade, Transparência, Responsabilidade, Simplicidade, Evolução.

**Golden Circle**
- Why: acreditamos que nenhuma empresa deveria perder vendas, informações ou confiança por falhas de comunicação que já podem ser evitadas
- How: transformamos a telefonia empresarial em uma operação mais confiável, previsível e controlável, com tecnologia integrada, custos claros, registro das interações e suporte responsável
- What: telefonia em nuvem para empresas, com integrações opcionais de WhatsApp, IA, CRM, gravação de chamadas, relatórios e automações

Isso implica um tom visual **sóbrio, técnico e confiável** — nunca "vendedor" ou espalhafatoso. A marca se diferencia por assumir a operação (não é apenas revenda de tecnologia), então o design deve transmitir solidez e controle, não hype.

## Tokens de design (do manual oficial — não alterar)

**Cor**
- `--mundo-navy: #07224B` — cor institucional principal, fundo de seções de destaque e headers
- `--mundo-orange: #EF831C` — cor de ação/destaque, usar com moderação (CTAs, ícones-chave, detalhes) — nunca como cor de fundo de página inteira
- `--mundo-black: #000000`
- `--mundo-white: #FFFEFF`

**Tipografia**
- Display/títulos: **Space Grotesk** (geométrica, moderna) — pesos Regular, Medium, Semibold, Bold
- Corpo/texto: **Inter** — pesos Regular, Medium, Semibold, Bold
- Use Space Grotesk com restrição: títulos e headlines, não parágrafos inteiros. Inter carrega a leitura.

**Logo**
- Wordmark "mundo." em branco ou preto + "TELECOM" como lockup secundário (pode vir em branco ou laranja, conforme variação já aprovada no manual)
- Ícone isolado disponível: "m" estilizado + círculo laranja com corte diagonal (o ponto final do "mundo.")
- Nunca: distorcer proporção, aplicar cores fora da paleta, quebrar a hierarquia de cores do lockup, aplicar efeitos (sombra, glow, gradiente), ou criar variações não aprovadas

## Direção criativa (extraída dos criativos oficiais do cliente)

Os criativos de campanha já existentes usam um padrão consistente que deve orientar a linguagem visual do site:
- Fundo azul marinho (`--mundo-navy`) com **cortes diagonais geométricos** dividindo seções — não retângulos simples
- Linhas finas em arco/círculo como elemento decorativo sutil, nos cantos ou como camada de fundo — discretas, nunca como "textura" dominante
- Blocos sólidos em laranja (`--mundo-orange`) para CTAs, com o texto do botão em branco, peso Bold
- **Fotografia real de pessoas** (atendentes/especialistas, geralmente vestindo laranja, com headset) — nunca ilustração 3D genérica

## O que NÃO fazer (importante — o site atual comete esse erro)

O site atual usa imagens de banco genéricas de "tecnologia/IA": globo com partículas conectadas brilhando, robô humanoide branco com luzes azuis, cérebro digital. Esse tipo de imagem é exatamente o que faz um site parecer "feito por IA" — é genérico, não é específico da Mundo Telecom, e não aparece em nenhum lugar do manual de marca oficial.

**Não reutilize** esse tipo de imagem no novo site. Substitua por:
- Fotografia real de pessoas (equipe/atendimento), seguindo o estilo dos criativos oficiais
- Quando precisar de um elemento gráfico/abstrato, use os recursos que a própria marca já definiu: cortes diagonais, arcos finos, o ícone do logo — não partículas, redes neurais ou robôs genéricos

## Elemento de assinatura sugerido para o site

Use o **corte diagonal** como o elemento de assinatura visual do site — é o padrão mais reconhecível e consistente nos materiais oficiais da marca, e não é um clichê genérico de IA (ao contrário de bordas arredondadas aleatórias ou grids de partículas). Aplique de forma disciplinada: uma transição diagonal por seção, não em todo elemento da página. Esse é o único lugar para "ousar" — o resto do layout deve ficar limpo e disciplinado, seguindo a paleta e tipografia acima sem desvios.

## Processo

1. Antes de codar, gere um plano de design curto (paleta aplicada a componentes específicos, escala tipográfica, wireframe ASCII do hero) usando exclusivamente os tokens acima
2. Revise esse plano contra a seção "O que NÃO fazer" antes de escrever qualquer código
3. Responsivo mobile-first, foco visível em elementos interativos (acessibilidade), reduced-motion respeitado nas animações GSAP/Framer Motion já definidas no prompt técnico do projeto