import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ backgroundColor: "background.default" }}
      >
        <SideBar setMode={setMode} mode={mode} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { md: "block", xs: "none" },
          }}
        />
        <Feed />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
