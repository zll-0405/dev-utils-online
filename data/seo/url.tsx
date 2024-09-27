import { Metadata } from 'next';
import CodeExample from "@/components/base/CodeExample";

export const metadata: Metadata = {
  title: "URL 编码/解码",
  description: "免费，快速的 URL 编码和解码工具。轻松进行URL格式的文本转换。"
};

export default function UrlSEO() {
  return (
    <div className="mb-9">
      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>如何使用网站的 URL 编码/解码工具：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          粘贴您的文本并复制结果。适用于 URL 编码和解码，支持各种 URL 格式的转换。
        </p>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>为什么要使用 URL 编码？</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          URL 编码用于将特殊字符转换为可以在 URL 中安全使用的格式。这对于确保 URL 的正确性和可用性非常重要。
        </p>
        <ul className='list-disc pl-2 text-muted-foreground' style={{ listStyleType: 'disc' }}>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>安全传输：</b> <br /> 
            确保包含特殊字符的 URL 可以被正确解析和使用。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>兼容性：</b> <br /> 
            使 URL 在不同的系统和浏览器中保持一致性。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>避免歧义：</b> <br /> 
            防止特殊字符被误解为 URL 的结构部分。
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>在JavaScript中使用URL编码：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          JavaScript提供了内置的函数用于URL编码和解码。
        </p>
        <CodeExample>{urlCodeExample}</CodeExample>
      </section>
    </div>
  );
}

const urlCodeExample = `// URL 编码
let text = "Hello World!";
let encoded = encodeURIComponent(text);
console.log(encoded);  // 输出: Hello%20World%21

// URL 解码
let decoded = decodeURIComponent(encoded);
console.log(decoded);  // 输出: Hello World!
`;