import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routers.jsx";
import UsersControl from "./usersContext/usersControl.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersControl>
      <RouterProvider router={router} />
    </UsersControl>
  </StrictMode>
);
