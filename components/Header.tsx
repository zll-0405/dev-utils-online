"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

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
        <ThemeToggle />
      </div>
    </header>
  );
}
