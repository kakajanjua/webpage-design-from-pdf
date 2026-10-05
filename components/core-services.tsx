"use client";

import { useLanguage } from "@/lib/i18n";
import { useRef, useState } from "react";
import { SectionLabel } from "./about";
import { motion, useInView } from "framer-motion";

type Service = {
  titleKey: string;
  descKey: string;
};

type Group = {
  groupKey: string;
  services: Service[];
};

const groups: Group[] = [
  {
    groupKey: "Consultoria em Procurement",
    services: [
      {
        titleKey: "Diagnóstico e Planeamento",
        descKey: "Análise completa das necessidades de aquisição, mapeamento de mercado, especificações técnicas e plano de procurement alinhado ao orçamento e aos regulamentos aplicáveis.",
      },
      {
        titleKey: "Mitigação de Riscos",
        descKey: "Identificação de convergências, divergências e riscos de conformidade. Foco na mitigação preventiva e apoio estratégico à tomada de decisão.",
      },
      {
        titleKey: "Logística de Procurement e Cadeia de Abastecimento",
        descKey: "Sourcing de fornecedores logísticos, transporte multimodal, consolidação de cargas e lead times alinhados à execução do projeto.",
      },
    ],
  },
  {
    groupKey: "Gestão e Fiscalização",
    services: [
      {
        titleKey: "Gestão de Contratos",
        descKey: "Acompanhamento integral da execução contratual, prazos, entregáveis, níveis de serviço e SLAs. Protege os interesses do cliente e previne litígios.",
      },
      {
        titleKey: "Fiscalização de Projetos",
        descKey: "Atuação direta no terreno e na documentação para garantir que a implementação física e financeira reflete o planeado. Mandatória em projetos financiados externamente.",
      },
      {
        titleKey: "Fiscalização Logística de Projetos",
        descKey: "Supervisão em campo: verificação de receção, conferência quali/quanti, armazenagem em obra, controlo de expedição e rastreio até ao ponto de uso.",
      },
    ],
  },
];

function ServiceCard({ service, index, isInView }: { service: Service; index: number; isInView: boolean }) {
  const { t } = useLanguage();
  const [isDone, setIsDone] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      onAnimationComplete={() => setIsDone(true)}
      transition={{
        duration: 0.25,
        ease: "easeOut",
        delay: index * 0.03,
      }}
      style={isDone ? { transform: "none" } : undefined}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-amber-500/30 shadow-sm"
    >
      <div>
        <span className="font-serif text-2xl font-bold text-amber-600">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h4 className="mt-3 font-semibold leading-snug text-primary group-hover:text-amber-600 transition-colors duration-150">
          {t(service.titleKey)}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t(service.descKey)}
        </p>
      </div>
    </motion.article>
  );
}

function ServiceGroupBlock({ group }: { group: Group }) {
  const { t, language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "100px 0px" });

  return (
    <div ref={containerRef}>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/70 border-b border-border/60 pb-2">
        {t(group.groupKey)}
      </h3>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {group.services.map((s, i) => (
          <ServiceCard
            key={`${s.titleKey}-${language}`}
            service={s}
            index={i}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}

export function CoreServices() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="scroll-mt-05 bg-secondary/60 py-20 md:py-28 overflow-hidden [webkit-font-smoothing:antialiased]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <SectionLabel>{t("Serviços — Núcleo")}</SectionLabel>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("Procurement · Contratos · Fiscalização")}
          </h2>
        </div>

        {/* Grupos de Serviços */}
        <div className="mt-14 space-y-14">
          {groups.map((g) => (
            <ServiceGroupBlock key={g.groupKey} group={g} />
          ))}
        </div>

      </div>
    </section>
  );
}