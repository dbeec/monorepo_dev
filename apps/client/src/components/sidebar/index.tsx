import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./style.css";
import { useSidebarStore } from "../../store/useSidebarStore";

export default function Sidebar({ isCollapsed }: { isCollapsed: boolean }) {
  const { expanded, setExpanded } = useSidebarStore()

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={`content_sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo_sidebar">
        <h1>¡Logo here!</h1>
      </div>

      <Accordion
        square
        disableGutters
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        id="content_accordion"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon style={{ fontSize: "1rem", color: "#fff" }} />
            ) : (
              <AddIcon style={{ fontSize: "1rem", color: "#fff" }} />
            )
          }
          aria-controls="panel1-content"
          id="accordion_summary"
        >
          <DashboardIcon />
          Option one
        </AccordionSummary>
        <AccordionDetails id="accordion_details">
          First register
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        disableGutters
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        id="content_accordion"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon style={{ fontSize: "1rem", color: "#fff" }} />
            ) : (
              <AddIcon style={{ fontSize: "1rem", color: "#fff" }} />
            )
          }
          aria-controls="panel2-content"
          id="accordion_summary"
        >
          <DashboardIcon />
          Option two
        </AccordionSummary>
        <AccordionDetails id="accordion_details">
          Second register
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
