import { Box, Stack } from "@mui/material";
import PrologLogo from "../PrologLog/Prolog";

export default function Header() {
  return (
    <Box
      borderBottom="1px solid"
      bgcolor="#f8f9fa"
      borderColor="grey.200"
      py={4}
      boxShadow="0px -4px 10px rgba(0, 0, 0, 0.4)"
    >
      <Stack pl={23}>
        <PrologLogo />
      </Stack>
    </Box>
  );
}
