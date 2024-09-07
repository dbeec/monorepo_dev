// import LogoCoophumana from "../../../public/logo_web.png";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { schema } from "./yup";
import { inputStyles } from "../../components/formstyles";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(() => {
    reset();
  });

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="main__content">
        <div className="login">
          <div className="logo">
            {/* <img src={LogoCoophumana} alt="LogoCoophumana" /> */}

            <h1>Bienvenid@</h1>
            <p>
              Por favor, ingresa tu correo electrónico y contraseña para
              continuar
            </p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <TextField
              label="Correo electrónico"
              id="outlined-size-small"
              size="small"
              variant="filled"
              type="email"
              sx={inputStyles.generalInputs}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              FormHelperTextProps={{
                sx: {
                  fontSize: inputStyles.inputsLogin.fontSize,
                  lineHeight: inputStyles.inputsLogin.lineHeight,
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.MuiInputLabel-shrink":
                    inputStyles.inputsLogin["&.MuiInputLabel-shrink"],
                },
              }}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                    inputStyles.inputsLogin[
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline"
                    ],
                },
              }}
            />

            <TextField
              label="Contraseña"
              id="outlined-size-small"
              size="small"
              variant="filled"
              type="password"
              sx={inputStyles.generalInputs}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              FormHelperTextProps={{
                sx: {
                  fontSize: inputStyles.inputsLogin.fontSize,
                  lineHeight: inputStyles.inputsLogin.lineHeight,
                },
              }}
              InputLabelProps={{
                sx: {
                  "&.MuiInputLabel-shrink":
                    inputStyles.inputsLogin["&.MuiInputLabel-shrink"],
                },
              }}
              InputProps={{
                sx: {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                    inputStyles.inputsLogin[
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline"
                    ],
                },
              }}
            />

            <div className="button">
              <button type="submit" onClick={() => handleClick()}>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
