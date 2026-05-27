import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden py-32">
        
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-sky-700" />
              Plugins Premium para Minecraft
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
              Desenvolva um servidor
              <span className="text-sky-400 block">
                memorável
              </span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Plugins modernos, performáticos e profissionais para elevar
              a experiência do seu servidor Minecraft.
            </p>

            <div className="flex gap-4">
              <Link
                href="/plugins"
                className="bg-sky-400 hover:bg-sky-500 transition text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-sky-200 flex items-center gap-2"
              >
                Explorar Plugins
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button className="border border-slate-200 bg-white hover:bg-slate-50 px-8 py-4 rounded-2xl font-semibold">
                Documentação
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl shadow-sky-100">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="text-sky-500">
                  [AeriaMenus] iniciado com sucesso.
                </div>

                <div className="text-slate-500">
                  Carregando menus...
                </div>

                <div className="text-emerald-500">
                  TPS estável: 20.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Porque escolher a Aeria?
          </h2>

          <p className="text-slate-500 text-lg">
            Tecnologia moderna para servidores exigentes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <FeatureCard
            icon={ShieldCheck}
            title="Segurança"
            desc="Proteção contra exploits, dupes e falhas críticas."
          />

          <FeatureCard
            icon={Zap}
            title="Performance"
            desc="Plugins otimizados para manter TPS estável."
          />

          <FeatureCard
            icon={Star}
            title="Experiência Premium"
            desc="Interfaces modernas e intuitivas."
          />
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}