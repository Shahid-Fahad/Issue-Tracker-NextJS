"use client";
import { Select } from "@radix-ui/themes";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">FAHAD</Select.Item>
          <Select.Item value="2">SALMAN</Select.Item>
          <Select.Item value="3">SHAHRUKH</Select.Item>
          <Select.Item value="4">AAMIR</Select.Item>
          <Select.Item value="5">HRITHIK</Select.Item>
          <Select.Item value="6">AKSHAY</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
