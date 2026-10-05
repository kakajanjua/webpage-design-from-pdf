"use client";

import { useLanguage } from "@/lib/i18n";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, Rocket, Gem, Handshake, LucideIcon } from "lucide-react";
import { SectionLabel } from "./about";

interface PillarItem {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "missao",
    icon: Rocket,
    titleKey: "Missão",
    descKey: "Apoiar clientes corporativos e institucionais na execução de procurement, contratos, fiscalização de projetos e operações logísticas com integridade, conformidade e resultados mensuráveis.",
  },
  {
    id: "visao",
    icon: Compass,
    titleKey: "Visão",
    descKey: "Ser referência em Angola e na região como parceiro independente para procurement de elevado risco, gestão contratual e logística aplicada a projetos financiados por doadores internacionais.",
  },
  {
    id: "valores",
    icon: Gem,
    titleKey: "Valores",
    descKey: "Independência, rigor técnico, transparência, conformidade legal, orientação para resultados e respeito pelos padrões internacionais de doadores.",
  },
  {
    id: "compromisso",
    icon: Handshake,
    titleKey: "Compromisso",
    descKey: "Mitigar riscos em todas as etapas — da especificação técnica à entrega final no terreno — e capacitar as equipas dos clientes para sustentarem as práticas que recomendamos.",
  },
];

interface PillarCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
  isInView: boolean;
}

function PillarCard({ title, desc, icon: Icon, index, isInView }: PillarCardProps) {
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
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-amber-500/30"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-amber-500/10 transition-colors duration-150">
          <Icon className="h-5 w-5 group-hover:text-amber-600 transition-colors duration-150" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-xl font-bold text-primary group-hover:text-amber-600 transition-colors duration-150">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </motion.article>
  );
}

export function Positioning() {
  const { t, language } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "100px 0px" });

  return (
    <section id="posicionamento" className="scroll-mt-10 bg-secondary/60 overflow-hidden [webkit-font-smoothing:antialiased]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <SectionLabel>{t("Posicionamento Estratégico")}</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl">
            {t("Visão, Missão, Valores e Compromisso")}
          </h2>
        </div>

        {/* Grelha de Pilares */}
        <div 
          ref={containerRef}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {PILLARS_DATA.map((item, index) => (
            <PillarCard 
              key={`${item.id}-${language}`} 
              icon={item.icon}
              title={t(item.titleKey)}
              desc={t(item.descKey)}
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}