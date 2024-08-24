import { createBrowserRouter } from "react-router-dom";
import { adminRoute } from "../ui/admin/page/routes";

export const route = createBrowserRouter([
  ...adminRoute,
])