import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PACKAGES_DATA } from '@/constants';
import { cn } from '@/lib/utils';
export function PackagesPage() {
  const { t } = useTranslation();
  const offersSchema = PACKAGES_DATA.map(pkg => ({
    "@type": "Offer",
    "name": pkg.name,
    "price": pkg.price.replace(/[$,]/g, ''),
    "priceCurrency": "USD",
    "description": pkg.description,
    "category": "Social Media Marketing"
  }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": offersSchema.map((offer, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": offer
    }))
  };
  return (
    <>
      <Seo
        title="Our Packages | ConnectGrid"
        description="Explore ConnectGrid's social media marketing packages. Choose from Starter, Growth, and Scale plans to fit your business needs and budget."
        canonical="https://connectgrid.com/packages"
        schema={schema}
      />
      <PageHeader
        title={t('packages.pageTitle')}
        subtitle={t('packages.pageSubtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {PACKAGES_DATA.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "flex flex-col h-full",
                  pkg.isPopular && "border-primary shadow-lg shadow-primary/20"
                )}>
                  {pkg.isPopular && (
                    <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                      {t('packages.mostPopular')}
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl font-extrabold text-text-primary dark:text-white">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.priceSuffix}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={cn(
                      "w-full",
                      pkg.isPopular ? "bg-primary hover:bg-primary-dark" : "bg-primary/80 hover:bg-primary"
                    )}>
                      {t('packages.choose')} {pkg.name}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}