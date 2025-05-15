import { ReactNode } from 'react';
import { LangTypes } from '@/types/lang';
import { LOCALE_LANG } from '@/constants/lang';
import StoreProvider from '@/app/StoreProvider';
import '@/styles/globals.css';

export async function generateStaticParams() {
  return LOCALE_LANG.map((lang) => ({ lang }));
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
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
