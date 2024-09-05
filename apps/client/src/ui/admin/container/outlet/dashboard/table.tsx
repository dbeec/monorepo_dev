import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import axios from "axios";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./style.css";
import UsersInterface from "./interface";

const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

export default function MainTable() {
  const [data, setData] = React.useState<UsersInterface[]>([]);

  /**
   * Traer los datos de la bd.
   */
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4005/api/users");
      const users = response.data;
      const usersWithId = [
        {
          ...users,
          id: users.userId,
          fullname: `${users.firstsurname} ${users.secondsurname ? users.secondsurname + " " : ""}${users.firstname} ${users.middlename ? users.middlename : ""}`,
        },
      ];
      setData(usersWithId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  /**
   * useEffect que ejecuta la funcion fetchData
   */
  React.useEffect(() => {
    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "NO.", flex: 0.2 },
    {
      field: "typeDocument",
      headerName: "TIPO DOC",
      flex: 0.15,
      align: "center",
      ...defaultColumnOptions,
    },
    {
      field: "document",
      headerName: "NO. DOCUMENTO",
      flex: 0.3,
      align: "right",
      ...defaultColumnOptions,
    },
    {
      field: "fullname",
      headerName: "NOMBRE COMPLETO",
      flex: 0.6,
      align: "left",
      ...defaultColumnOptions,
    },
    {
      field: "company",
      headerName: "EMPRESA",
      flex: 0.35,
      align: "center",
      ...defaultColumnOptions,
    },
    {
      field: "role",
      headerName: "CARGO",
      flex: 0.35,
      align: "center",
      ...defaultColumnOptions,
    },
    {
      field: "actions",
      headerName: "ACCIÓN",
      flex: 0.3,
      ...defaultColumnOptions,
      renderCell: () => (
        <div className="column-buttons">
          <VisibilityOutlinedIcon
            style={{
              cursor: "pointer",
              color: "#1976d2",
              fontSize: "1.2rem",
            }}
          />
          <EditOutlinedIcon
            style={{
              cursor: "pointer",
              color: "#ffa000",
              fontSize: "1.2rem",
            }}
          />
          <DeleteOutlineOutlinedIcon
            style={{
              cursor: "pointer",
              color: "#d32f2f",
              fontSize: "1.2rem",
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ display: "grid", width: "100%", bgcolor: "#fff" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        density="compact"
      />
    </Box>
  );
}

//
