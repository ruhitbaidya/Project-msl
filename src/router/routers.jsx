import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import App from "../App";
import Faqs from "../pages/Faqs";
import Contact from "../pages/Contact";
import ShowProduct from "../pages/ShowProduct";
import PageNotFound from "../pages/PageNotFound";

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
        element: <AboutUs />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
