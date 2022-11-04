import { SxProps, Theme } from "@mui/material";
import { CardProps } from "./CardProps";

export type LtCardProps = {
  href: string;
  cardProps: CardProps;
  sx?: SxProps<Theme>;
};