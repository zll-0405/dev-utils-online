import Base64Converter from "@/tools/Base64Converter";
import TimestampConverter from "@/tools/TimeStamp";

const tools = {
  base64: Base64Converter,
  timestamp: TimestampConverter,
};

export default function ToolPage({ params }: { params: { tool: string } }) {
  const Tool = tools[params.tool as keyof typeof tools];

  if (!Tool) {
    return <div>Tool not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">{params.tool.charAt(0).toUpperCase() + params.tool.slice(1)} Tool</h1>
      <Tool />
    </div>
  );
}