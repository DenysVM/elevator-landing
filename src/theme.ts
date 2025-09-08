import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: '#eef6ff',
    100: '#d8e9ff',
    200: '#b9d5ff',
    300: '#8fbbff',
    400: '#5e9bff',
    500: '#357dff',
    600: '#2a62d1',
    700: '#234ea6',
    800: '#1d3f84',
    900: '#182f61'
  },
  accent: { 500: '#1fb6aa' }
};

const fonts = {
  heading: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  body: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"',
};

const components = {
  Button: {
    defaultProps: { colorScheme: 'brand' },
    baseStyle: { borderRadius: 'xl', fontWeight: 600 }
  },
  Container: {
    baseStyle: { maxW: '7xl', px: { base: 4, md: 6 } }
  }
};

export const theme = extendTheme({ config, colors, fonts, components });
