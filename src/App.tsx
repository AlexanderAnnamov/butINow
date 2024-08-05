import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/main-page/MainPage';

function App() {
  return (
    <ChakraProvider>
      <MainPage/>
    </ChakraProvider>
  )
}

export default App;