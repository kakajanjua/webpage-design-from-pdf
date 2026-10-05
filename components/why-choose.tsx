"use client";

import { useLanguage } from "@/lib/i18n";
import { useRef, useState } from "react";
import { SectionLabel } from "./about";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Globe, Scale, MessageSquare, HardHat, Workflow, LucideIcon } from "lucide-react";

interface Item {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const items: Item[] = [
  {
    icon: ShieldCheck,
    titleKey: "Forte orientação para conformidade",
    descKey: "Mitigação de riscos legais e processuais em todas as etapas da aquisição, do transporte e da entrega.",
  },
  {
    icon: Globe,
    titleKey: "Conhecimento de regulamentos de doadores",
    descKey: "Expertise específica em normas internacionais, vital para projetos financiados externamente.",
  },
  {
    icon: Scale,
    titleKey: "Abordagem independente e ética",
    descKey: "Atuação livre de conflitos de interesse, transparência total e orientação para resultados.",
  },
  {
    icon: MessageSquare,
    titleKey: "Comunicação clara",
    descKey: "Comunicação fluida e relatórios técnicos precisos do planeamento à prestação de contas.",
  },
  {
    icon: HardHat,
    titleKey: "Capacidade operacional em terreno",
    descKey: "Equipas com experiência em operações de campo, locais remotos, armazéns de obra e autoridades locais.",
  },
  {
    icon: Workflow,
    titleKey: "Cobertura completa da cadeia de valor",
    descKey: "Integração nativa entre procurement, contratos, fiscalização e logística — uma única equipa, fim a fim.",
  },
];

function WhyChooseCard({ item, index, isInView }: { item: Item; index: number; isInView: boolean }) {
  const { t } = useLanguage();
  const [isDone, setIsDone] = useState(false);
  const Icon = item.icon;

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
      className="flex gap-4 group transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-150">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-semibold leading-snug text-primary group-hover:text-amber-600 transition-colors duration-150">
          {t(item.titleKey)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t(item.descKey)}
        </p>
      </div>
    </motion.article>
  );
}

export function WhyChoose() {
  const { t, language } = useLanguage();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "100px 0px" });

  return (
    <section id="diferenciais" className="scroll-mt-10 bg-background py-20 md:py-28 overflow-hidden [webkit-font-smoothing:antialiased]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <SectionLabel>{t("Porquê escolher a PrimeProc")}</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("Diferenciais que protegem o projeto")}
          </h2>
        </div>

        {/* Grelha de Diferenciais */}
        <div 
          ref={gridRef}
          className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <WhyChooseCard 
              key={`${item.titleKey}-${language}`} 
              item={item} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}