"use client"

import { useCallback, useState } from "react";
import { Textarea } from "@/components/base/TextareaComponent";
import { Tabs, TabsList, TabsTrigger } from "@/components/base/TabsComponent";
import { Card } from "@/components/base/CardComponent";
import { Button } from "@/components/base/ButtonComponent";
import { Label } from "@/components/base/LabelComponent";
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard";
import PageHeader from "@/components/PageHeader";
import UnicodeSEO from "@/data/seo/unicode";

export function toUnicode(str: string) {
    return str.split('').map(function (value) {
      const temp = value.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
      return '\\u' + temp;
    }).join('');
}

export function fromUnicode(str: string) {
  return str.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
}

export default function UnicodeConverter() {
  const [type, setType] = useState<"encoder" | "decoder">("encoder");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { buttonText, handleCopy } = useCopyToClipboard();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.currentTarget;
      setInput(value);

      try {
        setOutput(type === "encoder" ? toUnicode(value) : fromUnicode(value));
      } catch {
        setOutput("Invalid input");
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
          title="Unicode 编码/解码"
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
                Encode（编码）
              </TabsTrigger>
              <TabsTrigger
                className="flex flex-1"
                onClick={() => setActiveTab("decoder")}
                value="decoder"
              >
                Decode（解码）
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div>
            <Label style={{ marginTop: '16px' }}>{type === "encoder" ? "文本" : "Unicode"}</Label>
            <Textarea
              rows={6}
              placeholder="Paste here"
              onChange={handleChange}
              className="mb-6"
              value={input}
            />
            <Label style={{ marginTop: '16px' }}>{type === "encoder" ? "Unicode" : "文本"}</Label>
            <Textarea value={output} rows={6} readOnly className="mb-6" />
            <Button style={{ marginTop: '16px' }} variant="outline" onClick={() => handleCopy(output)}>
              {buttonText}
            </Button>
          </div>
        </Card>
      </section>

      <section className="container max-w-2xl mb-6" style={{marginTop: '16px'}}>
        <UnicodeSEO />
      </section>
    </main>
  );
}