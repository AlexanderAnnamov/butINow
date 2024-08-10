import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, Link as ChakraLink,
         DrawerFooter, DrawerHeader, DrawerOverlay, Tooltip } from '@chakra-ui/react';
import { HamburgerIcon, ChatIcon, SettingsIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink, Outlet } from 'react-router-dom'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useAuthStore } from '../../stores/useAuthStore';

interface ILayout {
    isOpen: boolean;
    onClose: () => void
    onOpen: () => void
}

const Layout: React.FC<ILayout> = ({isOpen, onClose, onOpen}) => {
  const { isAuth, setAuth } = useAuthStore()
  const onSuccess = (credentialResponse: CredentialResponse) => {
    const { clientId } = credentialResponse;
    if (clientId) setAuth(true)
  }

  const onError = () => {
    setAuth(false)
    console.log('failed')
  }

  return (
    <>
      <Button right={2} top={2} size='sm' position='absolute' colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon/>
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent padding={0}>
          <DrawerCloseButton />
          <DrawerHeader padding='6px 20px'>Меню</DrawerHeader>
          <DrawerBody padding='6px 20px' display='flex' flexDirection='column'>
            <Tooltip isDisabled={isAuth} label='Вы не авторизованы!' placement='right'>
              <ChakraLink color={isAuth ? '' : '#c4c4c4'} cursor={isAuth ? 'pointer' : 'default'} width='20%' as={ReactRouterLink} to='/'><ChatIcon marginRight={2}/>Чат</ChakraLink>
            </Tooltip>
            <ChakraLink as={ReactRouterLink} to='/'><SettingsIcon marginRight={2}/>Параметры</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/'><InfoOutlineIcon marginRight={2}/>О приложении</ChakraLink>
          </DrawerBody>
          <DrawerFooter display='flex' justifyContent='center'>
            <GoogleLogin onSuccess={onSuccess} onError={onError}/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Outlet/>
    </>
  )
}

export default Layout