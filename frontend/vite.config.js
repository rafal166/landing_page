import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [vue()],
        root: 'src',
        envDir: '../',
        build: {
            outDir: '../dist'
        },
        server: {
            host: true,
            port: 8000,
            watch: {
                usePolling: true
            }
        }
    }
})
