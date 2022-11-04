import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";

type Props = {
  href: string;
  sx?: SxProps<Theme>;
};

const SearchButton: React.FC<Props> = ({ href, sx }) => {
  return (
    <IconButton sx={sx}>
      <Tooltip title="詳細を見に行く">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ScreenSearchDesktopIcon fontSize="large" />
        </a>
      </Tooltip>
    </IconButton>
  );
};

export default SearchButton;
