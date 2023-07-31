import { useState } from 'react';
import {
  ACCESS_TOKEN_KEY,
  ADDR_TOKEN_KEY,
  BALANCE_TOKEN_KEY,
} from '@/constants/token';
import token from '@/lib/token';

export const useUserContext = () => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));
  const [userAddr, setUserAddr] = useState(token.getToken(ADDR_TOKEN_KEY));
  const [userBalance, setUserBalance] = useState(
    token.getToken(BALANCE_TOKEN_KEY) || 0,
  );

  return {
    isLogin,
    setIsLogin,
    userAddr,
    setUserAddr,
    userBalance,
    setUserBalance,
  };
};
