import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '@/constants';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Seo } from '@/components/shared/Seo';
import { cn } from '@/lib/utils';
interface ProcessStep {
  title: string;
  description: string;
}
interface ServiceDetails {
  subtitle: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  process: ProcessStep[];
}
export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const serviceMeta = SERVICES.find(s => s.slug === slug);
  const service = t(`services.details.${slug}`, { returnObjects: true }) as ServiceDetails;
  if (!serviceMeta || typeof service !== 'object') {
    return <Navigate to="/services" replace />;
  }
  const serviceTitle = t(`services.full.${serviceMeta.slug.replace(/-/g, '')}`);
  const breadcrumbItems = [
    { label: t('breadcrumbs.home'), href: '/' },
    { label: t('breadcrumbs.services'), href: '/services' },
    { label: serviceTitle },
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceTitle,
    "provider": {
      "@type": "Organization",
      "name": "ConnectGrid"
    },
    "description": service.description,
    "name": serviceTitle
  };
  const timelineItemVariants = {
    hidden: (isRight: boolean) => ({
      opacity: 0,
      x: isRight ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <Seo
        title={`${serviceTitle} | ConnectGrid Services`}
        description={service.description}
        canonical={`https://connectgrid.com/services/${slug}`}
        schema={serviceSchema}
      />
      <div className="bg-muted dark:bg-background/50 pt-10 pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="text-center mt-8 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary dark:text-white"
            >
              {serviceTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-muted-foreground"
            >
              {service.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <main className="lg:col-span-2 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-8 text-center">{t('services.keyFeatures')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>
            <section>
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-12 text-center">{t('services.ourProcess')}</h2>
              <div className="relative">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-border"></div>
                {service.process.map((step, index) => {
                  const isRight = index % 2 !== 0;
                  return (
                    <motion.div
                      key={index}
                      className="relative mb-12"
                      custom={isRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={timelineItemVariants}
                    >
                      <div className={cn("md:flex items-center", isRight ? "md:flex-row-reverse" : "")}>
                        <div className="md:w-1/2">
                          <div className={cn("p-6 rounded-lg border bg-card text-card-foreground shadow-sm", isRight ? "md:ml-8" : "md:mr-8")}>
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <p className="text-muted-foreground mt-2">{step.description}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex md:w-1/2 items-center justify-center">
                          <div className="absolute left-1/2 -translate-x-1/2 z-10">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg border-4 border-background">
                              {index + 1}
                            </div>
                          </div>
                        </div>
                        {/* Mobile step number */}
                        <div className="md:hidden flex items-center mt-4">
                           <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                              {index + 1}
                           </div>
                           <div className="w-full h-0.5 bg-border"></div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </main>
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-24"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Zap className="h-6 w-6 text-primary" /> {t('services.benefits')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </aside>
        </div>
      </div>
    </>
  );
}