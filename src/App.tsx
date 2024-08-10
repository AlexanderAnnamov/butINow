import { useDisclosure } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/main-page/MainPage';
import Layout from './components/layout/Layout';
import ChatPage from './pages/chat-page/ChatPage';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
          <Routes>
            <Route path='/' element={<Layout isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>}>
                <Route path='/' element={ <MainPage/>} />
                <Route path='/chat' element={ <ChatPage/>} />
            </Route>
          </Routes>
        )
}

export default App;