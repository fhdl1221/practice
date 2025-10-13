import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Carts from "../pages/Carts";
import Posts from "../pages/Posts";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/dummy/carts",
    Component: Carts,
  },
  {
    path: "/dummy/posts",
    Component: Posts,
  },
  {
    path: "/dummy/products",
    Component: Products,
  },
]);

export default router;
