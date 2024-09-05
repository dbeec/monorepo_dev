import TitleViews from "../../../../../components/title-views";
import "./style.css";
import Groups2Icon from "@mui/icons-material/Groups2";
import BusinessIcon from "@mui/icons-material/Business";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import MainTable from "./table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminContent() {
  const [totalPersonal, setTotalPersonal] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotalPersonal = async () => {
      try {
        const response = await axios.get("http://localhost:4005/api/users");
        const totalUsers = response.data.length;
        console.log("bd:",totalUsers)
        setTotalPersonal(totalUsers);
      } catch (error) {
        console.error("Error al traer los datos: ", error);
      }
    };

    fetchTotalPersonal();
  }, []);
  return (
    <>
      <TitleViews
        title="Dashboard"
        text="Monitorea el progreso del equipo aquí."
      />

      <div className="cards_container">
        <div className="card">
          <div className="icon">
            <Groups2Icon style={{ fontSize: "1.6rem", color: "#758694" }} />
          </div>
          <div className="card_content">
            <span>Total personal</span>
            <p>{totalPersonal !== null ? totalPersonal : "Cargando..."}</p>{" "}
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <BusinessIcon style={{ fontSize: "1.6rem", color: "#E0A75E" }} />
          </div>
          <div className="card_content">
            <span>En instalaciones</span>
            <p>90</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <BedtimeIcon style={{ fontSize: "1.6rem", color: "#F0A8D0" }} />
          </div>
          <div className="card_content">
            <span>Personal ausente</span>
            <p>90</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <HourglassDisabledIcon
              style={{ fontSize: "1.6rem", color: "#BC9F8B" }}
            />
          </div>
          <div className="card_content">
            <span>Impuntuales</span>
            <p>90</p>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <TitleViews text="Tabla para visualizar todos los empleados." />
      <div className="table_container">
        <MainTable />
      </div>
    </>
  );
}
