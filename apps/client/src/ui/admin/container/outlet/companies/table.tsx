// import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
// import axios from "axios";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import "./style.css";
// import UsersInterface from "./interface";

const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

export default function CompaniesTable() {
  // const [data, setData] = React.useState<UsersInterface[]>([]);

  /**
   * Traer los datos de la bd.
   */
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4005/api/companies");
  //     const users = response.data.map((user: UsersInterface) => ({
  //       ...user,
  //       id: String(user.id),
  //       fullname: `${user.firstsurname} ${user.secondsurname ? user.secondsurname + " " : ""}${user.firstname} ${user.middlename ? user.middlename : ""}`,
  //     }));
  //     setData(users);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  /**
   * useEffect que ejecuta la funcion fetchData
   */
  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  const columns: GridColDef[] = [
    {
      field: "nit",
      headerName: "NIT",
      flex: 0.15,
      align: "center",
      ...defaultColumnOptions,
    },
    {
      field: "name",
      headerName: "EMPRESA",
      flex: 0.3,
      align: "right",
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
        // rows={data}
        columns={columns}
        getRowId={(row: { id: string }) => row.id}
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
