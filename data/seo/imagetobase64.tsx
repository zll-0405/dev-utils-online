import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "图片转 Base64",
  description: "免费，快速的图片转 Base64 工具。轻松进行图片到 Base64 的转换，确保数据安全传输和存储。"
};

export default function ImageToBase64SEO() {
    return (
      <div className="mb-9">
        <section>
          <h2 className='text-lg font-semibold leading-snug mb-1'>使用方法：</h2>
          <ul className='list-disc pl-2 text-muted-foreground' style={{ listStyleType: 'disc' }}>
            <li className='mb-2'>
              <b className='font-semibold text-card-foreground'>上传您的图片文件：</b> <br /> 将您的图片文件拖入转换器。
            </li>
            <li className='mb-2'>
              <b className='font-semibold text-card-foreground'>复制 base64 编码的数据：</b> <br /> 将转换完成后的 Base64 代码嵌入到您的代码中。
            </li>
          </ul>
        </section>
  
        <section>
          <h2 className='text-lg font-semibold leading-snug mb-1'>在线图片转 Base64</h2>
          <ul className='list-disc pl-2 text-muted-foreground' style={{ listStyleType: 'disc' }}>
            <li className='mb-2'>
              <b className='font-semibold text-card-foreground'>网页优化：</b> <br /> 通过直接将图片嵌入到代码中来减少 HTTP 请求。
            </li>
            <li className='mb-2'>
              <b className='font-semibold text-card-foreground'>简化工作流程：</b> <br /> 无需外部文件,轻松管理您的图片。
            </li>
            <li className='mb-2'>
              <b className='font-semibold text-card-foreground'>灵活性：</b> <br /> 在 HTML、CSS、JavaScript 等中使用。
            </li>
          </ul>
        </section>
  
        <section>
          <h2 className='text-lg font-semibold leading-snug mb-1'>为什么要将图片转换为 Base64</h2>
          <p className='text-base text-muted-foreground mb-2 font-light'>
            将图片转换为 base64 可以让您将二进制数据插入到网页中。这将数据视为外部资源。
          </p>
          <p className='text-base text-muted-foreground mb-2 font-light'>
            将图片转换为 base64 会改变图片数据。您可以直接在代码中包含这种格式。您甚至可以在 img 标签的 src 属性中使用 base64 编码的数据。
          </p>
          <p className='text-base text-muted-foreground mb-2 font-light'>
            这种方法有助于小图片（如图标或标志）更快地加载。它通过减少 HTTP 请求来实现这一点。这种改进提高了整体性能。
          </p>
          <p className='text-base text-muted-foreground mb-2 font-light'>
            将图片转换为 Base64 之后，将其嵌入到代码中，可以保持图片质量，并有助于使您的网页内容加载更快。
          </p>
        </section>
      </div>
    );
  }