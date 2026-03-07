// Imports
import { createSSRApp } from 'vue';

// Data
import App from './App.vue';

// Style
import '@/styles/index.scss';

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
