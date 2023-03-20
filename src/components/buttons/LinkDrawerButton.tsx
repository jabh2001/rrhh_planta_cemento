import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import { Link } from "wouter";

type Props = {
  text: string;
  color?: "normal" | "colored";
  href?: string;
};
export default function DrawerButton({
  text,
  color = "normal",
  href = "/",
}: Props) {
  const theme = useTheme();
  return (
    <Link href={href}>
      <Box
        component="a"
        sx={{
          color: "#444",
          textDecoration: "none",
          "&:hover": { color: theme.palette.primary.main },
        }}
      >
        <ListItemButton divider color={color}>
          <ListItemText primary={text} />
        </ListItemButton>
      </Box>
    </Link>
  );
}
