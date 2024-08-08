import { Center, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import api from '../../api';
import { useQuery } from '@tanstack/react-query';

const MainPage = () => {
    const [idRequest, setIdRequest] = useState<{request_id: string} | null | undefined>()
    const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        api.setTask({content: 'сгенерируй любую интересную шутку'})
    })
    const checkTask = () => {
       api.setTask({content: 'сгенерируй любую интересную шутку'}).then((data) => setIdRequest(data?.data.request_id))
    }
    // useEffect(() => {
    //     setTimeout(() => {
    //         if(idRequest) {
    //           api.checkTask({id: String(idRequest)})
    //         } 
    //     }, 10000)
    // }, [idRequest])

  return (
    <Center bg='black' h='100vh' color='white'>
        <Text zIndex={99} maxWidth={'60vw'} textAlign={'right'} onClick={checkTask} fontSize='3vw'>{'Тапни ка бы я подумал'}</Text>
    </Center>
  )
}

export default MainPage