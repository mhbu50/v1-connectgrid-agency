import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, User } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { BLOG_POSTS } from '@/constants';
import { Seo } from '@/components/shared/Seo';
type BlogPostKey = keyof typeof BLOG_POSTS;
interface BlogPost {
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const postStatic = slug ? BLOG_POSTS[slug as BlogPostKey] : undefined;
  const post = t(`blog.posts.${slug}`, { returnObjects: true }) as BlogPost;
  if (!postStatic || typeof post !== 'object') {
    return <Navigate to="/blog" replace />;
  }
  const breadcrumbItems = [
    { label: t('breadcrumbs.home'), href: '/' },
    { label: t('breadcrumbs.blog'), href: '/blog' },
    { label: post.title },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": postStatic.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "ConnectGrid",
      "logo": {
        "@type": "ImageObject",
        "url": "https://connectgrid.com/logo.png" // Placeholder
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };
  return (
    <>
      <Seo
        title={`${post.title} | ConnectGrid Blog`}
        description={post.excerpt}
        canonical={`https://connectgrid.com/blog/${slug}`}
        schema={articleSchema}
      />
      <div className="bg-muted dark:bg-background/50 pt-10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      <article className="bg-background">
        <header className="py-12 md:py-16 bg-muted dark:bg-background/50">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary dark:text-white">
              {post.title}
            </h1>
            <div className="mt-6 flex justify-center items-center space-x-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} {t('blog.readTime')}</span>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <img
            src={postStatic.image}
            alt={post.title}
            className="rounded-lg shadow-xl w-full aspect-video object-cover"
          />
        </div>
        <div className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose dark:prose-invert max-w-none prose-lg prose-headings:font-bold prose-headings:text-text-primary prose-a:text-primary hover:prose-a:text-primary-dark">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}