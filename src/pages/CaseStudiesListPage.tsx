import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CASE_STUDIES_DETAILS } from '@/constants';
export function CaseStudiesListPage() {
  const { t } = useTranslation();
  const caseStudies = Object.entries(CASE_STUDIES_DETAILS);
  return (
    <>
      <Seo
        title="Case Studies | ConnectGrid"
        description="Explore our case studies to see how ConnectGrid has helped businesses achieve remarkable results through strategic digital marketing."
        canonical="https://connectgrid.com/case-studies"
      />
      <PageHeader
        title={t('caseStudies.listTitle')}
        subtitle={t('caseStudies.listSubtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(([slug, item], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col">
                  <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="relative">
                      <img src={item.image} alt={t(`caseStudies.details.${slug}.title`)} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-sm text-primary font-semibold">{t(`caseStudies.details.${slug}.category`)}</p>
                      <h3 className="text-xl font-bold mt-2 text-foreground flex-grow">{t(`caseStudies.details.${slug}.title`)}</h3>
                      <Link to={`/case-studies/${slug}`}>
                        <Button variant="link" className="p-0 mt-4 text-primary h-auto">
                          {t('portfolio.viewCaseStudy')} <ArrowRight className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
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
    </>
  );
}