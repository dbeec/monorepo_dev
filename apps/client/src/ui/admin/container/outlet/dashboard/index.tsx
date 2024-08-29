import TitleViews from "../../../../../components/title-views";
import "./style.css";
import Groups2Icon from "@mui/icons-material/Groups2";
import BusinessIcon from "@mui/icons-material/Business";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

export default function AdminContent() {
  const handleEdit = (id: number) => {
    console.log("Edit", id);
  };

  const handleView = (id: number) => {
    console.log("View", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete", id);
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
                // width: 50,
                flex: .5,
                align: "center",
                ...defaultColumnOptions,
              },
              {
                field: "document_type",
                headerName: "TIPO DOC",
                flex: .5,
                align: "center",
                ...defaultColumnOptions,
              },
              {
                field: "document",
                headerName: "NO. DOCUMENTO",
                flex: 1,
                align: "right",
                ...defaultColumnOptions,
              },
              {
                field: "name",
                headerName: "NOMBRE COMPLETO",
                flex: 1.5,
                align: "left",
                // valueGetter: (params) => {
                //   return `${params.firstsurname || ""} ${params.secondsurname || ""} ${params.firstname || ""} ${params.middlename}`;
                // },
                ...defaultColumnOptions,
              },
              {
                field: "company",
                headerName: "EMPRESA",
                flex: 1,
                align: "center",
                ...defaultColumnOptions,
              },
              {
                field: "role",
                headerName: "CARGO",
                flex: 1.5,
                align: "center",
                ...defaultColumnOptions,
              },
              {
                field: "h_entrada",
                headerName: "HORA ENTRADA",
                flex: 1.2,
                align: "center",
                ...defaultColumnOptions,
              },
              {
                field: "h_salida",
                headerName: "HORA SALIDA",
                flex: 1,
                align: "center",
                ...defaultColumnOptions,
              },
              {
                field: "actions",
                headerName: "ACCIÓN",
                flex: 1,
                ...defaultColumnOptions,
                renderCell: (params: GridRenderCellParams<any, any>) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.3rem",
                      height: "100%",
                    }}
                  >
                    <VisibilityOutlinedIcon
                      onClick={() => handleView(Number(params.id))}
                      style={{
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
              // aqui se debe colocar el estado que guarda la data de la bd
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
              {
                id: 3,
                document_type: "CC",
                document: 8743306,
                name: "GALVIS SMITH SERGIO ANDRES",
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
