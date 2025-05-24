export function Footer() {
  return (
    <footer className="bg-sky-800 text-white mt-16" id="contacts">
      {/* Linha divisória */}
      <div className="border-t border-sky-700 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-sky-200 text-center">
          &copy; {new Date().getFullYear()} Dev Motors. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
