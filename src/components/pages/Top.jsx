import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from '../atoms/button/SecondaryButton'

export const Top = () => {
  const history = useHistory();

  // 管理者ユーザーならstateのisAdmin:trueを渡す
  const onClickAdmin = () => history.push({ pathname: '/users', state: { isAdmin: true}});
  // 一般ユーザーならstateのisAdmin:falseを渡す
  const onClickGeneral = () => history.push({ pathname: '/users', state: { isAdmin: false}});


  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;