import Section from '@/components/common/Section';
import { SimpleGrid, Box, Heading, Text, AspectRatio } from '@chakra-ui/react';
import LazyImage from '@/components/common/LazyImage';
import { useTranslation } from 'react-i18next';

function ProjectCard() {
  const { t } = useTranslation('common');
  return (
    <Box borderWidth="1px" borderRadius="2xl" overflow="hidden" bg="white">
      <AspectRatio ratio={16/9} w="100%">
        <LazyImage src="/images/project-placeholder.jpg" alt="Project" objectFit="cover" w="100%" h="100%" />
      </AspectRatio>
      <Box p={6}>
        <Heading size="md" mb={2}>{t('projects.card.title')}</Heading>
        <Text color="gray.600">{t('projects.card.desc')}</Text>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const { t } = useTranslation('common');
  return (
    <Section title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </Section>
  );
}
