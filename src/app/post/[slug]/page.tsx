import { Container, Hero } from '@/components';
import { PostProps } from '@/types/post.type';
import { getItemBySlug } from '@/utils';
import { Phone } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const slug = params?.slug;
    const data: PostProps = await getItemBySlug(slug);
    const post = data.objects[0];
    return {
      title: post.title,
      description: post.metadata.description.text,
      openGraph: {
        title: post.title,
        description: post.metadata.description.text,
        images: [
          {
            url: post.metadata.banner.url,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Dev Motors - Sua oficina especializada',
      description:
        'Oficina especializada em carros em São Paulo. Serviços de manutenção, revisão e reparos com qualidade e confiança.',
    };
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = await params?.slug;
  const data: PostProps = await getItemBySlug(slug);
  const post = data.objects[0];

  return (
    <div className="pt-[70px] bg-gradient-to-br from-sky-50 to-white">
      <Hero
        banner={post.metadata.banner}
        cta_button={post.metadata.button}
        heading={post.title}
        icon={<Phone size={20} color="#fff" />}
      />

      <Container>
        <section
          className="py-12 px-4 md:px-8 max-w-4xl mx-auto text-sky-800"
          id="services"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-sky-800">
            {post.metadata.description.title}
          </h1>

          <p className="text-lg md:text-xl text-sky-700 mb-6 leading-relaxed">
            {post.metadata.description.text}
          </p>

          {post.metadata.description.button_active && (
            <a
              href={post.metadata.description.button_url as string}
              className="inline-block bg-yellow-300 hover:bg-yellow-400 text-sky-900 font-semibold px-6 py-2 rounded-full transition-colors duration-200"
            >
              {post.metadata.description.button_title}
            </a>
          )}

          <div className="mt-10 rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
            <Image
              alt={post.title}
              height={400}
              width={600}
              className="w-full h-auto object-cover"
              priority
              src={post.metadata.description.banner.url}
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
