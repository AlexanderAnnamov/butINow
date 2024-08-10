interface ImportMetaEnv {
    readonly VITE_APP_KEY_GEN_API: string;
    readonly VITE_APP_CLIENT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }