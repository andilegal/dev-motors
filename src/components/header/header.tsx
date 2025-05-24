'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ServiceObjectsResponse } from '@/types';
import { NAV_LINKS } from '@/constants';

export function Header({ data }: { data: ServiceObjectsResponse }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = data.objects;

  return (
    <header className="bg-gradient-to-r from-sky-100 via-sky-50 to-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-sky-800 tracking-tight transition-transform hover:scale-105"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#e0f2fe" />
            <text
              x="16"
              y="22"
              textAnchor="middle"
              fontSize="16"
              fill="#0ea5e9"
              fontWeight="bold"
            >
              DM
            </text>
          </svg>
          <span>DevMotors</span>
        </Link>

        <ul className="hidden xl:flex space-x-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-slate-700 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {menu.length > 0 && (
          <div className="hidden xl:flex space-x-3">
            {menu.map((item, i) => (
              <Link
                href={`/post/${item.slug}`}
                key={`${i}-${item.slug}`}
                className="bg-sky-100 text-sky-800 px-4 py-2 rounded-md font-medium border border-sky-200 hover:bg-sky-200 transition-all duration-200"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile menu button */}
        <div className="xl:hidden">
          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="focus:outline-none"
          >
            <svg
              className={`w-8 h-8 text-sky-800 transition-transform duration-200 ${
                menuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`xl:hidden fixed inset-0 z-40 bg-sky-100/80 backdrop-blur-md transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            aria-label="Fechar menu"
            className="self-end mb-4 text-sky-700 hover:text-sky-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sky-800 font-semibold text-lg hover:text-sky-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4">
            {menu.length > 0 &&
              menu.map((item, i) => (
                <Link
                  href={`/post/${item.slug}`}
                  onClick={() => setMenuOpen(false)}
                  key={`${i}-${item.slug}`}
                  className="bg-sky-100 text-sky-800 px-4 py-2 rounded-md font-medium border border-sky-200 hover:bg-sky-200 transition-all duration-200"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}
