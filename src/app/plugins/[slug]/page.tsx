import { ShieldCheck, Zap, Server, FileCode, Video } from "lucide-react";

export default function PluginPage({ params }: { params: { slug: string } }) {
  // Simulação de dados do AeriaMenus
  const plugin = {
    name: "AeriaMenus",
    tagline: "O sistema de GUIs mais performático do mercado.",
    desc: "O AeriaMenus permite a criação de menus interativos complexos com a facilidade de um arquivo YAML simples, mantendo o TPS do servidor estável mesmo sob carga intensa."
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      {/* Header do Plugin */}
      <div className="mb-16">
        <h1 className="text-6xl font-extrabold mb-4">{plugin.name}</h1>
        <p className="text-2xl text-gray-500">{plugin.tagline}</p>
      </div>

      {/* Grid de Informações */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-blue-50/50 backdrop-blur-md border border-blue-100 p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-blue-500" /> Sobre o Plugin</h2>
          <p className="text-gray-600 leading-relaxed">{plugin.desc}</p>
        </div>
        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="text-blue-500" /> Por que escolher?</h2>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✓ Processamento 100% assíncrono.</li>
            <li>✓ Integração profunda com PlaceholderAPI.</li>
            <li>✓ Sistema anti-duplicação de itens.</li>
            <li>✓ Suporte VIP dedicado.</li>
          </ul>
        </div>
      </div>

      {/* Área de Suporte e Tutorial */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold">Documentação e Suporte</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-8 rounded-3xl hover:border-blue-200 transition">
            <FileCode className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-bold text-lg">Guia de Instalação</h3>
            <p className="text-gray-500 mt-2">Passo a passo completo desde a instalação do .jar até a configuração do primeiro menu.</p>
          </div>
          <div className="border p-8 rounded-3xl hover:border-blue-200 transition">
            <Video className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-bold text-lg">Vídeo Tutoriais</h3>
            <p className="text-gray-500 mt-2">Aulas práticas demonstrando como criar sistemas complexos de loja com o AeriaMenus.</p>
          </div>
        </div>
      </div>
    </div>
  );
}