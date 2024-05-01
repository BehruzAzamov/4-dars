import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { useSignup } from "./hooks/useSignup";
// Pages
import { Cart, Checkout, HomeLayout, Landing, Orders, Products, SingleProduct, Login, Register, Error, About } from "./pages"

function App() {
  const { signUpWithGoogle, user, error } = useSignup()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: user,
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
          path: "/about",
          element: <About />
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
      element:user ? <Navigate to="/"/> : <Register/>,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />
}

export default App