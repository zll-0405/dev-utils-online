"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "./base/ButtonComponent";

export default function Header() {
  const [isDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="flex justify-between px-6 py-4 items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="dev utils online"
            width={80}
            height={50}
            className="mb-4"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          className="min-h-10 min-w-10"
          variant="outline"
          size="icon"
          onClick={toggleLanguage}>
          {language === 'en' ? 'En' : '中文'}
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
