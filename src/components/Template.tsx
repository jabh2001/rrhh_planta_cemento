import AppBar from "@mui/material/AppBar";
import { Box, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import DrawerButton from "./buttons/DrawerButton";
import DrawerButtonCollapse from "./buttons/DrawerButtonCollapse";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {
  children: React.ReactElement;
};
function Template({ children }: Props) {
  const drawerWidth: number = 200;
  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography>Modulo 1</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: drawerWidth,
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Typography variant="h1">Jhonder Bastidas</Typography>
            <Typography>Administrador</Typography>
          </Box>
          <Divider />
          <List disablePadding>
            <DrawerButtonCollapse text="Collapse">
              <DrawerButton text="Texto collapse 1" />
              <DrawerButton text="Texto collapse 2" />
              <DrawerButton text="Texto collapse 3" />
            </DrawerButtonCollapse>
            <DrawerButtonCollapse text="Collapse 2">
              <DrawerButton text="Texto collapse 1" />
              <DrawerButton text="Texto collapse 2" />
              <DrawerButtonCollapse text="Inner Collapse">
                <DrawerButton text="Texto collapse 1" />
                <DrawerButton text="Texto collapse 2" />
                <DrawerButton text="Texto collapse 3" />
              </DrawerButtonCollapse>
            </DrawerButtonCollapse>
            <DrawerButton color="colored" text="Texto 1" />
            <DrawerButton color="colored" text="Texto 2" />
            <DrawerButton color="colored" text="Texto 3" />
          </List>
        </Drawer>
        <Container>{children}</Container>
      </Box>
    </>
  );
}

export default Template;
