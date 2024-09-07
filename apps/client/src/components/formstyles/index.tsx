export const inputStyles = {
  generalInputs: {
    "& .MuiFilledInput-root": {
      backgroundColor: "#f3f3f3", // Color de fondo del input
      "&:hover": {
        backgroundColor: "#f1f1f1", // Color de fondo en hover
      },
      "&.Mui-focused": {
        backgroundColor: "#f1f1f1", // Color de fondo cuando está enfocado
      },
    },
    "& .MuiInputLabel-root": {
      color: "#555", // Color del label cuando no está enfocado
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#405d72", // Color del label cuando está enfocado
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#999", // Color del borde inferior cuando no está enfocado
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#405d72", // Color del borde inferior cuando está enfocado
    },
  },
  inputsLogin: {
    fontSize: ".8rem",
    lineHeight: "14px",
    "&.MuiInputLabel-shrink": { color: "#259780" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#259780",
    },
  },
};
