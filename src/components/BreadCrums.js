import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function IconBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{marginTop: 1}}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Typography color="text.primary"></Typography>
    </Breadcrumbs>
  );
}
