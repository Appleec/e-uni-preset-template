// Imports
import { defineStore } from 'pinia';
import { reactive, toRefs, computed } from 'vue';

// Utils
import { merge } from '@elinzy/utils';
import { storage } from '@/utils/storage';
import { IN_BROWSER } from '@/utils/globals';

// API

// Type
interface AppState {
  v?: number;
  theme?: string;
  token?: string;
  refreshToken?: string;
  user?: Record<string, any>;
}

export const useAppStore = defineStore('app', () => {
  const state = reactive<AppState>({
    v: 1,
    theme: 'blue',
    token: '',
    refreshToken: '',
    user: {},
  });

  load();

  // Ready
  function ready() {
    return new Promise((resolve, reject) => {
      resolve(void 0);
    });
  }

  // Load
  function load() {
    if (!IN_BROWSER) return;

    const stored = storage.get('app@');
    const data = stored ? stored : {};

    Object.assign(state, merge(state, data));
  }

  // Save
  function save() {
    if (!IN_BROWSER) return;

    const _storage = {};

    for (const key in state) {
      if ([''].includes(key)) continue;
      // @ts-ignore
      _storage[key] = state[key];
    }

    storage.set('app@', _storage);
  }

  // Update
  function update() {
    if (!IN_BROWSER) return;

    const _storage = {};

    for (const key in state) {
      if ([''].includes(key)) continue;
      // @ts-ignore
      _storage[key] = state[key];
    }

    storage.set('app@', _storage);
  }

  // Custom update
  function customUpdate(data?: Record<string, any>) {
    if (!data) return;

    Object.assign(state, merge(state, data));

    storage.set('app@', state);
  }

  // Remove
  function remove() {
    storage.remove('app@');
  }

  return {
    // state
    ...toRefs(state),

    // getters

    // actions
    ready,
    remove,
    customUpdate,
    update,
    save,
    load,
  }
})
