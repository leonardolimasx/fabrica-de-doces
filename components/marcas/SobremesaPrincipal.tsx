import CarrosselProdutos from '@/components/marcas/CarrosselFotos'

export default function SobremesaPrincipal() {
  const produtosVidro680g = [
    { titulo: "Doce de Leite com Café (680g)", descricao: "A cremosidade tradicional do doce de leite mineiro combinada com o toque marcante do café.", tag: "Vidro 680g", imagem: "/doce-cafe.png" },
    { titulo: "Brigadeiro (680g)", descricao: "O clássico brigadeiro cremoso de colher em pote de vidro, pronto para saborear ou confeitar.", tag: "Vidro 680g", imagem: "/brigadeiro.png" },
    { titulo: "Doce de Leite com Coco (680g)", descricao: "A harmonia perfeita entre o doce de leite artesanal e raspas de coco fresco selecionado.", tag: "Vidro 680g", imagem: "/doce-coco.png" },
    { titulo: "Doce de Leite com Amora (680g)", descricao: "Sabor agridoce equilibrado, unindo a doçura do leite e o toque frutado da amora.", tag: "Vidro 680g", imagem: "/doce-amora.png" },
    { titulo: "Doce de Leite Puro (680g)", descricao: "O autêntico e tradicional doce de leite de fazenda, feito em tachos de cobre com muito afeto.", tag: "Vidro 680g", imagem: "/doce-puro.png" },
    { titulo: "Doce de Leite com Morango (680g)", descricao: "Deliciosa combinação cremosa com pedaços e calda artesanal de morango fresco.", tag: "Vidro 680g", imagem: "/doce-morango.png" },
    { titulo: "Doce de Leite com Kiwi (680g)", descricao: "Uma experiência exótica e refrescante que une a suavidade do leite com o toque ácido do kiwi.", tag: "Vidro 680g", imagem: "/doce-kiwi.png" },
    { titulo: "Doce de Leite com Maracujá (680g)", descricao: "O contraste perfeito entre a doçura intensa do doce de leite e a acidez na medida certa do maracujá.", tag: "Vidro 680g", imagem: "/doce-maracuja.png" },
    { titulo: "Doce de Leite com Goiaba (680g)", descricao: "A união de duas grandes paixões mineiras em uma textura cremosa inigualável.", tag: "Vidro 680g", imagem: "/doce-goiaba.png" },
    { titulo: "Doce de Leite com Abacaxi (680g)", descricao: "Pedaços selecionados de abacaxi misturados ao creme artesanal, trazendo leveza e sabor.", tag: "Vidro 680g", imagem: "/doce-abacaxi.png" },
    { titulo: "Doce de Leite com Amendoim (680g)", descricao: "Enriquecido com saborosos pedaços de amendoim torrado, criando uma textura crocante e cremosa.", tag: "Vidro 680g", imagem: "/doce-amendoim.png" },
    { titulo: "Doce de Leite com Cereja (680g)", descricao: "Sofisticação e sabor refinado com cerejas selecionadas incorporadas ao doce de leite.", tag: "Vidro 680g", imagem: "/doce-cereja.png" },
    { titulo: "Doce de Leite com Açaí (680g)", descricao: "Uma inovação exclusiva que traz a energia do açaí combinada à cremosidade do nosso doce artesanal.", tag: "Vidro 680g", imagem: "/doce-acai.png" }
  ]

  const produtosCocadas = [
    { titulo: "Cocada Pura (680g)", descricao: "O sabor autêntico e tradicional do coco fresco selecionado em ponto perfeito.", tag: "Vidro 680g", imagem: "/cocada-pura.png" },
    { titulo: "Cocada com Maracujá (680g)", descricao: "A harmonia ideal entre a doçura da cocada caseira e o toque levemente ácido do maracujá.", tag: "Vidro 680g", imagem: "/cocada-maracuja.png" },
    { titulo: "Cocada com Morango (680g)", descricao: "Deliciosa combinação de coco fresco com pedaços e calda artesanal de morango.", tag: "Vidro 680g", imagem: "/cocada-morango.png" },
    { titulo: "Cocada com Chocolate (680g)", descricao: "Para os amantes de chocolate, unimos a cremosidade da cocada com notas intensas de cacau.", tag: "Vidro 680g", imagem: "/cocada-chocolate.png" },
    { titulo: "Cocada com Abacaxi (680g)", descricao: "Pedaços suculentos de abacaxi misturados à cocada artesanal, trazendo muita refrescância.", tag: "Vidro 680g", imagem: "/cocada-abacaxi.png" },
    { titulo: "Cocada com Ameixa (680g)", descricao: "Receita clássica mineira enriquecida com o sabor marcante e a textura da ameixa selecionada.", tag: "Vidro 680g", imagem: "/cocada-ameixa.png" }
  ]

  const produtosPet = [
    { titulo: "Doce de Goiaba (PET 680g)", descricao: "Goiabada cremosa tradicional em embalagem PET prática, segura e econômica.", tag: "PET 680g", imagem: "/pet-goiaba.png" },
    { titulo: "Doce de Leite com Ameixa (PET 680g)", descricao: "O toque sofisticado da ameixa unida à cremosidade do doce de leite em pote PET.", tag: "PET 680g", imagem: "/pet-ameixa.png" },
    { titulo: "Doce de Leite com Café (PET 680g)", descricao: "O sabor marcante do café aliado à praticidade da linha PET de 680g.", tag: "PET 680g", imagem: "/pet-cafe.png" },
    { titulo: "Doce de Leite Puro (PET 680g)", descricao: "O autêntico sabor da fazenda em formato versátil para o dia a dia e comércio.", tag: "PET 680g", imagem: "/pet-puro.png" },
    { titulo: "Doce de Leite com Chocolate (PET 680g)", descricao: "A combinação irresistível de doce de leite com chocolate em embalagem resistente.", tag: "PET 680g", imagem: "/pet-chocolate.png" },
    { titulo: "Doce de Leite com Maracujá (PET 680g)", descricao: "Equilíbrio perfeito entre o doce e o cítrico, ideal para lanchonetes e confeitarias.", tag: "PET 680g", imagem: "/pet-maracuja.png" },
    { titulo: "Doce de Leite com Amora (PET 680g)", descricao: "Frutas selecionadas e doce de leite cremoso em embalagem comercial segura.", tag: "PET 680g", imagem: "/pet-amora.png" },
    { titulo: "Doce de Leite com Coco (PET 680g)", descricao: "Raspa de coco fresco misturada ao nosso melhor creme em pote PET prático.", tag: "PET 680g", imagem: "/pet-coco.png" },
    { titulo: "Doce de Leite com Abacaxi (PET 680g)", descricao: "Leveza e sabor tropical em um formato econômico de excelente rendimento.", tag: "PET 680g", imagem: "/pet-abacaxi.png" },
    { titulo: "Doce de Leite com Morango (PET 680g)", descricao: "Calda artesanal de morango integrada ao doce de leite em embalagem PET.", tag: "PET 680g", imagem: "/pet-morango.png" },
    { titulo: "Doce de Leite com Cereja (PET 680g)", descricao: "Requinte e sabor refinado em pote PET resistente e prático para o uso diário.", tag: "PET 680g", imagem: "/pet-cereja.png" },
    { titulo: "Doce de Leite com Açaí (PET 680g)", descricao: "Inovação e energia em um formato moderno e seguro de 680g.", tag: "PET 680g", imagem: "/pet-acai.png" },
    { titulo: "Doce de Leite com Kiwi (PET 680g)", descricao: "Toque exótico e refrescante em pote PET de alta durabilidade e vedação.", tag: "PET 680g", imagem: "/pet-kiwi.png" }
  ]

  return (
    <section 
      id="sobremesa-mineira" 
      className="py-24 px-6 text-black font-sans border-b border-red-600 relative"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `
          linear-gradient(45deg, rgba(220, 38, 38, 0.85) 25%, transparent 25%), 
          linear-gradient(-45deg, rgba(220, 38, 38, 0.85) 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, rgba(220, 38, 38, 0.85) 75%), 
          linear-gradient(-45deg, transparent 75%, rgba(220, 38, 38, 0.85) 75%)
        `,
        backgroundSize: '36px 36px',
        backgroundPosition: '0 0, 0 18px, 18px -18px, -18px 0px'
      }}
    >
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto bg-white/95 p-8 rounded-3xl shadow-xl border border-red-200 backdrop-blur-sm">
          <span className="text-red-700 font-bold tracking-wider uppercase text-sm bg-red-100 px-4 py-1.5 rounded-full border border-red-200 inline-block mb-3">
            A Essência de Minas
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-black mb-4">
            Sobremesa Mineira
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-black text-lg font-medium leading-relaxed">
            Receitas tradicionais passadas de geração em geração. Doces cremosos feitos com o mais puro afeto e qualidade artesanal em tacho de cobre.
          </p>
        </div>

        <div className="bg-white/95 p-6 rounded-3xl shadow-md border border-red-200 backdrop-blur-[2px]">
          <CarrosselProdutos 
            tituloSecao="Potes de Vidro — 680g (Doces de Leite)" 
            produtos={produtosVidro680g} 
            corTag="bg-red-700" 
          />
        </div>

        <div className="bg-white/95 p-6 rounded-3xl shadow-md border border-red-200 backdrop-blur-[2px]">
          <CarrosselProdutos 
            tituloSecao="Potes de Vidro — 680g (Linha de Cocadas)" 
            produtos={produtosCocadas} 
            corTag="bg-red-700"
          />
        </div>

        <div className="bg-white/95 p-6 rounded-3xl shadow-md border border-red-200 backdrop-blur-[2px]">
          <CarrosselProdutos 
            tituloSecao="Linha PET — 680g (Embalagens Econômicas e Comerciais)" 
            produtos={produtosPet} 
            corTag="bg-red-700"
          />
        </div>

      </div>
    </section>
  )
}