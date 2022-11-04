import { NextPage } from "next";
import Layout from "components/layouts/Layout/Layout";
import HeadlineTypography from "components/elements/Typography/HeadlineTypography";
import GitHubCard from "components/elements/Card/GitHubCard";
import { GitHubCardProps } from "components/types/GitHubCardProps";

const gitHubCardPropsList: GitHubCardProps[] = [
  {
    cardProps: {
      title: "ローグライク",
      summary: "C言語での初めて成果物",
      component: "video",
      alt: "ローグライク",
      src: "https://user-images.githubusercontent.com/73931800/159124038-378053b8-fd02-47fe-9ad2-0f5bb71368b1.mp4",
    },
    gitHubButtonProps: {
      title: "ローグライク",
      href: "https://github.com/Aruminium/TMToB",
    },
  },
];

const Artifact: NextPage = () => {
  return (
    <Layout>
      <HeadlineTypography headline="Artifact" />
      <GitHubCard
        cardProps={gitHubCardPropsList[0].cardProps}
        gitHubButtonProps={gitHubCardPropsList[0].gitHubButtonProps}
      />
    </Layout>
  );
};

export default Artifact;
