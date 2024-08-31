import Header from "../../../components/header";
import OutletModule from "../../../components/outlet";
// import Sidebar from "../../../components/sidebar";
import SidebarTest from "../../../components/sidebar/sidebar2";
import "./styles.css";

export default function Admin() {
  return (
    <>
      <div className="main_admin">
        {/* <Sidebar /> */}
        <div className="content_sidebar">
          <SidebarTest />
        </div>
        <div className="content_header">
          <Header />
          <div className="outlet_properties">
            <OutletModule />
          </div>
        </div>
      </div>
    </>
  );
}
