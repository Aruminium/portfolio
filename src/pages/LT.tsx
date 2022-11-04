import { NextPage } from "next";
import Layout from "components/layouts/Layout/Layout";
import HeadlineTypography from "components/elements/Typography/HeadlineTypography";
import { Grid } from "@mui/material";
import ltCardPropsList from "data/lt/ltCardPropsList";
import { LtCardProps } from "components/types/LtCardProps";
import LtCard from "components/elements/Card/LtCard";

const LT: NextPage = () => {
  return (
    <Layout>
      <HeadlineTypography headline="LT" />
      <Grid container>
        {ltCardPropsList.map((props: LtCardProps) => (
          <Grid item xs={12} md={6} key={props.cardProps.title}>
            <LtCard href={props.href} cardProps={props.cardProps} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default LT;
