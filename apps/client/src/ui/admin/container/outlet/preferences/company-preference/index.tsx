import "../style.css";
import Modal from "../../../../../../components/modal";
import { TextField } from "@mui/material";
import { inputStyles } from "../../../../../../components/formstyles";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useNitDV } from "../../../../../../hooks/useNitDV";
import CompaniesTable from "./table";
import { useCreateCompanyStore } from "../../../../../../store/useCreateCompanyStore";

export default function CompanyPreference() {
  const { openModalCreateCompany, setOpenModalCreateCompany } =
    useCreateCompanyStore();
  const { register, handleSubmit, reset, watch } = useForm<FieldValues>();

  /**
   * Hook para calcular el dv del nit
   */
  const dv = useNitDV(watch);

  /**
   * Función para registrar una empresa
   */
  const onSubmit = async (data: FieldValues) => {
    const companyData = {
      nit: data.companyNit,
      dv: dv,
      name: data.companyName,
      departament: data.department,
      ciudad: data.city
    };

    try {
      const response = await axios.post(
        "http://localhost:4005/api/companies",
        companyData
      );
      console.log("Company created successfully", response.data);
      reset();
    } catch (error) {
      console.error("Error to post company", error);
    }
  };
  return (
    <>
      <div className="content_main">
        <button className="button" onClick={setOpenModalCreateCompany}>
          Crear
        </button>

        {/* Tabla para mostrar las empresas creadas */}
        <CompaniesTable />
      </div>

      {/* Modal con el formulario para crear las empresas */}
      <Modal
        status={openModalCreateCompany}
        changeStatus={setOpenModalCreateCompany}
        title="crear empresa"
      >
        <form className="content_form" onSubmit={handleSubmit(onSubmit)}>
          <div id="form">
            <TextField
              type="text"
              label="NIT"
              variant="filled"
              size="small"
              {...register("companyNit")}
              sx={inputStyles.generalInputs}
            />

            <TextField
              type="text"
              label="DV"
              size="small"
              variant="filled"
              value={dv}
              InputProps={{
                readOnly: true,
              }}
              sx={inputStyles.generalInputs}
              {...register("dv")}
            />

            <TextField
              type="text"
              label="Nombre de la empresa"
              variant="filled"
              size="small"
              {...register("companyName")}
              sx={inputStyles.generalInputs}
            />

            <TextField
              type="text"
              label="Departamento"
              variant="filled"
              size="small"
              {...register("department")}
              sx={inputStyles.generalInputs}
            />

            <TextField
              type="text"
              label="Ciudad"
              variant="filled"
              size="small"
              {...register("city")}
              sx={inputStyles.generalInputs}
            />
          </div>

          <div className="content_buttons">
            <button className="cancel" onClick={setOpenModalCreateCompany}>
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
