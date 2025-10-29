import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Carolina",
    location: "São Paulo, SP",
    text: "A qualidade das bolsas é excepcional! Comprei a Tote Creme e uso todos os dias. Vale cada centavo!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariana Silva",
    location: "Rio de Janeiro, RJ",
    text: "Atendimento impecável pelo WhatsApp. Recebi minha bolsa rapidinho e ela é ainda mais linda pessoalmente!",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    text: "Estou apaixonada pela Clutch Caramelo! Perfeita para eventos. Já recebi vários elogios.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Nossas Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de quem já escolheu nossas bolsas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-8 space-y-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
