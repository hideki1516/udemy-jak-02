import React, { useState } from "react";
import styled from "styled-components";

export const ProductSum = (props) => {
  const { product } = props;
  const [ sum, setSum ] = useState(product.price);

  const onClickAdd = () => {
    setSum((prev) => prev + product.price);
  };

  const onClickRemove = () => {
    setSum((prev) => prev - product.price);
  };

  return (
    <SProductSum>
      <SProductSumWrapper>          
        <p>買い物カゴに入れる</p>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickRemove}>−</button>
      </SProductSumWrapper>
      <p className="sum">合計金額：{sum}円</p>
    </SProductSum>
  );
};

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