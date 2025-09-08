import { Box, Container, Flex, Text, Link as CLink, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <Box as="footer" bg="gray.50" mt={20} py={10} borderTopWidth="1px">
      <Container>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={4}>
          <Text>© {new Date().getFullYear()} LiftPro. {t('footer.rights')}</Text>
          <HStack spacing={6}>
            <CLink href="#">Privacy</CLink>
            <CLink href="#">Terms</CLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

