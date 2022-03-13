import styled from "styled-components";

export const Card = (props) => {

  // Cardの中身をprops（children）として受け取る
  const { children } = props;

  return (
    <SCard>{children}</SCard>
  );
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px; // 色 X軸の距離 Y軸の距離 ぼかし ぼかしの広さ
  border-radius: 8px;
  padding: 16px
`;