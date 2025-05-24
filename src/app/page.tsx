import { About, Contacts, Container, Hero, Services } from '@/components';
import { COSMIC_URL } from '@/constants';
import { TD } from '@/types';
import { fetcher } from '@/utils';
import { Phone } from 'lucide-react';

export default async function Home() {
  const { object }: TD = await fetcher(COSMIC_URL, {
    next: { revalidate: 120 },
  });

  return (
    <main className="pt-[70px]">
      <Hero
        banner={object.metadata.banner}
        cta_button={object.metadata.cta_button}
        heading={object.metadata.heading}
        icon={<Phone size={20} color="#fff" />}
      />
      <Container>
        <About data={object.metadata} />
        <Services data={object.metadata} />
        <Contacts data={object.metadata} />
      </Container>
    </main>
  );
}
