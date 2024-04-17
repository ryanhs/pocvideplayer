"use client";

import { SimpleAppBar } from "@/components/common/AppBar/SimpleAppBar";
import { FooterSection } from "@/components/common/Footer/Footer";
import { Box, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useState } from "react";

export default function HomePage() {
  const [c, setC] = useState<number>(0);

  return (
    <>
      <SimpleAppBar pageTitle={process.env.NEXT_PUBLIC_APP_NAME} />
      <br />

      <Container maxWidth="md">
        dwadwa
      </Container>
      <br />
    </>
  );
}
