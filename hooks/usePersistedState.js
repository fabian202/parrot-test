import { useState, useEffect } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState();

  useEffect(() => {
    const persistedState = reactLocalStorage.get(key);
    setState(persistedState ? JSON.parse(persistedState) : defaultValue);
  }, []);

  useEffect(() => {
    reactLocalStorage.set(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
