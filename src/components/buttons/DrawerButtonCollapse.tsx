import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";

type Props = {
  text?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
  color?: "normal" | "colored";
};
export default function DrawerButtonColapse({
  text,
  children,
  color = "colored",
}: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <ListItemButton
        divider
        sx={{
          opacity: open ? 0.6 : 1,
        }}
        color={color}
        onClick={() => setOpen(!open)}
      >
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">{children}</List>
      </Collapse>
    </>
  );
}
