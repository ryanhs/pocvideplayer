import {
  Button,
  Stack,
  Divider,
  ButtonProps,
} from "@mui/material";
import { IMenuNavItems } from "@/providers/Config/Menu";
import { usePathname } from "next/navigation";

export const DesktopMenuItem = (props: IMenuNavItems & ButtonProps) => {
  const { path, label, ...btnProps } = props;
  const pathname = usePathname();

  const isActive = pathname == path;

  return (
    <Button
      LinkComponent={'a'}
      color="inherit"
      variant="text"
      href={path}
      key={path}
      disabled={isActive}
      style={{
        fontWeight: isActive ? "normal" : "bold",
        color: "inherit",
      }}
      {...btnProps}
    >
      {label}
    </Button>
  );
};

export const DesktopMenus = ({ items }: { items: IMenuNavItems[] }) => {  
  return (
    <>
      <Stack direction="row" spacing={2} display={{ xs: "none", sm: "flex" }}>
        {items.map((v) => (
          <DesktopMenuItem key={v.path} {...v} />
        ))}
      </Stack>
    </>
  );
};