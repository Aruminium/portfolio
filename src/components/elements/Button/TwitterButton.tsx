import { Twitter } from "@mui/icons-material";
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

const TwitterButton: React.FC<Props> = ({ sx }) => {
  return (
    <IconButton sx={sx}>
      <Tooltip title="Twitter">
        <a
          href="https://twitter.com/Aruminium_Bana7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </a>
      </Tooltip>
    </IconButton>
  );
};

export default TwitterButton;
