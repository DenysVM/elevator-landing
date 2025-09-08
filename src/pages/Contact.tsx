import Section from '@/components/common/Section';
import ContactForm from '@/components/forms/ContactForm';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <Section title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
        <GridItem>
          <Heading size="md" mb={2}>{t('contact.office')}</Heading>
          <Text>{t('contact.address')}</Text>
          <Text>{t('contact.phone')}</Text>
          <Text>{t('contact.email')}</Text>
        </GridItem>
        <GridItem>
          <ContactForm />
        </GridItem>
      </Grid>
    </Section>
  );
}

