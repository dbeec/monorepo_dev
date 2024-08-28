import TitleViews from "../../../../../components/title-views";
import "./style.css";
import Groups2Icon from "@mui/icons-material/Groups2";
import BusinessIcon from "@mui/icons-material/Business";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import {
  DataGrid,
  GridRenderCellParams,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function AdminContent() {
  const handleEdit = (id: number) => {
    console.log("Edit", id);
    // Implementar lógica de edición aquí
  };

  const handleView = (id: number) => {
    console.log("View", id);
    // Implementar lógica de visualización aquí
  };

  const handleDelete = (id: number) => {
    console.log("Delete", id);
    // Implementar lógica de eliminación aquí
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
          <DataGrid
            checkboxSelection
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
                width: 50,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "document",
                headerName: "NO. DOCUMENTO",
                width: 100,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "right",
              },
              {
                field: "name",
                headerName: "NOMBRE COMPLETO",
                // valueGetter: (params) => {
                //   return `${params.firstsurname || ""} ${params.secondsurname || ""} ${params.firstname || ""} ${params.middlename}`;
                // },
                width: 220,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "left",
              },
              {
                field: "company",
                headerName: "EMPRESA",
                width: 120,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "role",
                headerName: "CARGO",
                width: 150,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "h_entrada",
                headerName: "HORA ENTRADA",
                width: 130,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "h_salida",
                headerName: "HORA SALIDA",
                width: 130,
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
              },
              {
                field: "actions",
                headerName: "ACCIONES",
                sortable: false,
                filterable: false,
                resizable: false,
                align: "center",
                renderCell: (params: GridRenderCellParams<any, any>) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                      height: "100%",
                    }}
                  >
                    <VisibilityOutlinedIcon
                      onClick={() => handleView(Number(params.id))}
                      style={{
                        display: "flex",
                        cursor: "pointer",
                        color: "#1976d2",
                        fontSize: "1.2rem",
                      }}
                    />
                    <EditOutlinedIcon
                      onClick={() => handleEdit(Number(params.id))}
                      style={{
                        cursor: "pointer",
                        color: "#ffa000",
                        fontSize: "1.2rem",
                      }}
                    />
                    <DeleteOutlineOutlinedIcon
                      onClick={() => handleDelete(Number(params.id))}
                      style={{
                        cursor: "pointer",
                        color: "#d32f2f",
                        fontSize: "1.2rem",
                      }}
                    />
                  </div>
                ),
              },
            ]}
            rows={[
              {
                id: 1,
                document_type: "CC",
                document: 1143168571,
                name: "DÍAZ QUINTERO JOHAN DAVID",
                company: "CAE",
                role: "PROJECT MANAGER",
                h_entrada: "08:01",
                h_salida: "05:21",
              },
              {
                id: 2,
                document_type: "CC",
                document: 1002029388,
                name: "CORCHO CARRANZA ELIZABETH DANIELA",
                company: "WOW",
                role: "DEVELOPER",
                h_entrada: "08:01",
                h_salida: "05:21",
              },
            ]}
            slots={{
              toolbar: () => (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: ".6rem",
                    }}
                  >
                    <GridToolbarExport />
                    <GridToolbarQuickFilter
                      placeholder="No. documento"
                      size="small"
                      sx={{ width: "20%" }}
                    />
                  </div>
                </>
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
