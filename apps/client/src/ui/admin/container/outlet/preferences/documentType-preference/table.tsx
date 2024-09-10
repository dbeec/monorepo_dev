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
import CompaniesInterface from "../../../../../../hooks/types";
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
const getDocumentTypes = async (): Promise<CompaniesInterface[]> => {
  try {
    const { data } = await axios.get(
      "http://localhost:4005/api/document-types"
    );
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default function DocumentTypesTable() {
  /**
   * Hook useQuery
   */
  const { error, data } = useQuery({
    queryKey: ["document-types"],
    queryFn: getDocumentTypes,
    retry: false,
  });

  if (error) {
    return <p>Error...</p>;
  }

  const columns: GridColDef[] = [
    {
      field: "type",
      headerName: "TIPO DE DOCUMENTO",
      flex: 0.34444,
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
        getRowId={(row) => row.document_typeId}
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
                  placeholder="Tipo de documento"
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
