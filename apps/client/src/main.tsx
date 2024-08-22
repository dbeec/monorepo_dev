import { createRoot } from "react-dom/client";
import Login from "./ui/login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={route} />
  </>
);
