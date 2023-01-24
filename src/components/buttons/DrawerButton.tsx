import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  text: string;
  color?: "normal" | "colored";
};
export default function DrawerButton({ text, color = "normal" }: Props) {
  return (
    <ListItemButton divider color={color}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}
