import React from "react";
import LatestIssues from "./LatestIssues";
import prisma from "@/prisma/client";

import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
const Home = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const in_progress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSESD" } });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={in_progress} closed={closed} />
        <IssueChart open={open} inProgress={in_progress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
};

export default Home;
