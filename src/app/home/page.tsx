"use client";

import { SimpleAppBar } from "@/components/common/AppBar/SimpleAppBar";
import { Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { OptionsMenu } from "@/components/player/options/Menu";

export default function HomePage() {
  const [c, setC] = useState<number>(0);

  return (
    <>
      <SimpleAppBar pageTitle={process.env.NEXT_PUBLIC_APP_NAME} />
      <br />

      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={2}>
            <OptionsMenu />
          </Grid>
          <Grid item xs={10} paddingLeft={2}>
            <span>xs=8</span>
          </Grid>
        </Grid>
      </Container>
      <br />
    </>
  );
}
