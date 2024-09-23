"use client"

import Image from "next/image";
import { getTools } from "@/data/tools";
import { useLanguage } from "./contexts/LanguageContext";
import HomeCard from "@/components/HomeCard";
import { CMDK } from "@/components/CMDK";

export default function Home() {
  const { language } = useLanguage();
  const tools = getTools(language);

  return (
    <main className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <Image
        src="/logo.svg"
        alt="dev utils online"
        width={100}
        height={50}
        className="mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Dev Utils Online</h1>
      <p className="text-xl text-center mb-8 text-gray-600">
        Here are fast, free dev utils.
      </p>
      <div className="w-full max-w-2xl mb-12">
        <CMDK showSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <HomeCard 
            key={tool.title}
            title={tool.title}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </main>
  );
}
