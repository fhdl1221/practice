import { Outlet } from "react-router-dom";

export default function DummyLayout() {
  return (
    <div>
      <h1 className="text-center text-2xl m-2">Dummy Page</h1>
      <Outlet></Outlet>
    </div>
  );
}
