export default function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-stone-950 text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Fale Conosco</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-white">
            Contato Comercial
          </h2>
          <div className="w-20 h-1.5 bg-amber-600 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-stone-400 text-lg">
            Entre em contato com nossa equipe de vendas para lojistas, distribuidores e encomendas. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo: Consultores */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-amber-500 border-b border-stone-800 pb-4">
              Nossos Canais de Vendas
            </h3>
            
            {/* Card Consultor 1: Samuel */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
              <div>
                <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Consultor de Vendas</p>
                <h4 className="text-2xl font-bold text-white mb-1">Samuel</h4>
                <p className="text-amber-400 text-lg">(35) 99702-4591</p>
              </div>
              <a 
                href="https://wa.me/5535997024591?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20doces!" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-green-900/50 transition-transform hover:scale-105 flex items-center gap-2"
              >
                WhatsApp
              </a>
            </div>

            {/* Card Consultor 2: Igor */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
              <div>
                <p className="text-stone-400 text-sm uppercase tracking-wider mb-1">Consultor de Vendas</p>
                <h4 className="text-2xl font-bold text-white mb-1">Igor</h4>
                <p className="text-amber-400 text-lg">(35) 98897-1180</p>
              </div>
              <a 
                href="https://wa.me/5535988971180?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20doces!" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-green-900/50 transition-transform hover:scale-105 flex items-center gap-2"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Direito: Mapa */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl flex flex-col items-center">
            
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-4 border border-stone-700 bg-stone-900">
               {/* Iframe do Mapa Atualizado com Busca Dinâmica */}
               <iframe 
                 src="https://maps.google.com/maps?q=Sobremesa%20Mineira%20Doces,%20Bandeira%20do%20Sul%20-%20MG&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>

            {/* Link do botão corrigido apontando para a busca no Maps */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Sobremesa+Mineira+Doces+Bandeira+do+Sul" 
              target="_blank" 
              rel="noreferrer"
              className="bg-amber-600 hover:bg-amber-500 text-white w-full py-3 rounded-xl font-bold text-center transition-colors shadow-md"
            >
              Abrir Rota / Como Chegar no Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}