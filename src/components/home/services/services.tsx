import { HomeMetadata } from '@/types';
import Image from 'next/image';

type ServicesProps = {
  data: HomeMetadata;
};

export function Services({ data }: ServicesProps) {
  return (
    <section className="py-16 px-6 md:px-12 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold text-sky-800 text-center mb-10">
          CONHEÇA NOSSOS SERVIÇOS
          <span className="block h-1 w-24 bg-yellow-300 mt-2 mx-auto rounded-full" />
        </h3>

        <ul className="flex flex-wrap justify-center gap-8">
          {data.services.map(({ description, image }, i) => (
            <li
              key={i}
              className="w-full sm:w-[280px] md:w-[240px] lg:w-[260px] bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center"
            >
              {image.url && (
                <Image
                  alt={description}
                  src={image.url}
                  width={200}
                  height={200}
                  priority
                  quality={100}
                  className="rounded-xl mb-4 transition-transform duration-300 hover:scale-105 mx-auto"
                />
              )}
              <p className="text-gray-700 text-lg font-medium">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
