import { useTranslations } from 'next-intl';
import { home } from '@/metadata.json';

export const metadata = {
  title: home.title,
  description: home.description,
};


export default function Home() {
  const t = useTranslations('home');

  return <h1>DCT : {t('title')}</h1>;
}