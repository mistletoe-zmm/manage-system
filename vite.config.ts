import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
function _resolve(dir: string): string {
  return resolve(__dirname, dir); //可以用process.cwd() path.join()和path.resolve()
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': _resolve('src'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 这里可以配置 Less 的选项
      }
    }
  }
});
