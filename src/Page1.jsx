import { Link } from 'react-router-dom';

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: '/page1/detailA', state: arr }}>Page1DetailA</Link>
      <br />
      <Link to={{ pathname: '/page1/detailB'}}>Page1DetailB</Link>
    </div>
  );
};