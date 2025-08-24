import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { Calendar, Clock, User, TrendingUp, DollarSign } from "lucide-react";

const ArticleFinance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <span className="bg-cta text-cta-foreground px-3 py-1 rounded-full font-medium">
                Finanças
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                23 de Dezembro, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 min de leitura
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Como Ganhar R$ 20 + Benefícios com Bancos Digitais em 2024
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Descubra como três dos maiores bancos digitais do Brasil estão pagando para você abrir conta. 
              PagBank, PicPay e Neon oferecem vantagens exclusivas que podem render centenas de reais por mês.
            </p>

            <div className="flex items-center mb-8">
              <User className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">Por Equipe Renda Boost</span>
            </div>

            <div className="text-center mb-8">
              <CTAButton 
                text="Ganhar R$ 20 + Benefícios Agora" 
                url="https://renda-boost.lovable.app"
                variant="primary"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Por Que os Bancos Digitais Estão Pagando?</h2>
            <p className="mb-6">
              A concorrência entre bancos digitais nunca esteve tão acirrada. Para conquistar novos clientes, 
              instituições como PagBank, PicPay e Banco Neon estão oferecendo incentivos financeiros diretos 
              e benefícios exclusivos que podem render muito dinheiro.
            </p>

            <p className="mb-6">
              Essa estratégia, chamada de "customer acquisition cost" (custo de aquisição de cliente), é uma 
              oportunidade única para consumidores espertos que sabem aproveitar essas ofertas.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
              <div className="flex items-center mb-2">
                <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="text-lg font-bold text-green-800">Oportunidade Limitada</h3>
              </div>
              <p className="text-green-700 mb-4">
                Cadastre-se nos três bancos e resgate até R$ 20 + cupons exclusivos + cashback em compras.
              </p>
              <CTAButton 
                text="Aproveitar Oferta Agora" 
                url="https://renda-boost.lovable.app"
                variant="primary"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">PagBank: Conta Completa com Rendimento</h2>
            <p className="mb-6">
              O PagBank do UOL oferece uma das melhores contas digitais do mercado brasileiro. Além do bônus 
              de boas-vindas, você tem acesso a:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Conta corrente e poupança gratuitas</li>
              <li>Cartão de crédito sem anuidade</li>
              <li>Rendimento automático de 100% do CDI</li>
              <li>PIX ilimitado e TED gratuita</li>
              <li>Cashback em compras</li>
              <li>Programa de pontos exclusivo</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Como Maximizar os Ganhos no PagBank</h3>
            <p className="mb-4">
              O segredo está em usar a conta como principal meio de pagamento. O PagBank oferece cashback 
              em diversas categorias, que podem render entre R$ 50 a R$ 200 por mês dependendo do seu perfil de gasto.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">PicPay: O App de Pagamentos Que Mais Cresce</h2>
            <p className="mb-6">
              O PicPay revolucionou a forma como os brasileiros fazem pagamentos. Com mais de 60 milhões de usuários, 
              a plataforma oferece benefícios únicos:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Cashback em milhares de lojas parceiras</li>
              <li>Programa de pontos PicPay Rewards</li>
              <li>Cartão de crédito com benefícios exclusivos</li>
              <li>Investimentos com rentabilidade acima da poupança</li>
              <li>Recarga de celular com desconto</li>
              <li>Pagamento de contas com cashback</li>
            </ul>

            <div className="text-center my-8">
              <CTAButton 
                text="Cadastrar no PicPay + Neon + PagBank" 
                url="https://renda-boost.lovable.app"
                variant="primary"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Banco Neon: Simplicidade e Transparência</h2>
            <p className="mb-6">
              O Banco Neon se destaca pela simplicidade e ausência de taxas abusivas. É uma excelente opção 
              para quem busca uma conta limpa e transparente:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Conta corrente totalmente gratuita</li>
              <li>Cartão de débito e crédito sem anuidade</li>
              <li>Transferências e PIX ilimitados</li>
              <li>Aplicativo simples e intuitivo</li>
              <li>Atendimento humanizado</li>
              <li>Programa de indicação com premiação</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Estratégia Inteligente: Como Usar os Três Bancos</h2>
            <p className="mb-6">
              A estratégia mais lucrativa é ter conta nos três bancos e usar cada um para maximizar os benefícios:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">PagBank para Investimentos</h3>
            <p className="mb-4">
              Use o PagBank como conta principal para aproveitar o rendimento automático e os investimentos 
              com rentabilidade competitiva.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">PicPay para Compras do Dia a Dia</h3>
            <p className="mb-4">
              O PicPay é ideal para compras cotidianas devido ao extenso programa de cashback e parcerias 
              com milhares de estabelecimentos.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Neon para Backup e Transferências</h3>
            <p className="mb-4">
              Use o Neon como conta backup e para transferências gratuitas, aproveitando a ausência total de taxas.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-blue-800">Dica de Ouro</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Configure débito automático das contas principais no PicPay para garantir cashback mensal. 
                Use o PagBank para emergências com rendimento automático.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Calculando o Retorno Real</h2>
            <p className="mb-6">
              Vamos fazer as contas de quanto você pode ganhar mensalmente:
            </p>

            <div className="bg-gradient-card p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">💰 Simulação de Ganhos Mensais</h3>
              <ul className="space-y-2 mb-4">
                <li><strong>Bônus de abertura:</strong> R$ 20 (uma vez)</li>
                <li><strong>Cashback PicPay:</strong> R$ 30-80/mês</li>
                <li><strong>Rendimento PagBank:</strong> R$ 20-50/mês</li>
                <li><strong>Pontos e benefícios:</strong> R$ 15-30/mês</li>
                <li><strong>Total mensal:</strong> R$ 65-160/mês</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-4">
                *Valores podem variar conforme perfil de uso e movimentação financeira
              </p>
              <CTAButton 
                text="Começar a Lucrar Hoje" 
                url="https://renda-boost.lovable.app"
                variant="primary"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cuidados Importantes</h2>
            <p className="mb-6">
              Apesar dos benefícios, é importante ter alguns cuidados:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Mantenha organização financeira com múltiplas contas</li>
              <li>Configure notificações para acompanhar movimentações</li>
              <li>Use senhas diferentes e seguras para cada aplicativo</li>
              <li>Aproveite os benefícios sem comprometer seu orçamento</li>
              <li>Leia sempre os termos e condições das promoções</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusão</h2>
            <p className="mb-6">
              A oportunidade de ganhar dinheiro com bancos digitais é real e acessível. Com estratégia e 
              organização, é possível conquistar uma renda extra significativa apenas aproveitando os 
              benefícios oferecidos por essas instituições.
            </p>

            <p className="mb-6">
              O mercado financeiro brasileiro está em constante evolução, e os bancos digitais continuam 
              inovando para atrair clientes. Quem aproveita essas oportunidades desde o início sempre sai ganhando.
            </p>

            <div className="bg-gradient-cta text-white p-6 rounded-lg my-8 text-center">
              <h3 className="text-xl font-bold mb-4">🎯 Última Chance!</h3>
              <p className="mb-4">
                Esta oferta é limitada. Cadastre-se nos três bancos hoje e comece a lucrar imediatamente!
              </p>
              <CTAButton 
                text="Garantir Meus R$ 20 + Benefícios" 
                url="https://renda-boost.lovable.app"
                variant="secondary"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">É seguro ter conta em vários bancos digitais?</h3>
                <p className="text-muted-foreground">
                  Sim! Todos os bancos mencionados são regulamentados pelo Banco Central e possuem garantia do FGC 
                  até R$ 250.000 por instituição.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Preciso pagar alguma taxa para abrir as contas?</h3>
                <p className="text-muted-foreground">
                  Não! Todas as contas podem ser abertas gratuitamente e mantidas sem custos fixos.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Como recebo os bônus de abertura?</h3>
                <p className="text-muted-foreground">
                  Geralmente os bônus são creditados após completar o cadastro e fazer a primeira movimentação, 
                  seguindo os termos específicos de cada banco.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Posso fechar as contas depois se não gostar?</h3>
                <p className="text-muted-foreground">
                  Sim! Todas as contas podem ser encerradas a qualquer momento sem custos, bastando solicitar 
                  pelo aplicativo ou central de atendimento.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ArticleFinance;