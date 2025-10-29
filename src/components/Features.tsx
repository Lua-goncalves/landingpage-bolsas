import { Card } from "@/components/ui/card";
import { Truck, Star, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba suas bolsas com segurança e agilidade em todo o Brasil",
  },
  {
    icon: Star,
    title: "Produtos Exclusivos",
    description: "Peças únicas e selecionadas com cuidado para você",
  },
  {
    icon: Shield,
    title: "Garantia de Qualidade",
    description: "Materiais premium e acabamento impecável em todas as bolsas",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Suporte dedicado para ajudá-la a encontrar a bolsa perfeita",
  },
];

const Features = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Por Que Escolher Nossas Bolsas?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência em cada detalhe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center space-y-4 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 animate-fade-up bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-luxury/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-luxury" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
