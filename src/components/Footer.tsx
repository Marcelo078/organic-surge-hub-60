import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Renda Boost</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Sua fonte confiável de informações sobre tecnologia, finanças, saúde e negócios. 
              Descobrimos as melhores oportunidades para transformar sua vida financeira.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-smooth">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-smooth">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-smooth">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-smooth">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Tecnologia</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Finanças</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Saúde</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Negócios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Política de Privacidade</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Termos de Uso</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Contato</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-smooth">Sobre</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Renda Boost. Todos os direitos reservados.
            </p>
            <p className="text-blue-200 text-sm mt-2 md:mt-0">
              Feito com ❤️ para o Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;