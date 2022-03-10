import { useParams } from "react-router-dom";

export const AboutId = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>AboutIdページです</h1>
      <p>あなたの会員番号は {id} です。</p>
    </div>
  );
};