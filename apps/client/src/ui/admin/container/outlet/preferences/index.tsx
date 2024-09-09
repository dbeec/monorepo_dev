import React from "react";
import Modal from "../../../../../components/modal";
import "./style.css";
import TitleViews from "../../../../../components/title-views";
import AddIcon from "@mui/icons-material/Add";
import CompanyPreference from "./company-preference";

export default function Preferences() {
  const [openPreferencesModal, setOpenPreferencesModal] = React.useState(false);

  return (
    <>
      <TitleViews
        title="Preferencias"
        text="Parametrización de funcionalidades del sistema"
      />
      <div className="content_preferences">
        <div
          className="companyPreference"
          onClick={() => setOpenPreferencesModal(!openPreferencesModal)}
        >
          <AddIcon id="icon" />
          <p>Empresas</p>
        </div>

        <div
          className="companyPreference"
          onClick={() => setOpenPreferencesModal(!openPreferencesModal)}
        >
          <AddIcon style={{ fontSize: "1.6rem", color: "#758694" }} />
          <p>Ciudades</p>
        </div>

        <div
          className="companyPreference"
          onClick={() => setOpenPreferencesModal(!openPreferencesModal)}
        >
          <AddIcon style={{ fontSize: "1.6rem", color: "#758694" }} />
          <p>Departamentos</p>
        </div>

        <div
          className="companyPreference"
          onClick={() => setOpenPreferencesModal(!openPreferencesModal)}
        >
          <AddIcon style={{ fontSize: "1.6rem", color: "#758694" }} />
          <p>Tipos de documento</p>
        </div>
      </div>

      <Modal
        status={openPreferencesModal}
        changeStatus={setOpenPreferencesModal}
        title="parametrización de empresas"
        width="900px"
        alignItems="center"
      >
        <CompanyPreference />
      </Modal>
    </>
  );
}
