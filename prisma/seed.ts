import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@caicore.com.br' },
    update: {},
    create: {
      email: 'admin@caicore.com.br',
      name: 'Administrador Caiçoré',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('✅ Usuário admin criado:', admin.email)

  // Criar usuário de teste
  const userPassword = await bcrypt.hash('user123', 10)
  const user = await prisma.user.upsert({
    where: { email: 'usuario@teste.com' },
    update: {},
    create: {
      email: 'usuario@teste.com',
      name: 'Usuário Teste',
      password: userPassword,
      role: 'USER',
    },
  })
  console.log('✅ Usuário de teste criado:', user.email)

  // Criar categorias
  const categoriaGastronomia = await prisma.category.upsert({
    where: { slug: 'gastronomia' },
    update: {},
    create: {
      name: 'Gastronomia',
      slug: 'gastronomia',
      description: 'Boxes com receitas e ingredientes da culinária Caiçara',
      order: 1,
    },
  })

  const categoriaArtesanato = await prisma.category.upsert({
    where: { slug: 'artesanato' },
    update: {},
    create: {
      name: 'Artesanato e Fandango',
      slug: 'artesanato',
      description: 'Produtos artesanais e relacionados ao Fandango Caiçara',
      order: 2,
    },
  })

  const categoriaEcoturismo = await prisma.category.upsert({
    where: { slug: 'ecoturismo' },
    update: {},
    create: {
      name: 'Ecoturismo e Lendas',
      slug: 'ecoturismo',
      description: 'Experiências de ecoturismo e lendas do litoral paranaense',
      order: 3,
    },
  })

  console.log('✅ Categorias criadas')

  // Criar produtos (Boxes)
  const boxGastronomia = await prisma.product.upsert({
    where: { slug: 'box-gastronomia-caicara' },
    update: {},
    create: {
      name: 'Box Gastronomia Caiçara',
      slug: 'box-gastronomia-caicara',
      description:
        'Descubra os sabores autênticos do litoral paranaense com este box especial. Inclui receitas tradicionais, temperos locais e ingredientes selecionados das comunidades Caiçaras.',
      price: 149.9,
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
      ]),
      categoryId: categoriaGastronomia.id,
      stock: 50,
      active: true,
      featured: true,
      productDetails: {
        create: [
          {
            title: 'Receita de Barreado Tradicional',
            description: 'Receita completa passo a passo do prato típico do Paraná',
            order: 1,
          },
          {
            title: 'Temperos Artesanais',
            description: 'Seleção de temperos produzidos por comunidades locais',
            order: 2,
          },
          {
            title: 'Livro de Receitas Caiçaras',
            description: 'Livro digital com 20 receitas tradicionais',
            order: 3,
          },
        ],
      },
      productStory: {
        create: {
          partnerName: 'Comunidade Caiçara de Paranaguá',
          story:
            'Este box foi criado em parceria com famílias tradicionais de Paranaguá, que preservam há gerações os sabores e técnicas culinárias Caiçaras. Cada receita conta uma história de resistência cultural.',
          impact:
            'A compra deste box ajuda diretamente 15 famílias de pescadores e agricultores locais, garantindo renda sustentável e preservação da cultura tradicional.',
          location: 'Paranaguá, PR',
        },
      },
    },
    include: {
      productDetails: true,
      productStory: true,
    },
  })

  const boxArtesanato = await prisma.product.upsert({
    where: { slug: 'box-artesanato-fandango' },
    update: {},
    create: {
      name: 'Box Artesanato e Fandango',
      slug: 'box-artesanato-fandango',
      description:
        'Conheça a arte Caiçara através deste box especial. Inclui produtos artesanais únicos e informações sobre o Fandango, dança tradicional do litoral paranaense.',
      price: 199.9,
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800',
      ]),
      categoryId: categoriaArtesanato.id,
      stock: 30,
      active: true,
      featured: true,
      productDetails: {
        create: [
          {
            title: 'Artesanato em Fibra',
            description: 'Peça única em fibra natural produzida por artesão local',
            order: 1,
          },
          {
            title: 'CD de Fandango',
            description: 'Música tradicional gravada por mestres Caiçaras',
            order: 2,
          },
          {
            title: 'Guia Cultural',
            description: 'Livro sobre a história e importância do Fandango',
            order: 3,
          },
        ],
      },
      productStory: {
        create: {
          partnerName: 'Mestres do Fandango de Antonina',
          story:
            'Este box foi desenvolvido em colaboração com mestres e mestras do Fandango de Antonina, uma das manifestações culturais mais importantes do litoral paranaense, reconhecida como Patrimônio Cultural Imaterial do Brasil.',
          impact:
            'Apoia diretamente grupos de Fandango e artesãos locais, garantindo a continuidade desta tradição ancestral.',
          location: 'Antonina, PR',
        },
      },
    },
  })

  console.log('✅ Produtos (Boxes) criados')

  // Criar cupom de exemplo
  const cupom = await prisma.coupon.upsert({
    where: { code: 'BEMVINDO10' },
    update: {},
    create: {
      code: 'BEMVINDO10',
      description: 'Desconto de boas-vindas para novos clientes',
      discountType: 'PERCENTAGE',
      discountValue: 10,
      validFrom: new Date(),
      validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 ano
      usageLimit: 1000,
      active: true,
    },
  })

  console.log('✅ Cupom de desconto criado:', cupom.code)

  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Erro ao executar seed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })

