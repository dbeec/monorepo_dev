import ProfileMenu from "../avatar-menu";
import "./style.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <>
      <div className="main_header">
        <div className="data_header">
          <div className="icon_header" onClick={toggleSidebar}>
            <MenuOpenIcon />
          </div>
          <span>Buenas tardes, Johan D.</span>
        </div>

        {/* Profile pic */}
        <div className="avatar">
          <ProfileMenu />
        </div>
      </div>
    </>
  );
}
