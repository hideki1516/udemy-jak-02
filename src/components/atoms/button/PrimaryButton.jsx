
// PrimaryButton＝各所で使いまわせるCSSの雛形のようなものをつくる

import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  // 変更する部分をpropsで渡す
  // children = 親から要素を持ってくる
  const { children } = props;
  return (
    <SButton>{children}</SButton>
  );
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;