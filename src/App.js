import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { Product } from './components/organisms/product/Product';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';

// 子コンポーネントに渡すpropsを設定
const user = {
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  name: 'じゃけえ',
  email: '12345@gmail.com',
  phone: '090-1111-2222',
  company: {
    name: 'テスト株式会社'
  },
  website: 'https://gogole.com'
};

const product = {
  image: 'https://source.unsplash.com/lbEL705stOw',
  category: 'アクセサリー',
  name: 'アクセサリーA',
  detail: '商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。',
  price: 1000
};

function App() {
  return (
    <BrowserRouter>
    <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
        <br />
        <br />
        {/* <Product product={product} /> */}
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
