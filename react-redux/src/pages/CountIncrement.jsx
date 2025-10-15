// 전역 상태 count 증가 로직을 위한 코드
// ...

import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/counterSlice";

export default function CountIncrement() {
  // 전역 상태 count 증가 로직을 위한 코드
  // ...
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);

  function handleIncrement() {
    // 전역 상태 count 증가 로직
    // ...
    dispatch(increment());
  }
  return (
    <div>
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => handleIncrement()}
      >
        전역 상태 count 증가
      </button>
      <div>현재 단위: {step}</div>
    </div>
  );
}
