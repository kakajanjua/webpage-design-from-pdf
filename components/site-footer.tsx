"use client";

import { useLanguage } from "@/lib/i18n";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Mail } from "lucide-react";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer
      id="contacto"
      className="scroll-mt-10 border-t border-border bg-secondary/60 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Banner CTA Principal (Re-anima a cada scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl bg-primary px-8 py-12 text-primary-foreground md:px-14 md:py-16 shadow-xl"
        >
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h2 className="text-balance font-serif text-3xl font-bold leading-tight md:text-4xl">
                {t("Vamos proteger o seu próximo projeto?")}
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
                {t("Fale com a nossa equipa sobre procurement de elevado risco, gestão contratual, fiscalização e logística aplicada.")}
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href="mailto:geral@primeproc.ao"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md transition-all hover:bg-amber-400 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("Entrar em contacto")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Informações da Empresa & Contactos (Re-anima a cada scroll) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                P
              </span>
              <span className="font-serif text-lg font-bold text-primary">
                PrimeProc
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("Procurement • Contratos • Fiscalização de Projetos • Logística aplicada")}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
              {t("Centralidade do Kilamba Bloco X, Edifício 34, AP 01, Luanda, Angola")}
            </span>
            <a
              href="https://www.primeproc.ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary group"
            >
              <Globe className="h-4 w-4 shrink-0 text-amber-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              www.primeproc.ao
            </a>
            <a
              href="mailto:geral@primeproc.ao"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary group"
            >
              <Mail className="h-4 w-4 shrink-0 text-amber-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              geral@primeproc.ao
            </a>
          </div>
        </motion.div>

        {/* Rodapé / Copyright */}
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} PrimeProc — {t("Consultoria e Fiscalização. Todos os direitos reservados.")}
        </div>
      </div>
    </footer>
  );
}