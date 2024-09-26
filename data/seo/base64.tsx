import { Metadata } from 'next';
import CodeExample from "@/components/base/CodeExample";

export const metadata: Metadata = {
  title: "Base64 编码/解码",
  description: "免费，快速的 Base64 编码和解码工具。轻松进行Base64格式的文本转换，确保数据安全传输和存储。"
};

export default function Base64SEO() {
  return (
    <div className="mb-9">
      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>如何使用网站的 Base64 编码/解码工具：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          粘贴您的文本并复制结果。适用于 Base64 到图像、 Base64 到文本、
          编码字符串，以及将文本字符串解码回原始二进制字符串。
        </p>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>为什么要编码数据？</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          Base64 编码将二进制数据（如图像或文件）转换为可以安全地通过基于文本的协议
          （如 HTTP 、电子邮件等）传输的文本格式。这个过程确保数据保持完整，
          并防止在传输过程中发生损坏。
        </p>
        <ul className='list-disc pl-2 text-muted-foreground' style={{ listStyleType: 'disc' }}>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>数据完整性：</b> <br /> 确保二进制数据、特殊字符和非 ASCII 符号
            在互联网上正确传输，不会发生损坏。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>数据嵌入：</b> <br /> 允许将二进制数据嵌入到基于文本的格式中，
            如 JSON、XML 和 HTML，使其对 Web 应用程序和 API 有用。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>兼容性：</b> <br /> 促进处理基于文本的数据的不同系统和平台之间
            更容易地共享和交换数据。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>文本到二进制转换：</b> <br /> 将文本字符串转换为原始二进制形式，
            对处理编码的文本数据很有用。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>ASCII 解码：</b> <br /> 将 ASCII 字符串转换回原始二进制形式，
            确保准确的数据重构。
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>在JavaScript中使用Base64：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          在 JavaScript 中，可以使用内置的 btoa 和 atob 函数进行 Base64 编码和解码。
        </p>
        <CodeExample>{b64codeExample}</CodeExample>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          这些函数使得在 JavaScript 代码中直接处理编码和解码变得容易，
          使 Web 应用程序中的数据处理和传输更加顺畅。
        </p>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>常见问题：</h2>
        <ul className="list-disc pl-2 text-muted-foreground" style={{ listStyleType: 'disc' }}>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>什么是 Base64 编码器和解码器？</b> <br />
            它是一种将二进制数据转换为文本格式的工具，而解码器则将文本转换回其原始二进制格式。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>这个工具可以解码 Base64 吗？</b> <br /> 
            是的，使用这个工具通过将文本粘贴到输入框中并复制解码后的输出来在线解码。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>如何转换 Base64 编码？</b> <br /> 
            使用我们这里的免费在线工具。
            拖放您的文件或文本，获取一个可以轻松复制和使用的 ASCII 字符串输出。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>这个工具可以编码 Base64 吗？</b> <br /> 是的，您可以使用我们的在线工具
            编码文本。只需粘贴您的文本并获取编码结果。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>如何在线将文本编码为 Base64 ？</b> <br /> 使用我们的在线工具，
            将您的文本粘贴到输入框中并复制输出。几秒钟内，您就可以有效地将字符转换为网络安全格式。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>如何在线解码 Base64 文本？</b> <br /> 使用我们的在线工具，
            将 Base64 编码的文本粘贴到输入框中并复制解码后的输出。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>什么是 Base64 ？</b> <br /> 它是一种编码方案，用于将二进制数据
            转换为可以安全地通过互联网传输的文本格式，使用 ASCII 字符的组合。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>编码和解码有什么区别？</b> <br />{" "}
            编码将二进制数据转换为 Base64 文本格式，而解码将 Base64 文本转换回其原始二进制格式。
          </li>
        </ul>
      </section>
    </div>
  );
}

const b64codeExample = `let text = "Hello, world!";
let encoded = btoa(text);
console.log(encoded); // Outputs: "SGVsbG8sIHdvcmxkIQ=="

let encoded = "SGVsbG8sIHdvcmxkIQ==";
let decoded = atob(encoded);
console.log(decoded); // Outputs: "Hello, world!"
`;
