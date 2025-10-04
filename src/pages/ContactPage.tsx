import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export function ContactPage() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!formRef.current) return;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_connectgrid';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_connectgrid';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
      console.error("EmailJS public key is not configured. Please set VITE_EMAILJS_PUBLIC_KEY in your .env file.");
      toast.error("The contact form is currently unavailable. Please try again later.");
      return;
    }
    const promise = emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
    toast.promise(promise, {
      loading: 'Sending message...',
      success: () => {
        form.reset();
        return t('contact.successMessage');
      },
      error: () => t('contact.errorMessage'),
    });
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ConnectGrid",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olaya",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "telephone": "+966504913826",
    "email": "contact@connect-grid.com",
    "url": "https://connectgrid.com/contact"
  };
  return (
    <>
      <Seo
        title="Contact Us | ConnectGrid"
        description="Get in touch with ConnectGrid. Contact us for digital marketing services, inquiries, or to start your project today."
        canonical="https://connectgrid.com/contact"
        schema={localBusinessSchema}
      />
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-6">{t('contact.formTitle')}</h2>
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formName')}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formEmail')}</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formCompany')}</FormLabel>
                        <FormControl>
                          <Input placeholder="InnovateTech Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formMessage')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : t('contact.formSubmit')}
                  </Button>
                </form>
              </Form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-6">{t('contact.infoTitle')}</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:contact@connect-grid.com" className="text-muted-foreground hover:text-primary transition-colors">contact@connect-grid.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+966504913826" className="text-muted-foreground hover:text-primary transition-colors">+966504913826</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">{t('footer.address')}</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
                    <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}