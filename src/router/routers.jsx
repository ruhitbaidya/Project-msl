import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Faqs from "../pages/Faqs";
import Contact from "../pages/Contact";
import ShowProduct from "../pages/ShowProduct";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Card from "../pages/Card";
import ProductDetails from "../pages/ProductDetails";
import Aboutus from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ShowProduct />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
