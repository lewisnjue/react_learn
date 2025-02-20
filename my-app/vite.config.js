import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts: ['5173-lewisnjue-reactlearn-63ovyc74zez.ws-eu117.gitpod.io']
  }
})
