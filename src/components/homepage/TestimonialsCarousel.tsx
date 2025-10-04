import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TESTIMONIALS } from '@/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
export function TestimonialsCarousel() {
  const { t } = useTranslation();
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const testimonialsContent = t('testimonials.items', { returnObjects: true }) as Array<{ quote: string; name: string; company: string }>;
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{t('testimonials.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('testimonials.subtitle')}</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-6">
                      <Quote className="h-12 w-12 text-primary/20" />
                      <p className="text-lg md:text-xl font-medium text-foreground max-w-2xl">
                        "{testimonialsContent[index]?.quote || testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4 pt-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonialsContent[index]?.name || testimonial.name} />
                          <AvatarFallback>{(testimonialsContent[index]?.name || testimonial.name).charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonialsContent[index]?.name || testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonialsContent[index]?.company || testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-[-50px]" />
          <CarouselNext className="hidden sm:flex right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}