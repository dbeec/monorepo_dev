import "./style.css"

interface TitleViewProps {
  title?: string;
  text?: string;
}

export default function TitleViews({ title, text }: TitleViewProps) {
  return (
    <>
      <div className="main_container">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
