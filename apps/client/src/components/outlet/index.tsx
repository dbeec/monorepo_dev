import { Outlet } from "react-router-dom";

export default function OutletModule() {
  return (
    <>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}
