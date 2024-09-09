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
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import CompaniesInterface from "../../../../../../hooks/types"
const defaultColumnOptions: Partial<GridColDef> = {
  sortable: false,
  filterable: false,
  resizable: false,
  headerAlign: "center",
};

/**
 * Traer los datos de la bd.
 */
const fetchData = async (): Promise<CompaniesInterface[]> => {
  try {
    const { data } = await axios.get("http://localhost:4005/api/companies");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
};

export default function CompaniesTable() {
  /**
   * Hook useQuery
   */
  const { error, data } = useQuery({
    queryKey: ["companies"],
    queryFn: fetchData,
    retry: false,
  });

  if (error) {
    return <p>Error...</p>;
  }

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
        getRowId={(row) => row.companyId}
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
