"use client";

import { useLanguage } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

export const LANGUAGES = [
  { code: "PT", label: "Português", flag: "🇦🇴" },
  { code: "EN", label: "English", flag: "🇬🇧" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-muted"
        aria-label="Select Language"
      >
        <Globe className="h-3.5 w-3.5 text-amber-600" />
        <span>{currentLang.flag} {currentLang.code}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md border border-border bg-background py-1 shadow-lg z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
              {language === lang.code && <Check className="h-3.5 w-3.5 text-amber-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}