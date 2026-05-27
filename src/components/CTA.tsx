import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-400 to-cyan-300 p-16 text-white">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          
          <h2 className="text-5xl font-black mb-6">
            Eleve o nível do seu servidor
          </h2>

          <p className="text-xl opacity-90 leading-relaxed mb-10">
            Plugins modernos, rápidos e seguros para criar experiências únicas no Minecraft.
          </p>

          <Link
            href="/plugins"
            className="inline-flex items-center gap-2 bg-white text-sky-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
          >
            Explorar Plugins
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}