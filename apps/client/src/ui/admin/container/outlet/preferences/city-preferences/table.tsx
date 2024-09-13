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
import DepartmentsInterface from "../../../../../../hooks/types";
import { useQuery } from "@tanstack/react-query";

const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

/**
 * Traer las ciudades de la base de datos.
 */
const getCities = async (): Promise<DepartmentsInterface[]> => {
  try {
    const { data } = await axios.get("http://localhost:4005/api/cities");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default function CitiesTable() {
  /**
   * Hook useQuery
   */
  const { error, data } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
    retry: false,
  });

  if (error) {
    return <p>Error...</p>;
  }

  const columns: GridColDef[] = [
    {
      field: "city",
      headerName: "CIUDAD",
      flex: 0.3,
      align: "center",
      ...defaultColumnOptions,
    },
    {
      field: "dane_cod_city",
      headerName: "CODIGO DANE",
      flex: 0.12,
      align: "center",
      ...defaultColumnOptions,
    },
    {
      field: "actions",
      headerName: "ACCIÓN",
      flex: 0.1,
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
      sx={{
        display: "grid",
        width: "100%",
        minHeight: "40vh",
        bgcolor: "#fff",
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        loading
        getRowId={(row) => row.dane_cod_city}
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
                  placeholder="Ciudad"
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
