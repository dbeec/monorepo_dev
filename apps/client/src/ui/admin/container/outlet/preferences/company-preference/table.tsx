// import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import axios from "axios";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React from "react";
import "./style.css";
import CompaniesInterface from "./interface";

const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

export default function CompaniesTable() {
  const [data, setData] = React.useState<CompaniesInterface[]>([]);

  /**
   * Traer los datos de la bd.
   */
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4005/api/companies");
      setData(response.data);
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
    <Box
      sx={{ display: "grid", width: "100%", minHeight: "40vh", bgcolor: "#fff" }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.companyId}
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
