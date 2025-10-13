import { useNavigate } from "react-router-dom";
import CartsList from "../../components/CartsList";

export default function Carts() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="m-4 p-2 border"
      >
        홈 페이지로 이동
      </button>
      <CartsList></CartsList>
    </div>
  );
}
