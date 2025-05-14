import { ReactNode } from 'react';
import { LangTypes } from '@/types/lang';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh-tw' }, { lang: 'ja' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: LangTypes }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
