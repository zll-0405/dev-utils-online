"use client"

import { useCallback, useState } from "react";
import { Textarea } from "@/components/base/TextareaComponent";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/base/CardComponent";
import { Button } from "@/components/base/ButtonComponent";
import { Label } from "@/components/base/LabelComponent";
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard";
import { ImageUploadComponent } from "@/components/base/ImageUploadComponent";
import ImageToBase64SEO from "@/data/seo/imagetobase64";

export default function ImageToBase64() {
  const [base64, setBase64] = useState("");
  const copyHooks = [
    useCopyToClipboard(),
  ];
  const [
    { buttonText: buttonBase64, handleCopy: handleCopyBase64 },
  ] = copyHooks;

  const handleFileSelect = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <main>
      <section className="container max-w-2xl mb-12">
        <PageHeader
          title="图片转 Base64"
          description="免费，快速"
        />
      </section>

      <section className="container max-w-2xl mb-6">
        <Card className="flex flex-col p-6 hover:shadow-none shadow-none rounded-xl">
          <ImageUploadComponent onFileSelect={handleFileSelect} />
          <div className="pt-8">
            <Label>Base64 编码</Label>
            <Textarea
              value={base64}
              rows={6}
              readOnly
              className="mb-4 overflow-x-hidden"
            />
            <Button variant="outline" onClick={() => handleCopyBase64(base64)}>
              {buttonBase64}
            </Button>
            <Divider />
          </div>
        </Card>
      </section>

      <section className="container max-w-2xl mb-6" style={{marginTop: '16px'}}>
        <ImageToBase64SEO />
      </section>
    </main>
  );
}

const Divider = () => {
  return <div className="h-[1px] bg-border my-6"></div>;
};

const truncate = (input: string, maxLength: number) => {
  if (input.length <= maxLength) {
    return input;
  }

  return input.substring(0, maxLength) + "...";
};