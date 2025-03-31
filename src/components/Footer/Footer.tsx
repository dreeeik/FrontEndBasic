import { Box, Container, Typography } from "@mui/material";
import PrologLogo from "../PrologLog/Prolog";

const Footer = () => {
  return (
    <Box
      borderTop="1px solid"
      bgcolor="#f8f9fa"
      borderColor="grey.200"
      py={4}
      boxShadow="0px -4px 10px rgba(0, 0, 0, 0.05)"
      position="relative"
      minWidth="100vw"
      mt={"auto"}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <PrologLogo />
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              © 2025 Prolog. Todos os direitos reservados.
            </Typography>
            <Typography
              variant="caption"
              color="primary"
              sx={{
                fontStyle: "italic",
                opacity: 0.7,
              }}
            >
              Designed by Dreik
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
