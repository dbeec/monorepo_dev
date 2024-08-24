import { RouteObject } from "react-router-dom";
import Admin from "../../container";
import ErrorPage from "../../../../error-page";
import AdminContent from "../../container/outlet/dashboard";

export const adminRouter: RouteObject = {
  element: <Admin />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/dashboard",
      index: true,
      element: <AdminContent />,
    },
  ],
};
