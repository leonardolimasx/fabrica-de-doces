'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo e Nome da Fábrica */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-700 shadow-sm bg-white">
            <Image 
              src="/logo-sobremesa.png" 
              alt="Logo Sobremesa Mineira" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="font-serif font-bold text-lg md:text-xl text-stone-900 tracking-wide group-hover:text-amber-700 transition-colors">
            Fábrica Sobremesa Mineira
          </span>
        </a>

        {/* Menu Desktop (Computador) com as cores de cada marca */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-stone-700">
          <a href="#sobremesa-mineira" className="hover:text-red-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50">
            Sobremesa Mineira
          </a>
          <a href="#rei-do-doce" className="hover:text-amber-900 transition-colors px-3 py-1.5 rounded-lg hover:bg-amber-50">
            Rei do Doce
          </a>
          <a href="#doce-nobre" className="hover:text-amber-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-amber-50">
            Doce Nobre
          </a>
          <a href="#videos" className="hover:text-stone-900 transition-colors px-3 py-1.5 rounded-lg hover:bg-stone-100">
            Vídeos
          </a>
          <a 
            href="#contato" 
            className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all hover:scale-105"
          >
            Contato Comercial
          </a>
        </nav>

        {/* Botão Hambúrguer (Mobile) */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-stone-800 focus:outline-none p-2 rounded-lg hover:bg-stone-100 transition-colors relative z-50"
          aria-label="Abrir menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Menu Dropdown Mobile em Tela Cheia */}
      {menuAberto && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-stone-200 shadow-2xl py-8 px-6 flex flex-col gap-4 text-stone-800 font-medium z-40">
          <a 
            href="#sobremesa-mineira" 
            onClick={fecharMenu}
            className="text-lg py-2.5 border-b border-stone-100 text-red-700 font-semibold"
          >
            Sobremesa Mineira
          </a>
          <a 
            href="#rei-do-doce" 
            onClick={fecharMenu}
            className="text-lg py-2.5 border-b border-stone-100 text-amber-900 font-semibold"
          >
            Rei do Doce
          </a>
          <a 
            href="#doce-nobre" 
            onClick={fecharMenu}
            className="text-lg py-2.5 border-b border-stone-100 text-amber-600 font-semibold"
          >
            Doce Nobre
          </a>
          <a 
            href="#videos" 
            onClick={fecharMenu}
            className="text-lg py-2.5 border-b border-stone-100 hover:text-stone-900"
          >
            Vídeos
          </a>
          <a 
            href="#contato" 
            onClick={fecharMenu}
            className="bg-amber-700 text-white text-center py-3.5 rounded-xl font-bold shadow-md text-lg mt-2"
          >
            Contato Comercial
          </a>
        </div>
      )}
    </header>
  )
}