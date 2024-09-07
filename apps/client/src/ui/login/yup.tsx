import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Correo electrónico inválido"
      )
      .required("El correo electrónico es requerido"),
    password: yup
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(60, "La contraseña no debe exceder los 20 caracteres")
      .required(),
  })
  .required();
