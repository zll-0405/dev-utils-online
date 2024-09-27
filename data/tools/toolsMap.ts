import { lazy } from 'react';
import { metadata as base64Metadata } from "@/data/seo/base64";
import { metadata as unicodeMetadata } from "@/data/seo/unicode";
import { metadata as urlMetadata } from "@/data/seo/url";

const Base64Converter = lazy(() => import("@/tools/Base64Converter"));
const UnicodeConverter = lazy(() => import("@/tools/UnicodeConverter"));
const UrlConverter = lazy(() => import("@/tools/UrlConverter"));
const ImageToBase64 = lazy(() => import("@/tools/ImageToBase64"));

export const toolsMap = {
  base64: { component: Base64Converter, metadata: base64Metadata },
  unicode: { component: UnicodeConverter, metadata: unicodeMetadata },
  url: {component: UrlConverter, metadata:urlMetadata},
  imagetobase64: {component: ImageToBase64,},

};

export type ToolKey = keyof typeof toolsMap;