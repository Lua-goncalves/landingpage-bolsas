import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/images/bag-14.jpeg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519998449681?text=Olá! Gostaria de conhecer as bolsas exclusivas",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-sand/30 to-background pt-20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Bolsas exclusivas
              <span className="block text-luxury mt-2">que combinam com Você</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
              Descubra nossa coleção de bolsas refinadas, onde luxo e elegância se encontram. 
              Cada peça é selecionada com cuidado para realçar seu estilo único.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="luxury"
                className="text-lg px-8 py-6 rounded-lg animate-pulse-soft"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Compre pelo WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-luxury text-luxury hover:bg-luxury/10 text-lg px-8 py-6 rounded-lg"
              >
                Ver Coleção
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Bolsa de luxo em couro marrom"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
