import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const WarningButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme == "light" ? "yellow" : "black",
  margin: 5,
  "&:hover": { backgroundColor: theme == "light" ? "red" : "yellow" },
}));
