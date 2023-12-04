import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const badgeMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  OPEN: { label: "OPEN", color: "green" },
  CLOSESD: { label: "CLOSED", color: "red" },
  IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
};

const IssueBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={badgeMap[status].color}> {badgeMap[status].label} </Badge>
  );
};

export default IssueBadge;
