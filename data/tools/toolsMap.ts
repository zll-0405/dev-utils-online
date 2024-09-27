import { lazy } from 'react';
import { metadata as base64Metadata } from "@/data/seo/base64";
import { metadata as unicodeMetadata } from "@/data/seo/unicode";
import { metadata as urlMetadata } from "@/data/seo/url";

const Base64Converter = lazy(() => import("@/tools/Base64Converter"));
const UnicodeConverter = lazy(() => import("@/tools/UnicodeConverter"));
const UrlConverter = lazy(() => import("@/tools/UrlConverter"));

export const toolsMap = {
  base64: { component: Base64Converter, metadata: base64Metadata },
  unicode: { component: UnicodeConverter, metadata: unicodeMetadata },
  url: {component: UrlConverter, metadata:urlMetadata}
};

export type ToolKey = keyof typeof toolsMap;