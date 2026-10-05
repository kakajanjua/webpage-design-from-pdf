"use client";

import { useLanguage } from "@/lib/i18n";
import { useState, type ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Target, Eye, Scale, TrendingUp, GraduationCap, LucideIcon } from "lucide-react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-600">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

interface DefiningItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const definingConfig: DefiningItem[] = [
  {
    icon: Shield,
    titleKey: "Independência",
    descKey: "Atuação livre de conflitos de interesse.",
  },
  {
    icon: Target,
    titleKey: "Rigor técnico",
    descKey: "Em cada especificação, contrato e entrega.",
  },
  {
    icon: Eye,
    titleKey: "Transparência",
    descKey: "Total, em todas as fases do projeto.",
  },
  {
    icon: Scale,
    titleKey: "Conformidade legal",
    descKey: "Alinhada às normas locais e dos doadores.",
  },
  {
    icon: TrendingUp,
    titleKey: "Orientação para resultados",
    descKey: "Métricas, evidências e prestação de contas.",
  },
  {
    icon: GraduationCap,
    titleKey: "Capacitação",
    descKey: "Transferência de conhecimento às equipas dos clientes.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

function DefiningCard({ item }: { item: DefiningItem }) {
  const [isDone, setIsDone] = useState(false);
  const { t } = useLanguage();
  const Icon = item.icon;

  return (
    <motion.li
      variants={itemVariants}
      onAnimationComplete={() => setIsDone(true)}
      style={isDone ? { transform: "none" } : undefined}
      className="group rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-amber-500/30"
    >
      <Icon className="h-6 w-6 text-amber-600 group-hover:scale-105 transition-transform duration-150" aria-hidden="true" />
      <p className="mt-3 font-semibold text-primary group-hover:text-amber-600 transition-colors duration-150">
        {t(item.titleKey)}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {t(item.descKey)}
      </p>
    </motion.li>
  );
}

function LeftColumn() {
  const [isDone, setIsDone] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onAnimationComplete={() => setIsDone(true)}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={isDone ? { transform: "none" } : undefined}
    >
      <SectionLabel>{t("Bloco Institucional")}</SectionLabel>
      <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary md:text-4xl">
        {t("Quem Somos")}
      </h2>
      <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
        <p>
          {t("Somos uma empresa angolana criada para apoiar organizações na implementação de processos de aquisição, gestão contratual, fiscalização de projetos e logística aplicada, com rigor técnico, transparência e conformidade.")}
        </p>
        <p>
          {t("Apesar de recente como entidade jurídica, somos suportados por uma equipa com sólida experiência prática em procurement, incluindo atuação em projetos financiados por doadores internacionais, operando em ambientes regulatórios exigentes e em localizações remotas.")}
        </p>
        <p className="border-l-2 border-amber-500 pl-5 text-foreground">
          <span className="font-semibold text-primary">{t("O Nosso Foco")}</span> — {t("Atuamos no segmento corporativo e institucional, guiando a conformidade e eficiência dos processos de aquisição, a integridade da cadeia logística e a entrega física e financeira dos projetos.")}
        </p>
      </div>
    </motion.div>
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section id="quem-somos" className="scroll-mt-05 border-b border-border bg-background overflow-hidden [webkit-font-smoothing:antialiased]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          
          {/* Lado Esquerdo: Texto Institucional */}
          <LeftColumn />

          {/* Lado Direito: Lista de Pilares / Definidores */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-sm font-semibold uppercase tracking-widest text-amber-600"
            >
              {t("O que define a PrimeProc")}
            </motion.h3>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {definingConfig.map((item) => (
                <DefiningCard key={item.titleKey} item={item} />
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
}