"use client";

import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSelector, LANGUAGES } from "./language-switcher";

export function SiteHeader() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic navItems so labels update when the language changes
  const navItems = [
    { label: t("Quem Somos"), href: "#quem-somos" },
    { label: t("Posicionamento"), href: "#posicionamento" },
    { label: t("Áreas de Atuação"), href: "#areas" },
    { label: t("Serviços"), href: "#servicos" },
    { label: t("Logística Aplicada"), href: "#logistica" },
    { label: t("Porquê a PrimeProc"), href: "#diferenciais" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md [webkit-font-smoothing:antialiased]"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Logo / Brand */}
        <Link href="#top" className="flex items-center gap-2.5" aria-label="PrimeProc — página inicial">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-sm font-bold text-primary-foreground shadow-sm">
            P
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-primary">
            PrimeProc
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-primary py-1 group"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSelector />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={language} /* Forces mobile drawer re-render when language changes */
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-b border-border bg-background lg:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Selection Options */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {t("Idioma / Language")}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        if (typeof setLanguage === "function") {
                          setLanguage(lang.code);
                        }
                      }}
                      className={`flex items-center justify-center gap-1.5 rounded-md border py-2 text-xs font-medium transition-colors ${
                        language === lang.code
                          ? "border-amber-500/50 bg-amber-500/10 text-amber-600 font-semibold"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}