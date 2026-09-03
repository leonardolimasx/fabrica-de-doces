import CarrosselProdutos from '@/components/marcas/CarrosselFotos'

export default function DoceNobre() {
  const produtosBaldinhos = [
    { titulo: "Cocada Pura (Baldinho 550g)", descricao: "O sabor clássico do coco fresco selecionado em embalagem prática e econômica de 550g.", tag: "Baldinho 550g", imagem: "/nobre-cocada-pura.png" },
    { titulo: "Cocada Morena (Baldinho 550g)", descricao: "Cocada artesanal caramelizada com textura cremosa inconfundível.", tag: "Baldinho 550g", imagem: "/nobre-cocada-morena.png" },
    { titulo: "Brigadeiro de Colher (Baldinho 550g)", descricao: "O autêntico brigadeiro cremoso de colher, perfeito para festas, confeitarias ou consumo.", tag: "Baldinho 550g", imagem: "/nobre-brigadeiro.png" },
    { titulo: "Doce de Leite Puro (Baldinho 550g)", descricao: "O tradicional doce de leite mineiro de fazenda em tamanho ideal para toda a família.", tag: "Baldinho 550g", imagem: "/nobre-doce-puro.png" },
    { titulo: "Doce de Leite com Amendoim (Baldinho 550g)", descricao: "Deliciosa combinação enriquecida com pedaços de amendoim torrado e crocante.", tag: "Baldinho 550g", imagem: "/nobre-doce-amendoim.png" }
  ]

  return (
    <section 
      id="doce-nobre" 
      className="py-24 px-6 border-b border-amber-200"
      style={{
        background: 'linear-gradient(to bottom, #fffbeb, #fef3c7)' 
      }}
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Cabeçalho da Marca */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-700 font-bold tracking-wider uppercase text-sm bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
            Qualidade Superior
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-amber-950 mb-4">
            Doce Nobre
          </h2>
          <div className="w-20 h-1.5 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-700 text-lg font-medium leading-relaxed">
            A linha em baldinhos desenvolvida especialmente para garantir praticidade, rendimento e o sabor inconfundível da roça.
          </p>
        </div>

        {/* Categoria: Baldinhos 550g COM A CAIXA BRANCA DE FUNDO E ETIQUETA CARAMELO */}
        <div className="bg-white/80 p-6 rounded-3xl shadow-sm border border-amber-100 backdrop-blur-[2px]">
          <CarrosselProdutos 
            tituloSecao="Baldinhos — 550g (Linha Institucional e Família)" 
            produtos={produtosBaldinhos} 
            corTexto="text-amber-950"
            corTag="bg-amber-600"
          />
        </div>

      </div>
    </section>
  )
}