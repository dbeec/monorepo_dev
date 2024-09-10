import DocumentTypesTable from "./table";
import "../style.css";
import Modal from "../../../../../../components/modal";
import { TextField } from "@mui/material";
import { inputStyles } from "../../../../../../components/formstyles";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useCreateDocumentTypeStore } from "../../../../../../store/useCreateDocumentTypeStore";

export default function DocumentTypePreference() {
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const { openModalCreateDocumentType, setOpenModalCreateDocumentType } =
    useCreateDocumentTypeStore();

  /**
   * Función para registrar una empresa
   */
  const onSubmit = async (data: FieldValues) => {
    const documentTypeData = {
      prefix: data.prefix,
      documentType: data.DocumentType,
    };

    try {
      const response = await axios.post(
        "http://localhost:4005/api/document-types",
        documentTypeData
      );
      console.log("Document Type created successfully", response.data);
      reset();
    } catch (error) {
      console.error("Error to post document type", error);
    }
  };
  return (
    <>
      <div className="content_main">
        <button className="button" onClick={setOpenModalCreateDocumentType}>Crear</button>

        {/* Tabla para mostrar las empresas creadas */}
        <DocumentTypesTable />
      </div>

      <Modal
        status={openModalCreateDocumentType}
        changeStatus={setOpenModalCreateDocumentType}
        title="crear tipo de documento"
      >
        <form className="content_form" onSubmit={handleSubmit(onSubmit)}>
          <div id="form">
            <TextField
              type="text"
              label="Prefix"
              variant="filled"
              size="small"
              {...register("prefix")}
              sx={inputStyles.generalInputs}
            />

            <TextField
              type="text"
              label="Tipo de documento"
              variant="filled"
              size="small"
              {...register("documentType")}
              sx={inputStyles.generalInputs}
            />
          </div>

          <div className="content_buttons">
            <button className="cancel" onClick={setOpenModalCreateDocumentType}>
              Cancelar
            </button>
            <button className="button" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
