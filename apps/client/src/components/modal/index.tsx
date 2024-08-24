import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";
export default function Modal({ children, status, changeStatus }: any) {
  return (
    <>
      {status && (
        <div className="overlay">
          <div className="content">
            <div className="header">
              <h1>Title</h1>
            </div>
            <div className="btn__close" onClick={changeStatus(false)}>
              <CloseIcon />
            </div>

            <div className="body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
