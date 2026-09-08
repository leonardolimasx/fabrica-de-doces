import CarrosselProdutos from '@/components/marcas/CarrosselFotos'

export default function ReiDoDoce() {
  const produtosReiDoDoce = [
    { titulo: "Doce de Leite Tradicional (Rei do Doce)", descricao: "O clássico doce de leite produzido com alto padrão de qualidade em nossa fábrica.", tag: "Rei do Doce", imagem: "/logo-sobremesa.png" },
    { titulo: "Doce de Leite com Coco", descricao: "Coco: Doce de leite cremoso misturado com raspas de coco selecionado.", tag: "Rei do Doce", imagem: "/logo-sobremesa.png" },
    { titulo: "Doce de Leite com Chocolate", descricao: "Chocolate: A combinação equilibrada do doce de leite com notas de chocolate.", tag: "Rei do Doce", imagem: "/logo-sobremesa.png" },
    { titulo: "Doce de Leite com Morango", descricao: "Morango: Cremoso e saboroso, fabricado com geleia sabor morango.", tag: "Rei do Doce", imagem: "/logo-sobremesa.png" },
    { titulo: "Doce de Leite com Maracujá", descricao: "Maracujá: O contraste da doçura do leite com a geleia sabor maracujá.", tag: "Rei do Doce", imagem: "/logo-sobremesa.png" },
    { titulo: "Doce de Leite com Ameixa", descricao: "Ameixa: Sofisticação e sabor com geleia sabor ameixa.", tag: "Rei do Doce", imagem: "/logo-sobremesa.png" },
  ]

  return (
    <section id="rei-do-doce" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-amber-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-sm">
            Nobreza e Tradição
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-400">
            Rei do Doce
          </h2>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed">
            Linha exclusiva desenvolvida com rigoroso processo produtivo, entregando sabor inconfundível para o seu negócio.
          </p>
        </div>

        <div className="bg-stone-950/80 p-6 rounded-3xl shadow-2xl border border-stone-800">
          <CarrosselProdutos 
            tituloSecao="Destaques Rei do Doce" 
            produtos={produtosReiDoDoce} 
            corTag="bg-amber-600" 
            corTexto="text-amber-400"
          />
        </div>

      </div>
    </section>
  )
}