import Tov from './presets'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [Tov()],
	server: {
    host: '0.0.0.0', // 允许外部访问
    port: 3000, // 你可以指定一个端口
  },
})
