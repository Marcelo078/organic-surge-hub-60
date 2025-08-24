import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">
              Renda Boost
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#tecnologia" className="text-muted-foreground hover:text-primary transition-smooth">
                Tecnologia
              </a>
              <a href="#financas" className="text-muted-foreground hover:text-primary transition-smooth">
                Finanças
              </a>
              <a href="#saude" className="text-muted-foreground hover:text-primary transition-smooth">
                Saúde
              </a>
              <a href="#negocios" className="text-muted-foreground hover:text-primary transition-smooth">
                Negócios
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-muted rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input 
                type="text" 
                placeholder="Buscar oportunidades..." 
                className="bg-transparent border-none outline-none text-sm"
              />
            </div>
            <Button variant="cta" size="sm">
              Começar Agora
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;