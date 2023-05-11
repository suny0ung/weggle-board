// import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import BoardPage from './page/BoardPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <BoardPage />
    </ChakraProvider>
  );
}

export default App;
