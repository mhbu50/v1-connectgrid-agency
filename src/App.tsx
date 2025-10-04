import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { PackagesPage } from '@/pages/PackagesPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/pages/TermsOfServicePage';
import { ServicesListPage } from '@/pages/ServicesListPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { CaseStudiesListPage } from '@/pages/CaseStudiesListPage';
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage';
import { BlogListPage } from '@/pages/BlogListPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { CareersPage } from '@/pages/CareersPage';
import { ContactPage } from '@/pages/ContactPage';
import useScrollToTop from '@/hooks/useScrollToTop';
import { HreflangLinks } from '@/components/HreflangLinks';
function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}
export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
      <BrowserRouter>
        <ScrollToTopWrapper />
        <HreflangLinks />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesListPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        <Toaster richColors />
      </BrowserRouter>
    </Suspense>
  );
}