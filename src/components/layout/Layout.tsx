import { Button,
         Drawer,
         DrawerBody,
         DrawerCloseButton, 
         DrawerContent,
         DrawerFooter,
         DrawerHeader,
         DrawerOverlay,
         } from '@chakra-ui/react';
import { HamburgerIcon, ChatIcon, SettingsIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
interface ILayout {
    isOpen: boolean;
    onClose: () => void
    onOpen: () => void
}

const Layout: React.FC<ILayout> = ({isOpen, onClose, onOpen}) => {
  return (
    <>
     <Button right={2} top={2} size='sm' position='absolute' colorScheme='teal' onClick={onOpen}>
     <HamburgerIcon/>
      </Button>
     <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent padding={0}>
          <DrawerCloseButton />
          <DrawerHeader padding='6px 20px'>Меню</DrawerHeader>
          <DrawerBody padding='6px 20px' display='flex' flexDirection='column'>
          <ChakraLink as={ReactRouterLink} to='/'><ChatIcon marginRight={2}/>Чат</ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/'><SettingsIcon marginRight={2}/>Параметры</ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/'><InfoOutlineIcon marginRight={2}/>О приложении</ChakraLink>
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    <Outlet/>
    </>
  )
}

export default Layout