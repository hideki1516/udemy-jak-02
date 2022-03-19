import React, { useContext } from "react";
import styled from "styled-components";
import { ProductImageWithCategory } from "../../molecules/product/ProductImageWithCategory";
import { ProductSum } from "../../molecules/product/ProductSum";
import { ProductContext } from '../../../provider/ProductProvider';

export const Product = (props) => {
  const { product } = props;
  const { productUserInfo } = useContext(ProductContext);
  const isAdmin = productUserInfo ? productUserInfo.Admin : false;
  console.log(isAdmin);
  
  return (
    <SProductWrapper>
      <ProductImageWithCategory />
      <SDl>
        <dt>{product.name}</dt>
        <dd className="detail">{product.detail}</dd>
        <dd className="price">{product.price}円（税込）</dd>
      </SDl>
      {isAdmin ? ( <ProductSum product={product} /> ) : false}
      <SButton>詳細を見る</SButton>
    </SProductWrapper>
  );
};

const SProductWrapper = styled.div`
  width: 320px;
  border: 1px solid #333;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
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

const SButton = styled.button`
  width: 100%;
  padding: 8px 0;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
`;