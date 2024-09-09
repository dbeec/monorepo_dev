import { useEffect, useState } from "react";
import { UseFormWatch } from "react-hook-form";

export const useNitDV = (watch: UseFormWatch<any>): string => {
  const [dv, setDv] = useState<string>("");

  const calcularDV = (nit: string): string => {
    const factores: number[] = [
      3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71,
    ];
    let suma: number = 0;

    if (!nit || isNaN(Number(nit))) return "";

    for (let i = 0; i < nit.length; i++) {
      const digito: number = parseInt(nit.charAt(nit.length - 1 - i), 10);
      suma += digito * factores[i];
    }

    const residuo: number = suma % 11;

    if (residuo === 0 || residuo === 1) {
      return residuo.toString();
    } else {
      return (11 - residuo).toString();
    }
  };

  const nit: string = watch("companyNit");

  useEffect(() => {
    if (nit) {
      setDv(calcularDV(nit));
    } else {
      setDv("");
    }
  }, [nit]);

  return dv;
};
