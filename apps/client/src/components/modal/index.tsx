import "./style.css";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  children?: React.ReactNode;
  status?: boolean;
  changeStatus?: (status: boolean) => void;
  title?: string;
  width?: string;
  height?: string;
  alignItems?: string;
}

export default function Modal({
  children,
  status,
  changeStatus,
  title,
  width,
  height,
  alignItems,
}: ModalProps) {
  return (
    <>
      {status && (
        <div className="overlay" style={{ alignItems }}>
          <div className="content__modal" style={{ width, height }}>
            <div className="header">
              <h3>{title}</h3>
            </div>
            <div className="btn__close" onClick={() => changeStatus?.(false)}>
              <CloseIcon />
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
