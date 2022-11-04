import { NextPage } from "next";
import Layout from "components/layouts/Layout/Layout";
import HeadlineTypography from "components/elements/Typography/HeadlineTypography"
import { Grid } from "@mui/material";
import EtcCard from "components/elements/Card/EtcCard";
import { EtcCardProps } from "components/types/EtcCardProps";
import etcCardPropsList from "data/etc/etcCardPropsList";

const HandsOn: NextPage = () => {
  return (
    <Layout>
      <HeadlineTypography headline="etc."/>
      <Grid container>
        {etcCardPropsList.map((props: EtcCardProps) => (
          <Grid item xs={12} md={6} key={props.cardProps.title}>
            <EtcCard href={props.href} cardProps={props.cardProps} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default HandsOn;
