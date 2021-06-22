import { createContext } from 'react';

export const AuthContext = createContext({ storedUserToken: {}, setStoredUserToken: () => {} });
