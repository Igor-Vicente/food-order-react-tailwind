import { createContext, useState } from 'react';

export const UserProgressContext = createContext({
  progress: '', //cart, checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [useProgress, setUserProgress] = useState('');

  const showCart = () => {
    setUserProgress('cart');
  };
  const hideCart = () => {
    setUserProgress('');
  };
  const showCheckout = () => {
    setUserProgress('checkout');
  };
  const hideCheckout = () => {
    setUserProgress('');
  };

  const userProgressCtx = {
    progress: useProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
  );
};
