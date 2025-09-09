import { ChevronDownIcon, CheckIcon } from '@chakra-ui/icons';
import { Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'uk' | 'pl' | 'en';

const LANG_LABEL: Record<Language, string> = {
  uk: 'UK',
  pl: 'PL',
  en: 'EN',
};

interface LanguageMenuProps {
  size?: 'xs' | 'sm' | 'md';
  display?: any;
  width?: string | number;
  variant?: 'solid' | 'ghost' | 'outline';
  align?: 'start' | 'end';
}

export default function LanguageMenu({
  size = 'sm',
  display,
  width = '72px',
  variant = 'ghost',
  align = 'end',
}: LanguageMenuProps) {
  const { i18n } = useTranslation('common');
  const current = (i18n.language as Language) ?? 'uk';

  const change = (lng: Language) => {
    if (lng !== current) i18n.changeLanguage(lng).catch(() => {});
  };

  return (
    <Menu placement={align === 'end' ? 'bottom-end' : 'bottom-start'}>
      <MenuButton
        as={Button}
        size={size}
        variant={variant}
        colorScheme="gray"
        borderRadius="xl"
        px={3}
        height="32px"
        display={display}
        w={width}
        rightIcon={<ChevronDownIcon />}
        fontWeight={700}
        color="chakra-body-text"
        _hover={{ bg: 'gray.100' }}
      >
        {LANG_LABEL[current]}
      </MenuButton>
      <MenuList borderRadius="xl" boxShadow="xl" py={1}>
        {(Object.keys(LANG_LABEL) as Language[]).map((lng) => (
          <MenuItem
            key={lng}
            onClick={() => change(lng)}
            borderRadius="lg"
            fontWeight={600}
            _focus={{ bg: 'gray.100' }}
          >
            <HStack justify="space-between" w="100%">
              <Text>{LANG_LABEL[lng]}</Text>
              {lng === current ? (
                <CheckIcon color="brand.500" />
              ) : (
                <span />
              )}
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
