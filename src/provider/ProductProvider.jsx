import { createContext, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = (props) => {
  const { children } = props;
  const [ productUserInfo, setProductUserInfo ] = useState({});

  return (
    <ProductContext.Provider value={{ productUserInfo, setProductUserInfo }}>
      {children}
    </ProductContext.Provider>
  );
};