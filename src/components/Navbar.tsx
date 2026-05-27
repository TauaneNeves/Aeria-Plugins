"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Ícone de terminal em azul pastel */}
              <div className="p-1.5 rounded-lg bg-blue-50">
                <Terminal className="w-7 h-7 text-blue-400" />
              </div>
              <span className="text-gray-900 font-bold text-2xl tracking-wider">
                Aeria<span className="font-light text-blue-500">Plugins</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Início
              </Link>
              <Link href="#plugins" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Plugins
              </Link>
              <Link href="#tutoriais" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Tutoriais
              </Link>
              <Link href="#suporte" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Suporte
              </Link>
              <Link href="#suporte" className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm">
                Entrar no Discord
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#inicio" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Início
            </Link>
            <Link href="#plugins" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Plugins
            </Link>
            <Link href="#tutoriais" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Tutoriais
            </Link>
            <Link href="#suporte" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Suporte
            </Link>
            <Link href="#suporte" onClick={() => setIsOpen(false)} className="bg-blue-400 hover:bg-blue-500 text-white block px-3 py-3 rounded-full text-base font-bold text-center">
              Discord
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}