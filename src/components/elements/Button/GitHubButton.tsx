import { GitHub } from "@mui/icons-material";
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";

type Props = {
  title: string;
  href: string;
  sx?: SxProps<Theme>;
};

const GitHubButton: React.FC<Props> = ({ title, href, sx }) => {
  return (
    <IconButton sx={sx}>
      <Tooltip title={title}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" />
        </a>
      </Tooltip>
    </IconButton>
  );
};

export default GitHubButton;
