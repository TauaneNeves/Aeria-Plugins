"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2">
        <div className="p-2 bg-blue-50 rounded-xl">
          <Terminal className="w-6 h-6 text-blue-400" />
        </div>
        <span className="font-bold text-xl tracking-tight">AeriaPlugins</span>
      </Link>
      <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#inicio" className="hover:text-blue-500">Início</Link>
        <Link href="#plugins" className="hover:text-blue-500">Plugins</Link>
        <Link href="#suporte" className="bg-blue-400 text-white px-6 py-2.5 rounded-full hover:bg-blue-500 transition-all">
          Entrar no Discord
        </Link>
      </div>
    </nav>
  );
}