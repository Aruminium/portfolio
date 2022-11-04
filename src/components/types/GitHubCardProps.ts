import { SxProps, Theme } from "@mui/material";
import { CardProps } from "./CardProps";
import { GitHubButtonProps } from "./GitHubProps";

export type GitHubCardProps = {
  cardProps: CardProps;
  gitHubButtonProps: GitHubButtonProps;
  sx?: SxProps<Theme>;
};