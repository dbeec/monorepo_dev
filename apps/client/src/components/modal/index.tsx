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
              <h1>{title}</h1>
            </div>
            <div className="btn__close">
              <CloseIcon />
            </div>

            <div className="body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
