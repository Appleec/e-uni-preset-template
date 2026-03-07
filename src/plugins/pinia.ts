// Imports
import { createPinia, type Pinia } from 'pinia';

// Type
import type { App } from 'vue';

export const pinia: Pinia = createPinia();

// Setup Pinia
// https://pinia.esm.dev/
export const setupPinia = (app: App<Element>) => {
  app.use(pinia);
}
