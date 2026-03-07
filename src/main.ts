// Imports
import { createSSRApp } from 'vue';

// Data
import App from './App.vue';

// Style
import '@/styles/index.scss';

// plugins
import { pinia, setupPinia } from '@/plugins/pinia';

// stores
import { useAppStore } from '@/stores/app';

export function createApp() {
  const app = createSSRApp(App);

  setupPinia(app);

  const store = useAppStore();

  // Subscribe store change
  store.$subscribe(() => {
    // Listening store change, and to save or update data
    store.save();
  })

  return {
    app,
    pinia,
  };
}
