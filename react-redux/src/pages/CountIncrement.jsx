// 전역 상태 count 증가 로직을 위한 코드
// ...

import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/counterSlice";

export default function CountIncrement() {
  // 전역 상태 count 증가 로직을 위한 코드
  // ...
  const dispatch = useDispatch();
  const step = useSelector((state) => state.counter.step);
  const count = useSelector((state) => state.counter.count);

  function handleIncrement() {
    // 전역 상태 count 증가 로직
    // ...
    dispatch(increment());
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-10">
      <button
        onClick={handleIncrement}
        className="border-2 border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100"
      >
        전역 상태 count 증가
      </button>

      <div className="flex gap-8 text-lg font-bold">
        <div>현재 단위: {step}</div>
        <div>현재 count: {count}</div>
      </div>
    </div>
  );
}
