import Link from "next/link";
import Image from "next/image";

const tools = [
  { name: "Base64 Converter", slug: "base64", description: "test" },
  { name: "Timestamp Converter", slug: "timestamp", description: "====" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 max-w-6xl mx-auto">
      <Image src="/logo.svg" alt="dev utils online" width={100} height={50} className="mb-4" />
      <h1 className="text-4xl font-bold mb-2">Dev Utils Online</h1>
      <p className="text-xl text-center mb-8 text-gray-600">
        Here are fast, free, open source dev utils.
      </p>
      <div className="w-full max-w-2xl mb-12">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div key={tool.slug} className="border rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{tool.description}</p>
            <Link
              href={`/utils/${tool.slug}`}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors text-center"
            >
              Try it
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}