import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bolsas Exclusivas</h3>
            <p className="text-primary-foreground/80">
              Elegância e sofisticação em cada detalhe.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#produtos" className="hover:text-gold transition-colors">Produtos</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 fill-current text-gold" /> para mulheres que valorizam qualidade
          </p>
          <p className="mt-2 text-sm">
            © 2024 Bolsas Exclusivas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
