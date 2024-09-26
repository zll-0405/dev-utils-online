import { lazy } from 'react';
import { metadata as base64Metadata } from "@/data/seo/base64";
import { metadata as unicodeMetadata } from "@/data/seo/unicode";

const Base64Converter = lazy(() => import("@/tools/Base64Converter"));
const UnicodeConverter = lazy(() => import("@/tools/UnicodeConverter"));

export const toolsMap = {
  base64: { component: Base64Converter, metadata: base64Metadata },
  unicode: { component: UnicodeConverter, metadata: unicodeMetadata },
};

export type ToolKey = keyof typeof toolsMap;