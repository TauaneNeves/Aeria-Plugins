import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-8 h-8 text-pastel-400" />
            <span className="font-bold text-xl">AeriaPlugins</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Aeria Plugins.</p>
        </div>

        {/* Links - Aplicando as colunas */}
        <div>
          <h4 className="font-bold mb-4">Produtos</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>AeriaMenus</li>
            <li>Em breve...</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Recursos</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Documentação</li>
            <li>Vídeo Tutoriais</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Suporte</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Discord Oficial</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}