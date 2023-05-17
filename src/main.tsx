import { ChakraProvider, theme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import Router from './Router';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root')!;
// if (!rootElement) throw new Error('Failed to find the root element');
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider theme={theme}>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </ChakraProvider>
);
