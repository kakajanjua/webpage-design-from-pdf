"use client";

import { useLanguage } from "@/lib/i18n";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Ship, FileCheck, Warehouse, MapPinned, ScanLine, Users, LucideIcon } from "lucide-react";
import { ParallaxBackground } from "./parallax-background";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function ServiceCard({ service, index, isInView }: { service: Service; index: number; isInView: boolean }) {
  const [isDone, setIsDone] = useState(false);
  const Icon = service.icon;

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
      className="group rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-primary-foreground/10 hover:border-amber-400/30"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-bold group-hover:scale-105 transition-transform duration-150">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-semibold leading-snug text-primary-foreground group-hover:text-amber-400 transition-colors duration-150">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/75">
        {service.desc}
      </p>
    </motion.article>
  );
}

export function AppliedLogistics() {
  const { t } = useLanguage();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "100px 0px" });

  const services: Service[] = [
    {
      icon: Ship,
      title: t("Planeamento de Transporte e Expedição"),
      desc: t("Planos de transporte multimodal (rodoviário, marítimo, aéreo), consolidação de cargas e janelas de embarque para otimizar custo e tempo."),
    },
    {
      icon: FileCheck,
      title: t("Despacho Aduaneiro e Cross-Border"),
      desc: t("Documentação, classificação tarifária, licenciamento, requisitos cambiais e articulação com autoridades aduaneiras e reguladoras."),
    },
    {
      icon: Warehouse,
      title: t("Gestão de Armazéns e Estoques"),
      desc: t("Soluções de armazenagem, controlo de stocks com FIFO/FEFO, reconciliação física periódica e reservas para projetos."),
    },
    {
      icon: MapPinned,
      title: t("Distribuição e Última Milha"),
      desc: t("Entregas em locais de difícil acesso: transportadores locais, janelas de receção em obra, livro de entradas e relatórios de ocorrências."),
    },
    {
      icon: ScanLine,
      title: t("Rastreabilidade e Cadeia de Custódia"),
      desc: t("Rastreio end-to-end, documentação de cadeia de custódia e prova de entrega compatíveis com auditorias de doadores internacionais."),
    },
    {
      icon: Users,
      title: t("Gestão de Operadores Logísticos"),
      desc: t("Qualificação, contratação e supervisão de 3PL/4PL, brokers de carga e transitários com KPIs de desempenho claros."),
    },
  ];

  return (
    <section id="logistica" className="relative scroll-mt-10 overflow-hidden bg-primary text-primary-foreground min-h-150 [webkit-font-smoothing:antialiased]">
      {/* Imagem de Fundo Parallax */}
      <ParallaxBackground
        image="/images/hero-logistics.png"
        speed={0.25}
        className="absolute inset-0 overflow-hidden opacity-[0.08]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
            {t("Logística Aplicada ao Procurement")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            {t("Integração nativa entre procurement, contratos, fiscalização e logística — eliminando descontinuidades entre quem compra, quem transporta e quem fiscaliza.")}
          </p>
        </div>

        {/* Grelha de Serviços */}
        <div 
          ref={gridRef}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, index) => (
            <ServiceCard 
              key={s.title} 
              service={s} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}