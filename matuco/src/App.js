import Login from "./components/login/Login";
import Home from "./components/home/Home";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";
import Products from "./components/products/Products";
import Register from "./components/register/Register";
import Settings from "./components/settings/Settings";
import Protected from "./components/security/protected/Protected";
import ListProducts from "./components/listProducts/ListProducts";

import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./services/themeContext/Theme.context";

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
      element: (
        <Protected>
          <Products />
        </Protected>
      ),
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/settings",
      element: (
        <Protected>
          <Settings />
        </Protected>
      ),
    },
    {
      path: "/listProducts",
      element: (
        <Protected>
          <ListProducts />
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
