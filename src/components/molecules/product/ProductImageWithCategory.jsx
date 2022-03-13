import styled from "styled-components";

export const ProductImageWithCategory = () => {
  return (
    <SImageWrapper>
      <SImg src='https://source.unsplash.com/lbEL705stOw' />
      <SCategory>カテゴリー</SCategory>
    </SImageWrapper>
  );
};

const SImageWrapper = styled.div`
  position: relative;
`;

const SImg = styled.img`
  width: 100%;
`;

const SCategory = styled.p`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 8px;
  background-color: #fff;
  margin: 0;
  font-size: 14px;
`;