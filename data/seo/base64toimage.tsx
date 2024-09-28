import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Base64 转图片",
  description: "免费，快速的 Base64 转图片工具。轻松将 Base64 编码的字符串转换为图片。"
};

export default function Base64ToImageSEO() {
  return (
    <div className="mb-9">
      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>如何使用 Base64 转图片工具：</h2>
        <p className='text-base text-muted-foreground mb-2 font-light'>
          粘贴您的 Base64 编码字符串,点击转换按钮,即可看到转换后的图片。
        </p>
      </section>

      <section>
        <h2 className='text-lg font-semibold leading-snug mb-1'>为什么需要 Base64 转图片？</h2>
        <ul className='list-disc pl-2 text-muted-foreground' style={{ listStyleType: 'disc' }}>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>数据恢复：</b> <br /> 
            从 Base64 编码中恢复原始图片数据。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>调试：</b> <br /> 
            在开发过程中快速查看 Base64 编码的图片内容。
          </li>
          <li className='mb-2'>
            <b className='font-semibold text-card-foreground'>数据验证：</b> <br /> 
            确认 Base64 字符串是否正确表示了预期的图片。
          </li>
        </ul>
      </section>
    </div>
  );
}