import { useLocation, useParams } from "react-router-dom";

export const URLParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>URLParameterページです</h1>
      <p>パラメータは　{id}　です</p>
      <p>クエリパラメータは　{query.get("name")}　です</p>
    </div>
  );
};
