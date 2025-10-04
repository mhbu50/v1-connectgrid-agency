import { Seo } from '@/components/shared/Seo';
import { HeroSection } from '@/components/homepage/HeroSection';
import { ServicesGrid } from '@/components/homepage/ServicesGrid';
import { TestimonialsCarousel } from '@/components/homepage/TestimonialsCarousel';
import { PortfolioSection } from '@/components/homepage/PortfolioSection';
import { CtaSection } from '@/components/homepage/CtaSection';
export function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ConnectGrid",
    "url": "https://connectgrid.com/",
    "logo": "https://connectgrid.com/logo.png", // Placeholder URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-50-491-3826",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/connect-grid/"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://connectgrid.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://connectgrid.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
      <Seo
        title="ConnectGrid | Digital Marketing Agency for Business Growth"
        description="ConnectGrid is a leading digital marketing agency specializing in SEO, PPC, social media, and content marketing to drive growth and deliver measurable results."
        keywords="digital marketing agency, seo services, ppc management, social media marketing, content marketing, marketing agencies"
        canonical="https://connectgrid.com/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema]
        }}
      />
      <HeroSection />
      <ServicesGrid />
      <TestimonialsCarousel />
      <PortfolioSection />
      <CtaSection />
    </>
  );
}