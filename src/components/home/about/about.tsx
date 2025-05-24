import { HomeMetadata } from '@/types';
import Image from 'next/image';

type AboutProps = {
  data: HomeMetadata;
};

export function About({ data }: AboutProps) {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-4xl font-extrabold text-sky-800 mb-4 relative inline-block">
            Sobre
            <span className="block h-1 w-16 bg-yellow-300 mt-2 mx-auto md:mx-0 rounded-full" />
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {data.about.description}
          </p>
        </div>

        {/* Imagem à direita */}
        {data.about.banner.url && (
          <div className="flex-1">
            <Image
              alt={data.about.description}
              src={data.about.banner.url}
              width={480}
              height={380}
              className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
