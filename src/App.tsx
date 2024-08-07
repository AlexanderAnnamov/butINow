import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/main-page/MainPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <MainPage/>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App;