import { Badge, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface IMessageChatItem {
    message: string
}

const MessageChatItem: FC<IMessageChatItem> = ({message}) => {
  return (
    <Badge p='3px 5px' borderRadius={10} bg='#4A5568' maxWidth={'30%'} whiteSpace='none'>
        <Text textTransform='none' fontWeight={400} color='white' >
        {message}
        </Text>
    </Badge>
  )
}

export default MessageChatItem