// import React, { useContext, memo } from 'react';
import React, { memo } from 'react';
import styled from "styled-components";
// import { UserContext } from '../../../provider/UserProvider';
import { useRecoilValue } from 'recoil'; // 値を参照するだけのRecoil
import { userState } from "../../../store/userState";

// memoで再レンダリングを防ぐ
export const UserIconWithName = memo((props) => {
  console.log('UserIconWithName');
  const { image, name } = props;

  // 引数に参照するコンテキストを指定する
  // const { userInfo } = useContext(UserContext);

  // Recoil
  const userInfo = useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {/* isAdminがtrueなら編集、falseなら何も表示されない */}
      {/* 右側の値がtrueなら左の値を返す */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;