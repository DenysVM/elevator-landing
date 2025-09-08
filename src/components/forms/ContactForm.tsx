import { Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('common');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: hook up backend later
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <VStack as="form" onSubmit={onSubmit} spacing={4} align="stretch">
      <FormControl isRequired>
        <FormLabel>{t('contact.form.name_label')}</FormLabel>
        <Input name="name" placeholder={t('contact.form.name_placeholder')} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>{t('contact.form.email_label')}</FormLabel>
        <Input type="email" name="email" placeholder={t('contact.form.email_placeholder')} />
      </FormControl>
      <FormControl>
        <FormLabel>{t('contact.form.message_label')}</FormLabel>
        <Textarea name="message" rows={5} placeholder={t('contact.form.message_placeholder')} />
      </FormControl>
      <Button type="submit" colorScheme="brand" isLoading={loading} whiteSpace="normal" height="auto">
        {t('contact.form.submit')}
      </Button>
    </VStack>
  );
}

