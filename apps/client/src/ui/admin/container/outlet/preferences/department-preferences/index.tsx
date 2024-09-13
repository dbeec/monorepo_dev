import "../style.css";
import Modal from "../../../../../../components/modal";
import { TextField } from "@mui/material";
import { inputStyles } from "../../../../../../components/formstyles";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import DepartmentsTable from "./table";
import { useCreateDepartmentStore } from "../../../../../../store/useCreateDepartmentStore";

export default function DepartmentPreference() {
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const { openModalCreateDepartment, setOpenModalCreateDepartment } =
    useCreateDepartmentStore();

  /**
   * Función para registrar un departamento
   */
  const onSubmit = async (data: FieldValues) => {
    const departmentData = {
      dane_cod_department: data.dane_cod_department,
      department: data.department,
    };

    try {
      const response = await axios.post(
        "http://localhost:4005/api/departments",
        departmentData
      );
      console.log("Department created successfully", response.data);
      reset();
    } catch (error) {
      console.error("Error to post department", error);
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
        status={openModalCreateDepartment}
        changeStatus={setOpenModalCreateDepartment}
        title="crear departamento"
      >
        <form className="content_form" onSubmit={handleSubmit(onSubmit)}>
          <div id="form">
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
              label="Codigo dane"
              variant="filled"
              size="small"
              {...register("dane_cod_department")}
              sx={inputStyles.generalInputs}
            />
          </div>

          <div className="content_buttons">
            <button className="cancel" onClick={setOpenModalCreateDepartment}>
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
