import React from "react";
import IssueBadge from "@/app/components/IssueBadge";
import ReactMarkdown from "react-markdown";
import {Card, Flex, Heading} from "@radix-ui/themes";
import {Issue} from "@prisma/client"
const IssueDetails = ({issue}:{issue:Issue}) => {
  return (
    <div className="center">
      <Heading>{issue.title}</Heading>
      <Flex gap="5" py="5">
        <IssueBadge status={issue.status} />
        <p>{issue?.createdAt.toDateString()}</p>
      </Flex>
      <Card className="prose" style={{ maxWidth: "30%" }}>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
