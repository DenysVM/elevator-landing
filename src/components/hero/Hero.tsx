import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import LazyImage from '@/components/common/LazyImage';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTAButton from '@/components/common/CTAButton';

export default function Hero() {
  const { t } = useTranslation('common');
  return (
    <Box bg="gray.50" borderBottomWidth="1px">
      <Container py={{ base: 10, md: 16 }}>
        <Stack direction={{ base: 'column', md: 'row' }} gap={10} align="center">
          <Stack flex={1} spacing={5}>
            <Heading size={{ base: 'xl', md: '2xl' }}>{t('hero.title')}</Heading>
            <Text color="gray.700" fontSize={{ base: 'md', md: 'lg' }}>{t('hero.subtitle')}</Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <CTAButton to="/contact">{t('cta.contact')}</CTAButton>
              <Button as={Link} to="/services" variant="outline">{t('nav.services')}</Button>
            </Stack>
          </Stack>
          <Box flex={1}>
            <LazyImage src="/images/hero.jpg" alt="Elevator" borderRadius="2xl" objectFit="cover" w="100%" h={{ base: 56, md: 80 }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
