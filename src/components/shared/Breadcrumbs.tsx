import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
interface BreadcrumbItem {
  label: string;
  href?: string;
}
interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { i18n } = useTranslation();
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="h-5 w-5 text-muted-foreground mx-1" />
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};