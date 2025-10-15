// 전역 상태 step 변경 로직을 위한 코드
// ...

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStep } from "../store/counterSlice";

export default function StepSet() {
  // 전역 상태 step 변경 로직을 위한 코드
  // ...
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  function handleSetStep(step) {
    // 전역 상태 step 변경 로직
    // ...
    dispatch(setStep(step));
  }

  return (
    <div>
      <div className="flex gap-4 justify-center mt-10">
        <button
          className="border-2 border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100"
          onClick={() => handleSetStep(1)}
        >
          단위 1
        </button>
        <button
          className="border-2 border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100"
          onClick={() => handleSetStep(5)}
        >
          단위 5
        </button>
        <button
          className="border-2 border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100"
          onClick={() => handleSetStep(10)}
        >
          단위 10
        </button>
      </div>
      <div className="mt-8 flex justify-center font-bold text-lg">
        <div>현재 단위: {step}</div>
      </div>
    </div>
  );
}
