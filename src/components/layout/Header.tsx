import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, MessageSquare } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from '@/hooks/use-theme';
import { NAV_LINKS, SERVICES } from '@/constants';
import { cn } from '@/lib/utils';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinkClasses = "text-sm font-medium transition-colors hover:text-primary";
  const activeNavLinkClasses = "text-primary";
  const navItems = (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(navLinkClasses, "flex items-center gap-1 outline-none")}>
          {t('nav.services')} <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <AnimatePresence>
          <DropdownMenuContent asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-56"
            >
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link to={`/services/${service.slug}`}>
                    {t(`services.full.${service.slug.replace(/-/g, '')}`)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </motion.div>
          </DropdownMenuContent>
        </AnimatePresence>
      </DropdownMenu>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.key}
          to={link.href}
          className={({ isActive }) => cn(navLinkClasses, isActive && link.href !== '/#our-work' && activeNavLinkClasses)}
        >
          {t(`nav.${link.key}`)}
        </NavLink>
      ))}
    </>
  );
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-10 w-10 text-primary" />
          <span className="font-bold text-xl text-foreground">ConnectGrid</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:inline-flex">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} className="hidden md:inline-flex text-sm font-medium">
            {t('nav.language')}
          </Button>
          <a href="https://wa.me/966504913826" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex text-green-500 hover:text-green-600">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://calendly.com/heshama7793/30min" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-6">
              {t('nav.letsTalk')}
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-t"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} className="text-sm font-medium">
                    {t('nav.language')}
                  </Button>
                  <a href="https://wa.me/966504913826" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-green-500 hover:text-green-600">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <a href="https://calendly.com/heshama7793/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-6">
                    {t('nav.letsTalk')}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}