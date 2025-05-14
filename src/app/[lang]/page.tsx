import { getDictionary } from './dictionaries';
import { LangTypes } from '@/types/lang';

export default async function Home({ params }: { params: Promise<{ lang: LangTypes }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <button>{dict.products.cart}</button>;
}
