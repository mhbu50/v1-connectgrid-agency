import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CASE_STUDIES_DETAILS } from '@/constants';
import { Seo } from '@/components/shared/Seo';
type CaseStudyKey = keyof typeof CASE_STUDIES_DETAILS;
interface Stat {
  value: string;
  label: string;
}
interface CaseStudyDetails {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: {
    summary: string;
    stats: Stat[];
  };
  services: string[];
}
export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const caseStudyStatic = slug ? CASE_STUDIES_DETAILS[slug as CaseStudyKey] : undefined;
  const caseStudy = t(`caseStudies.details.${slug}`, { returnObjects: true }) as CaseStudyDetails;
  if (!caseStudyStatic || typeof caseStudy !== 'object') {
    return <Navigate to="/case-studies" replace />;
  }
  const breadcrumbItems = [
    { label: t('breadcrumbs.home'), href: '/' },
    { label: t('breadcrumbs.caseStudies'), href: '/case-studies' },
    { label: caseStudy.title },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "image": caseStudyStatic.image,
    "author": {
      "@type": "Organization",
      "name": "ConnectGrid"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ConnectGrid",
      "logo": {
        "@type": "ImageObject",
        "url": "https://connectgrid.com/logo.png" // Placeholder
      }
    },
    "description": caseStudy.challenge
  };
  return (
    <>
      <Seo
        title={`${caseStudy.title} | ConnectGrid Case Study`}
        description={caseStudy.challenge}
        canonical={`https://connectgrid.com/case-studies/${slug}`}
        schema={articleSchema}
      />
      <div className="bg-muted dark:bg-background/50 pt-10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      <article>
        <header className="py-12 md:py-20 bg-muted dark:bg-background/50">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-semibold">{caseStudy.category}</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary dark:text-white">
              {caseStudy.title}
            </h1>
          </div>
        </header>
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-10">
          <motion.img
            src={caseStudyStatic.image}
            alt={caseStudy.title}
            className="rounded-lg shadow-2xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <div className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose dark:prose-invert max-w-none prose-lg">
            <section>
              <h2>{t('caseStudies.challenge')}</h2>
              <p>{caseStudy.challenge}</p>
            </section>
            <section>
              <h2>{t('caseStudies.solution')}</h2>
              <p>{caseStudy.solution}</p>
            </section>
            <section>
              <h2>{t('caseStudies.results')}</h2>
              <p>{caseStudy.results.summary}</p>
              <div className="my-12">
                <Card>
                  <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {caseStudy.results.stats.map((stat, index) => (
                      <div key={index}>
                        <p className="text-4xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>
            <Separator className="my-12" />
            <section>
              <h3 className="text-xl font-semibold mb-4 text-center">{t('caseStudies.servicesProvided')}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {caseStudy.services.map((service) => (
                  <Badge key={service} variant="secondary" className="text-sm">{service}</Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}