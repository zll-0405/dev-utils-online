import { lazy } from 'react';
import { metadata as base64Metadata } from "@/data/seo/base64";
import { metadata as unicodeMetadata } from "@/data/seo/unicode";
import { metadata as urlMetadata } from "@/data/seo/url";
import { metadata as imagetobase64Metadata} from "@/data/seo/imagetobase64";
import { metadata as base64toImageMetadata } from "@/data/seo/base64toimage";

const Base64Converter = lazy(() => import("@/tools/Base64Converter"));
const UnicodeConverter = lazy(() => import("@/tools/UnicodeConverter"));
const UrlConverter = lazy(() => import("@/tools/UrlConverter"));
const ImageToBase64 = lazy(() => import("@/tools/ImageToBase64"));
const Base64ToImage = lazy(() => import("@/tools/Base64ToImage"));

export const toolsMap = {
  base64: { component: Base64Converter, metadata: base64Metadata },
  unicode: { component: UnicodeConverter, metadata: unicodeMetadata },
  url: {component: UrlConverter, metadata: urlMetadata},
  imagetobase64: {component: ImageToBase64, metadata: imagetobase64Metadata},
  base64toimage: { component: Base64ToImage, metadata: base64toImageMetadata },
};

export type ToolKey = keyof typeof toolsMap;