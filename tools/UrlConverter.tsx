"use client"

import { useCallback, useState } from "react";
import { Textarea } from "@/components/base/TextareaComponent";
import { Tabs, TabsList, TabsTrigger } from "@/components/base/TabsComponent";
import { Card } from "@/components/base/CardComponent";
import { Button } from "@/components/base/ButtonComponent";
import { Label } from "@/components/base/LabelComponent";
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard";
import PageHeader from "@/components/PageHeader";
import UrlSEO from "@/data/seo/url";

export function encodeURL(value: string) {
  return encodeURIComponent(value);
}

export function decodeURL(value: string) {
  return decodeURIComponent(value);
}

export default function URLConverter() {
  const [type, setType] = useState<"encoder" | "decoder">("encoder");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { buttonText, handleCopy } = useCopyToClipboard();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.currentTarget;
      setInput(value);

      try {
        setOutput(type === "encoder" ? encodeURL(value) : decodeURL(value));
      } catch {
        setOutput("无效输入");
      }
    },
    [type]
  );

  const setActiveTab = (type: "encoder" | "decoder") => {
    setType(type);
    setOutput("");
    setInput("");
  };

  return (
    <main>
      <section className="container max-w-2xl mb-12">
        <PageHeader
          title="URL 编码/解码"
          description="免费，快速"
        />
      </section>

      <section className="container max-w-2xl mb-6">
        <Card className="flex flex-col p-6 hover:shadow-none shadow-none rounded-xl">
          <Tabs defaultValue="encoder" className="mb-6">
            <TabsList className="flex">
              <TabsTrigger
                className="flex flex-1"
                value="encoder"
                onClick={() => setActiveTab("encoder")}
              >
                编码
              </TabsTrigger>
              <TabsTrigger
                className="flex flex-1"
                onClick={() => setActiveTab("decoder")}
                value="decoder"
              >
                解码
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div>
            <Label style={{ marginTop: '16px' }}>{type === "encoder" ? "文本" : "URL 编码"}</Label>
            <Textarea
              rows={6}
              placeholder="Paste here"
              onChange={handleChange}
              className="mb-6"
              value={input}
            />
            <Label style={{ marginTop: '16px' }}>{type === "encoder" ? "URL 编码" : "文本"}</Label>
            <Textarea value={output} rows={6} readOnly className="mb-6" />
            <Button style={{ marginTop: '16px' }} variant="outline" onClick={() => handleCopy(output)}>
              {buttonText}
            </Button>
          </div>
        </Card>
      </section>

      <section className="container max-w-2xl mb-6" style={{marginTop: '16px'}}>
        <UrlSEO />
      </section>
    </main>
  );
}