import { Router } from './router/Router';
import { UserProvider } from './provider/UserProvider';

const product = {
  image: 'https://source.unsplash.com/lbEL705stOw',
  category: 'アクセサリー',
  name: 'アクセサリーA',
  detail: '商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。商品の説明。',
  price: 1000
};

export const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
