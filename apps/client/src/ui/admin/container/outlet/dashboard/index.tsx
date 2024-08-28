import TitleViews from "../../../../../components/title-views";
import "./style.css";
import Groups2Icon from "@mui/icons-material/Groups2";
import BusinessIcon from "@mui/icons-material/Business";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";

export default function AdminContent() {
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
          <DataGrid
            columns={[
              {
                field: "id",
                headerName: "NO.",
                width: 50,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "document_type",
                headerName: "TIPO DOC",
                width: 90,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "document",
                headerName: "NO. DOCUMENTO",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "right",
              },
              {
                field: "name",
                headerName: "NOMBRE COMPLETO",
                width: 200,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "left",
              },
              {
                field: "company",
                headerName: "EMPRESA",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "h_entrada",
                headerName: "HORA ENTRADA",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "h_salida",
                headerName: "HORA SALIDA",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
            ]}
            rows={[
              {
                id: 1,
                document_type: "CC",
                document: 1143168571,
                name: "DÍAZ QUINTERO JOHAN DAVID",
                company: "WOW DESARROLLOS DIGITALES",
                h_entrada: "08:01",
                h_salida: "05:21",
              },
              {
                id: 1,
                document_type: "CC",
                document: 1143168571,
                name: "DÍAZ QUINTERO JOHAN DAVID",
                company: "WOW DESARROLLOS DIGITALES",
                h_entrada: "08:01",
                h_salida: "05:21",
              },
            ]}
            slots={{
              toolbar: () => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: ".6rem",
                  }}
                >
                  <GridToolbarQuickFilter
                    placeholder="Nro. documento"
                    size="small"
                  />
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
