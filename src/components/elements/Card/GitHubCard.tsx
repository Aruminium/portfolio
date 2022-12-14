import styled from "@emotion/styled";
import { BorderAll } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { GitHubCardProps } from "components/types/GitHubCardProps";
import Image from "next/image";
import GitHubButton from "../Button/GitHubButton";

const CardStyled = styled(Card)(() => ({
  TransitionEvent: {
    duration: "0.4s",
  },
  ":hover": {
    transform: `scale(1.05)`,
  },
}));

const GitHubCard: React.FC<GitHubCardProps> = ({
  cardProps,
  gitHubButtonProps,
  sx,
}) => {
  return (
    <Box padding={"40px 40px"}>
      <CardStyled sx={sx}>
        {cardProps.component == "image" ? (
          <CardMedia component={cardProps.component}>
            <Image
              loading="lazy"
              src={cardProps.src}
              alt={cardProps.alt}
              height="300"
              width="100"
            />
          </CardMedia>
        ) : (
          <CardMedia
            height="300"
            component={cardProps.component}
            alt={cardProps.alt}
            src={cardProps.src}
          />
        )}
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
          <GitHubButton gitHubButtonProps={gitHubButtonProps} />
        </CardActions>
      </CardStyled>
    </Box>
  );
};

export default GitHubCard;
