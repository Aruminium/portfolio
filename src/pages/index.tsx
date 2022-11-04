import type { NextPage } from "next";
import Layout from "components/layouts/Layout/Layout";
import HeadlineTypography from "components/elements/Typography/HeadlineTypography";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import logo from "images/logo.jpg";
import TwitterButton from "components/elements/Button/TwitterButton";
import LinkedInButton from "components/elements/Button/LinkedInButton";
import GitHubButton from "components/elements/Button/GitHubButton";
import { GitHubButtonProps } from "components/types/GitHubProps";

const gitHubProps: GitHubButtonProps = {title: "GitHub", href: "https://github.com/Aruminium"}

const Home: NextPage = () => {
  return (
    <Layout>
      <HeadlineTypography headline="Home" />
      <Box padding={"50px 0"} margin={"0 10px"}>
        <Grid
          container
          alignItems="center"
          justifyItems="center"
          direction="column"
        >
          <Grid item xs={12} marginY={1}>
            <Image
              alt="Bana7"
              src={logo}
              height={250}
              width={250}
              className="logo fuwafuwa"
            />
          </Grid>
          <Grid item xs={12} marginY={1}>
            <Typography
              variant="h2"
              color="primary"
              letterSpacing={3}
              fontSize={34}
              className="typography"
            >
              Aoi Terayama
            </Typography>
            <Typography
              variant="h3"
              color="primary"
              sx={{ opacity: "0.6" }}
              fontSize={28}
              textAlign="center"
            >
              @Bana7
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
          marginY={1}
        >
          <TwitterButton />
          <GitHubButton gitHubButtonProps={gitHubProps} />
          <LinkedInButton />
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
