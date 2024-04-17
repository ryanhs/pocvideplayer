import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  Divider,
  PopoverProps} from "@mui/material";
import logoIcon from "@/app/icon2.png";
import logoIconWhite from "@/app/icon2.png";
import { menuNavItems } from "@/providers/Config/Menu";
import { useEffect, useState } from "react";
import { DesktopMenus } from "./Menus/Desktop";
import { MobileMenus } from "./Menus/Mobile";

export type SimpleAppBarProps = {
  pageTitle?: string;
};

type AnchorEl = PopoverProps["anchorEl"] | null;

const LogoTitle = ({
  pageTitle,
}: {
  pageTitle?: string;
}) => {
  return (
    <Stack sx={{ flexGrow: 1 }} direction="row" spacing={1}>
      <Link href="/">
        <Image
          src={logoIcon.src}
          width={30}
          height={30}
          alt={process.env.NEXT_PUBLIC_APP_NAME || "logo"}
          title={process.env.NEXT_PUBLIC_APP_NAME}
        />
      </Link>

      <Divider orientation="vertical" flexItem />

      {pageTitle && (
        <Typography variant="h6" color="inherit">
          {pageTitle}
        </Typography>
      )}
    </Stack>
  );
};

export const SimpleAppBar = (props: SimpleAppBarProps) => {

  return (
    <AppBar
      position="sticky"
      variant="outlined"
      elevation={0}
      color={"transparent"}
      style={{
        borderBottom: `3px solid #34A0A4`,
        background: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <LogoTitle pageTitle={props.pageTitle} />

          <DesktopMenus items={menuNavItems} />

          <MobileMenus items={menuNavItems} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
