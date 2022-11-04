import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GitHubCardProps } from "components/types/GitHubCardProps";
import GitHubButton from "../Button/GitHubButton";

const GitHubCard: React.FC<GitHubCardProps> = ({ cardProps, gitHubButtonProps, sx }) => {
  return (
    <Card sx={sx}>
      <CardMedia
        component={cardProps.component}
        alt={cardProps.alt}
        src={cardProps.src}
      />
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
        <Typography variant="body2" color="primary" sx={{opacity: "0.7"}} textAlign="center">
          {cardProps.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <GitHubButton gitHubButtonProps={gitHubButtonProps} />
      </CardActions>
    </Card>
  );
};

export default GitHubCard;
