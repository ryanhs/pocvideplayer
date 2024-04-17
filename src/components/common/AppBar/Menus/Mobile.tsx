import Link from "next/link";
import {
  Typography,
  MenuItem,
  IconButton,
  Menu,
  MenuItemProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IMenuNavItems } from "@/providers/Config/Menu";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useState } from "react";

export const MobileMenuItem = (props: MenuItemProps & IMenuNavItems) => {
  const { path, label, ...menuItemProps } = props;
  const pathname = usePathname();

  const isActive = pathname == path;

  return (
    <MenuItem {...menuItemProps}>
      <Link href={path} passHref legacyBehavior>
        <Typography variant="body2" fontWeight={isActive ? "bold" : "normal"}>
          {label}
        </Typography>
      </Link>
    </MenuItem>
  );
};



export const MobileMenus = ({ items }: { items: IMenuNavItems[] }) => {
  const [anchorAccount, setAnchorAccount] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const isOpenAccountMenu = Boolean(anchorAccount);
  const openAccountMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorAccount(event.currentTarget);
    event.preventDefault();
  };

  const closeAccountMenu = () => {
    setAnchorAccount(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="mobile-menu"
        sx={{ display: { sm: "none" } }}
        id="appbar-login-button-mobile"
        aria-controls={isOpenAccountMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpenAccountMenu ? "true" : undefined}
        onClick={openAccountMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="mobile-menu"
        anchorEl={anchorAccount}
        open={isOpenAccountMenu}
        onClose={closeAccountMenu}
        slotProps={{
          paper: {
            sx: {
              minWidth: 125,
            },
          },
        }}
      >
        {items.map((v) => (
          <MobileMenuItem key={v.path} path={v.path} label={v.label} />
        ))}
        
      </Menu>
    </>
  );
};