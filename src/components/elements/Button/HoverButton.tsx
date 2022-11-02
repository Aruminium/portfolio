import { Button, styled, SxProps, Theme } from "@mui/material";

import { ReactNode } from "react";

const ButtonStyled = styled(Button)(() => ({
  TransitionEvent: {
    duration: "0.4s",
  },
  ":hover": {
    transform: `scale(1.1)`,
  },
}));

type LayoutProps = {
  readonly children: ReactNode;
  sx?: SxProps<Theme>;
};

const HoverButton: React.FC<LayoutProps> = ({ children, sx }) => {
  return <ButtonStyled sx={sx}>{children}</ButtonStyled>;
};

export default HoverButton;
