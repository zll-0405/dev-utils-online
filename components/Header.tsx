"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Header() {
    
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <header className="flex justify-between px-6 py-4 items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
            <Image src="/logo.svg" alt="dev utils online" width={80} height={50} className="mb-4" />
        </Link>
      </div>
     
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 transition-colors"
      >
        {isDarkMode ? (
          <Moon className="w-6 h-6 text-slate-50" />
        ) : (
          <Sun className="w-6 h-6 text-gray-800" />
        )}
      </button>

    </header>
  );
}