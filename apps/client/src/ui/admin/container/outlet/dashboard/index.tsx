import TitleViews from "../../../../../components/title-views";
import "./style.css";
import Groups2Icon from "@mui/icons-material/Groups2";
import BusinessIcon from "@mui/icons-material/Business";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

// const VISIBLE_FIELDS = ['document'];

export default function AdminContent() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

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
            <p>90</p>
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

      <div className="table_container">
        <TitleViews text="Tabla para visualizar todos los empleados." />

        <div style={{ display: "grid", background: "#fff" }}>
          <TextField
            label="Buscar"
            variant="outlined"
            size="small"
            value={searchText}
            onChange={handleSearch}
            style={{ marginBottom: "1rem", width: "100%" }}
          />
          <DataGrid
            columns={[
              {
                field: "id",
                headerName: "NO.",
                width: 50,
                sortable: false,
                filterable: false,
                resizable: false,
              },
              {
                field: "document_type",
                headerName: "TIPO DOCUMENTO",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
              },
              {
                field: "document",
                headerName: "DOCUMENTO",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
              },
              {
                field: "nombres",
                headerName: "NOMBRES",
                width: 200,
                sortable: false,
                filterable: false,
                resizable: false,
              },
              {
                field: "apellidos",
                headerName: "APELLIDOS",
                width: 200,
                sortable: false,
                filterable: false,
                resizable: false,
              },
              {
                field: "company",
                headerName: "EMPRESA",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
              },
            ]}
            rows={[{
              id: 1,
            }]}
            slots={{
              toolbar: () => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: ".6rem",
                  }}
                >
                  <GridToolbar />
                </div>
              ),
            }}
            initialState={{
              density: "compact",
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
