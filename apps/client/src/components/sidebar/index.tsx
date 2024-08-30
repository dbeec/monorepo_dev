import { Link } from "react-router-dom";
import "./style.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
            <div className="module">
              <div className="redirect">
                <DashboardIcon />
                Dashboard
              </div>

              <div className="expanded_icon">
                {expanded ? (
                  <RemoveIcon style={{ fontSize: "1rem" }} />
                ) : (
                  <AddIcon style={{ fontSize: "1rem" }} />
                )}
              </div>
            </div>
            <div className={`options ${expanded ? "expanded" : ""}`}>
              <Link to="/dashboard" className="prueba">
                Lista de usuarios
              </Link>
              <Link to="/dashboard" className="prueba">
                Registro de usuarios
              </Link>
              <Link to="/dashboard" className="prueba">
                Ver reportes
              </Link>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}
