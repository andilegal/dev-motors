'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 bg-gradient-to-br from-sky-100 to-white text-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 max-w-md w-full border border-sky-100">
        <div className="flex flex-col items-center gap-5">
          <AlertTriangle className="w-14 h-14 text-yellow-400" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-800">
            Página não encontrada
          </h1>
          <p className="text-sky-600 text-base md:text-lg leading-relaxed">
            Ops! Parece que esta página não existe ou foi movida. <br /> Vamos
            te levar de volta.
          </p>
          <Link
            href="/"
            className="mt-2 inline-block bg-yellow-300 hover:bg-yellow-400 text-sky-900 font-semibold px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
