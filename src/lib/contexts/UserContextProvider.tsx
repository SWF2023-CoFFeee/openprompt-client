import { createContext } from 'react';
import { useUserContext } from '../hooks/useUserContext ';

interface IUserContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UserContext = createContext(
  {} as ReturnType<typeof useUserContext>,
);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  return (
    <UserContext.Provider value={useUserContext()}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
