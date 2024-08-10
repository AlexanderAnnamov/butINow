import { Box, Grid, GridItem, Input } from '@chakra-ui/react'
import UserMenuItem from '../../components/sections/user-menu-item/UserMenuItem'
import MessageChatItem from '../../components/sections/message-chat-item/MessageChatIetm'
import { useState } from 'react'

function checkEmptyOrSpacesOnly(str: string) {
  if (!str) return true;
  str = str.trim();
  return !str;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [text, setText] = useState('')

  const handleKeyEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if( event.key === 'Enter' && !checkEmptyOrSpacesOnly(text)){
      setMessages([...messages, text])
      setText('')
    }
    
  };
  return (
    <Grid bg='black' h='100vh' templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)'>
      <GridItem overflow='auto' colSpan={1} p='3px 0' bg='#1f1f1f'>
        <Box width='100%' p='0 3px'>
          <Input h={8}  fontSize={12} p={2} borderColor='#4a4a4a' color='white' focusBorderColor='#4FD1C5'
               placeholder='Поиск' />
        </Box>
        <Box p='2px 0' display='flex' flexDirection='column' rowGap={2} gap={2} w='100%'>
          <UserMenuItem/>
          <UserMenuItem/>
        </Box>
      </GridItem>
      <GridItem bg='black' display='flex' flexDirection='column' alignItems='end' padding={1} colSpan={4}>
        <Box p='5px 1px' display='flex' flexDirection='column' justifyContent='flex-end' alignItems='flex-end'
             height='100%' width='100%' gap={1} overflow='hidden'>
              {messages?.map((item) => <MessageChatItem message={item}/>)}
        </Box>
        <Input value={text} onChange={e => setText(e.target.value)} _hover={{ borderColor: '#4FD1C5'}}
               fontSize={14} p={3} color='white' onKeyPress={(handleKeyEnterPress)} focusBorderColor='#4FD1C5'
               placeholder='Сообщение' />
      </GridItem>
    </Grid>
  )
}

export default ChatPage