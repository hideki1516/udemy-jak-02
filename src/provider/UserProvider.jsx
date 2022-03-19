import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    // valueに設定することで
    // 配下のコンポーネントからuserInfo・setUserInfoを参照・更新できる
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};