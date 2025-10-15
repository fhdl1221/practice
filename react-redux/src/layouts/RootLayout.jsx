import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div className="flex border-2 border-gray-300 gap-8 p-4 justify-center">
        <Link to="/count-increment" className="hover:text-gray-400">
          카운터 증가
        </Link>
        <Link to="/count-decrement" className="hover:text-gray-400">
          카운터 감소
        </Link>
        <Link to="/count-view" className="hover:text-gray-400">
          카운터 조회
        </Link>
        <Link to="/step-set" className="hover:text-gray-400">
          단위 설정
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
