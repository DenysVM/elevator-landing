import Section from '@/components/common/Section';
import { Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation('common');
  return (
    <>
      <Section title={t('services.title')} subtitle={t('services.page.subtitle')}>
        <Stack spacing={6}>
          <Text><b>{t('services.installation')}.</b> {t('services.installation.long')}</Text>
          <Text><b>{t('services.modernization')}.</b> {t('services.modernization.long')}</Text>
          <Text><b>{t('services.maintenance')}.</b> {t('services.maintenance.long')}</Text>
        </Stack>
      </Section>
    </>
  );
}

