import Base64Converter from "@/tools/Base64Converter";

export const runtime = "edge";

const toolMap = {
  base64: Base64Converter,
};

export default function ToolPage({ params }: { params: { tool: string } }) {
  const Tool = toolMap[params.tool as keyof typeof toolMap];

  if (!Tool) {
    return <div>Tool not found</div>;
  }

  return (
    <div className="p-6">
      <Tool />
    </div>
  );
}