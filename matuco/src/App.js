import Login from "./components/login/Login";
import Home from "./components/home/Home";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";
import Products from "./components/products/Products";

import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

function App() {
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
      element: <Products/>,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
