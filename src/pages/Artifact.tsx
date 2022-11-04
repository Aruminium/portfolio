import { NextPage } from "next";
import Layout from "components/layouts/Layout/Layout";
import HeadlineTypography from "components/elements/Typography/HeadlineTypography";
import GitHubCard from "components/elements/Card/GitHubCard";
import { GitHubCardProps } from "components/types/GitHubCardProps";
import { Grid } from "@mui/material";
import gitHubCardPropsList from "data/artifact/gitHubCardPropsList";

const Artifact: NextPage = () => {
  return (
    <Layout>
      <HeadlineTypography headline="Artifact" />
      <Grid container>
        {gitHubCardPropsList.map((props: GitHubCardProps) => (
          <Grid item xs={12} md={6} key={props.cardProps.title}>
            <GitHubCard
              cardProps={props.cardProps}
              gitHubButtonProps={props.gitHubButtonProps}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Artifact;
