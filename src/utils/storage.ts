/**
 * localStorage
 */
export const storage = {
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  get<T>(key: string) {
    const value = window.localStorage.getItem(key)
    if (value && value != 'undefined' && value != 'null') {
      return <T>JSON.parse(value);
    }
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  }
};

export const sessionStorage = {
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  get<T>(key: string) {
    const value = window.sessionStorage.getItem(key);
    if (value && value != 'undefined' && value != 'null') {
      return JSON.parse(value)
    }
    return null;
  },
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  }
};
