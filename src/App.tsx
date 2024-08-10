import { useDisclosure } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/main-page/MainPage';
import Layout from './components/layout/Layout';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
          <Routes>
            <Route path='/' element={<Layout isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>}>
                <Route path='/' element={ <MainPage/>} />
            </Route>
          </Routes>
        )
}

export default App;