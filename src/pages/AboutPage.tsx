import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { TEAM_MEMBERS } from '@/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export function AboutPage() {
  const { t } = useTranslation();
  const teamMembersContent = t('team.members', { returnObjects: true }) as Array<{ name: string; title: string; bio: string }>;
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };
  return (
    <>
      <Seo
        title="About Us | ConnectGrid"
        description="Learn about ConnectGrid's mission, values, and the expert team dedicated to driving digital marketing success for your business."
        canonical="https://connectgrid.com/about"
      />
      <PageHeader
        title={t('about.pageTitle')}
        subtitle={t('about.pageSubtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-4">{t('about.storyTitle')}</h2>
              <p className="text-muted-foreground mb-4">
                {t('about.storyParagraph1')}
              </p>
              <p className="text-muted-foreground">
                {t('about.storyParagraph2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" alt="ConnectGrid Team" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-muted dark:bg-background/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{t('about.teamTitle')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t('about.teamSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="items-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.avatar} alt={teamMembersContent[index]?.name || member.name} />
                      <AvatarFallback>{(teamMembersContent[index]?.name || member.name).split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg font-semibold">{teamMembersContent[index]?.name || member.name}</CardTitle>
                    <p className="text-sm text-primary">{teamMembersContent[index]?.title || member.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{teamMembersContent[index]?.bio || member.bio}</p>
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