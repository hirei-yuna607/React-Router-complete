import { Link } from "react-router-dom";

export const NotPage = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">戻る</Link>
    </div>
  );
};
