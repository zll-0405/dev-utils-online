"use client"

import { useCallback, useState } from "react";
import { Textarea } from "@/components/base/TextareaComponent";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/base/CardComponent";
import { Button } from "@/components/base/ButtonComponent";
import { Label } from "@/components/base/LabelComponent";
import { useCopyToClipboard } from "@/components/hooks/useCopyToClipboard";

export function formatOutput(timestamp: string) {
  let date: Date;
  let formatDetected: string;

  if (/^\d{11,13}$/.test(timestamp)) {
    date = new Date(parseInt(timestamp, 10));
    formatDetected = "milliseconds";
  } else if (/^\d{1,10}$/.test(timestamp)) {
    date = new Date(parseInt(timestamp, 10) * 1000);
    formatDetected = "seconds";
  } else {
    throw new Error("Invalid timestamp format");
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const gmtDate = formatDate(date, "UTC");
  const localDate = formatDate(date);
  const labelWidth = 22;

  return (
    `Format detected: ${formatDetected}\n` +
    "---\n" +
    "Greenwich Mean Time:".padEnd(labelWidth) +
    `${gmtDate}\n` +
    "Your time zone:".padEnd(labelWidth) +
    `${localDate}`
  );
}

function formatDate(date: Date, timeZone: string = "local") {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: timeZone === "local" ? undefined : timeZone,
    timeZoneName: "short",
  };

  return date.toLocaleString("en-US", options);
}


export default function TimestampToDate() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { buttonText, handleCopy } = useCopyToClipboard();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.currentTarget;
      setInput(value);

      if (value.trim() === "") {
        setOutput("");
        return;
      }

      try {
        const output = formatOutput(value.trim());
        setOutput(output);
      } catch {
        setOutput(
          "Invalid timestamp format.\nPlease use milliseconds (11-13 digits) or seconds (1-10 digits)."
        );
      }
    },
    []
  );

  return (
    <main>

      <section className="container max-w-2xl mb-12">
        <PageHeader
          title="Timestamp to Date Converter"
          description="Free"
        />
      </section>

      <section className="container max-w-2xl mb-6">
        <Card className="flex flex-col p-6 hover:shadow-none shadow-none rounded-xl">
          <div>
            <Label>Timestamp (milliseconds or seconds)</Label>
            <Textarea
              rows={6}
              placeholder="Paste here"
              onChange={handleChange}
              className="mb-6"
              value={input}
            />
            <Label style={{ marginTop: '16px' }}>Date</Label>
            <Textarea
              value={output}
              rows={6}
              readOnly
              className="mb-4 font-mono"
            />
            <Button variant="outline" onClick={() => handleCopy(output)}>
              {buttonText}
            </Button>
          </div>
        </Card>
      </section>

    </main>
  );
}
