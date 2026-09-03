import CarrosselProdutos from '@/components/marcas/CarrosselFotos'

export default function ReiDoDoce() {
  const produtosVidro450g = [
    { titulo: "Doce de Leite com Coco (450g)", descricao: "A cremosidade inconfundível do Rei do Doce com raspas selecionadas de coco fresco.", tag: "Vidro 450g", imagem: "/rei-coco.png" },
    { titulo: "Doce de Leite com Morango (450g)", descricao: "O equilíbrio perfeito entre o doce de leite tradicional e o toque frutado de morango.", tag: "Vidro 450g", imagem: "/rei-morango.png" },
    { titulo: "Doce de Leite com Kiwi (450g)", descricao: "Uma combinação exótica e refrescante que surpreende pelo sabor e suavidade.", tag: "Vidro 450g", imagem: "/rei-kiwi.png" },
    { titulo: "Doce de Leite Puro (450g)", descricao: "O autêntico e nobre doce de leite em formato ideal para saborear a qualquer momento.", tag: "Vidro 450g", imagem: "/rei-puro.png" },
    { titulo: "Doce de Leite com Maracujá (450g)", descricao: "Contraste delicioso entre a doçura do doce de leite e a acidez na medida do maracujá.", tag: "Vidro 450g", imagem: "/rei-maracuja.png" },
    { titulo: "Doce de Leite com Ameixa (450g)", descricao: "Receita clássica artesanal enriquecida com o sabor marcante da ameixa.", tag: "Vidro 450g", imagem: "/rei-ameixa.png" },
    { titulo: "Doce de Leite com Abacaxi (450g)", descricao: "Pedaços suculentos de abacaxi misturados ao nosso creme artesanal exclusivo.", tag: "Vidro 450g", imagem: "/rei-abacaxi.png" }
  ]

  const produtosCocadasRei = [
    { titulo: "Cocada com Ameixa (450g)", descricao: "A união perfeita da cocada cremosa artesanal com o sabor refinado da ameixa.", tag: "Vidro 450g", imagem: "/rei-cocada-ameixa.png" },
    { titulo: "Cocada com Morango (450g)", descricao: "Deliciosa cocada caseira combinada com pedaços e calda especial de morango.", tag: "Vidro 450g", imagem: "/rei-cocada-morango.png" },
    { titulo: "Cocada com Abacaxi (450g)", descricao: "Pedaços selecionados de abacaxi misturados ao coco fresco em ponto cremoso.", tag: "Vidro 450g", imagem: "/rei-cocada-abacaxi.png" },
    { titulo: "Cocada com Maracujá (450g)", descricao: "O toque cítrico e marcante do maracujá equilibrando a doçura da cocada tradicional.", tag: "Vidro 450g", imagem: "/rei-cocada-maracuja.png" },
    { titulo: "Cocada Pura (450g)", descricao: "O sabor autêntico e inconfundível do coco fresco selecionado com muito carinho.", tag: "Vidro 450g", imagem: "/rei-cocada-pura.png" },
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
            Uma linha nobre feita com ingredientes selecionados para quem aprecia a verdadeira realeza dos doces artesanais.
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