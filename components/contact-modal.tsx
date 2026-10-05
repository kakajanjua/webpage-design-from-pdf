"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`PrimeProc — ${form.get("subject") || "Pedido de contacto"}`);
    const body = encodeURIComponent(
      `Nome: ${form.get("name")}\nEmail: ${form.get("email")}\nTelefone: ${form.get("phone")}\n\nMensagem:\n${form.get("message")}`
    );
    window.location.href = `mailto:geral@primeproc.ao?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            role="dialog" aria-modal="true" aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <div className="bg-primary px-6 py-6 text-primary-foreground sm:px-8">
              <button onClick={onClose} aria-label={t("Fechar")} className="absolute right-4 top-4 rounded-full p-2 text-primary-foreground/70 transition hover:bg-white/10 hover:text-white">
                <X className="h-5 w-5" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">PrimeProc</p>
              <h2 id="contact-modal-title" className="mt-2 font-serif text-2xl font-bold">{t("Como podemos ajudá-lo?")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{t("Preencha os seus dados e a nossa equipa entrará em contacto consigo.")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-8">
              {submitted && <p className="rounded-lg border border-amber-400/40 bg-amber-500/10 p-3 text-sm text-primary">{t("Obrigado. O seu pedido está pronto para ser enviado por email.")}</p>}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-primary">{t("Nome")}
                  <input required name="name" className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                </label>
                <label className="text-sm font-medium text-primary">{t("Email")}
                  <input required type="email" name="email" className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-primary">{t("Telefone")}
                  <input name="phone" type="tel" className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                </label>
                <label className="text-sm font-medium text-primary">{t("Assunto")}
                  <input name="subject" className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
                </label>
              </div>
              <label className="text-sm font-medium text-primary">{t("Mensagem")}
                <textarea required name="message" rows={4} className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20" />
              </label>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 hover:-translate-y-0.5">
                <Mail className="h-4 w-4" /> {t("Enviar pedido")}
              </button>
              <div className="flex flex-col gap-2 pt-1 text-xs text-muted-foreground sm:flex-row sm:justify-between">
                <a href="mailto:geral@primeproc.ao" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-3.5 w-3.5" /> geral@primeproc.ao</a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
