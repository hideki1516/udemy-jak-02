import React, { useState } from "react";
import styled from "styled-components";
import { ProductImageWithCategory } from "../../molecules/product/ProductImageWithCategory";


export const Product = (props) => {
  const { product } = props;
  const [ sum, setSum ] = useState(product.price);

  const onClickAdd = () => {
    setSum((prev) => prev + product.price);
  };

  const onClickRemove = () => {
    setSum((prev) => prev - product.price);
  };
  
  return (
    <SProductWrapper>
      <ProductImageWithCategory />
      <SDl>
        <dt>{product.name}</dt>
        <dd className="detail">{product.detail}</dd>
        <dd className="price">{product.price}円（税込）</dd>
      </SDl>
      <SProductSum>
        <SProductSumWrapper>          
          <p>買い物カゴに入れる</p>
          <button onClick={onClickAdd}>+</button>
          <button onClick={onClickRemove}>−</button>
        </SProductSumWrapper>
        <p className="sum">合計金額：{sum}円</p>
      </SProductSum>
      <SButton>詳細を見る</SButton>
    </SProductWrapper>
  );
};

const SProductWrapper = styled.div`
  width: 320px;
  border: 1px solid #333;
  background-color: #fff;
  padding: 10px;
`;

const SDl = styled.dl`
  margin-top: 10px;

  dt {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px dotted #333;
  }

  .detail {
    font-size: 14px;
    margin: 10px 0;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    text-align: right;
  }
`;

const SProductSum = styled.div`
  border-top: 1px dotted #333;
  padding: 10px 0;

  p {
    font-size: 14px;
    margin: 0;
  }
  .sum {
    font-weight: bold;
    margin-top: 5px;
  }
`;

const SProductSumWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 5px;
    padding: 0;
    width: 20px;
    height: 20px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const SButton = styled.button`
  width: 100%;
  padding: 8px 0;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
`;