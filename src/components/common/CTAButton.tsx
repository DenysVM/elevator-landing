import { Button, ButtonProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

interface CTAButtonProps extends ButtonProps {
  to?: string;
}

export default function CTAButton({ to = '/contact', children, ...props }: CTAButtonProps) {
  return (
    <Button
      as={RouterLink}
      to={to}
      colorScheme="brand"
      bgGradient="linear(to-r, brand.600, brand.500)"
      _hover={{
        bgGradient: 'linear(to-r, brand.700, brand.600)',
        transform: 'translateY(-1px)',
        boxShadow: 'lg'
      }}
      _active={{ transform: 'translateY(0)' }}
      size="md"
      px={5}
      py={3}
      borderRadius="xl"
      fontWeight={700}
      minW={0}
      whiteSpace="normal"
      textAlign="center"
      height="auto"
      rightIcon={<ArrowForwardIcon />}
      {...props}
    >
      {children}
    </Button>
  );
}
