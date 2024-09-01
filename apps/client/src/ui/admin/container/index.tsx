import { useState } from "react";
import Header from "../../../components/header";
import OutletModule from "../../../components/outlet";
import Sidebar from "../../../components/sidebar";
import "./styles.css";

export default function Admin() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <>
      <div className="main_admin">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div className="content_header">
          <Header toggleSidebar={toggleSidebar} />
          <div className="outlet_properties">
            <OutletModule />
          </div>
        </div>
      </div>
    </>
  );
}
