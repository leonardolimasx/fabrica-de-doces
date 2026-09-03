import Navbar from '@/components/marcas/Navbar'
import SobremesaPrincipal from '@/components/marcas/SobremesaPrincipal'
import ReiDoDoce from '@/components/marcas/ReiDoDoce'
import DoceNobre from '@/components/marcas/DoceNobre'
import Videos from '@/components/marcas/videos'
import Contato from '@/components/marcas/Contato'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 relative">
      
      {/* Menu de Navegação / Abas */}
      <Navbar />

      {/* Hero / Banner Principal com a Imagem de Fundo */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center border-b border-stone-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url('/logo-sobremesa.png')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="bg-amber-700 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-sm">
            Grupo Fábrica de Doces
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide text-stone-900">
            A Tradição do Doce Mineiro
          </h1>
          <p className="text-stone-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Conheça nossas marcas exclusivas e leve para os seus clientes o verdadeiro sabor artesanal feito com dedicação em Minas Gerais.
          </p>
        </div>
      </section>

      {/* Marca 1: Sobremesa Mineira (Com o Xadrez Vermelho e Branco) */}
      <SobremesaPrincipal />

      {/* Marca 2: Rei do Doce (Fundo Escuro Elegante) */}
      <ReiDoDoce />

      {/* Marca 3: Doce Nobre */}
      <DoceNobre />

      {/* Seção de Vídeos / Bastidores */}
      <Videos />

      {/* Seção de Contato Completa (Telefones, WhatsApp e Mapa) */}
      <Contato />

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/5535997824591" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center animate-bounce border-2 border-white"
        title="Fale conosco pelo WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.603 6.012L.265 24l6.108-1.599A11.964 11.964 0 0012.031 24c6.647 0 12.031-5.383 12.031-12.031S18.678 0 12.031 0zm3.847 17.15c-.198.558-1.15.118-1.6.019-1.393-.312-2.738-1.026-3.83-2.038-1.168-1.077-1.956-2.483-2.316-3.953-.13-.53-.178-1.085-.02-1.608.14-.462.595-.764 1.05-.85.253-.047.514-.022.753.076.28.114.484.354.582.639.199.585.399 1.171.59 1.761.127.391.01.815-.276 1.107-.152.155-.328.29-.508.419-.074.053-.102.152-.055.228.468.756 1.096 1.39 1.83 1.875.08.056.185.04.246-.037.15-.19.317-.365.49-.533.245-.239.638-.3.945-.145.617.311 1.235.621 1.849.94.276.144.502.4.551.705.045.281.013.571-.082.836z" />
        </svg>
      </a>

      {/* Rodapé / Copyright Definitivo */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          {/* Coluna 1 */}
          <div>
            <h4 className="text-white text-lg font-bold font-serif mb-4">Fábrica de Doces</h4>
            <p className="text-sm leading-relaxed mb-4">
              Levando a tradição de Minas Gerais para a sua mesa através das marcas Sobremesa Mineira, Rei do Doce e Doce Nobre.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="text-white text-lg font-bold font-serif mb-4">Nossa Fábrica</h4>
            <p className="text-sm leading-relaxed">
              BR-267 Km 414<br />
              Bandeira do Sul - MG<br />
              CEP: 37740-000
            </p>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="text-white text-lg font-bold font-serif mb-4">Atendimento</h4>
            <p className="text-sm leading-relaxed">
              Segunda a Sexta: 07:00 às 16:00<br />
              Vendas B2B e Lojistas<br />
              (35) 99782-4591
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Grupo Fábrica de Doces. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-xs hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs hover:text-white cursor-pointer transition-colors">Facebook</span>
          </div>
        </div>
      </footer>

    </main>
  )
}