import styled from "styled-components";
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

export const Users = () => {  
  // 0〜9の値を持った10件を生成する
  const users = [...Array(10).keys()].map(((val) => {
    return {
      // 子コンポーネントに渡すpropsを設定
      id: val,
      name: `じゃけえ-${val}`,
      image: 'https://source.unsplash.com/NE0XGVKTmcA',
      email: '12345@gmail.com',
      phone: '090-1111-2222',
      company: {
        name: 'テスト株式会社'
      },
      website: 'https://gogole.com'
    };
  }));

  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>Usersページ</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;