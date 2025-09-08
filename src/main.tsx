import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { createLocalStorageManager } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { theme } from './theme';
import './i18n';
import { router } from '@/router';

const colorModeManager = createLocalStorageManager('liftpro-color-mode');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} storageKey="liftpro-color-mode" />
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </ChakraProvider>
);
