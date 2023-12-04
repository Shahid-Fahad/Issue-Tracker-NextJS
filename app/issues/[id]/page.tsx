import React from "react";
import prisma from "@/prisma/client";
import { idText } from "typescript";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import IssueBadge from "@/app/components/IssueBadge";
import ReactMarkdown from "react-markdown";
import { number } from "zod";
import IssueDetails from "@/app/issues/[id]/IssueDetails";
import AssigneeSelect from "@/app/issues/[id]/AssigneeSelect";

const SingleIssue = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) return null;
  return (
    <Grid columns={{ initial: "1", sm: "5" }}>
      <Box className={"md:col-span-4"}>
        <IssueDetails issue={issue} />
      </Box>
      <Box className="mt-5">
        <Flex direction="column" gap="4">
          <AssigneeSelect />
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Flex>
      </Box>
    </Grid>
  );
};

export default SingleIssue;
