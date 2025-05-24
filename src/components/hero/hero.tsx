import { CTAButton, Banner } from '@/types';
import { PostButton } from '@/types/post.type';
import Image from 'next/image';

import { ReactNode } from 'react';

type HeroProps = {
  cta_button: CTAButton | PostButton;
  banner: Banner;
  heading: string;
  icon: ReactNode;
};

export function Hero({ banner, cta_button, heading, icon }: HeroProps) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        alt={heading}
        src={banner?.url}
        fill
        priority
        quality={100}
        className="object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow">
          {heading}
        </h1>
        {cta_button?.url && (
          <a
            href={cta_button?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 group mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            {icon}
            {cta_button.title}
          </a>
        )}
      </div>
    </section>
  );
}
