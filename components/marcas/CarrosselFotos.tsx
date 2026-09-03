"use client"
import { useRef } from 'react'

interface Produto {
  titulo: string
  descricao: string
  imagem: string
  tag?: string
}

interface CarrosselProps {
  tituloSecao: string
  produtos: Produto[]
  corTexto?: string
  corTag?: string // Adicionamos a propriedade para a cor da etiqueta
}

export default function CarrosselProdutos({ 
  tituloSecao, 
  produtos, 
  corTexto = "text-amber-950",
  corTag = "bg-amber-700/90" // Cor padrão caso não seja informada
}: CarrosselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const rolar = (direcao: 'esquerda' | 'direita') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const deslocamento = clientWidth * 0.75
      scrollRef.current.scrollTo({
        left: direcao === 'esquerda' ? scrollLeft - deslocamento : scrollLeft + deslocamento,
        behavior: 'smooth'
      })
    }
  }

  const estiloTitulo = corTexto === "text-white" ? { color: '#ffffff' } : {}

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <h3 className={`text-2xl font-bold font-serif ${corTexto}`} style={estiloTitulo}>
          {tituloSecao}
        </h3>
        
        <div className="hidden md:flex gap-2">
          <button onClick={() => rolar('esquerda')} className="w-10 h-10 rounded-full bg-white/80 hover:bg-amber-100 border border-amber-200 shadow-sm flex items-center justify-center text-amber-950 font-bold transition-colors">❮</button>
          <button onClick={() => rolar('direita')} className="w-10 h-10 rounded-full bg-white/80 hover:bg-amber-100 border border-amber-200 shadow-sm flex items-center justify-center text-amber-950 font-bold transition-colors">❯</button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {produtos.map((prod, idx) => (
          <div key={idx} className="min-w-[260px] max-w-[260px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md border border-amber-100 overflow-hidden flex flex-col justify-between snap-start transition-all flex-shrink-0">
            <div>
              <div className="relative h-48 bg-stone-100 overflow-hidden">
                <img src={prod.imagem} alt={prod.titulo} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                
                {/* Aqui a etiqueta usa a cor customizada */}
                {prod.tag && (
                  <span className={`absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm ${corTag}`}>
                    {prod.tag}
                  </span>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-bold text-stone-900 text-sm line-clamp-2 h-10">{prod.titulo}</h4>
                <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed">{prod.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}