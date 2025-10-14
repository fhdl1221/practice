const PATHS = {
  // ROOT Layout의 중첩된 경로
  ROOT: {
    // Root Layout의 기본(진입) 경로
    INDEX: "/",
  },
  // DummyLayout의 중첩된 경로
  DUMMY: {
    INDEX: "/dummy",
    PRODUCTS: "/dummy/products",
    CARTS: "/dummy/carts",
    POSTS: "/dummy/posts",
    POST_DETAIL: "/dummy/posts/:postId",
    getPostDetail: (postId) => `/dummy/posts/${postId}`,
    PRODUCT_DETAIL: "/dummy/products/:productId",
    getProductDetail: (productId) => `/dummy/products/${productId}`,
  },
};

export default PATHS;
