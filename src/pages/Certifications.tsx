import Section from '@/components/common/Section';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

export default function Certifications() {
  const { t } = useTranslation('common');
  return (
    <Section title={t('certifications.title')} subtitle={t('certifications.subtitle')}>
      <List spacing={3}>
        <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> {t('certifications.en8120')}</ListItem>
        <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> {t('certifications.en115')}</ListItem>
        <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> {t('certifications.iso')}</ListItem>
      </List>
    </Section>
  );
}

