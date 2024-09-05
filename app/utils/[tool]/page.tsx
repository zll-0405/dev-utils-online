import Base64Converter from "@/tools/Base64Converter";
import TimestampConverter from "@/tools/TimeStamp";

export const runtime = "edge";

const toolMap = {
  base64: Base64Converter,
  timestamp: TimestampConverter,
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