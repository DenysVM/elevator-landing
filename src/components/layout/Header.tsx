import { Box, Container, Flex, HStack, IconButton, Link as CLink, Select, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { Link, useMatch } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CTAButton from '@/components/common/CTAButton';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation('common');
  const isHome = !!useMatch({ path: '/', end: true });
  const isServices = !!useMatch('/services');
  const isProducts = !!useMatch('/products');
  const isProjects = !!useMatch('/projects');
  const isCerts = !!useMatch('/certifications');
  const isContact = !!useMatch('/contact');

  return (
    <Box as="header" bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Container>
        <Flex h={16} align="center" justify="space-between">
          <CLink as={Link} to="/" fontWeight={800} fontSize="xl">LiftPro</CLink>
          <HStack display={{ base: 'none', md: 'flex' }} spacing={2} as="nav">
            <CLink as={Link} to="/" px={3} py={2} borderRadius="lg" fontWeight={600} transition="all 0.2s" _hover={{ bg: 'gray.100' }}
              bg={isHome ? 'gray.100' : 'transparent'} boxShadow={isHome ? 'sm' : 'none'}>
              {t('nav.home')}
            </CLink>
            <CLink as={Link} to="/services" px={3} py={2} borderRadius="lg" fontWeight={600} transition="all 0.2s" _hover={{ bg: 'gray.100' }}
              bg={isServices ? 'gray.100' : 'transparent'} boxShadow={isServices ? 'sm' : 'none'}>
              {t('nav.services')}
            </CLink>
            <CLink as={Link} to="/products" px={3} py={2} borderRadius="lg" fontWeight={600} transition="all 0.2s" _hover={{ bg: 'gray.100' }}
              bg={isProducts ? 'gray.100' : 'transparent'} boxShadow={isProducts ? 'sm' : 'none'}>
              {t('nav.products')}
            </CLink>
            <CLink as={Link} to="/projects" px={3} py={2} borderRadius="lg" fontWeight={600} transition="all 0.2s" _hover={{ bg: 'gray.100' }}
              bg={isProjects ? 'gray.100' : 'transparent'} boxShadow={isProjects ? 'sm' : 'none'}>
              {t('nav.projects')}
            </CLink>
            <CLink as={Link} to="/certifications" px={3} py={2} borderRadius="lg" fontWeight={600} transition="all 0.2s" _hover={{ bg: 'gray.100' }}
              bg={isCerts ? 'gray.100' : 'transparent'} boxShadow={isCerts ? 'sm' : 'none'}>
              {t('nav.certifications')}
            </CLink>
            <CLink as={Link} to="/contact" px={3} py={2} borderRadius="lg" fontWeight={600} transition="all 0.2s" _hover={{ bg: 'gray.100' }}
              bg={isContact ? 'gray.100' : 'transparent'} boxShadow={isContact ? 'sm' : 'none'}>
              {t('nav.contact')}
            </CLink>
          </HStack>
          <HStack>
            {/* Show language selector only on desktop/tablet */}
            <Select size="sm" variant="filled" onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}
              w="72px" textAlign="center" display={{ base: 'none', md: 'block' }} borderRadius="xl">
              <option value="uk">UK</option>
              <option value="pl">PL</option>
              <option value="en">EN</option>
            </Select>
            {!isContact && (
              <CTAButton
                to="/contact"
                size="sm"
                px={4}
                py={2}
                display={{ base: 'none', md: 'inline-flex' }}
              >
                {t('cta.contact')}
              </CTAButton>
            )}
            <IconButton aria-label="Menu" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} display={{ base: 'inline-flex', md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          </HStack>
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Flex align="center" justify="space-between" gap={2}>
                <Box as="span" fontWeight={700}>{t('nav.menu', { defaultValue: 'Меню' })}</Box>
                <HStack spacing={2}>
                  {/* Mobile language selector aligned near menu title */}
                  <Select size="sm" variant="filled" onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}
                    w="72px" textAlign="center" display={{ base: 'block', md: 'none' }} borderRadius="xl">
                    <option value="uk">UK</option>
                    <option value="pl">PL</option>
                    <option value="en">EN</option>
                  </Select>
                  {/* Close button aligned to header middle, semi-transparent */}
                  <IconButton
                    aria-label={`${t('nav.menu', { defaultValue: 'Меню' })} close`}
                    icon={<CloseIcon />}
                    onClick={onClose}
                    variant="ghost"
                    bg="blackAlpha.100"
                    opacity={0.7}
                    _hover={{ opacity: 1, bg: 'blackAlpha.200' }}
                    size="sm"
                    borderRadius="xl"
                  />
                </HStack>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <VStack as="nav" spacing={2} align="stretch">
                <CLink as={Link} to="/" onClick={onClose} px={3} py={3} borderRadius="lg" fontWeight={600}
                  bg={isHome ? 'gray.100' : 'transparent'} boxShadow={isHome ? 'sm' : 'none'}>
                  {t('nav.home')}
                </CLink>
                <CLink as={Link} to="/services" onClick={onClose} px={3} py={3} borderRadius="lg" fontWeight={600}
                  bg={isServices ? 'gray.100' : 'transparent'} boxShadow={isServices ? 'sm' : 'none'}>
                  {t('nav.services')}
                </CLink>
                <CLink as={Link} to="/products" onClick={onClose} px={3} py={3} borderRadius="lg" fontWeight={600}
                  bg={isProducts ? 'gray.100' : 'transparent'} boxShadow={isProducts ? 'sm' : 'none'}>
                  {t('nav.products')}
                </CLink>
                <CLink as={Link} to="/projects" onClick={onClose} px={3} py={3} borderRadius="lg" fontWeight={600}
                  bg={isProjects ? 'gray.100' : 'transparent'} boxShadow={isProjects ? 'sm' : 'none'}>
                  {t('nav.projects')}
                </CLink>
                <CLink as={Link} to="/certifications" onClick={onClose} px={3} py={3} borderRadius="lg" fontWeight={600}
                  bg={isCerts ? 'gray.100' : 'transparent'} boxShadow={isCerts ? 'sm' : 'none'}>
                  {t('nav.certifications')}
                </CLink>
                <CLink as={Link} to="/contact" onClick={onClose} px={3} py={3} borderRadius="lg" fontWeight={600}
                  bg={isContact ? 'gray.100' : 'transparent'} boxShadow={isContact ? 'sm' : 'none'}>
                  {t('nav.contact')}
                </CLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
}
