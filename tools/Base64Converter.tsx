"use client"

import { useCallback, useState } from "react";
import { Textarea } from "@/components/base/TextareaComponent";
import { Tabs, TabsList, TabsTrigger } from "@/components/base/TabsComponent";
import { Card } from "@/components/base/CardComponent";
import { Button } from "@/components/base/ButtonComponent";
import { Label } from "@/components/base/LabelComponent";
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard";
import PageHeader from "@/components/PageHeader";
import Base64SEO from "@/data/seo/base64";

export function toBase64(value: string) {
  try {
    return Buffer.from(value).toString("base64");
  } catch {
    throw new Error("Failed to encode to Base64");
  }
}

export function fromBase64(value: string): string {
  try {
    const decoded = Buffer.from(value, "base64").toString("utf-8");
    if (!isPrintableASCII(decoded)) {
      throw new Error("Decoded string contains non-printable characters");
    }
    return decoded;
  } catch {
    throw new Error("Invalid Base64 input");
  }
}

/**
 * Checks if the given string consists entirely of printable ASCII characters.
 * Printable ASCII characters are those in the range from space (0x20) to tilde (0x7E).
 */
export function isPrintableASCII(str: string): boolean {
  return /^[\x20-\x7E]*$/.test(str);
}

export default function Base64Encoder() {
  const [type, setType] = useState<"encoder" | "decoder">("encoder");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { buttonText, handleCopy } = useCopyToClipboard();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.currentTarget;
      setInput(value);

      try {
        setOutput(type === "encoder" ? toBase64(value) : fromBase64(value));
      } catch {
        setOutput("Invalid input, please provide valid Base64 string");
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
          title="Base64 编码/解码"
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
            <Label style={{ marginTop: '16px' }}>{type === "encoder" ? "Text to encode" : "Base64"}</Label>
            <Textarea
              rows={6}
              placeholder="Paste here"
              onChange={handleChange}
              className="mb-6"
              value={input}
            />
            <Label style={{ marginTop: '16px' }}>{type === "encoder" ? "Base64" : "Text"}</Label>
            <Textarea value={output} rows={6} readOnly className="mb-6" />
            <Button style={{ marginTop: '16px' }} variant="outline" onClick={() => handleCopy(output)}>
              {buttonText}
            </Button>
          </div>
        </Card>
      </section>

      <section className="container max-w-2xl mb-6" style={{marginTop: '16px'}}>
        <Base64SEO />
      </section>
    </main>
  );
}