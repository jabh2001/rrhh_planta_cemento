import AppBar from "@mui/material/AppBar";
import { Box, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import LinkDrawerButton from "./buttons/LinkDrawerButton";
import DrawerButton from "./buttons/DrawerButton";
import DrawerButtonCollapse from "./buttons/DrawerButtonCollapse";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {
  children: React.ReactElement;
};
function Template({ children }: Props) {
  const drawerWidth: number = 200;
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography>Control de recursos humanos</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
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
            <LinkDrawerButton color="colored" href="/" text="Principal" />
            <DrawerButtonCollapse text="Inventario">
              <LinkDrawerButton href="/inventory" text="Inicio" />
            </DrawerButtonCollapse>
            <DrawerButtonCollapse text="Expedientes">
              <LinkDrawerButton href="/files" text="Inicio" />
            </DrawerButtonCollapse>
            <DrawerButtonCollapse text="Bolsas">
              <LinkDrawerButton href="/bolsa" text="Inicio" />
            </DrawerButtonCollapse>
            <DrawerButtonCollapse text="Trabajadores">
              <LinkDrawerButton href="/workers" text="Inicio" />
            </DrawerButtonCollapse>
            <DrawerButton color="colored" text="Cerrar sesion" />
          </List>
        </Drawer>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

export default Template;
