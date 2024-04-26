import { Dispatch, SetStateAction, createContext } from 'react';

interface InputContext {
  hasError: boolean;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

export const InputContext = createContext<InputContext | undefined>(undefined);
