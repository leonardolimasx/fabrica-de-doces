import CarrosselProdutos from '@/components/marcas/CarrosselFotos'

export default function ReiDoDoce() {
  const produtosVidro450g = [
    { titulo: "Doce de Leite com Coco (450g)", descricao: "A cremosidade inconfundível do Rei do Doce com raspas selecionadas de coco fresco.", tag: "Vidro 450g", imagem: "/rei-coco.png" },
    { titulo: "Doce de Leite com Morango (450g)", descricao: "Morango: O equilíbrio perfeito entre o doce de leite tradicional e a geleia sabor morango.", tag: "Vidro 450g", imagem: "/rei-morango.png" },
    { titulo: "Doce de Leite com limao (450g)", descricao: "limao: Uma combinação exótica e refrescante que une o doce de leite com a geleia sabor limao.", tag: "Vidro 450g", imagem: "/rei-kiwi.png" },
    { titulo: "Doce de Leite Puro (450g)", descricao: "O autêntico e nobre doce de leite em formato ideal para saborear a qualquer momento.", tag: "Vidro 450g", imagem: "/rei-puro.png" },
    { titulo: "Doce de Leite com Maracujá (450g)", descricao: "Maracujá: Contraste delicioso entre o doce de leite e a geleia sabor maracujá.", tag: "Vidro 450g", imagem: "/rei-maracuja.png" },
    { titulo: "Doce de Leite com Ameixa (450g)", descricao: "Ameixa: Receita tradicional enriquecida com o sabor marcante da geleia sabor ameixa.", tag: "Vidro 450g", imagem: "/rei-ameixa.png" },
    { titulo: "Doce de Leite com Abacaxi (450g)", descricao: "Abacaxi: Geleia sabor abacaxi misturada ao nosso creme exclusivo de doce de leite.", tag: "Vidro 450g", imagem: "/rei-abacaxi.png" }
  ]

  const produtosCocadasRei = [
    { titulo: "Cocada com Ameixa (450g)", descricao: "Ameixa: A união perfeita da cocada cremosa com a geleia sabor ameixa.", tag: "Vidro 450g", imagem: "/rei-cocada-ameixa.png" },
    { titulo: "Cocada com Morango (450g)", descricao: "Morango: Cocada cremosa combinada com geleia sabor morango.", tag: "Vidro 450g", imagem: "/rei-cocada-morango.png" },
    { titulo: "Cocada com Abacaxi (450g)", descricao: "Abacaxi: Geleia sabor abacaxi misturada ao coco fresco em ponto cremoso.", tag: "Vidro 450g", imagem: "/rei-cocada-abacaxi.png" },
    { titulo: "Cocada com Maracujá (450g)", descricao: "Maracujá: O toque da geleia sabor maracujá equilibrando a doçura da cocada.", tag: "Vidro 450g", imagem: "/rei-cocada-maracuja.png" },
    { titulo: "Cocada Pura (450g)", descricao: "O sabor autêntico e inconfundível do coco fresco selecionado com rigor de qualidade.", tag: "Vidro 450g", imagem: "/rei-cocada-pura.png" },
    { titulo: "Cocada com Chocolate (450g)", descricao: "Para quem ama uma sobremesa rica, unindo o coco cremoso a notas intensas de chocolate.", tag: "Vidro 450g", imagem: "/rei-cocada-chocolate.png" }
  ]

  return (
    <section id="rei-do-doce" className="py-24 px-6 bg-stone-950 text-white font-sans border-b border-stone-800">
      <div className="max-w-7xl mx-auto space-y-20">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-400 font-bold tracking-wider uppercase text-sm">Tradição e Realeza</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mt-2 mb-4">
            Rei do Doce
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-white text-lg leading-relaxed font-normal">
            Uma linha nobre feita com ingredientes selecionados e rigoroso padrão fabril para quem aprecia a verdadeira realeza dos doces.
          </p>
        </div>

        <div>
          <CarrosselProdutos 
            tituloSecao="Potes de Vidro — 450g (Doces de Leite)" 
            produtos={produtosVidro450g} 
            corTexto="text-white"
            corTag="bg-stone-900 border border-stone-700" 
          />
        </div>

        <div className="pt-8 border-t border-stone-800">
          <CarrosselProdutos 
            tituloSecao="Potes de Vidro — 450g (Linha de Cocadas)" 
            produtos={produtosCocadasRei} 
            corTexto="text-white"
            corTag="bg-stone-900 border border-stone-700"
          />
        </div>

      </div>
    </section>
  )
}