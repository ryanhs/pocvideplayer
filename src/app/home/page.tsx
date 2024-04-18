"use client";

import { SimpleAppBar } from "@/components/common/AppBar/SimpleAppBar";
import { Container, Grid, Stack } from "@mui/material";
import { ReactHLSPlayer } from "@/components/player/react-hls-player";
import { SrcField } from "@/components/player/options/SrcField";
import { LogBox } from "@/components/player/Log/LogBox";

export default function HomePage() {
  return (
    <>
      <SimpleAppBar pageTitle={process.env.NEXT_PUBLIC_APP_NAME} />
      <br />

      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}>
            <LogBox />
          </Grid>
          <Grid item xs={9} paddingLeft={2}>
            <Stack spacing={2}>
              <SrcField />

              <ReactHLSPlayer />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <br />
    </>
  );
}
