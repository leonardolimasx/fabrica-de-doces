'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface Produto {
  titulo: string
  descricao: string
  tag: string
  imagem: string
}

interface CarrosselProps {
  tituloSecao: string
  produtos: Produto[]
  corTag?: string
  corTexto?: string
}

export default function CarrosselProdutos({ tituloSecao, produtos, corTag = "bg-red-700", corTexto = "text-stone-900" }: CarrosselProps) {
  const carrosselRef = useRef<HTMLDivElement>(null)

  const rolar = (direcao: 'esquerda' | 'direita') => {
    if (carrosselRef.current) {
      const { scrollLeft, clientWidth } = carrosselRef.current
      const valorRolagem = clientWidth * 0.75
      carrosselRef.current.scrollTo({
        left: direcao === 'esquerda' ? scrollLeft - valorRolagem : scrollLeft + valorRolagem,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className={`text-2xl md:text-3xl font-bold font-serif ${corTexto} border-l-4 border-red-600 pl-3`}>
          {tituloSecao}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => rolar('esquerda')}
            className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-md flex items-center justify-center text-stone-800 hover:bg-stone-100 transition-all active:scale-95"
            aria-label="Rolar para esquerda"
          >
            ❮
          </button>
          <button 
            onClick={() => rolar('direita')}
            className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-md flex items-center justify-center text-stone-800 hover:bg-stone-100 transition-all active:scale-95"
            aria-label="Rolar para direita"
          >
            ❯
          </button>
        </div>
      </div>

      <div 
        ref={carrosselRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {produtos.map((produto, index) => (
          <div 
            key={index} 
            className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white text-stone-900 rounded-2xl p-6 shadow-lg border border-stone-200 flex flex-col justify-between snap-start flex-shrink-0 hover:shadow-xl transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`${corTag} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                  {produto.tag}
                </span>
              </div>

              {/* Ajustado com object-contain para a foto aparecer inteira sem zoom */}
              <div className="relative w-full h-56 mb-6 bg-stone-50 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-2">
                <Image 
                  src={produto.imagem} 
                  alt={produto.titulo} 
                  fill 
                  className="object-contain p-2" 
                />
              </div>

              <h4 className="font-bold text-lg mb-2 text-stone-900 line-clamp-1">{produto.titulo}</h4>
              <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{produto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}