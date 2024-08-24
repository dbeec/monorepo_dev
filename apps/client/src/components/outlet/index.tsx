import { Outlet } from "react-router-dom";

export default function OutletPage() {
  return (
    <>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}
