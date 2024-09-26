import { Suspense } from 'react';
import { toolsMap, ToolKey } from '@/data/tools/toolsMap';
import { Metadata } from 'next';

export const runtime = "edge";

export async function generateMetadata({ params }: { params: { tool: string } }): Promise<Metadata> {
  const tool = toolsMap[params.tool as ToolKey];
  if (tool && tool.metadata) {
    return tool.metadata;
  }
  return {};
}

export default function ToolPage({ params }: { params: { tool: string } }) {
  const tool = toolsMap[params.tool as ToolKey];

  if (!tool) {
    return <div>Tool not found</div>;
  }

  const ToolComponent = tool.component;

  return (
    <div className="p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <ToolComponent />
      </Suspense>
    </div>
  );
}