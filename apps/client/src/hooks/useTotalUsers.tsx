import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/**
 * Definir la función para obtener los datos de las cards del /Dashboard
 */
const fetchTotalPersonal = async () => {
  try {
    const { data } = await axios.get("http://localhost:4005/api/users/all-counts");
    return data;
  } catch (error) {
    console.error("Error al traer los datos: ", error);
    throw new Error("Error al traer los datos");
  }
};

/**
 * Hook a exportar para el total de los usuarios
 */
export const useTotalUsers = () => {
  return useQuery({
    queryKey: ["all-counts"],
    queryFn: fetchTotalPersonal,
  });
};
