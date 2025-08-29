/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

export interface AppState {
  // Placeholder for global application state
  _placeholder?: never;
}

const StateContext = createContext<AppState | undefined>(undefined);

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state] = useState<AppState>({});
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export const useAppState = (): AppState => {
  const ctx = useContext(StateContext);
  if (!ctx) {
    throw new Error('useAppState must be used within a StateProvider');
  }
  return ctx;
};
