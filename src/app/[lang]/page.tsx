import Link from 'next/link';
import { LangTypes } from '@/types/lang';
import { LOCALE_LANG } from '@/constants/lang';
import { getDictionary } from './dictionaries';
import ReduxDemo from './ReduxDemo';

export default async function Home({ params }: { params: Promise<{ lang: LangTypes }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <p>{dict.products.cart}</p>
      <div>
        {LOCALE_LANG.map((locale) => (
          <Link key={locale} href={`/${locale}`}>
            <button disabled={locale === lang}>
              {locale === lang ? `當前語系：${locale}` : `切換到 ${locale}`}
            </button>
          </Link>
        ))}
      </div>
      <ReduxDemo />
    </div>
  );
}
