import { Zap, Settings, Shield, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header com Azul Pastel */}
      <nav className="flex items-center justify-between p-6 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Terminal className="text-blue-400" /> AeriaPlugins
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-blue-500">Início</Link>
          <Link href="#" className="hover:text-blue-500">Plugins</Link>
          <Link href="#" className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200">Discord</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          Eleve o nível do seu <span className="text-blue-400">Servidor</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">Plugins de alta performance com design moderno.</p>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Performance", text: "Plugins assíncronos que não travam seu servidor." },
            { icon: Settings, title: "Fácil Config", text: "YAML simples e intuitivo para todos os menus." },
            { icon: Shield, title: "Segurança", text: "Proteção robusta contra bugs e duplicatas." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 flex flex-col items-center text-center">
              <item.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}