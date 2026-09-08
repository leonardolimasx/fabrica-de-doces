import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grupo Fábrica de Doces | Sobremesa Mineira',
  description: 'A verdadeira tradição do doce mineiro. Conheça nossas marcas exclusivas e leve para os seus clientes o sabor industrial feito com rigor e dedicação.',
  icons: {
    icon: '/logo-sobremesa.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}