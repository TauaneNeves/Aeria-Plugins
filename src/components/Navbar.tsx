import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          Aeria<span className="text-sky-400">Plugins</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/plugins"
            className="text-slate-600 hover:text-sky-500 transition"
          >
            Plugins
          </Link>

          <button className="bg-sky-400 hover:bg-sky-500 transition text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-sky-200">
            Comprar
          </button>
        </nav>
      </div>
    </header>
  );
}