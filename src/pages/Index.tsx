import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { TrendingUp, DollarSign, Heart, Briefcase } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      title: "PagBank + PicPay + Banco Neon",
      description: "Ganhe R$ 20 e Mais Benefícios com Nossos Parceiros Financeiros. Abra sua conta em poucos minutos, resgate cupons exclusivos e faça seu dinheiro render muito mais!",
      category: "Finanças",
      affiliate_url: "https://renda-boost.lovable.app",
      featured: true
    },
    {
      title: "Manus IA - Criação NOCODE",
      description: "Crie seus códigos de SaaS e Aplicativos NOCODE em segundos. Tecnologia revolucionária que está mudando o desenvolvimento de software.",
      category: "Tecnologia",
      affiliate_url: "https://manus.im/invitation/NNBGIDNC6MTV"
    },
    {
      title: "Lovable IA - Desenvolvimento Rápido",
      description: "Crie seus códigos de Aplicativos NOCODE SaaS em segundos. A plataforma de IA mais avançada para desenvolvimento web.",
      category: "Tecnologia",
      affiliate_url: "https://lovable.dev/?via=marcelo-barbosa"
    }
  ];

  const latestArticles = [
    {
      title: "Como Ganhar R$ 5.000 por Mês com Tecnologia NOCODE em 2024",
      excerpt: "Descubra as ferramentas de inteligência artificial que estão revolucionando o mercado de desenvolvimento e como você pode lucrar com elas sem saber programar.",
      category: "Tecnologia",
      readTime: "8 min",
      publishDate: "24 Dez 2024",
      trending: true,
      slug: "ganhar-dinheiro-nocode-2024"
    },
    {
      title: "Fórmula Negócio Online: Vale a Pena o Curso do Alex Vargas?",
      excerpt: "Análise completa do curso que promete ensinar como criar um negócio online lucrativo. Veja os prós, contras e resultados reais de alunos.",
      category: "Negócios",
      readTime: "12 min",
      publishDate: "23 Dez 2024",
      trending: true,
      slug: "formula-negocio-online-review"
    },
    {
      title: "Carteira de Estudante Digital: Como Economizar 50% em Ingressos",
      excerpt: "Tudo sobre a carteira nacional do estudante digital e como ela pode reduzir drasticamente seus gastos com entretenimento e cultura.",
      category: "Finanças",
      readTime: "6 min",
      publishDate: "22 Dez 2024",
      slug: "carteira-estudante-digital"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Oportunidades em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Produtos testados e aprovados que estão gerando resultados reais para milhares de brasileiros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
              text="Ver Todas as Oportunidades" 
              url="https://renda-boost.lovable.app"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Artigos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo atualizado semanalmente com as melhores estratégias e oportunidades do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-xl text-muted-foreground">
              Encontre exatamente o que você precisa para transformar sua situação financeira
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-smooth cursor-pointer group">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-smooth">
                <TrendingUp className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia</h3>
              <p className="text-muted-foreground text-sm">IA, NOCODE, Apps e Ferramentas</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-smooth cursor-pointer group">
              <div className="bg-cta/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-cta group-hover:text-white transition-smooth">
                <DollarSign className="w-8 h-8 text-cta group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Finanças</h3>
              <p className="text-muted-foreground text-sm">Bancos, Investimentos, Cartões</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-smooth cursor-pointer group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-500 group-hover:text-white transition-smooth">
                <Heart className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Saúde</h3>
              <p className="text-muted-foreground text-sm">Suplementos, Beleza, Bem-estar</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-lg transition-smooth cursor-pointer group">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-500 group-hover:text-white transition-smooth">
                <Briefcase className="w-8 h-8 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Negócios</h3>
              <p className="text-muted-foreground text-sm">Cursos, Marketing, Vendas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de brasileiros que já estão lucrando com nossas oportunidades
          </p>
          <CTAButton 
            text="Começar Agora - É Grátis" 
            url="https://renda-boost.lovable.app"
            variant="secondary"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
