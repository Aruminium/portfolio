import { Box, Divider, styled, SxProps, Theme, Typography } from "@mui/material";

const TypographyStyled = styled(Typography)(() => ({
  letterSpacing: "10px",
}));

type LayoutProps = {
  readonly headline: string;
  sx?: SxProps<Theme>;
};

const HeadlineTypography: React.FC<LayoutProps> = ({ headline, sx }) => {
  return (
    <Box>
      <TypographyStyled variant="h2" color="primary" sx={sx} className="typing">
        {headline}
      </TypographyStyled>
      <Divider />
    </Box>
  );
};

export default HeadlineTypography;
