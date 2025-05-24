import type { Metadata } from 'next';
import { Footer, Header } from '@/components';
import './globals.css';
import { MENU_URL } from '@/constants';
import { fetcher } from '@/utils';

export const metadata: Metadata = {
  title: {
    default: 'Dev Motors - Sua oficina especializada',
    template: '%s | Dev Motors',
  },
  description:
    'Oficina especializada em carros em São Paulo. Serviços de manutenção, revisão e reparos com qualidade e confiança.',
  keywords: [
    'oficina',
    'carros',
    'São Paulo',
    'manutenção automotiva',
    'revisão',
    'reparos',
    'Dev Motors',
  ],
  authors: [{ name: 'Dev Motors', url: 'https://devmotors.com.br' }],
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_URL}/header.jpg`],
    title: 'Dev Motors - Sua oficina especializada',
    description:
      'Oficina especializada em carros em São Paulo. Serviços de manutenção, revisão e reparos com qualidade e confiança.',
    url: 'https://devmotors.com.br',
    siteName: 'Dev Motors',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await fetcher(MENU_URL);
  return (
    <html lang="en">
      <body>
        <Header data={menu} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
