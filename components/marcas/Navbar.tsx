"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo e Nome */}
        <Link href="/" className="flex items-center gap-3 group" onClick={fecharMenu}>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-100 shadow-sm group-hover:scale-105 transition-transform">
            <img src="/logo-sobremesa.png" alt="Logo Sobremesa Mineira" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg md:text-xl font-bold font-serif text-red-950 tracking-tight group-hover:text-red-700 transition-colors">
            Fábrica Sobremesa Mineira
          </span>
        </Link>

        {/* Menu Desktop (Agora usando tag <a> para ativar a rolagem suave) */}
        <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-stone-700 tracking-wide">
          <a href="#sobremesa-mineira" className="hover:text-red-600 transition-colors">Sobremesa Mineira</a>
          <a href="#rei-do-doce" className="hover:text-stone-900 transition-colors">Rei do Doce</a>
          <a href="#doce-nobre" className="hover:text-amber-600 transition-colors">Doce Nobre</a>
          <a href="#videos" className="hover:text-red-600 transition-colors">Vídeos</a>
        </nav>

        {/* Botão de Contato Desktop (Usando <a>) */}
        <div className="hidden md:block">
          <a href="#contato" className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
            Contato Comercial
          </a>
        </div>
        
        {/* Botão Hamburguer Mobile */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-stone-800 p-2 focus:outline-none"
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

      {/* Janela do Menu Mobile (Também usando <a>) */}
      {menuAberto && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-stone-200 shadow-xl py-4 px-6 flex flex-col gap-4 animate-fade-in-down">
          <a href="#sobremesa-mineira" onClick={fecharMenu} className="block py-2 text-stone-800 font-semibold border-b border-stone-100">Sobremesa Mineira</a>
          <a href="#rei-do-doce" onClick={fecharMenu} className="block py-2 text-stone-800 font-semibold border-b border-stone-100">Rei do Doce</a>
          <a href="#doce-nobre" onClick={fecharMenu} className="block py-2 text-stone-800 font-semibold border-b border-stone-100">Doce Nobre</a>
          <a href="#videos" onClick={fecharMenu} className="block py-2 text-stone-800 font-semibold border-b border-stone-100">Vídeos & Bastidores</a>
          <a href="#contato" onClick={fecharMenu} className="mt-2 text-center bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-md">
            Contato Comercial
          </a>
        </div>
      )}
    </header>
  )
}