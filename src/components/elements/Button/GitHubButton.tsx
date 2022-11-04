import { GitHub } from "@mui/icons-material";
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";
import { GitHubButtonProps } from "components/types/GitHubProps";

type Props = {
  gitHubButtonProps: GitHubButtonProps;
  sx?: SxProps<Theme>;
};

const GitHubButton: React.FC<Props> = ({ gitHubButtonProps, sx }) => {
  return (
    <IconButton sx={sx}>
      <Tooltip title={gitHubButtonProps.title}>
        <a href={gitHubButtonProps.href} target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" />
        </a>
      </Tooltip>
    </IconButton>
  );
};

export default GitHubButton;
