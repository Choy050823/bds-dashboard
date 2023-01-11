import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to see all team memeber os the Bully Detection System?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please go to the 'Manage Team' Page to see all members of the Bully Detection System
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I register a new bully in the webpage?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please go to the 'Bully Profile Form' to register a new bully for future records
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to see the number of bullies differentiated in forms in the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please go to the 'Number of Bullies' page to see the bullies' forms in school
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I know which form is getting bullied the most in school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please go to the 'Bully Case Distribution' Page to see more info about the proportion of bully cases in school
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I see the number of bully records in school this year?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please go to the 'Bully Cases (Month)' Page to see the statistics of bully cases in school
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
