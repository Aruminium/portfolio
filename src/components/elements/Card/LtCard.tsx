import styled from "@emotion/styled";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { LtCardProps } from "components/types/LtCardProps";
import Image from "next/image";
import BookButton from "../Button/BookButton";

const CardStyled = styled(Card)(() => ({
  TransitionEvent: {
    duration: "0.4s",
  },
  ":hover": {
    transform: `scale(1.05)`,
  },
}));

const LtCard: React.FC<LtCardProps> = ({ href, cardProps, sx }) => {
  return (
    <Box padding={"40px 40px"}>
      <CardStyled sx={sx}>
        <Grid container alignContent="center" justifyContent="center">
          <CardMedia component={cardProps.component}>
            <Image
              loading="lazy"
              src={cardProps.src}
              alt={cardProps.alt}
              height="300"
              width="600"
            />
          </CardMedia>
        </Grid>
        <Divider />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary"
            textAlign="center"
          >
            {cardProps.title}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ opacity: "0.7" }}
            textAlign="center"
          >
            {cardProps.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <BookButton href={href} />
        </CardActions>
      </CardStyled>
    </Box>
  );
};

export default LtCard;
