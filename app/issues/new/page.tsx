"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createIssueSchema } from "@/app/newIssueSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";

type Issueform = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Issueform>({ resolver: zodResolver(createIssueSchema) });
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (err) {
      setError("An Unexpected Error Has Occurred");
    }
  });
  return (
    <form className="max-w-xl space-y-5" onSubmit={onSubmit}>
      {error && <Callout.Root color="red">{error}</Callout.Root>}
      <TextField.Root>
        <TextField.Input
          placeholder="Create Issue Here"
          {...register("title")}
        ></TextField.Input>
      </TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      ></Controller>
      <ErrorMessage>{errors.description?.message}</ErrorMessage>

      <Button> Submit New Issue </Button>
    </form>
  );
};

export default NewIssuePage;
