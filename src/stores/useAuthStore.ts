import { create } from "zustand";

interface AuthState {
    isAuth: boolean;
    setAuth: (status: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuth: false,
    setAuth: (status: boolean) => set(() => ({ isAuth: status })),
}))