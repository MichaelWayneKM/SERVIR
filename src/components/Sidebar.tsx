import { Button, Drawer, SwipeableDrawer } from "@mui/material";
import React from "react";
const anchor = "right";

function Sidebar() {
  return (
    <React.Fragment key={anchor}>
      <Button>{anchor}</Button>
      <SwipeableDrawer
        anchor={anchor}

        open={false}
        onClose={() => null}
        onOpen={() => null}
      >
        {/* {"Hello 1 loremkk wfnkweofe ejekfne fefke fefe e eke ewfwefgw Hello 1 loremkk wfnkweofe ejekfne fefke fefe e eke ewfwefgw"} */}
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default Sidebar;
