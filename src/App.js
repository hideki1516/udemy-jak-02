import { Router } from './router/Router';
import { UserProvider } from './provider/UserProvider';
import { ProductProvider } from './provider/ProductProvider';

export const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </UserProvider>
  );
};
