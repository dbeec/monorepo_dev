import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SidebarTest() {
  return (
    <div>
      <div className="logo_sidebar">
        <h1>¡Logo here!</h1>
      </div>

      <Accordion
        square
        disableGutters
        sx={{
          bgcolor: "transparent",
          color: "#fff",
          boxShadow: "none",
          padding: "0",
          margin: "0",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontSize: ".8rem",
            fontWeight: "400",
            padding: "0 4px",
            minHeight: "unset",
            "& .MuiAccordionSummary-content": {
              margin: "6px 0",
            },
          }}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor: "#fff",
            color: "#444",
            fontSize: ".80rem",
            fontWeight: "400",
            borderRadius: "2px",
            padding: ".4rem .8rem",
            "&:hover": {
              bgcolor: "#eee",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion square disableGutters sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
