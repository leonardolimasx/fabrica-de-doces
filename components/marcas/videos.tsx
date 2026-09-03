export default function Videos() {
  return (
    <section id="videos" className="py-24 px-6 bg-white text-center border-b border-stone-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Cabeçalho da Seção */}
        <div className="space-y-4">
          <span className="text-red-700 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-1.5 rounded-full border border-red-100 inline-block">
            Bastidores & Qualidade
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-red-950">
            Conheça Nossa Fábrica
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mt-4 mb-6"></div>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Veja de perto como transformamos ingredientes selecionados em doces inesquecíveis direto da nossa produção artesanal.
          </p>
        </div>

        {/* Container do Vídeo (Efeito tela de cinema) */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-stone-100">
           
           {/* Player de Vídeo - Basta trocar o link do 'src' pelo link de embed do seu vídeo */}
           <iframe 
             className="absolute top-0 left-0 w-full h-full"
             src="video-fabrica.mp4" 
             title="Conheça Nossa Fábrica"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen
           ></iframe>

        </div>

      </div>
    </section>
  )
}