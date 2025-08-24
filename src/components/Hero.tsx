import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme Suas <span className="text-yellow-300">Finanças</span> em 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Descubra as melhores oportunidades de renda extra, tecnologias que geram lucro 
            e produtos que estão revolucionando o mercado brasileiro
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Comece Sua Jornada Agora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Ver Oportunidades
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">+500% ROI</h3>
              <p className="text-blue-100">Retorno médio dos nossos parceiros</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100mil+ Usuários</h3>
              <p className="text-blue-100">Já transformaram suas vidas</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificado</h3>
              <p className="text-blue-100">Produtos testados e aprovados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;