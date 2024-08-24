import { createBrowserRouter } from "react-router-dom";
import { adminRoute } from "../ui/admin/page/routes";
import { loginRouter } from "../ui/login";

export const route = createBrowserRouter([...adminRoute, ...loginRouter]);
