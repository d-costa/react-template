// React component with two input values

import { useState } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";

function Body() {
  const [something, setSomething] = useState("Hello World");

  return (
    <Grid container className="main-paper">
      <Typography>
        {something}
      </Typography>
    </Grid>
  );
}

export default Body;
