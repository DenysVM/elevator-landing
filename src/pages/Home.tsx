import Hero from '@/components/hero/Hero';
import Section from '@/components/common/Section';
import { SimpleGrid } from '@chakra-ui/react';
import ServiceCard from '@/components/cards/ServiceCard';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Hero />
      <Section id="services" title={t('services.title')} subtitle={t('home.services.subtitle')}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
          <ServiceCard
            title={t('services.installation')}
            description={t('services.installation.short')}
            image="/images/service-installation.jpg"
            alt={t('services.installation')}
          />
          <ServiceCard
            title={t('services.modernization')}
            description={t('services.modernization.short')}
            image="/images/service-modernization.jpg"
            alt={t('services.modernization')}
          />
          <ServiceCard
            title={t('services.maintenance')}
            description={t('services.maintenance.short')}
            image="/images/service-maintenance.jpg"
            alt={t('services.maintenance')}
          />
        </SimpleGrid>
      </Section>
    </>
  );
}
