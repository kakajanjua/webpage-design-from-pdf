"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "PT" | "EN";

// Dictionary of translations
export const translations: Record<Language, Record<string, string>> = {
  PT: {
    // Menu & Navegação
    "Quem Somos": "Quem Somos",
    "Posicionamento": "Posicionamento",
    "Áreas de Atuação": "Áreas de Atuação",
    "Serviços": "Serviços",
    "Logística Aplicada": "Logística Aplicada",
    "Porquê a PrimeProc": "Porquê a PrimeProc",
    "Idioma / Language": "Idioma",

    // Bloco Institucional & Sobre
    "Bloco Institucional": "Bloco Institucional",
    "O que define a PrimeProc": "O que define a PrimeProc",
    "Independência": "Independência",
    "Atuação livre de conflitos de interesse.": "Atuação livre de conflitos de interesse.",
    "Rigor técnico": "Rigor técnico",
    "Em cada especificação, contrato e entrega.": "Em cada especificação, contrato e entrega.",
    "Transparência": "Transparência",
    "Total, em todas as fases do projeto.": "Total, em todas as fases do projeto.",
    "Conformidade legal": "Conformidade legal",
    "Alinhada às normas locais e dos doadores.": "Alinhada às normas locais e dos doadores.",
    "Orientação para resultados": "Orientação para resultados",
    "Métricas, evidências e prestação de contas.": "Métricas, evidências e prestação de contas.",
    "Capacitação": "Capacitação",
    "Transferência de conhecimento às equipas dos clientes.": "Transferência de conhecimento às equipas dos clientes.",
    "Somos uma empresa angolana criada para apoiar organizações na implementação de processos de aquisição, gestão contratual, fiscalização de projetos e logística aplicada, com rigor técnico, transparência e conformidade.": "Somos uma empresa angolana criada para apoiar organizações na implementação de processos de aquisição, gestão contratual, fiscalização de projetos e logística aplicada, com rigor técnico, transparência e conformidade.",
    "Apesar de recente como entidade jurídica, somos suportados por uma equipa com sólida experiência prática em procurement, incluindo atuação em projetos financiados por doadores internacionais, operando em ambientes regulatórios exigentes e em localizações remotas.": "Apesar de recente como entidade jurídica, somos suportados por uma equipa com sólida experiência prática em procurement, incluindo atuação em projetos financiados por doadores internacionais, operando em ambientes regulatórios exigentes e em localizações remotas.",
    "O Nosso Foco": "O Nosso Foco",
    "Atuamos no segmento corporativo e institucional, guiando a conformidade e eficiência dos processos de aquisição, a integridade da cadeia logística e a entrega física e financeira dos projetos.": "Atuamos no segmento corporativo e institucional, guiando a conformidade e eficiência dos processos de aquisição, a integridade da cadeia logística e a entrega física e financeira dos projetos.",

    // Hero & CTA
    "Consultoria e Fiscalização": "Consultoria e Fiscalização",
    "Consultoria especializada em procurement, gestão de contratos, fiscalização de projetos e logística aplicada — com rigor técnico, transparência e conformidade.": "Consultoria especializada em procurement, gestão de contratos, fiscalização de projetos e logística aplicada — com rigor técnico, transparência e conformidade.",
    "Conheça os nossos serviços": "Conheça os nossos serviços",
    "Fale connosco": "Fale connosco",
    "Clientes privados": "Clientes privados",
    "Projetos financiados por doadores internacionais": "Projetos financiados por doadores internacionais",
    "Vamos proteger o seu próximo projeto?": "Vamos proteger o seu próximo projeto?",
    "Fale com a nossa equipa sobre procurement de elevado risco, gestão contratual, fiscalização e logística aplicada.": "Fale com a nossa equipa sobre procurement de elevado risco, gestão contratual, fiscalização e logística aplicada.",
    "Entrar em contacto": "Entrar em contacto",

    // Áreas de Atuação
    "Áreas-Chave de Atuação": "Áreas-Chave de Atuação",
    "Cobertura completa do ciclo de procurement": "Cobertura completa do ciclo de procurement",
    "Quatro grandes áreas — do planeamento estratégico à entrega final em campo.": "Quatro grandes áreas — do planeamento estratégico à entrega final em campo.",
    "Consultoria em Procurement": "Consultoria em Procurement",
    "Diagnóstico e Planeamento": "Diagnóstico e Planeamento",
    "Mitigação de Riscos": "Mitigação de Riscos",
    "Logística de Procurement e Cadeia de Abastecimento": "Logística de Procurement e Cadeia de Abastecimento",
    "Gestão e Fiscalização": "Gestão e Fiscalização",
    "Gestão de Contratos": "Gestão de Contratos",
    "Fiscalização de Projetos": "Fiscalização de Projetos",
    "Fiscalização Logística de Projetos": "Fiscalização Logística de Projetos",
    "Auditoria e Capacitação": "Auditoria e Capacitação",
    "Auditorias de Procurement": "Auditorias de Procurement",
    "Capacitação Institucional": "Capacitação Institucional",
    "Treino em Operações Logísticas": "Treino em Operações Logísticas",
    "Logística Aplicada": "Logística Aplicada",
    "Nova": "Nova",

    // Serviços - Núcleo
    "Serviços — Núcleo": "Serviços — Núcleo",
    "Procurement · Contratos · Fiscalização": "Procurement · Contratos · Fiscalização",
    "Análise completa das necessidades de aquisição, mapeamento de mercado, especificações técnicas e plano de procurement alinhado ao orçamento e aos regulamentos aplicáveis.": "Análise completa das necessidades de aquisição, mapeamento de mercado, especificações técnicas e plano de procurement alinhado ao orçamento e aos regulamentos aplicáveis.",
    "Identificação de convergências, divergências e riscos de conformidade. Foco na mitigação preventiva e apoio estratégico à tomada de decisão.": "Identificação de convergências, divergências e riscos de conformidade. Foco na mitigação preventiva e apoio estratégico à tomada de decisão.",
    "Sourcing de fornecedores logísticos, transporte multimodal, consolidação de cargas e lead times alinhados à execução do projeto.": "Sourcing de fornecedores logísticos, transporte multimodal, consolidação de cargas e lead times alinhados à execução do projeto.",
    "Acompanhamento integral da execução contratual, prazos, entregáveis, níveis de serviço e SLAs. Protege os interesses do cliente e previne litígios.": "Acompanhamento integral da execução contratual, prazos, entregáveis, níveis de serviço e SLAs. Protege os interesses do cliente e previne litígios.",
    "Atuação direta no terreno e na documentação para garantir que a implementação física e financeira reflete o planeado. Mandatória em projetos financiados externamente.": "Atuação direta no terreno e na documentação para garantir que a implementação física e financeira reflete o planeado. Mandatória em projetos financiados externamente.",
    "Supervisão em campo: verificação de receção, conferência quali/quanti, armazenagem em obra, controlo de expedição e rastreio até ao ponto de uso.": "Supervisão em campo: verificação de receção, conferência quali/quanti, armazenagem em obra, controlo de expedição e rastreio até ao ponto de uso.",

    // Logística Aplicada
    "Logística Aplicada ao Procurement": "Logística Aplicada ao Procurement",
    "Integração nativa entre procurement, contratos, fiscalização e logística — eliminando descontinuidades entre quem compra, quem transporta e quem fiscaliza.": "Integração nativa entre procurement, contratos, fiscalização e logística — eliminando descontinuidades entre quem compra, quem transporta e quem fiscaliza.",
    "Planeamento de Transporte e Expedição": "Planeamento de Transporte e Expedição",
    "Planos de transporte multimodal (rodoviário, marítimo, aéreo), consolidação de cargas e janelas de embarque para otimizar custo e tempo.": "Planos de transporte multimodal (rodoviário, marítimo, aéreo), consolidação de cargas e janelas de embarque para otimizar custo e tempo.",
    "Despacho Aduaneiro e Cross-Border": "Despacho Aduaneiro e Cross-Border",
    "Documentação, classificação tarifária, licenciamento, requisitos cambiais e articulação com autoridades aduaneiras e reguladoras.": "Documentação, classificação tarifária, licenciamento, requisitos cambiais e articulação com autoridades aduaneiras e reguladoras.",
    "Gestão de Armazéns e Estoques": "Gestão de Armazéns e Estoques",
    "Soluções de armazenagem, controlo de stocks com FIFO/FEFO, reconciliação física periódica e reservas para projetos.": "Soluções de armazenagem, controlo de stocks com FIFO/FEFO, reconciliação física periódica e reservas para projetos.",
    "Distribuição e Última Milha": "Distribuição e Última Milha",
    "Entregas em locais de difícil acesso: transportadores locais, janelas de receção em obra, livro de entradas e relatórios de ocorrências.": "Entregas em locais de difícil acesso: transportadores locais, janelas de receção em obra, livro de entradas e relatórios de ocorrências.",
    "Rastreabilidade e Cadeia de Custódia": "Rastreabilidade e Cadeia de Custódia",
    "Rastreio end-to-end, documentação de cadeia de custódia e prova de entrega compatíveis com auditorias de doadores internacionais.": "Rastreio end-to-end, documentação de cadeia de custódia e prova de entrega compatíveis com auditorias de doadores internacionais.",
    "Gestão de Operadores Logísticos": "Gestão de Operadores Logísticos",
    "Qualificação, contratação e supervisão de 3PL/4PL, brokers de carga e transitários com KPIs de desempenho claros.": "Qualificação, contratação e supervisão de 3PL/4PL, brokers de carga e transitários com KPIs de desempenho claros.",

    // Posicionamento
    "Posicionamento Estratégico": "Posicionamento Estratégico",
    "Visão, Missão, Valores e Compromisso": "Visão, Missão, Valores e Compromisso",
    "Missão": "Missão",
    "Apoiar clientes corporativos e institucionais na execução de procurement, contratos, fiscalização de projetos e operações logísticas com integridade, conformidade e resultados mensuráveis.": "Apoiar clientes corporativos e institucionais na execução de procurement, contratos, fiscalização de projetos e operações logísticas com integridade, conformidade e resultados mensuráveis.",
    "Visão": "Visão",
    "Ser referência em Angola e na região como parceiro independente para procurement de elevado risco, gestão contratual e logística aplicada a projetos financiados por doadores internacionais.": "Ser referência em Angola e na região como parceiro independente para procurement de elevado risco, gestão contratual e logística aplicada a projetos financiados por doadores internacionais.",
    "Valores": "Valores",
    "Independência, rigor técnico, transparência, conformidade legal, orientação para resultados e respeito pelos padrões internacionais de doadores.": "Independência, rigor técnico, transparência, conformidade legal, orientação para resultados e respeito pelos padrões internacionais de doadores.",
    "Compromisso": "Compromisso",
    "Mitigar riscos em todas as etapas — da especificação técnica à entrega final no terreno — e capacitar as equipas dos clientes para sustentarem as práticas que recomendamos.": "Mitigar riscos em todas as etapas — da especificação técnica à entrega final no terreno — e capacitar as equipas dos clientes para sustentarem as práticas que recomendamos.",

    // Diferenciais
    "Porquê escolher a PrimeProc": "Porquê escolher a PrimeProc",
    "Diferenciais que protegem o projeto": "Diferenciais que protegem o projeto",
    "Forte orientação para conformidade": "Forte orientação para conformidade",
    "Mitigação de riscos legais e processuais em todas as etapas da aquisição, do transporte e da entrega.": "Mitigação de riscos legais e processuais em todas as etapas da aquisição, do transporte e da entrega.",
    "Conhecimento de regulamentos de doadores": "Conhecimento de regulamentos de doadores",
    "Expertise específica em normas internacionais, vital para projetos financiados externamente.": "Expertise específica em normas internacionais, vital para projetos financiados externamente.",
    "Abordagem independente e ética": "Abordagem independente e ética",
    "Atuação livre de conflitos de interesse, transparência total e orientação para resultados.": "Atuação livre de conflitos de interesse, transparência total e orientação para resultados.",
    "Comunicação clara": "Comunicação clara",
    "Comunicação fluida e relatórios técnicos precisos do planeamento à prestação de contas.": "Comunicação fluida e relatórios técnicos precisos do planeamento à prestação de contas.",
    "Capacidade operacional em terreno": "Capacidade operacional em terreno",
    "Equipas com experiência em operações de campo, locais remotos, armazéns de obra e autoridades locais.": "Equipas com experiência em operações de campo, locais remotos, armazéns de obra e autoridades locais.",
    "Cobertura completa da cadeia de valor": "Cobertura completa da cadeia de valor",
    "Integração nativa entre procurement, contratos, fiscalização e logística — uma única equipa, fim a fim.": "Integração nativa entre procurement, contratos, fiscalização e logística — uma única equipa, fim a fim.",

    // Rodapé / Footer
    "Procurement • Contratos • Fiscalização de Projetos • Logística aplicada": "Procurement • Contratos • Fiscalização de Projetos • Logística aplicada",
    "Centralidade do Kilamba Bloco X, Edifício 34, AP 01, Luanda, Angola": "Centralidade do Kilamba Bloco X, Edifício 34, AP 01, Luanda, Angola",
    "Consultoria e Fiscalização. Todos os direitos reservados.": "Consultoria e Fiscalização. Todos os direitos reservados.",
  },
  EN: {
    // Menu & Navigation
    "Quem Somos": "About Us",
    "Posicionamento": "Positioning",
    "Áreas de Atuação": "Areas of Expertise",
    "Serviços": "Services",
    "Logística Aplicada": "Applied Logistics",
    "Porquê a PrimeProc": "Why PrimeProc",
    "Idioma / Language": "Language",

    // Institutional Overview & About
    "Bloco Institucional": "Institutional Overview",
    "O que define a PrimeProc": "What Defines PrimeProc",
    "Independência": "Independence",
    "Atuação livre de conflitos de interesse.": "Acting entirely free of conflicts of interest.",
    "Rigor técnico": "Technical Rigor",
    "Em cada especificação, contrato e entrega.": "In every specification, contract, and delivery.",
    "Transparência": "Transparency",
    "Total, em todas as fases do projeto.": "Full transparency across all project phases.",
    "Conformidade legal": "Legal Compliance",
    "Alinhada às normas locais e dos doadores.": "Aligned with local regulatory standards and donor guidelines.",
    "Orientação para resultados": "Results-Oriented",
    "Métricas, evidências e prestação de contas.": "Key metrics, concrete evidence, and strict accountability.",
    "Capacitação": "Capacity Building",
    "Transferência de conhecimento às equipas dos clientes.": "Knowledge transfer directly to client teams.",
    "Somos uma empresa angolana criada para apoiar organizações na implementação de processos de aquisição, gestão contratual, fiscalização de projetos e logística aplicada, com rigor técnico, transparência e conformidade.": "We are an Angolan company founded to assist organizations in implementing procurement processes, contract management, project supervision, and applied logistics with technical rigor, transparency, and compliance.",
    "Apesar de recente como entidade jurídica, somos suportados por uma equipa com sólida experiência prática em procurement, incluindo atuação em projetos financiados por doadores internacionais, operando em ambientes regulatórios exigentes e em localizaciones remotas.": "Although recently established as a legal entity, we are backed by a team with extensive practical experience in procurement, including projects funded by international donors, operating under strict regulatory environments and in remote locations.",
    "O Nosso Foco": "Our Focus",
    "Atuamos no segmento corporativo e institucional, guiando a conformidade e eficiência dos processos de aquisição, a integridade da cadeia logística e a entrega física e financeira dos projetos.": "We operate in the corporate and institutional sectors, ensuring compliance and efficiency in procurement processes, the integrity of the supply chain, and the physical and financial delivery of projects.",

    // Hero & CTA
    "Consultoria e Fiscalização": "Consulting and Supervision",
    "Consultoria especializada em procurement, gestão de contratos, fiscalização de projetos e logística aplicada — com rigor técnico, transparência e conformidade.": "Specialized consulting in procurement, contract management, project supervision, and applied logistics — with technical rigor, transparency, and compliance.",
    "Conheça os nossos serviços": "Explore Our Services",
    "Fale connosco": "Contact Us",
    "Clientes privados": "Private clients",
    "Projetos financiados por doadores internacionais": "Projects funded by international donors",
    "Vamos proteger o seu próximo projeto?": "Ready to safeguard your next project?",
    "Fale com a nossa equipa sobre procurement de elevado risco, gestão contratual, fiscalização e logística aplicada.": "Get in touch with our team regarding high-risk procurement, contract management, project supervision, and applied logistics.",
    "Entrar em contacto": "Get in Touch",

    // Areas of Expertise
    "Áreas-Chave de Atuação": "Key Areas of Expertise",
    "Cobertura completa do ciclo de procurement": "Full coverage of the procurement lifecycle",
    "Quatro grandes áreas — do planeamento estratégico à entrega final em campo.": "Four core domains — from strategic planning to final field delivery.",
    "Consultoria em Procurement": "Procurement Consulting",
    "Diagnóstico e Planeamento": "Assessment & Planning",
    "Mitigação de Riscos": "Risk Mitigation",
    "Logística de Procurement e Cadeia de Abastecimento": "Procurement Logistics & Supply Chain",
    "Gestão e Fiscalização": "Management & Supervision",
    "Gestão de Contratos": "Contract Management",
    "Fiscalização de Projetos": "Project Supervision",
    "Fiscalização Logística de Projetos": "Project Logistics Supervision",
    "Auditoria e Capacitação": "Audit & Capacity Building",
    "Auditorias de Procurement": "Procurement Audits",
    "Capacitação Institucional": "Institutional Capacity Building",
    "Treino em Operações Logísticas": "Logistics Operations Training",
    "Logística Aplicada": "Applied Logistics",
    "Nova": "New",

    // Core Services
    "Serviços — Núcleo": "Core Services",
    "Procurement · Contratos · Fiscalização": "Procurement · Contracts · Supervision",
    "Análise completa das necessidades de aquisição, mapeamento de mercado, especificações técnicas e plano de procurement alinhado ao orçamento e aos regulamentos aplicáveis.": "Comprehensive assessment of procurement needs, market mapping, technical specifications, and a procurement plan aligned with budget and applicable regulations.",
    "Identificação de convergências, divergências e riscos de conformidade. Foco na mitigação preventiva e apoio estratégico à tomada de decisão.": "Identification of alignment, discrepancies, and compliance risks. Focused on preventive mitigation and strategic decision-support.",
    "Sourcing de fornecedores logísticos, transporte multimodal, consolidação de cargas e lead times alinhados à execução do projeto.": "Sourcing of logistics providers, multimodal transport, cargo consolidation, and lead times aligned with project timelines.",
    "Acompanhamento integral da execução contratual, prazos, entregáveis, níveis de serviço e SLAs. Protege os interesses do cliente e previne litígios.": "Full-cycle monitoring of contractual execution, deadlines, deliverables, service levels, and SLAs to safeguard client interests and prevent disputes.",
    "Atuação direta no terreno e na documentação para garantir que a implementação física e financeira reflete o planeado. Mandatória em projetos financiados externamente.": "On-site and documentation oversight to ensure physical and financial execution matches planning. Mandatory for externally funded projects.",
    "Supervisão em campo: verificação de receção, conferência quali/quanti, armazenagem em obra, controlo de expedição e rastreio até ao ponto de uso.": "Field supervision: receiving inspections, qualitative/quantitative verification, job-site storage, dispatch control, and point-of-use tracking.",

    // Applied Logistics
    "Logística Aplicada ao Procurement": "Logistics Applied to Procurement",
    "Integração nativa entre procurement, contratos, fiscalização e logística — eliminando descontinuidades entre quem compra, quem transporta e quem fiscaliza.": "Seamless integration between procurement, contracts, supervision, and logistics — eliminating disconnects between buyers, carriers, and inspectors.",
    "Planeamento de Transporte e Expedição": "Transport and Dispatch Planning",
    "Planos de transporte multimodal (rodoviário, marítimo, aéreo), consolidação de cargas e janelas de embarque para otimizar custo e tempo.": "Multimodal transport plans (road, sea, air), cargo consolidation, and shipping windows to optimize cost and time.",
    "Despacho Aduaneiro e Cross-Border": "Customs Clearance & Cross-Border",
    "Documentação, classificação tarifária, licenciamento, requisitos cambiais e articulação com autoridades aduaneiras e reguladoras.": "Documentation, tariff classification, licensing, foreign exchange requirements, and coordination with customs and regulatory authorities.",
    "Gestão de Armazéns e Estoques": "Warehouse & Inventory Management",
    "Soluções de armazenagem, controlo de stocks com FIFO/FEFO, reconciliação física periódica e reservas para projetos.": "Storage solutions, FIFO/FEFO inventory control, periodic physical reconciliation, and project reservations.",
    "Distribuição e Última Milha": "Distribution & Last-Mile Delivery",
    "Entregas em locais de difícil acesso: transportadores locais, janelas de receção em obra, livro de entradas e relatórios de ocorrências.": "Deliveries to hard-to-reach locations: local carriers, job-site receiving windows, logbooks, and incident reports.",
    "Rastreabilidade e Cadeia de Custódia": "Traceability & Chain of Custody",
    "Rastreio end-to-end, documentação de cadeia de custódia e prova de entrega compatíveis com auditorias de doadores internacionais.": "End-to-end tracking, chain of custody documentation, and proof of delivery compatible with international donor audits.",
    "Gestão de Operadores Logísticos": "Logistics Operator Management",
    "Qualificação, contratação e supervisão de 3PL/4PL, brokers de carga e transitários com KPIs de desempenho claros.": "Qualification, contracting, and supervision of 3PL/4PL providers, freight brokers, and forwarders with clear performance KPIs.",

    // Positioning
    "Posicionamento Estratégico": "Strategic Positioning",
    "Visão, Missão, Valores e Compromisso": "Vision, Mission, Values & Commitment",
    "Missão": "Mission",
    "Apoiar clientes corporativos e institucionais na execução de procurement, contratos, fiscalização de projetos e operações logísticas com integridade, conformidade e resultados mensuráveis.": "Supporting corporate and institutional clients in executing procurement, contracts, project supervision, and logistics operations with integrity, compliance, and measurable results.",
    "Visão": "Vision",
    "Ser referência em Angola e na região como parceiro independente para procurement de elevado risco, gestão contratual e logística aplicada a projetos financiados por doadores internacionais.": "To be the benchmark in Angola and the region as an independent partner for high-risk procurement, contract management, and applied logistics for donor-funded projects.",
    "Valores": "Values",
    "Independência, rigor técnico, transparência, conformidade legal, orientação para resultados e respeito pelos padrões internacionais de doadores.": "Independence, technical rigor, transparency, legal compliance, results orientation, and adherence to international donor standards.",
    "Compromisso": "Commitment",
    "Mitigar riscos em todas as etapas — da especificação técnica à entrega final no terreno — e capacitar as equipas dos clientes para sustentarem as práticas que recomendamos.": "Mitigating risks at every stage — from technical specifications to final field delivery — and empowering client teams to sustain best practices.",

    // Differentiators
    "Porquê escolher a PrimeProc": "Why Choose PrimeProc",
    "Diferenciais que protegem o projeto": "Key Differentiators Protecting Your Project",
    "Forte orientação para conformidade": "Strong Focus on Compliance",
    "Mitigação de riscos legais e processuais em todas as etapas da aquisição, do transporte e da entrega.": "Mitigation of legal and procedural risks at all stages of procurement, transport, and delivery.",
    "Conhecimento de regulamentos de doadores": "Deep Knowledge of Donor Regulations",
    "Expertise específica em normas internacionais, vital para projetos financiados externamente.": "Specific expertise in international standards, vital for externally funded projects.",
    "Abordagem independente e ética": "Independent & Ethical Approach",
    "Atuação livre de conflitos de interesse, transparência total e orientação para resultados.": "Free from conflicts of interest, with full transparency and a results-driven orientation.",
    "Comunicação clara": "Clear Communication",
    "Comunicação fluida e relatórios técnicos precisos do planeamento à prestação de contas.": "Seamless communication and precise technical reporting from planning to accountability.",
    "Capacidade operacional em terreno": "On-Site Operational Capability",
    "Equipas com experiência em operações de campo, locais remotos, armazéns de obra e autoridades locais.": "Teams experienced in field operations, remote locations, site warehouses, and local authorities.",
    "Cobertura completa da cadeia de valor": "End-to-End Value Chain Coverage",
    "Integração nativa entre procurement, contratos, fiscalização e logística — uma única equipa, fim a fim.": "Native integration of procurement, contracts, supervision, and logistics — a single team end-to-end.",

    // Footer
    "Procurement • Contratos • Fiscalização de Projetos • Logística aplicada": "Procurement • Contracts • Project Supervision • Applied Logistics",
    "Centralidade do Kilamba Bloco X, Edifício 34, AP 01, Luanda, Angola": "Centralidade do Kilamba Block X, Building 34, Apt 01, Luanda, Angola",
    "Consultoria e Fiscalização. Todos os direitos reservados.": "Consulting and Supervision. All rights reserved.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "PT",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("PT");

  useEffect(() => {
    const savedLang = localStorage.getItem("primeproc_lang") as Language | null;
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem("primeproc_lang", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.PT?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}