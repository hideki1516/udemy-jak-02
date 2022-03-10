import { useLocation } from "react-router-dom";

export const Corporate = () => {
  const { state } = useLocation();
  console.log(state);
  
  return (
    <div>
      <h1>Corporateページです</h1>
    </div>
  );
};