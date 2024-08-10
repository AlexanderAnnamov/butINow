import { Avatar,  Badge,  Box, Flex, Text} from '@chakra-ui/react'

const UserMenuItem = () => {
  return (
    <Flex position='relative' p='0 2px' align='center' _hover={{backgroundColor: '#2C7A7B', cursor: 'pointer'}}>
      <Avatar size='sm' src='https://bit.ly/sage-adebayo' />
      <Box ml='3' >
        <Text fontSize='xs'  color='white'>Segun Adebayo</Text>
        <Text color='#CBD5E0' fontSize='xs'>UI Engineer</Text>
        <Badge fontSize={8} borderRadius='50%' position='absolute' right={1} bottom={1} ml='1' colorScheme='gray'>
        4
      </Badge>
      </Box>
    </Flex>
  )
}

export default UserMenuItem