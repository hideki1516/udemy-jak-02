import React, { createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // 今回はテストのために固定値を指定
  // 本来はstateを指定して使用する
  const contextName = 'じゃけぇ';

  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};