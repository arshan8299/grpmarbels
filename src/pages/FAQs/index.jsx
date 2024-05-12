import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material"
import { FAQ, FAQ_QUESTIONS } from "../../constants/faq"
import { MdKeyboardArrowDown } from "react-icons/md";


const FAQs = () => {
  return (
    <Box sx={{ paddingInline: { xs: "1rem", md: "12rem" } }} >
      <Typography textAlign="center" fontSize={30} fontWeight={600} marginBlock="2rem">{FAQ}</Typography>
      <Box sx={{ paddingInline: { xs: "0rem", md: "2rem", lg:"12rem" }, marginBottom:"4rem" }}>
        {FAQ_QUESTIONS.map((item, index) => (
          <Accordion key={index} sx={{marginBlock:".5rem"}}>
            <AccordionSummary
              expandIcon={<MdKeyboardArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontSize={16} fontWeight={400}>{item.questions}</Typography>
            </AccordionSummary>
            <Divider/>
            <AccordionDetails>
              <Typography fontSize={14} fontWeight={400}>{item.answers}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default FAQs