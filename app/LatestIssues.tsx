import React from "react";
import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import IssueBadge from "./components/IssueBadge";
import Link from "next/link";
import classNames from "classnames";
const LatestIssues = async () => {
  const issue = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <Card>
      <Heading size="4" className="mb-5">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issue.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify={"between"}>
                  <Flex direction={"column"} gap={"2"} align={"start"}>
                    <Link
                      href={`/issues/${issue.id}`}
                      className="link text-black hover:text-violet-500"
                    >
                      {issue.title}
                    </Link>
                    <IssueBadge status={issue.status} />
                  </Flex>
                  <Avatar
                    src="https://img.freepik.com/free-vector/mysterious-gangster-character-illustration_23-2148460670.jpg?w=826&t=st=1701686829~exp=1701687429~hmac=1d8e5280496669bf3c11d412731d29477924c1257017e93361934cf70ce4205e"
                    fallback="?"
                    size="5"
                    radius="full"
                  ></Avatar>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
