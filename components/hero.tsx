"use client";

import { useLanguage } from "@/lib/i18n";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { ParallaxBackground } from "./parallax-background";

// Variantes de animação para entrada em cascata
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Fundo Parallax */}
      <ParallaxBackground
        image="/images/hero-logistics.png"
        speed={0.35}
        className="absolute inset-0 overflow-hidden opacity-70"
      />

      {/* Overlay com Gradiente de Legibilidade */}
      <div
        className="absolute inset-0 bg-linear-to-t from-primary via-primary/85 to-primary/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
        {/* Animação com key={language} para recriar ao alternar o idioma */}
        <motion.div
          key={language}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="max-w-3xl text-balance font-serif text-4xl font-bold leading-[1.1] md:text-6xl"
          >
            PrimeProc
            <span className="mt-2 block text-2xl font-normal text-primary-foreground/80 md:text-3xl">
              {t("Consultoria e Fiscalização")}
            </span>
          </motion.h1>

          {/* Subtítulo / Descrição */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85 md:text-xl"
          >
            {t("Consultoria especializada em procurement, gestão de contratos, fiscalização de projetos e logística aplicada — com rigor técnico, transparência e conformidade.")}
          </motion.p>

          {/* Botões de Ação (CTA) */}
          <motion.div 
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md transition-all hover:bg-amber-400 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("Conheça os nossos serviços")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t("Fale connosco")}
            </Link>
          </motion.div>

          {/* Bar de Localização e Especificações */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              Luanda — Angola
            </span>
            <span className="hidden h-4 w-px bg-primary-foreground/20 sm:block" aria-hidden="true" />
            <span>{t("Clientes privados")}</span>
            <span className="hidden h-4 w-px bg-primary-foreground/20 sm:block" aria-hidden="true" />
            <span>{t("Projetos financiados por doadores internacionais")}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}