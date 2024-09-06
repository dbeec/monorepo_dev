import "./styles.css";
import { Button, TextField } from "@mui/material";
import TitleViews from "../../../../../components/title-views";
import { useForm, FieldValues } from "react-hook-form";
import { inputStyles } from "../../../../../components/formstyles";
import axios from "axios";
import { useNitDV } from "./useNitDV";

export default function RegisterCompany() {
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
      <TitleViews title="Registrar empresa" />

      <form className="form_create_company" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          label="NIT"
          variant="filled"
          size="small"
          {...register("companyNit")}
          sx={inputStyles}
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
          sx={inputStyles}
          {...register("dv")}
        />

        <TextField
          type="text"
          label="Nombre de la empresa"
          variant="filled"
          size="small"
          {...register("companyName")}
          sx={inputStyles}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Registrar Empresa
        </Button>
      </form>
    </>
  );
}
