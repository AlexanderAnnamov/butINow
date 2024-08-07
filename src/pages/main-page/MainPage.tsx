import { Center, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const KEY = import.meta.env.VITE_APP_KEY_GEN_API;

const MainPage = () => {
    const [statusRequest, setStatusRequest] = useState<{request_id: string} | null | undefined>()
    const [textMessage, setTextMessage] = useState<string | null>()
    const checkTask = () => {
        fetch("https://api.gen-api.ru/api/v1/networks/chat-gpt-3", { method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${KEY}`
            },
            body: JSON.stringify({messages: [{role: "system", content: 'сгенерируй любую интересную шутку'}], response_format: "{\"type\":\"text\"}"})
          })
        .then(response => response.json())
        .then(data => setStatusRequest(data))
        .catch(error => console.error("Ошибка:", error));
    }
    useEffect(() => {
        setTimeout(() => {
            if(statusRequest?.request_id) {
                fetch(`https://api.gen-api.ru/api/v1/request/get/${statusRequest?.request_id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${KEY}`
                    },
                  }).then(response => response.json()).then((data) => {
                    if(data.status === 'success') {
                        setTextMessage(data.result[0])
                    }
                  })
            } 
        }, 4000)
    }, [statusRequest])

  return (
    <Center bg='black' h='100vh' color='white'>
        <Text zIndex={99} maxWidth={'60vw'} textAlign={'right'} onClick={checkTask} fontSize='3vw'>{textMessage || 'Тапни ка бы я подумал'}</Text>
    </Center>
  )
}

export default MainPage