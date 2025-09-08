import { Box, Heading, Stack, Text } from '@chakra-ui/react';

interface Props {
  id?: string;
  overline?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Section({ id, overline, title, subtitle, children }: Props) {
  return (
    <Box id={id} py={{ base: 8, md: 14 }}>
      <Stack spacing={3} mb={8}>
        {overline && <Text textTransform="uppercase" fontWeight={700} color="brand.700" fontSize="sm">{overline}</Text>}
        <Heading size={{ base: 'lg', md: 'xl' }}>{title}</Heading>
        {subtitle && <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }}>{subtitle}</Text>}
      </Stack>
      {children}
    </Box>
  );
}
