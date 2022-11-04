import { LtCardProps } from "components/types/LtCardProps";
import Image1 from "images/howToLt.jpg";
import Image2 from "images/zundaSiritori.jpg";
import Image3 from "images/LT-web-sapporo.png";

const ltCardPropsList: LtCardProps[] = [
  {
    href: "https://docs.google.com/presentation/d/1m1VtzQ6ijiTSs1Zv8q9SaUjl5941Cpi1mAGnQM-DeO4/edit#slide=id.p",
    cardProps: {
      title: "LT資料の作り方",
      summary: "偏見だらけのLT資料の作り方",
      component: "div",
      alt: "LT資料の作り方",
      src: Image1,
    },
  },
  {
    href: "https://docs.google.com/presentation/d/1ETWvDSZCc-S0Xaw2k9wx9jcZ4WAOnBbRwoMejAQxvsY/edit#slide=id.p",
    cardProps: {
      title: "ずんだもんとしりとり",
      summary: "一部ずんだもんが喋るよ(スライドショーで見てね)",
      component: "div",
      alt: "ずんだもんしりとり",
      src: Image2,
    },
  },
  {
    href: "https://speakerdeck.com/aruminium/toaruwebkai-fa-chu-xin-zhe-gahatukasondejue-xing-sitajian",
    cardProps: {
      title: "なろう系LT",
      summary: "とあるWeb開発初心者がハッカソンで覚醒しただけのお話",
      component: "div",
      alt: "なろう系LT",
      src: Image3,
    },
  },
];

export default ltCardPropsList;
