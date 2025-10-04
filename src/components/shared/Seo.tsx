import { Helmet } from 'react-helmet-async';
interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: object;
}
export const Seo = ({ title, description, keywords, canonical, schema }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};