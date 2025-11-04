import Link from 'next/link'
import { Card } from '@/components/ui'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-neutral-900 mb-4">
          Bem-vindo ao Caiçoré
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Descubra Boxes de Experiências Culturais e Produtos Artesanais
          autênticos do litoral do Paraná
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Cultura Caiçara</h3>
          <p className="text-neutral-600">
            Conheça a rica cultura tradicional do litoral paranaense através
            de experiências únicas.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Produtos Artesanais</h3>
          <p className="text-neutral-600">
            Adquira produtos feitos à mão por comunidades tradicionais,
            valorizando o comércio justo.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Histórias Reais</h3>
          <p className="text-neutral-600">
            Cada produto conta uma história. Conheça quem produziu e o impacto
            social gerado.
          </p>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/boxes">
          <Button size="lg">Explorar Boxes</Button>
        </Link>
      </div>
    </div>
  )
}

