"use client";

import { useLanguage } from "@/lib/i18n";
import { useRef, useState } from "react";
import { SectionLabel } from "@/components/about";
import { motion, useInView } from "framer-motion";
import { ClipboardList, ShieldCheck, GraduationCap, Truck, Dot, LucideIcon } from "lucide-react";

interface Area {
  icon: LucideIcon;
  titleKey: string;
  badgeKey?: string;
  itemKeys: string[];
}

const areas: Area[] = [
  {
    icon: ClipboardList,
    titleKey: "Consultoria em Procurement",
    itemKeys: [
      "Diagnóstico e Planeamento",
      "Mitigação de Riscos",
      "Logística de Procurement e Cadeia de Abastecimento",
    ],
  },
  {
    icon: ShieldCheck,
    titleKey: "Gestão e Fiscalização",
    itemKeys: [
      "Gestão de Contratos", 
      "Fiscalização de Projetos", 
      "Fiscalização Logística de Projetos"
    ],
  },
  {
    icon: GraduationCap,
    titleKey: "Auditoria e Capacitação",
    itemKeys: [
      "Auditorias de Procurement",
      "Capacitação Institucional",
      "Treino em Operações Logísticas",
    ],
  },
  {
    icon: Truck,
    titleKey: "Logística Aplicada",
    badgeKey: "Nova",
    itemKeys: [
      "Planeamento de Transporte e Expedição",
      "Despacho Aduaneiro e Cross-Border",
      "Gestão de Armazéns e Estoques",
      "Distribuição e Última Milha",
      "Rastreabilidade e Cadeia de Custódia",
      "Gestão de Operadores Logísticos",
    ],
  },
];

function AreaCard({ area, index, isInView }: { area: Area; index: number; isInView: boolean }) {
  const { t } = useLanguage();
  const [isDone, setIsDone] = useState(false);
  const Icon = area.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      onAnimationComplete={() => setIsDone(true)}
      transition={{
        duration: 0.2,
        ease: "easeOut",
        delay: index * 0.03,
      }}
      style={isDone ? { transform: "none" } : undefined}
      className="flex flex-col justify-between rounded-xl border border-border bg-card p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-amber-500/30"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          {area.badgeKey && (
            <span className="rounded-full bg-amber-500/15 border border-amber-400/30 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-amber-700 animate-pulse">
              {t(area.badgeKey)}
            </span>
          )}
        </div>
        
        <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-primary">
          {t(area.titleKey)}
        </h3>

        <ul className="mt-4 space-y-2 border-t border-border pt-4">
          {area.itemKeys.map((itemKey) => (
            <li key={itemKey} className="flex text-xs leading-relaxed text-muted-foreground items-start">
              <Dot className="h-5 w-5 shrink-0 -ml-1.5 -mt-0.5 text-amber-600" aria-hidden="true" />
              <span className="-ml-0.5">{t(itemKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Areas() {
  const { t, language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "100px 0px" });

  return (
    <section id="areas" className="scroll-mt-05 border-y border-border bg-background py-20 md:py-28 overflow-hidden [webkit-font-smoothing:antialiased]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="max-w-2xl">
          <SectionLabel>{t("Áreas-Chave de Atuação")}</SectionLabel>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("Cobertura completa do ciclo de procurement")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground text-sm">
            {t("Quatro grandes áreas — do planeamento estratégico à entrega final em campo.")}
          </p>
        </div>

        {/* Card Grid */}
        <div 
          ref={containerRef} 
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {areas.map((area, index) => (
            <AreaCard 
              key={`${area.titleKey}-${language}`} 
              area={area} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}