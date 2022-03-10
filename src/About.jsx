import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <h1>Aboutページです</h1>
      <Link to='/about/corporate'>Corporate</Link>
      <br />
      <Link to='/about/access'>Access</Link>
    </div>
  );
};