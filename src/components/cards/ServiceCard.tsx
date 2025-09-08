import { Card, CardBody, Heading, Text, AspectRatio } from '@chakra-ui/react';
import LazyImage from '@/components/common/LazyImage';

interface Props {
  title: string;
  description: string;
  image?: string;
  alt?: string;
}

export default function ServiceCard({ title, description, image, alt }: Props) {
  return (
    <Card borderRadius="2xl" overflow="hidden" _hover={{ transform: 'translateY(-2px)', transition: 'all 0.2s', boxShadow: 'lg' }}>
      {image && (
        <AspectRatio ratio={4/3} w="100%">
          <LazyImage src={image} alt={alt || title} objectFit="cover" w="100%" h="100%" />
        </AspectRatio>
      )}
      <CardBody>
        <Heading size="md" mb={2}>{title}</Heading>
        <Text color="gray.600">{description}</Text>
      </CardBody>
    </Card>
  );
}
