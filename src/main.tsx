import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { theme } from './theme';
import './i18n';
import { router } from '@/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </ChakraProvider>
);
