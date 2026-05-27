import { ArrowLeft, CheckCircle, Download, BookOpen, Video, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PluginPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Navbar de Navegação */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition">
          <ArrowLeft className="w-5 h-5" /> Voltar ao Início
        </Link>
        <div className="font-bold text-xl">AeriaPlugins</div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Header com Badge */}
        <div className="mb-12">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Plugin de Gestão</span>
          <h1 className="text-6xl font-extrabold mt-2 mb-6">AeriaMenus</h1>
          <p className="text-xl text-gray-600 max-w-2xl">A solução definitiva para criar interfaces imersivas e performáticas no seu servidor de Minecraft.</p>
        </div>

        {/* Grid de Funcionalidades (Preenchendo o "vazio") */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Performance", desc: "Código 100% assíncrono, zero impacto no TPS." },
            { title: "Estética", desc: "Suporte a gradientes, RGB e ícones Base64." },
            { title: "Segurança", desc: "Proteção avançada contra duping e exploits." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50/50 transition">
              <CheckCircle className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Guia e Tutorial (Mais visual) */}
        <section className="space-y-12">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-500" /> Guia de Instalação Profissional
            </h2>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-4">O AeriaMenus foi desenhado para ser "plug-and-play". Siga os passos abaixo:</p>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Arraste o ficheiro <code>.jar</code> para a pasta <code>plugins/</code>.</li>
                <li>Inicie o servidor para que a estrutura de ficheiros seja criada.</li>
                <li>Edite o <code>config.yml</code> para ajustar as funcionalidades globais.</li>
                <li>Utilize o comando <code>/am reload</code> para aplicar as mudanças sem downtime.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Área de Call to Action */}
        <div className="mt-16 p-12 bg-blue-600 rounded-3xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para elevar o nível do seu servidor?</h3>
          <p className="mb-8 opacity-90">Adquira agora e junte-se aos servidores que já utilizam a tecnologia Aeria.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">Comprar Plugin</button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition">Ver Vídeo Tutorial</button>
          </div>
        </div>
      </main>
    </div>
  );
}