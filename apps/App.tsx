import { useState } from "react";
import "./App.css";
import Modal from "./modal";
// import { useCounterStore } from "./store/counterStore";
// import { shallow } from "zustand/shallow";

function App() {
  // const { title, count } = useCounterStore(
  //   (state) => ({
  //     count: state.count,
  //     title: state.title,
  //   }),
  //   shallow
  // );
  // const { increment } = useCounterStore();

  const [status, setStatus] = useState(false);
  const [fileName, setFileName] = useState("Ningún archivo seleccionado");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Ningún archivo seleccionado");
    }
  };

  return (
    <>
      <button onClick={() => setStatus(!status)}>Open modal</button>

      <Modal
        status={status}
        changeStatus={setStatus}
        title="EVIDENCIA DE ACTIVACIÓN"
      >
        <div className="input">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload" className="custom-file-label">
              Seleccionar archivo
            </label>
            <span className="file-name">{fileName}</span>
          </div>

          <label htmlFor="evidence" className="evidence">Observación</label>
          <textarea
            name="evidence"
            id="evidence"
            placeholder="Redacte aquí su evidencia para su activación"
            rows={4}
          />
        </div>

        <div className="button">
          <button>CANCELAR</button>
          <button>CONFIRMAR</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
