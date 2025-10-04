import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CAREER_OPENINGS } from '@/constants';
import { MapPin, Briefcase } from 'lucide-react';
export function CareersPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Careers | ConnectGrid</title>
        <meta name="description" content="Join the ConnectGrid team. Explore current job openings and learn about our company culture." />
      </Helmet>
      <PageHeader
        title={t('careers.title')}
        subtitle={t('careers.subtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary dark:text-white">{t('careers.joinUsTitle')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t('careers.joinUsSubtitle')}</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {CAREER_OPENINGS.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
                    <div className="md:col-span-2">
                      <CardTitle>{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <Button asChild>
                        <a href="mailto:contact@connect-grid.com">{t('careers.applyNow')}</a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{job.description}</CardDescription>
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