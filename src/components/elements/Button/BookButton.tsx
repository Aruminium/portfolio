import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IconButton, SxProps, Theme, Tooltip } from "@mui/material";

type Props = {
  href: string;
  sx?: SxProps<Theme>;
};

const BookButton: React.FC<Props> = ({ href, sx }) => {
  return (
    <IconButton sx={sx}>
      <Tooltip title="資料を見に行く">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuBookIcon fontSize="large" />
        </a>
      </Tooltip>
    </IconButton>
  );
};

export default BookButton;
