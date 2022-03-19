import { Router } from './router/Router';
import { RecoilRoot } from 'recoil';
import { UserProvider } from './provider/UserProvider';
import { ProductProvider } from './provider/ProductProvider';

export const App = () => {
  return (
    <RecoilRoot>
      <UserProvider>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </UserProvider>
    </RecoilRoot>
  );
};
