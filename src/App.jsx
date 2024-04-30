import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Pages
import { Cart, Checkout, HomeLayout, Landing, Orders, Products, SingleProduct, Login, Register, Error,About } from "./pages"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <SingleProduct />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />
}

export default App