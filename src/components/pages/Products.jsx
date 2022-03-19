import React from "react";
import { Product } from '../organisms/product/Product';
import styled from "styled-components";

export const Products = () => {
  const products = [...Array(6).keys()].map(((val) => {
    return {
      id: val,
      image: 'https://source.unsplash.com/lbEL705stOw',
      category: 'アクセサリー',
      name: 'アクセサリーA',
      detail: '商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。',
      price: 1000
    };
  }));

  return (
    <SContainer>
      <SUserArea>        
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding; 24px
`;

const SUserArea = styled.div`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

