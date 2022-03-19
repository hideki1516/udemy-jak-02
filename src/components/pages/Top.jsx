import React, { useContext } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { UserContext } from '../../provider/UserProvider';
import { ProductContext } from '../../provider/ProductProvider';

export const Top = () => {
  const history = useHistory();

  const { setUserInfo } = useContext(UserContext);
  const { setProductUserInfo } = useContext(ProductContext);

  // 管理者ユーザーならstateのisAdmin:trueを渡す
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };
  // 一般ユーザーならstateのisAdmin:falseを渡す
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };

  const onClickProductAdmin = () => {
    setProductUserInfo({ isAdmin: true });
    history.push('/products');
  };

  const onClickProductGeneral = () => {
    setProductUserInfo({ isAdmin: false });
    history.push('/products');
  };


  return (
    <SContainer>
      <h2>TOPページ</h2>
      <h3>USER</h3>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <h3>PRODUCT</h3>
      <SecondaryButton onClick={onClickProductAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickProductGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;