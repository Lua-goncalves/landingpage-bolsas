import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Instagram, Mail } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519998449681?text=Olá! Gostaria de mais informações sobre as bolsas",
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/bolsasexclusivas", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contato@bolsasexclusivas.com.br";
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-sand/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontas para ajudá-la a encontrar a bolsa perfeita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="p-8 text-center space-y-4 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 cursor-pointer animate-fade-up bg-card"
              onClick={handleWhatsAppClick}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="text-muted-foreground">Atendimento rápido e personalizado</p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleWhatsAppClick}
              >
                Iniciar Conversa
              </Button>
            </Card>

            <Card 
              className="p-8 text-center space-y-4 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 cursor-pointer animate-fade-up bg-card"
              style={{ animationDelay: "100ms" }}
              onClick={handleInstagramClick}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/10 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">Instagram</h3>
              <p className="text-muted-foreground">Veja nossa coleção e novidades</p>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={handleInstagramClick}
              >
                Seguir Agora
              </Button>
            </Card>

            <Card 
              className="p-8 text-center space-y-4 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 cursor-pointer animate-fade-up bg-card"
              style={{ animationDelay: "200ms" }}
              onClick={handleEmailClick}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-luxury/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-luxury" />
              </div>
              <h3 className="text-xl font-semibold">E-mail</h3>
              <p className="text-muted-foreground">Envie sua mensagem</p>
              <Button 
                variant="luxury"
                className="w-full"
                onClick={handleEmailClick}
              >
                Enviar E-mail
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
