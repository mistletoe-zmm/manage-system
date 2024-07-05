import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
function resolve(dir: string): string {
  return join(__dirname, dir); //可以用process.cwd() path.join()和path.resolve()
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('/src/'),
      '#': resolve('/types')
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
