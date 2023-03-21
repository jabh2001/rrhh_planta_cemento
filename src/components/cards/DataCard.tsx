import { Box, Typography, Paper, Card, CardContent } from "@mui/material";
import { orange, red } from "@mui/material/colors";

type Props = {
  title: string;
  data: string;
  footer?: string;
};

export default function DataCard({ title, data, footer }: Props) {
  return (
    <Paper elevation={2}>
      <Card
        sx={{
          background : `linear-gradient(to right bottom, ${orange[500]}, ${red[400]})`,
        }}
      >
        <CardContent sx={{ minHeight: 130 }}>
          <Typography variant="body2" component="i" sx={{ opacity: 0.85 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
            {data}
          </Typography>
          {footer && <Typography>{footer}</Typography>}
        </CardContent>
      </Card>
    </Paper>
  );
}
