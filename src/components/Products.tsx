import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import bag1 from "@/images/bag-1.jpeg";
import bag2 from "@/images/bag-2.jpeg";
import bag3 from "@/images/bag-3.jpeg";
import bag4 from "@/images/bag-4.jpeg";
import bag5 from "@/images/bag-5.jpeg";
import bag6 from "@/images/bag-6.jpeg";
import bag7 from "@/images/bag-7.jpeg";
import bag8 from "@/images/bag-8.jpeg";
import bag9 from "@/images/bag-9.jpeg";
import bag10 from "@/images/bag-10.jpeg";
import bag11 from "@/images/bag-11.jpeg";
import bag12 from "@/images/bag-12.jpeg";
import bag13 from "@/images/bag-13.jpeg";
import bag14 from "@/images/bag-14.jpeg";
import bag15 from "@/images/bag-15.jpeg";
import bag16 from "@/images/bag-16.jpeg";
import bag17 from "@/images/bag-17.jpeg";
import bag18 from "@/images/bag-18.jpeg";
import bag19 from "@/images/bag-19.jpeg";
import bag20 from "@/images/bag-20.jpeg";
import bag21 from "@/images/bag-21.jpeg";
import bag22 from "@/images/bag-22.jpeg";
import bag23 from "@/images/bag-23.jpeg";
import bag24 from "@/images/bag-24.jpeg";
import bag25 from "@/images/bag-25.jpeg";
import bag26 from "@/images/bag-26.jpeg";
import bag27 from "@/images/bag-27.jpeg";
import bag28 from "@/images/bag-28.jpeg";
import bag29 from "@/images/bag-29.jpeg";
import bag30 from "@/images/bag-30.jpeg";
import bag31 from "@/images/bag-31.jpeg";
import bag32 from "@/images/bag-32.jpeg";
import bag33 from "@/images/bag-33.jpeg";
import bag34 from "@/images/bag-34.jpeg";
import bag35 from "@/images/bag-35.jpeg";
import bag36 from "@/images/bag-36.jpeg";
import bag37 from "@/images/bag-37.jpeg";
import bag38 from "@/images/bag-38.jpeg";
import bag39 from "@/images/bag-39.jpeg";
import bag40 from "@/images/bag-40.jpeg";
import bag41 from "@/images/bag-41.jpeg";
import bag42 from "@/images/bag-42.jpeg";
import bag43 from "@/images/bag-43.jpeg";
import bag44 from "@/images/bag-44.jpeg";

