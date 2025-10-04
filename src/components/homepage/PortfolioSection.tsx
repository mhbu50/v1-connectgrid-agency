import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_ITEMS } from '@/constants';
import { ArrowRight } from 'lucide-react';
export function PortfolioSection() {
  const { t } = useTranslation();
  return (
    <section id="our-work" className="py-16 md:py-24 bg-muted dark:bg-background/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{t('portfolio.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('portfolio.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary font-semibold">{item.category}</p>
                    <h3 className="text-xl font-bold mt-2 text-foreground">{item.title}</h3>
                    <Link to={item.link}>
                      <Button variant="link" className="p-0 mt-4 text-primary h-auto">
                        {t('portfolio.viewCaseStudy')} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}