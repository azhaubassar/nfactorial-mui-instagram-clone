import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { LOGO } from "../assets";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import { Divider, Switch } from "@mui/material";

export default function SideBar({ mode, setMode }) {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        margin: { md: 3, xs: 1 },
        maxWidth: 360,
        bgcolor: "background.paper",
        height: 1000,
        display: { md: "block", xs: "none" },
      }}
    >
      <div style={{ height: 40 }}>{LOGO}</div>
      <Stack sx={{ height: "75%" }} justifyContent="space-between">
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: "text.primary" }} primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: "text.primary" }} primary="Search" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "text.primary" }}
                  primary="Explore"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "text.primary" }}
                  primary="Notifications"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: "text.primary" }} primary="Create" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <Switch
                  onChange={(e) =>
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    )
                  }
                />
                <ListItemText sx={{ color: "text.primary" }} primary="Theme" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>

        <nav>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary" }} primary="Menu" />
            </ListItemButton>
          </ListItem>
        </nav>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText sx={{ color: "text.primary" }}>Settings</ListItemText>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemText sx={{ color: "text.primary" }}>Saved</ListItemText>
          <ListItemIcon>
            <FolderSpecialIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: "text.primary" }} onClick={handleClose}>
          My account
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: "text.primary" }} onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
