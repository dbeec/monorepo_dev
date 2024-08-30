import ProfileMenu from "../avatar-menu";
import "./style.css";

export default function Header() {
  return (
    <>
      <div className="main_header">
        <span>Buenas tardes, Johan D.</span>

        {/* Profile pic */}
        <ProfileMenu />
      </div>
    </>
  );
}
