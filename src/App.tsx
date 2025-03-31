import { CssBaseline, Stack } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <Stack>
        <CssBaseline />
        <Router>
          <AppRoutes />
        </Router>
      </Stack>
    </>
  );
}

export default App;
