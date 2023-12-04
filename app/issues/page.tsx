import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import IssueBadge from "../components/IssueBadge";

const issues = async () => {
  const Issues = await prisma.issue.findMany();
  return (
    <div className="space-y-5">
      <Table.Root variant={"surface"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link
                  className="link text-blue-500 hover:text-violet-500"
                  href={`/issues/${issue.id}`}
                >
                  {issue.title}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <IssueBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default issues;
