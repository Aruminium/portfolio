import React from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBuilding,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import HoverButton from "components/elements/Button/HoverButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type headerItemType = {
  name: string;
  subDirectory: string;
  icon: IconProp;
};
const headerItemList: headerItemType[] = [
  {
    name: "Artifact",
    subDirectory: "/Artifact",
    icon: faBuilding,
  },
  {
    name: "LT",
    subDirectory: "/LT",
    icon: faPersonChalkboard,
  },
  {
    name: "ETC.",
    subDirectory: "/ETC",
    icon: faBook,
  },
];

const Header = React.memo(() => {
  return (
    <Box height={"100px"}>
      <Grid container alignItems="center">
        <Grid item>
          <HoverButton>
            <Link href="/" scroll={false}>
              <FontAwesomeIcon icon={faHouse} size={"lg"} />
            </Link>
          </HoverButton>
        </Grid>
        <Box flexGrow={1} />
        <Grid item>
          {headerItemList.map((item: headerItemType) => (
            <HoverButton key={item.name}>
              <Link href={item.subDirectory} scroll={false} passHref>
                <a>
                  <Grid container alignItems={"center"}>
                    <FontAwesomeIcon icon={item.icon} />
                    <Box letterSpacing="4px" paddingLeft="4px">
                      {item.name}
                    </Box>
                  </Grid>
                </a>
              </Link>
            </HoverButton>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
});

export default Header;
