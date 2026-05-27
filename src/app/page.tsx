import { Terminal, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        {/* Efeito de fundo pastel suave */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/50 -z-10 blur-3xl" />
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-blue-700" /> Referência em Performance Minecraft
          </div>
          <h1 className="text-7xl font-extrabold tracking-tight mb-8">
            Aeria <span className="text-blue-500">Plugins</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            Desenvolvemos soluções de alto nível para transformar o seu servidor em uma experiência única, estável e profissional.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/plugins" className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition flex items-center gap-2">
              Explorar Plugins <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}