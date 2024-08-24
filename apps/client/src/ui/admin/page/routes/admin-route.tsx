import { RouteObject } from "react-router-dom";
import Admin from "../../container";
import ErrorPage from "../../../../error-page";

export const adminRouter: RouteObject = {
  path: "/admin",
  element: <Admin />,
  errorElement: <ErrorPage />,
};
