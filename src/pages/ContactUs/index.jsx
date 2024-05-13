import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { ADDRESS, CONTACT, CONTACT_DESCRIPTION, EMAIL, OPENING_HOURS, OPENING_HOURS_DATA, OPENING_HOURS_DATA2, PHONE, STAY_CONNECTED, SUBMIT } from "../../constants/contactUs";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaWhatsapp, } from "react-icons/fa";


const ContactUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const handleMapLoad = () => {
    setMapLoaded(true);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    // Perform form submission logic here (e.g., send data to server)
  };
  return (
    <Grid container sx={{ padding: { xs: "2rem 1rem", md: "2rem 6rem" } }}>
      <Grid xs={12} md={9} marginBlock={{xs:".5rem", md:"2rem"}}>
        <Typography textAlign="center" fontSize={30} fontWeight={600} marginBlock=".5rem">{CONTACT}</Typography>
        <Typography textAlign="center" fontSize={16} fontWeight={400} marginBlock=".5rem" paddingInline={{xs:"0", md:"3rem"}}>{CONTACT_DESCRIPTION}</Typography>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBlock:"1rem", padding:"1rem" }} onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between" gap="1rem">
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Box>
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
          />
          <Button sx={{ width: "fit-content", backgroundColor: "#f8c301", color: "#fff", '&:hover': { backgroundColor: "#015835" } }} type="submit">
            {SUBMIT}
          </Button>
        </form>
      </Grid>
      <Grid xs={12} md={3} sx={{padding:"1rem 1rem", marginTop:{xs:"1rem", md:"3rem", backgroundColor:"#f2f2f2", height:"fit-content"}}}>
        <Typography fontSize={16} fontWeight={600} marginBlock="1rem">{ADDRESS}</Typography>
        <Typography fontSize={14} fontWeight={400} marginBlock=".2rem"></Typography>
        <Typography fontSize={14} fontWeight={400} marginBlock=".2rem">{PHONE}</Typography>
        <Typography fontSize={14} fontWeight={400} marginBlock=".2rem">{EMAIL}</Typography>
        <Typography fontSize={16} fontWeight={600} marginBlock="1rem">{OPENING_HOURS}</Typography>
        <Typography fontSize={14} fontWeight={400} marginBlock=".2rem">{OPENING_HOURS_DATA}</Typography>
        <Typography fontSize={14} fontWeight={400} marginBlock=".2rem">{OPENING_HOURS_DATA2}</Typography>
        <Typography fontSize={16} fontWeight={600} marginBlock="1rem">{STAY_CONNECTED}</Typography>
        <Box sx={{ display: "flex", gap: "1rem", marginTop:".2rem" }}>
            <Box>
              <FaFacebookSquare size={25} />
            </Box>
            <Box>
              <FaTwitterSquare size={25} />
            </Box>
            <Box>
              <FaInstagram size={25} />
            </Box>
            <Box>
              <FaWhatsapp size={25} />
            </Box>
          </Box>
      </Grid>
      <Grid md={12} sx={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column" }}>
        {!mapLoaded && (
          <Box alignSelf="center" marginTop="3rem">
            <CircularProgress color="secondary" />
          </Box>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56138.64698632979!2d77.25460162791343!3d28.429350398438427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdde67a86b429%3A0x70203a1c74c7c010!2s50%2C%20Block%20C%2C%20Sector%2021%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1715509386228!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleMapLoad}
          style={{ display: mapLoaded ? "block" : "none", width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  )
}

export default ContactUs