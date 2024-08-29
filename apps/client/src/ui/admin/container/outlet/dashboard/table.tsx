import "./style.css";
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

export default function MainTable() {
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
      <div className="main-table">
        <DataGrid
          checkboxSelection
          columns={[
            {
              field: "id",
              headerName: "NO.",
              // width: 50,
              flex: 0.5,
              align: "center",
              ...defaultColumnOptions,
            },
            {
              field: "document_type",
              headerName: "TIPO DOC",
              flex: 0.5,
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
                <div className="column-buttons">
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
                <div className="tolbars">
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
    </>
  );
}
