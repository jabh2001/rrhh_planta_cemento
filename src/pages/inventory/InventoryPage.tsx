import { Box, Grid, Paper } from "@mui/material";
import DataCard from "../../components/cards/DataCard";

export default function Index({}) {
  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper elevation={5}>
            <DataCard title="Camisas" data="5" footer="ambos generos" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5}>
            <DataCard title="Pantalones" data="5" footer="ambos generos" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5}>
            <DataCard title="Ultima fecha de entrega" data="20/02/2023" />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={5}>
            <DataCard title="Total de articulos" data="10" footer="recuento general" />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
