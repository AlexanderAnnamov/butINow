import type { ParamsSetTask, ParamsCheckTask } from "../types/api";

import axios from "axios";

const KEY = import.meta.env.VITE_APP_KEY_GEN_API;

const neuroApi = axios.create({
    baseURL: 'https://api.gen-api.ru',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${KEY}`
    }
})

export async function setTask(params: ParamsSetTask) {
    try {
        const payload = await neuroApi.post('/api/v1/networks/chat-gpt-3', 
            {messages: [{role: "system",  content: params.content}], response_format: "{\"type\":\"text\"}"})
        return payload; 
    } catch(error) {
        if(axios.isAxiosError(error)) {
            return error
        } else if(error instanceof Error) {
            return error
        }
    }
}

export async function checkTask(params: ParamsCheckTask) {
    try {
        const payload = await neuroApi.get(`/api/v1/request/get/${params.id}`)
        return payload; 
    } catch(error) {
        if(axios.isAxiosError(error)) {
            return error
        } else if(error instanceof Error) {
            return error
        }
    }
}