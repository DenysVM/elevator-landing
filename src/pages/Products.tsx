import Section from '@/components/common/Section';
import { SimpleGrid } from '@chakra-ui/react';
import ServiceCard from '@/components/cards/ServiceCard';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation('common');
  return (
    <Section title={t('products.title')} subtitle={t('products.subtitle')}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        <ServiceCard
          title={t('products.passenger.title')}
          description={t('products.passenger.desc')}
          image="/images/passenger-elevator.jpg"
          alt={t('products.passenger.title')}
        />
        <ServiceCard
          title={t('products.freight.title')}
          description={t('products.freight.desc')}
          image="/images/heavy-duty-elevator.jpg"
          alt={t('products.freight.title')}
        />
        <ServiceCard
          title={t('products.components.title')}
          description={t('products.components.desc')}
          image="/images/elevator-components.jpg"
          alt={t('products.components.title')}
        />
      </SimpleGrid>
    </Section>
  );
}
