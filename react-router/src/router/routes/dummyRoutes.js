import PATHS from "../../constants/paths";
import DummyLayout from "../../layouts/DummyLayout";
import Carts from "../../pages/DummyPages/Carts";
import PostDetail from "../../pages/DummyPages/PostDetail";
import Posts from "../../pages/DummyPages/Posts";
import ProductDetail from "../../pages/DummyPages/ProductDetail";
import Products from "../../pages/DummyPages/Products";

const dummyRoutes = [
  {
    path: PATHS.DUMMY.INDEX,
    Component: DummyLayout,
    children: [
      {
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
      {
        path: PATHS.DUMMY.CARTS,
        Component: Carts,
      },
      {
        path: PATHS.DUMMY.POSTS,
        Component: Posts,
      },
      {
        path: PATHS.DUMMY.POST_DETAIL,
        Component: PostDetail,
      },
      {
        path: PATHS.DUMMY.PRODUCT_DETAIL,
        Component: ProductDetail,
      },
    ],
  },
];

export default dummyRoutes;