const products = [
  {
    id: 1,
    name: "Bolsa Tote Caramelo com Lenço Decorativo",
    price: "R$ 389,90",
    description:
      "Bolsa em couro sintético na cor caramelo, modelo tote com alças duplas e lenço decorativo. Possui zíper frontal dourado e design versátil, que combina com diversos estilos.O lenço é um detalhe moderno e personalizável, ma tendência popular que permite transformar o visual da bolsa, podendo ser amarrado de diferentes maneiras para criar estilos variados.",
    images: [bag1],
  },
  {
    id: 2,
    name: "Bolsa Chicago",
    price: "R$ 349,90",
    description:
      "Modelo elegante em couro sintético, com alça de mão franzida (ou plissada) e alça transversal que une estilo e praticidade.Disponível nas cores preta e bege.",
    images: [bag2, bag3, bag4, bag5],
  },
  {
    id: 3,
    name: "Bolsa Compacta e Versátil",
    price: "R$ 429,90",
    description:
      "Bolsa de design compacto, que também pode ser usada como bolsa de ombro. Prática e elegante, é perfeita para o dia a dia.",
    images: [bag6, bag7, bag8],
  },
  {
    id: 4,
    name: "Bolsa de Couro Caramelo",
    price: "R$ 299,90",
    description:
      " Peça atemporal que combina facilmente com diversos estilos — do casual ao formal. Versátil e elegante, é ideal para diferentes ocasiões.Disponível nos tamanhos pequeno, médio e grande, e também na cor preta.",
    images: [bag9, bag10, bag11],
  },
  {
    id: 5,
    name: "Bolsas Grandes Elegantes",
    price: "R$ 299,90",
    description:
      "Bolsas grandes com designs modernos, versáteis e elegantes, acabamento impecável e detalhes sofisticados em metal. Possuem alças ajustáveis para uso no ombro ou transversal, oferecendo praticidade para o dia a dia. A bolsa exibida na foto acompanha uma pequena bolsinha pendurada, ideal como porta-moedas. Perfeitas para diversas ocasiões, desde looks casuais até os mais elegantes.Disponível nas cores preta, marrom, caramelo e vinho.",
    images: [bag12, bag13, bag14, bag15],
  },
  {
    id: 6,
    name: "Bolsa Hobo Caramelo",
    price: "R$ 299,90",
    description:
      "Bolsa em formato meia-lua, confeccionada em material sintético maleável e desestruturado, que adquire um caimento natural ao ser apoiada. Versátil e casual, é perfeita para o uso diário, proporcionando um visual moderno e despojado.",
    images: [bag16, bag17],
  },
  {
    id: 7,
    name: "Bolsa Hobo Grande",
    price: "R$ 299,90",
    description:
      "Bolsa Hobo de design curvado na parte superior, com alça de ombro ajustável, zíperes laterais com puxadores decorativos e detalhe de metal dourado na parte frontal. Disponível nas cores prata metálico e marrom, combina estilo e praticidade para o dia a dia.",
    images: [bag18, bag19],
  },
  {
    id: 8,
    name: "Bolsa Hobo Preta",
    price: "R$ 299,90",
    description:
      " Bolsa grande em couro sintético, com alça de ombro trançada e detalhes dourados que acrescentam sofisticação. Elegante e espaçosa, perfeita para o dia a dia ou ocasiões especiais.",
    images: [bag20],
  },
  {
    id: 9,
    name: "Bolsa de Ombro Média Bicolor",
    price: "R$ 299,90",
    description:
      "Bolsa média com alça superior e fecho de aba, com design bicolor elegante. Disponível nas combinações creme e preto e creme e cinza. Versátil e sofisticada, perfeita para o dia a dia.",
    images: [bag21, bag22],
  },
  {
    id: 10,
    name: "Bolsa de Mão Média Marrom",
    price: "R$ 299,90",
    description:
      "Bolsa de formato baú, com design moderno e elegante. Possui alça de mão trançada e alça transversal ajustável, ambas na cor marrom, oferecendo estilo e praticidade para o dia a dia.",
    images: [bag23],
  },
  {
    id: 11,
    name: "Bolsa Média Marrom",
    price: "R$ 299,90",
    description:
      "Bolsa média em couro sintético de alta qualidade, com design moderno e estruturado. Conta com três repartições internas, incluindo uma com zíper, oferecendo praticidade e organização. Versátil, perfeita para o dia a dia de trabalho ou ocasiões casuais.",
    images: [bag24, bag25],
  },
  {
    id: 12,
    name: "Bolsa Média Preta",
    price: "R$ 299,90",
    description:
      "Bolsa de design moderno e elegante, com acabamento sofisticado. Possui alça transversal ajustável e removível, além de fechamento com zíper para mais praticidade e segurança.",
    images: [bag26],
  },
  {
    id: 13,
    name: "Bolsa Pequena Bege",
    price: "R$ 299,90",
    description:
      " Bolsa de alça dupla de mão, confeccionada em material sintético, com alça de ombro removível e design delicado. Acompanha um lenço estampado que complementa o visual com charme e elegância.",
    images: [bag27, bag28],
  },
  {
    id: 14,
    name: "Bolsa Preta Compacta",
    price: "R$ 299,90",
    description:
      "Bolsa pequena e elegante em couro sintético, com aba sofisticada e alça de ombro longa e ajustável. Versátil e prática, ideal para ocasiões casuais e formais.",
    images: [bag29, bag30],
  },
  {
    id: 15,
    name: "Bolsa Social Preta",
    price: "R$ 299,90",
    description:
      " Bolsa social em courino sintético, com alça de mão e alça transversal ajustável e removível. Apresenta detalhes em tressê na parte frontal, unindo elegância e praticidade para ocasiões formais ou do dia a dia.",
    images: [bag31],
  },
  {
    id: 16,
    name: "Bolsa Tiracolo em Couro Sintético",
    price: "R$ 299,90",
    description:
      "Bolsa tiracolo de estilo clássico e versátil, ideal para uso durante o dia ou à noite. Confeccionada em couro sintético, possui fecho em metal e alça de corrente preta que adiciona um toque moderno e elegante.Disponível nas cores branco, bege, caramelo e creme.",
    images: [bag32, bag33, bag34, bag35],
  },
  {
    id: 17,
    name: "BolsaTote Branca Texturizada com Nécessaire",
    price: "R$ 299,90",
    description:
      "Conjunto elegante composto por uma bolsa de ombro tipo tote e uma nécessaire removível. A bolsa principal possui formato espaçoso, alças curtas e acabamento texturizado que imita couro de crocodilo, confeccionada em couro sintético de alta qualidade. Perfeita para quem busca praticidade e sofisticação no dia a dia.",
    images: [bag36, bag37],
  },
  {
    id: 18,
    name: "Bolsa Tote",
    price: "R$ 299,90",
    description:
      "Modelo espaçoso e prático, ideal para o dia a dia. Possui design moderno e funcional, perfeito para carregar todos os seus itens com estilo e elegância.Disponível nas cores marrom e preta.",
    images: [bag38, bag39, bag40],
  },
  {
    id: 19,
    name: "Conjunto de Bolsas Femininas Pretas",
    price: "R$ 299,90",
    description:
      "Conjuntocomposto por duas bolsas elegantes:•	Bolsa Tote Grande: Design de cesta trançada com alças curtas, confeccionada em couro sintético com textura trançada. Espaçosa e versátil, perfeita para o dia a dia ou compromissos mais formais.•	Bolsa Crossbody Menor: Modelo transversal com alça longa e ajustável, ideal para praticidade e estilo no dia a dia.A bolsa menor é inclusa como brinde, tornando este conjunto ainda mais atraente.",
    images: [bag41, bag42],
  },
  {
    id: 20,
    name: "Mochila Urbana Preta Feminina",
    price: "R$ 299,90",
    description:
      "Mochila feminina em couro sintético, com alças duplas para maior conforto. Possui bolsos frontais com zíper e bolsos laterais, oferecendo praticidade e organização para o dia a dia urbano.",
    images: [bag43, bag44],
  },
];

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse na ${productName}`);
    window.open(`https://wa.me/5519998449681?text=${message}`, "_blank");
  };

  const toggleDescription = (productId: number) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <section id="produtos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Coleção</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças exclusivas que combinam qualidade premium com design sofisticado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Carousel */}
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div 
                        className="relative aspect-square cursor-pointer"
                        onClick={() => handleWhatsAppClick(product.name)}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name} - imagem ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-2xl font-bold text-luxury">{product.price}</p>
                </div>

                {/* Description Toggle */}
                <div>
                  <button
                    onClick={() => toggleDescription(product.id)}
                    className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-luxury transition-colors"
                  >
                    Ver Descrição
                    {expandedProduct === product.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedProduct === product.id && (
                    <div className="mt-3 text-sm text-muted-foreground animate-fade-in">
                      {product.description}
                    </div>
                  )}
                </div>

                {/* WhatsApp Button */}
                <Button
                  variant="luxury"
                  className="w-full"
                  onClick={() => handleWhatsAppClick(product.name)}
                >
                  Compre Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
