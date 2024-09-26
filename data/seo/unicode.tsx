import { Metadata } from 'next';
import CodeExample from "@/components/base/CodeExample";

export const metadata: Metadata = {
  title: "Unicode 编码/解码",
  description: "免费，快速的 Unicode 编码和解码工具。轻松进行Unicode格式的文本转换。"
};

export default function UnicodeSEO() {
  return (
    <div className="mb-9">
      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>如何使用网站的 Unicode 编码/解码工具：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          粘贴您的文本并复制结果。适用于 Unicode 编码和解码，支持各种 Unicode 格式的转换。
        </p>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>为什么要使用 Unicode？</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          Unicode 是一种字符编码标准，旨在包含世界上所有的书写系统。它为每个字符提供唯一的数字，
          不管是什么平台、程序或语言。
        </p>
        <ul className='list-disc pl-2 text-muted-foreground' style={{ listStyleType: 'disc' }}>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>国际化：</b> <br /> 
            支持多语言文本，使得软件可以在全球范围内使用。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>一致性：</b> <br /> 
            确保文本在不同系统和平台之间正确显示。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>兼容性：</b> <br /> 
            与大多数现代操作系统和编程语言兼容。
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>在JavaScript中使用Unicode：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          JavaScript原生支持Unicode。以下是一些常用的Unicode操作：
        </p>
        <CodeExample>{unicodeCodeExample}</CodeExample>
      </section>
    </div>
  );
}

const unicodeCodeExample = `// 将字符转换为Unicode编码
let char = "中";
let unicode = char.charCodeAt(0).toString(16);
console.log("\\u" + unicode);  // 输出: \u4e2d

// 将Unicode编码转换为字符
let unicodeChar = "\\u4e2d";
let decodedChar = String.fromCharCode(parseInt(unicodeChar.slice(2), 16));
console.log(decodedChar);  // 输出: 中
`;