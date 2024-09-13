import "../style.css";
import Modal from "../../../../../../components/modal";
import { TextField } from "@mui/material";
import { inputStyles } from "../../../../../../components/formstyles";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import DepartmentsTable from "./table";
import { useCreateCityStore } from "../../../../../../store/useCreateCityStore";

export default function DepartmentPreference() {
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const { openModalCreateCity, setOpenModalCreateCity } = useCreateCityStore()

  /**
   * Función para registrar una ciudad
   */
  const onSubmit = async (data: FieldValues) => {
    const cityData = {
      dane_cod_city: data.dane_cod_city,
      city: data.city,
      departmentId: data.departmentId,
    };

    try {
      const response = await axios.post(
        "http://localhost:4005/api/cities",
        cityData
      );
      console.log("City created successfully", response.data);
      reset();
    } catch (error) {
      console.error("Error to post city", error);
    }
  };
  return (
    <>
      <div className="content_main">
        {/* <button className="button" onClick={setOpenModalCreateDepartment}>
          Crear
        </button> */}

        {/* Tabla para mostrar todos los departamentos */}
        <DepartmentsTable />
      </div>

      <Modal
        status={openModalCreateCity}
        changeStatus={setOpenModalCreateCity}
        title="crear departamento"
      >
        <form className="content_form" onSubmit={handleSubmit(onSubmit)}>
          <div id="form">
            <TextField
              type="text"
              label="Ciudad"
              variant="filled"
              size="small"
              {...register("city")}
              sx={inputStyles.generalInputs}
            />

            <TextField
              type="text"
              label="Codigo dane"
              variant="filled"
              size="small"
              {...register("dane_cod_city")}
              sx={inputStyles.generalInputs}
            />
            <TextField
              type="text"
              label="Departamento"
              variant="filled"
              size="small"
              {...register("departmentId")}
              sx={inputStyles.generalInputs}
            />
          </div>

          <div className="content_buttons">
            <button className="cancel" onClick={setOpenModalCreateCity}>
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
