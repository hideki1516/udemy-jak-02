import { useParams, useLocation } from "react-router-dom";

export const AboutId = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>AboutIdページです</h1>
      <p>あなたの会員番号は {id} です。</p>
      <p>あなたの会員名は {query.get('name')} です。</p>
    </div>
  );
};