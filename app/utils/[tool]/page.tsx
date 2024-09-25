import Base64Converter from "@/tools/Base64Converter";
import { metadata as base64Metadata } from "@/data/seo/base64";
import { Metadata } from 'next';

export const runtime = "edge";

const toolMap = {
  base64: { component: Base64Converter, metadata: base64Metadata },
};

export async function generateMetadata({ params }: { params: { tool: string } }): Promise<Metadata> {
  const tool = toolMap[params.tool as keyof typeof toolMap];
  if (tool && tool.metadata) {
    return tool.metadata;
  }
  return {};
}

export default function ToolPage({ params }: { params: { tool: string } }) {
  const tool = toolMap[params.tool as keyof typeof toolMap];

  if (!tool) {
    return <div>Tool not found</div>;
  }

  const ToolComponent = tool.component;

  return (
    <div className="p-6">
      <ToolComponent />
    </div>
  );
}