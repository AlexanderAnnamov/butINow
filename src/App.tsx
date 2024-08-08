import * as React from 'react'

import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import MainPage from './pages/main-page/MainPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
const queryClient = new QueryClient();

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>}>
              <Route path='/' element={ <MainPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App;