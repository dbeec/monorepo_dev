/**
 * Tipado de la tabla que muestra todos los usuarios
 */

export default interface UsersInterface {
  id: string;
  firstname: string;
  middlename?: string;
  firstsurname: string;
  secondsurname?: string;
  typeDocument: string;
  document: string;
  company: string;
  roles: string;
  fullname: string;
}

/**
 * Tipado de la tabla que muestra todas las empresas
 */
export default interface CompaniesInterface {
  nit: string;
  dv: string;
  name: string;
}

/**
 * Tipado de la tabla que muestra todos los departamentos
 */
export default interface DepartmentsInterface {
  dane_cod_department: number;
  department: string;
}
