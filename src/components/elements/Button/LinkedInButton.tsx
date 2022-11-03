import { LinkedIn } from "@mui/icons-material";
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

const LinkedInButton: React.FC<Props> = ({ sx }) => {
  return (
    <IconButton sx={sx}>
      <Tooltip title="LinkedIn">
        <a href="https://www.linkedin.com/in/%E7%A2%A7%E5%A8%81-%E5%AF%BA%E5%B1%B1-5b7268226/" target="_blank" rel="noopener noreferrer">
          <LinkedIn fontSize="large" />
        </a>
      </Tooltip>
    </IconButton>
  );
};

export default LinkedInButton;
