'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Título */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif font-bold text-lg md:text-2xl text-stone-900 tracking-wide">
            Fábrica Sobremesa Mineira
          </span>
        </a>

        {/* Menu Desktop (Computador) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-stone-700">
          <a href="#sobremesa-mineira" className="hover:text-amber-700 transition-colors">Sobremesa Mineira</a>
          <a href="#rei-do-doce" className="hover:text-amber-700 transition-colors">Rei do Doce</a>
          <a href="#doce-nobre" className="hover:text-amber-700 transition-colors">Doce Nobre</a>
          <a href="#videos" className="hover:text-amber-700 transition-colors">Vídeos</a>
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

      {/* Menu Dropdown Mobile em Tela Cheia (Fixo e sem bugs de transição) */}
      {menuAberto && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-stone-200 shadow-2xl py-8 px-6 flex flex-col gap-6 text-stone-800 font-medium z-40">
          <a 
            href="#sobremesa-mineira" 
            onClick={fecharMenu}
            className="text-lg py-2 border-b border-stone-100 hover:text-amber-700"
          >
            Sobremesa Mineira
          </a>
          <a 
            href="#rei-do-doce" 
            onClick={fecharMenu}
            className="text-lg py-2 border-b border-stone-100 hover:text-amber-700"
          >
            Rei do Doce
          </a>
          <a 
            href="#doce-nobre" 
            onClick={fecharMenu}
            className="text-lg py-2 border-b border-stone-100 hover:text-amber-700"
          >
            Doce Nobre
          </a>
          <a 
            href="#videos" 
            onClick={fecharMenu}
            className="text-lg py-2 border-b border-stone-100 hover:text-amber-700"
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