import { Link, useHistory } from 'react-router-dom';

export const About = () => {
  const message = 'Corporateページです';

  const history = useHistory();
  const onClickCorporate = () => {
    history.push('/about/corporate');
  };

  return (
    <div>
      <h1>Aboutページです</h1>
      <Link to={{pathname: '/about/corporate', state: message}}>Corporate</Link>
      <br />
      <Link to={{pathname: '/about/access'}}>Access</Link>
      <br />
      <Link to={{pathname: '/about/about-id/999?name=hagehage'}}>AboutId</Link>
      <br />
      <button onClick={onClickCorporate}>Corporate</button>
    </div>
  );
};