import Modal from "../../../../../components/modal";
import "./style.css";
import TitleViews from "../../../../../components/title-views";
import AddIcon from "@mui/icons-material/Add";
import CompanyPreference from "./company-preference";
import { usePreferencesStore } from "../../../../../store/useModalPreferencesStore";
import DocumentTypePreference from "./documentType-preference";
import DepartmentPreference from "./department-preferences";

export default function Preferences() {
  const { openCompanyPreferencesModal, setOpenCompanyPreferencesModal } =
    usePreferencesStore();
  const {
    openDocumentTypePreferencesModal,
    setOpenDocumentTypePreferencesModal,
  } = usePreferencesStore();
  const {
    openDepartmentsPreferencesModal,
    setOpenDepartmentsPreferencesModal,
  } = usePreferencesStore();

  return (
    <>
      <TitleViews
        title="Preferencias"
        text="Parametrización de funcionalidades del sistema"
      />
      <div className="content_preferences">
        <div
          className="cardPreference"
          onClick={setOpenCompanyPreferencesModal}
        >
          <AddIcon id="icon" />
          <p>Empresas</p>
        </div>

        <div
          className="cardPreference"
          onClick={setOpenDepartmentsPreferencesModal}
        >
          <AddIcon style={{ fontSize: "1.6rem", color: "#758694" }} />
          <p>Departamentos</p>
        </div>

        <div className="cardPreference">
          <AddIcon style={{ fontSize: "1.6rem", color: "#758694" }} />
          <p>Ciudades</p>
        </div>

        <div
          className="cardPreference"
          onClick={setOpenDocumentTypePreferencesModal}
        >
          <AddIcon style={{ fontSize: "1.6rem", color: "#758694" }} />
          <p>Tipos de documento</p>
        </div>
      </div>

      {/* Modal que muestra las empresas creadas en una tabla */}
      <Modal
        status={openCompanyPreferencesModal}
        changeStatus={setOpenCompanyPreferencesModal}
        title="parametrización - empresas"
        width="700px"
        alignItems="center"
      >
        <CompanyPreference />
      </Modal>

      {/* Modal que muestra todos los departamentos */}
      <Modal
        status={openDepartmentsPreferencesModal}
        changeStatus={setOpenDepartmentsPreferencesModal}
        title="parametrización - departamentos"
        width="700px"
        alignItems="center"
      >
        <DepartmentPreference />
      </Modal>

      {/* Modal que muestra todas las ciudades */}
      <Modal
        title="parametrización - ciudades"
        width="700px"
        alignItems="center"
      >
        {/* Componente de tabla departamentos */}
      </Modal>

      {/* Modal que muestra los tipos de documentos creados en una tabla */}
      <Modal
        status={openDocumentTypePreferencesModal}
        changeStatus={setOpenDocumentTypePreferencesModal}
        title="parametrización - tipo de documento"
        width="700px"
        alignItems="center"
      >
        <DocumentTypePreference />
      </Modal>
    </>
  );
}
