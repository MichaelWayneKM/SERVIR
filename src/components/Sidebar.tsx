import { Button, Drawer, SwipeableDrawer } from "@mui/material";
import React from "react";
const anchor = "bottom";

function Sidebar() {

  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment key={anchor}>
      <Button onClick={() => setOpen(!open)}>{anchor}</Button>
      <SwipeableDrawer
        anchor={anchor}

        open={open}
        onClose={() => null}
        onOpen={() => null}
      >
        {/* {"Hello 1 loremkk wfnkweofe ejekfne fefke fefe e eke ewfwefgw Hello 1 loremkk wfnkweofe ejekfne fefke fefe e eke ewfwefgw"} */}
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Sidebar;
