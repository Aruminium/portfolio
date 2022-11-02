import type { NextPage } from "next";
import Layout from "components/layouts/Layout/Layout";
import HeadlineTypography from "components/elements/Typography/HeadlineTypography";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "images/logo.jpg";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeadlineTypography headline="Home" />
      <Box padding={"50px 0"} margin={"0 30px"}>
        <Card className="card" color="primary">
          <CardContent>
            <Grid container>
              <Grid container height={150}>
                <Grid item xs={3}>
                  <Image
                    src={logo}
                    alt="Bana7"
                    width={80}
                    height={80}
                    className="avatar"
                  />
                </Grid>
                <Grid item xs={9} alignContent="center" justifyItems="center" >
                  <Typography variant="h1" fontSize={12} >
                    てらやま あおい
                  </Typography>
                  <Typography variant="h2" fontSize={36} >
                    寺山 碧威
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
};

export default Home;
