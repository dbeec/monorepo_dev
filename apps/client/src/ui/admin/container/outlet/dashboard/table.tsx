// import * as React from "react";
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
import UsersInterface from "../../../../../hooks/types";
import { useQuery } from "@tanstack/react-query";

const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

/**
 * Traer los datos de la bd.
 */
const fetchData = async (): Promise<UsersInterface[]> => {
  try {
    const response = await axios.get("http://localhost:4005/api/users");
    return response.data.map((user: UsersInterface) => ({
      ...user,
      id: String(user.id),
      fullname: `${user.firstsurname} ${user.secondsurname ? user.secondsurname + " " : ""}${user.firstname} ${user.middlename ? user.middlename : ""}`,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default function MainTable() {
  const {
    error,
    data: dataUsers = [],
  } = useQuery<UsersInterface[]>({
    queryKey: ["users"],
    queryFn: fetchData,
    retry: false,
  });

  const columns: GridColDef[] = [
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

  if (error) return <p>Error...</p>;

  return (
    <Box
      sx={{ display: "grid", width: "100%", height: "45vh", bgcolor: "#fff" }}
    >
      <DataGrid
        rows={dataUsers}
        columns={columns}
        getRowId={(row: { id: string }) => row.id}
        loading
        slotProps={{
          loadingOverlay: {
            variant: "circular-progress",
            noRowsVariant: "skeleton",
          },
        }}
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
