import { RouteObject } from "react-router-dom";
import Login from "./login";

export const loginRouter: RouteObject[] = [
  {
    path: "/",
    element: <Login />
  }
]