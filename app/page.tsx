import Navbar from '@/components/marcas/Navbar'
import SobremesaPrincipal from '@/components/marcas/SobremesaPrincipal'
import ReiDoDoce from '@/components/marcas/ReiDoDoce'
import DoceNobre from '@/components/marcas/DoceNobre'
import Videos from '@/components/marcas/videos'
import Contato from '@/components/marcas/Contato'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 relative overflow-x-hidden">
      
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

      {/* Rodapé / Copyright Definitivo */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          <div>
            <h4 className="text-white text-lg font-bold font-serif mb-4">Fábrica de Doces</h4>
            <p className="text-sm leading-relaxed mb-4">
              Levando a tradição de Minas Gerais para a sua mesa através das marcas Sobremesa Mineira, Rei do Doce e Doce Nobre.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold font-serif mb-4">Nossa Fábrica</h4>
            <p className="text-sm leading-relaxed">
              BR-267 Km 414<br />
              Bandeira do Sul - MG<br />
              CEP: 37740-000
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold font-serif mb-4">Atendimento</h4>
            <p className="text-sm leading-relaxed">
              Segunda a Sexta: 07:00 às 16:00<br />
              Vendas B2B e Lojistas<br />
              (35) 99702-4591
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Grupo Fábrica de Doces. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a 
              href="https://www.instagram.com/sobremesamineiraoficial?utm_source=qr" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-amber-500"
            >
              Instagram Oficial
            </a>
            <span className="text-xs hover:text-white cursor-pointer transition-colors">Facebook</span>
          </div>
        </div>
      </footer>

    </main>
  )
}