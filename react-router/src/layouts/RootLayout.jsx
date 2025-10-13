import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <h1 className="text-center text-2xl m-2">RootLayout</h1>
      <Outlet></Outlet>
    </div>
  );
}
