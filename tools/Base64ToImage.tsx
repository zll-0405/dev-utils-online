"use client"

import { useState, useCallback } from "react";
import { Textarea } from "@/components/base/TextareaComponent";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/base/CardComponent";
import { Button } from "@/components/base/ButtonComponent";
import { Label } from "@/components/base/LabelComponent";
import Base64ToImageSEO from "@/data/seo/base64toimage";

export default function Base64ToImage() {
  const [base64Input, setBase64Input] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleConvert = useCallback(() => {
    try {
      // 确保 Base64 字符串格式正确
      const formattedBase64 = base64Input.trim().replace(/^data:image\/[a-z]+;base64,/, "");
      const imageUrl = `data:image/png;base64,${formattedBase64}`;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("转换失败:", error);
      setImageUrl("");
    }
  }, [base64Input]);

  return (
    <main>
      <section className="container max-w-2xl mb-12">
        <PageHeader
          title="Base64 转图片"
          description="免费，快速"
        />
      </section>

      <section className="container max-w-2xl mb-6">
        <Card className="flex flex-col p-6 hover:shadow-none shadow-none rounded-xl">
          <div>
            <Label>Base64 字符串</Label>
            <Textarea
              rows={6}
              placeholder="粘贴 Base64 字符串"
              onChange={(e) => setBase64Input(e.target.value)}
              className="mb-4"
              value={base64Input}
            />
            <Button onClick={handleConvert} className="mb-4">转换为图片</Button>
            {imageUrl && (
              <div>
                <Label>转换结果</Label>
                <img src={imageUrl} alt="Converted image" className="mt-2 max-w-full" />
              </div>
            )}
          </div>
        </Card>
      </section>

      <section className="container max-w-2xl mb-6" style={{marginTop: '16px'}}>
        <Base64ToImageSEO />
      </section>
    </main>
  );
}