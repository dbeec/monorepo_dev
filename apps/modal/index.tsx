import "./style.css";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  children?: React.ReactNode;
  status?: boolean;
  changeStatus?: (status: boolean) => void;
  title?: string;
}

export default function Modal({
  children,
  status,
  changeStatus,
  title,
}: ModalProps) {
  return (
    <>
      {status && (
        <div className="overlay">
          <div className="content__modal">
            <div className="header">
              <h3>{title}</h3>
            </div>
            <div className="btn__close" onClick={() => changeStatus?.(false)}>
              <CloseIcon />
            </div>
hhh
            <div className="body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
