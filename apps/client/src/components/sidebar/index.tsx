import { Link } from "react-router-dom";
import "./style.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const isToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="main_sidebar">
        <div className="logo_sidebar">
          <h1>¡Logo here!</h1>
        </div>

        <div className="list_sidebar">
          <li className="content_li" onClick={isToggle}>
            <div className="content_options">
              <div className="redirect">
                <DashboardIcon />
                Dashboard
              </div>

              <div className="expanded_icon">
                <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
              </div>
            </div>
            {expanded && (
              <div className="hover">
                <Link to="/dashboard">Numero 1</Link>
              </div>
            )}
          </li>
        </div>
      </div>
    </>
  );
}
