import Login from "./components/login/Login";
import Home from "./components/home/Home";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";
import Products from "./components/products/Products";
import Register from "./components/register/Register";
// import Settings from "./components/settings/Settings";
import Protected from "./components/security/protected/Protected";
import UserContainer from "./components/listUsers/UserContainer";
import ProductContainer from "./components/listProducts/ProductContainer";
import CartContainer from "./components/shoppingCart/CartContainer";
import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./services/themeContext/Theme.context";
import OrderContainer from "./components/listOrder/OrderContainer";

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    // {
    //   path: "/settings",
    //   element: (
    //     <Protected>
    //       <Settings />
    //     </Protected>
    //   ),
    // },
    {
      path: "/listUsers",
      element: (
        <Protected>
          <UserContainer />
        </Protected>
      ),
    },
    {
      path: "/listProducts",
      element: (
        <Protected>
          <ProductContainer />
        </Protected>
      ),
    },
    {
      path: "/listOrders",
      element: (
        <Protected>
          <OrderContainer />
        </Protected>
      ),
    },
    {
      path: "/cart",
      element: (
        <Protected>
          <CartContainer />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <div className={`${theme === "dark" && "dark-theme"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
